from fastapi import APIRouter, UploadFile, File, Form, HTTPException
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


@router.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "DesignGenie AI Backend"
    }


@router.post("/generate")
async def generate(
    image: UploadFile = File(...),
    room_type: str = Form(...),
    style: str = Form(...),
    preferences: Optional[str] = Form("")
):
    # Save uploaded file locally (filename is used by generate_design)
    dest_path = UPLOADS_DIR / image.filename
    with open(dest_path, "wb") as f:
        shutil.copyfileobj(image.file, f)

    # Call service
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

    db = SessionLocal()
    try:
        project = Project(
            generated_image_url=generated_image,
            style=style,
            room_type=room_type,
            preferences=preferences,
        )
        db.add(project)
        db.commit()
        db.refresh(project)
        return {"status": "success", "project": {
            "id": project.id,
            "generated_image": project.generated_image_url,
            "style": project.style,
            "room_type": project.room_type,
            "preferences": project.preferences,
            "created_at": project.created_at.isoformat()
        }}
    finally:
        db.close()
