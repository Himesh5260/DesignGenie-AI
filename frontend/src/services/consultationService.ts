type ConsultationResponse = {
  message: string;
};


export async function sendConsultationMessage(
  message: string
): Promise<ConsultationResponse> {

  return {
    message:
      "I am analyzing your design requirements. I will suggest ideas soon.",
  };

}