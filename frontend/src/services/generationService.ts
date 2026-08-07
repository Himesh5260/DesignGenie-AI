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
    const txt = await response.text().catch(() => null);
    throw new Error(txt || "Failed to generate design");
  }

  return response.json();
}

export async function saveProject(payload: {
  generated_image: string;
  style?: string;
  room_type?: string;
  preferences?: string;
}) {
  const response = await fetch(`${API_BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const txt = await response.text().catch(() => null);
    throw new Error(txt || "Failed to save project");
  }

  return response.json();
}
