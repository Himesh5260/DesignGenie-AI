type ImageUploaderProps = {
  image: File | null;
  onImageSelect: (file: File) => void;
};

export default function ImageUploader({
  image,
  onImageSelect,
}: ImageUploaderProps) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    onImageSelect(file);
  };

  return (
    <div className="image-uploader">
      <label htmlFor="room-image">
        Upload Room Image
      </label>

      <input
        id="room-image"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />

      {image && (
        <div className="upload-info">
          <p>
            <strong>File:</strong> {image.name}
          </p>

          <p>
            <strong>Size:</strong>{" "}
            {(image.size / 1024 / 1024).toFixed(2)} MB
          </p>
        </div>
      )}
    </div>
  );
}