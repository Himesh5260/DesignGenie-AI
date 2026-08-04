type ImagePreviewProps = {
  image: File | null;
};

export default function ImagePreview({
  image,
}: ImagePreviewProps) {
  if (!image) {
    return (
      <div className="image-preview empty">
        <p>No image selected</p>
      </div>
    );
  }

  return (
    <div className="image-preview">
      <img
        src={URL.createObjectURL(image)}
        alt="Room Preview"
      />
    </div>
  );
}