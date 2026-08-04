import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImagePreview from "./ImagePreview";
import GenerationForm from "../generation/GenerationForm";
import { generateDesign } from "../../services/generationService";
import "../../styles/upload.css";

export default function UploadSection() {
  const [image, setImage] = useState<File | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleGenerate = async (data: {
    roomType: string;
    designStyle: string;
    budget: string;
    colorPalette: string;
    additionalRequirements: string;
  }) => {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    try {
      setIsGenerating(true);

      const result = await generateDesign({
        image,
        roomType: data.roomType,
        style: data.designStyle,
        preferences: `
Budget: ${data.budget}
Color Palette: ${data.colorPalette}
Additional Requirements: ${data.additionalRequirements}
        `.trim(),
      });

      console.log("Backend Response:", result);
      setResponse(result);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to the backend.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="upload-section">
      <section>
        <h2>Step 1</h2>
        <p>Upload Your Room</p>

        <ImageUploader
          image={image}
          onImageSelect={setImage}
        />
      </section>

      <section>
        <h2>Step 2</h2>
        <p>Preview</p>

        <ImagePreview image={image} />
      </section>

      <section>
        <h2>Step 3</h2>
        <p>Design Preferences</p>

        <GenerationForm
          disabled={!image || isGenerating}
          onGenerate={handleGenerate}
        />

        {isGenerating && (
          <p style={{ marginTop: "16px" }}>
            Generating design...
          </p>
        )}

        {response && (
          <pre
            style={{
              marginTop: "20px",
              padding: "16px",
              background: "#1f2937",
              color: "#ffffff",
              borderRadius: "8px",
              overflowX: "auto",
            }}
          >
            {JSON.stringify(response, null, 2)}
          </pre>
        )}
      </section>
    </div>
  );
}