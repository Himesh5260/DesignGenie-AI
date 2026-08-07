export type GenerationRequest = {
  roomType: string;
  designStyle: string;
  budget: string;
  colorPalette: string;
  additionalRequirements: string;
};

export type GenerationResponse = {
  message: string;
};