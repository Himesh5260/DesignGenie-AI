import UploadSection from "../components/upload/UploadSection";

export default function UploadRoomPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          AI Room Designer
        </h1>

        <p className="mt-2 text-gray-400">
          Upload your room image and let AI generate a redesigned interior.
        </p>
      </div>

      <UploadSection />

    </div>
  );
}