type ImageUploaderProps = {
  onImageSelect: (file: File) => void;
};

export default function ImageUploader({
  onImageSelect,
}: ImageUploaderProps) {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

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
    </div>
  );
}