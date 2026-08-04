const API_BASE_URL = "http://127.0.0.1:8000";

export interface GenerateDesignRequest {
  image: File;
  roomType: string;
  style: string;
  preferences: string;
}

export async function generateDesign(data: GenerateDesignRequest) {
  const formData = new FormData();

  formData.append("image", data.image);
  formData.append("room_type", data.roomType);
  formData.append("style", data.style);
  formData.append("preferences", data.preferences);

  const response = await fetch(`${API_BASE_URL}/generate`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to generate design");
  }

  return response.json();
}