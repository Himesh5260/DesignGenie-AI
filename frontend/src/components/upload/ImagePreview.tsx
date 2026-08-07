type ImagePreviewProps = {
  image: File | null;
};

export default function ImagePreview({
  image,
}: ImagePreviewProps) {
  if (!image) {
    return (
      <div className="image-preview empty">
        <div className="empty-content">
          <h3>No Image Selected</h3>

          <p>
            Upload a room image to preview it here.
          </p>
        </div>
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