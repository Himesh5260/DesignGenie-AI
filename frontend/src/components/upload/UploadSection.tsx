import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImagePreview from "./ImagePreview";
import GenerationForm from "../generation/GenerationForm";
import "../../styles/upload.css";

export default function UploadSection() {
  const [image, setImage] = useState<File | null>(null);

  const handleGenerate = (data: {
    roomType: string;
    designStyle: string;
    budget: string;
    colorPalette: string;
    additionalRequirements: string;
  }) => {
    console.log("Selected Image:", image);

    console.log("Generation Request:", data);
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
          disabled={!image}
          onGenerate={handleGenerate}
        />
      </section>
    </div>
  );
}