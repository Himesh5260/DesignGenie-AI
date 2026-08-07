import os
import replicate
from dotenv import load_dotenv

load_dotenv()

client = replicate.Client(
    api_token=os.getenv("REPLICATE_API_TOKEN")
)


def generate_design(
    image_name: str,
    room_type: str,
    style: str,
    preferences: str,
):
    prompt = f"""
    Redesign this interior space.

    Room type: {room_type}
    Style: {style}
    Preferences: {preferences}

    Keep the existing architecture, layout, walls,
    windows and camera perspective.
    Create a realistic professional interior design visualization.
    """

    try:
        output = client.run(
            "stability-ai/stable-diffusion-2",
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
        return {"status": "error", "message": str(e)}
