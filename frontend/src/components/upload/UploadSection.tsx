import { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImagePreview from "./ImagePreview";
import GenerationForm from "../generation/GenerationForm";
import "../../styles/upload.css";

export default function UploadSection() {
  const [image, setImage] =
    useState<File | null>(null);

  return (
    <div className="upload-section">

      <ImageUploader
        onImageSelect={setImage}
      />

      <ImagePreview
        image={image}
      />

      <GenerationForm />

    </div>
  );
}