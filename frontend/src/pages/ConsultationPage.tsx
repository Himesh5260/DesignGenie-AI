import EmptyState from "../components/dashboard/EmptyState";

function ConsultationPage() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-semibold text-white">
        AI Consultation
      </h2>


      <EmptyState
        title="Start AI consultation"
        description="Get personalized interior design recommendations powered by AI."
      />

    </div>
  );
}

export default ConsultationPage;