import EmptyState from "../components/dashboard/EmptyState";

function UploadRoomPage() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-semibold text-white">
        Upload Room
      </h2>


      <EmptyState
        title="Upload your room image"
        description="Start your interior transformation by uploading a room photo."
      />

    </div>
  );
}

export default UploadRoomPage;