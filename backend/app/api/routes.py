from fastapi import APIRouter, UploadFile, File, Form, HTTPException, Query
from typing import Optional
import os
from pathlib import Path
import shutil

from app.services.design_service import generate_design
from app.db import SessionLocal, init_db
from app.models import Project

router = APIRouter()

# Ensure DB tables exist (init on import)
init_db()

UPLOADS_DIR = Path(__file__).resolve().parents[2] / "uploads"
UPLOADS_DIR.mkdir(parents=True, exist_ok=True)

MOCK_GENERATE_ENV = os.getenv("MOCK_GENERATE", "false").lower() in ("1", "true", "yes")


@router.get("/health")
def health_check():
    return {"status": "healthy", "service": "DesignGenie AI Backend"}


@router.post("/generate")
async def generate(
    image: UploadFile = File(...),
    room_type: str = Form(...),
    style: str = Form(...),
    preferences: Optional[str] = Form(""),
    mock: bool = Query(False),
):
    """Generates a design. Use ?mock=true to return a canned image without calling the AI provider.
    Also honors MOCK_GENERATE=true in the environment.
    """
    # Save uploaded file locally (filename is used by generate_design)
    dest_path = UPLOADS_DIR / image.filename
    with open(dest_path, "wb") as f:
        shutil.copyfileobj(image.file, f)

    use_mock = mock or MOCK_GENERATE_ENV
    if use_mock:
        # Return a canned image URL for testing (no external AI call)
        canned_url = "https://picsum.photos/seed/designgenie/1024/576"
        return {
            "status": "success",
            "message": "Design generated (mock)",
            "generated_image": canned_url,
            "recommendation": {
                "style": style,
                "room_type": room_type,
                "preferences": preferences,
            },
        }

    # Call service (real AI path)
    result = generate_design(
        image_name=str(dest_path),
        room_type=room_type,
        style=style,
        preferences=preferences,
    )

    if result.get("status") == "error":
        raise HTTPException(status_code=500, detail=result.get("message"))

    return result


@router.post("/projects")
def create_project(payload: dict):
    """Persist a generated project into the database.

    Expected payload keys: generated_image, style, room_type, preferences
    """
    generated_image = payload.get("generated_image")
    style = payload.get("style")
    room_type = payload.get("room_type")
    preferences = payload.get("preferences")

    if not generated_image:
        raise HTTPException(status_code=400, detail="generated_image is required")

    # Map to DB model fields: image_path and recommendation JSON
    recommendation = {
        "style": style,
        "room_type": room_type,
        "preferences": preferences,
    }

    db = SessionLocal()
    try:
        project = Project(
            image_path=generated_image,
            style=style,
            room_type=room_type,
            preferences=preferences,
            recommendation=recommendation,
        )
        db.add(project)
        db.commit()
        db.refresh(project)
        return {"status": "success", "project": {
            "id": project.id,
            "generated_image": project.image_path,
            "style": project.style,
            "room_type": project.room_type,
            "preferences": project.preferences,
            "recommendation": project.recommendation,
            "created_at": project.created_at.isoformat()
        }}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()
