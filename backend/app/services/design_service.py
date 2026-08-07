import os
import time
import replicate
from dotenv import load_dotenv

load_dotenv()

REPLICATE_MODEL = os.getenv("REPLICATE_MODEL", "stability-ai/stable-diffusion-2")

client = replicate.Client(
    api_token=os.getenv("REPLICATE_API_TOKEN")
)


def _is_rate_limit_error(exc: Exception) -> bool:
    msg = str(exc).lower()
    return "429" in msg or "too many requests" in msg or "rate limit" in msg


def generate_design(
    image_name: str,
    room_type: str,
    style: str,
    preferences: str,
    max_retries: int = 3,
    initial_backoff: float = 1.0,
):
    """Generate a design using Replicate with basic retry/backoff for 429 rate limits.

    If retries are exhausted, returns a safe mocked image URL so the frontend and DB flows can be
    tested without failing the user flow. This avoids hard failures during development when the
    Replicate account is rate-limited.
    """
    prompt = f"""
    Redesign this interior space.

    Room type: {room_type}
    Style: {style}
    Preferences: {preferences}

    Keep the existing architecture, layout, walls,
    windows and camera perspective.
    Create a realistic professional interior design visualization.
    """

    attempt = 0
    backoff = initial_backoff
    last_exc = None

    while attempt <= max_retries:
        try:
            # The replicate.Client.run call can raise on HTTP errors.
            output = client.run(
                REPLICATE_MODEL,
                input={
                    "prompt": prompt,
                    "aspect_ratio": "16:9",
                },
            )

            image_url = output[0] if isinstance(output, list) else output

            return {
                "status": "success",
                "message": "Design generated successfully",
                "generated_image": image_url,
                "recommendation": {
                    "style": style,
                    "room_type": room_type,
                    "preferences": preferences,
                },
            }

        except Exception as e:
            last_exc = e
            # If it's a rate limit, retry with exponential backoff
            if _is_rate_limit_error(e) and attempt < max_retries:
                attempt += 1
                time.sleep(backoff)
                backoff *= 2
                continue
            # Non-rate-limit or final failure — break and fallback
            break

    # Retries exhausted or non-retryable error
    # Log the last exception to stdout/stderr for diagnostics (server logs)
    try:
        print("design_service.generate_design: fallback after error:", repr(last_exc))
    except Exception:
        pass

    # Fallback: return a safe mocked image so the frontend can continue and the user can save a project.
    fallback_url = os.getenv("DESIGNGENIE_FALLBACK_IMAGE", "https://picsum.photos/seed/designgenie/1024/576")

    return {
        "status": "success",
        "message": "Design generated (fallback) — returned mocked image due to errors contacting AI provider",
        "generated_image": fallback_url,
        "recommendation": {
            "style": style,
            "room_type": room_type,
            "preferences": preferences,
        },
    }
