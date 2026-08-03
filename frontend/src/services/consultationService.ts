import { API_ENDPOINTS } from "../config/api";

type ConsultationResponse = {
  message: string;
};


export async function sendConsultationMessage(
  message: string
): Promise<ConsultationResponse> {

  console.log("API Endpoint:", API_ENDPOINTS.consultation);
  console.log("User Message:", message);

  return {
    message:
      "I am analyzing your design requirements. I will suggest ideas soon.",
  };

}