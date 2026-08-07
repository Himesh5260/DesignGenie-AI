import { useState } from "react";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import "../../styles/generation.css";

type GenerationRequest = {
  roomType: string;
  designStyle: string;
  budget: string;
  colorPalette: string;
  additionalRequirements: string;
};

type GenerationFormProps = {
  disabled?: boolean;
  onGenerate: (data: GenerationRequest) => void;
};

export default function GenerationForm({
  disabled = false,
  onGenerate,
}: GenerationFormProps) {
  const [roomType, setRoomType] = useState("Living Room");
  const [designStyle, setDesignStyle] = useState("Modern");
  const [budget, setBudget] = useState("Medium");
  const [colorPalette, setColorPalette] = useState("Neutral");
  const [additionalRequirements, setAdditionalRequirements] =
    useState("");

  const handleGenerate = () => {
    if (disabled) return;

    onGenerate({
      roomType,
      designStyle,
      budget,
      colorPalette,
      additionalRequirements,
    });
  };

  return (
    <div className="generation-form">

      <h2>Design Preferences</h2>

      <SelectField
        label="Room Type"
        value={roomType}
        options={[
          "Living Room",
          "Bedroom",
          "Kitchen",
          "Bathroom",
          "Office",
        ]}
        onChange={setRoomType}
      />

      <SelectField
        label="Design Style"
        value={designStyle}
        options={[
          "Modern",
          "Luxury",
          "Minimalist",
          "Industrial",
          "Scandinavian",
        ]}
        onChange={setDesignStyle}
      />

      <SelectField
        label="Budget"
        value={budget}
        options={[
          "Low",
          "Medium",
          "High",
        ]}
        onChange={setBudget}
      />

      <SelectField
        label="Color Palette"
        value={colorPalette}
        options={[
          "Neutral",
          "Warm",
          "Cool",
          "Earthy",
          "Monochrome",
        ]}
        onChange={setColorPalette}
      />

      <TextAreaField
        label="Additional Requirements"
        placeholder="Example: Keep wooden flooring, add indoor plants, maximize natural lighting..."
        value={additionalRequirements}
        onChange={setAdditionalRequirements}
      />

      <button
        className="generate-button"
        disabled={disabled}
        onClick={handleGenerate}
      >
        Generate Design
      </button>

    </div>
  );
}