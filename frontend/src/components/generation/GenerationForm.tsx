import { useState } from "react";
import SelectField from "./SelectField";
import TextAreaField from "./TextAreaField";
import "../../styles/generation.css";

export default function GenerationForm() {
  const [roomType, setRoomType] = useState("Bedroom");
  const [designStyle, setDesignStyle] = useState("Modern");
  const [budget, setBudget] = useState("Medium");
  const [colorPalette, setColorPalette] = useState("Neutral");
  const [additionalRequirements, setAdditionalRequirements] =
    useState("");

  const handleGenerate = () => {
    console.log({
      roomType,
      designStyle,
      budget,
      colorPalette,
      additionalRequirements,
    });
  };

  return (
    <div className="generation-form">
      <h2>AI Interior Design Generator</h2>

      <SelectField
        label="Room Type"
        value={roomType}
        options={[
          "Bedroom",
          "Living Room",
          "Kitchen",
          "Office",
          "Bathroom",
        ]}
        onChange={setRoomType}
      />

      <SelectField
        label="Design Style"
        value={designStyle}
        options={[
          "Modern",
          "Minimalist",
          "Luxury",
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
          "Monochrome",
          "Earthy",
        ]}
        onChange={setColorPalette}
      />

      <TextAreaField
        label="Additional Requirements"
        value={additionalRequirements}
        placeholder="Describe any additional design preferences..."
        onChange={setAdditionalRequirements}
      />

      <button
        className="generate-button"
        onClick={handleGenerate}
      >
        Generate Design
      </button>
    </div>
  );
}