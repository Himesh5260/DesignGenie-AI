import ChatWindow from "../components/consultation/ChatWindow";
import SuggestionCard from "../components/consultation/SuggestionCard";

function ConsultationPage() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-semibold text-white">
        AI Consultation
      </h2>


      <div className="grid gap-8 lg:grid-cols-3">

        <div className="lg:col-span-2">
          <ChatWindow />
        </div>


        <div className="space-y-5">

          <h3 className="text-xl font-semibold text-white">
            Design Suggestions
          </h3>


          <SuggestionCard
            title="Modern Interior Style"
            description="Use neutral colors, wooden textures, and clean minimal furniture."
          />


          <SuggestionCard
            title="Lighting Recommendation"
            description="Warm LED lighting can create a premium and comfortable atmosphere."
          />


          <SuggestionCard
            title="Furniture Ideas"
            description="Try a modular sofa with a simple coffee table for a modern look."
          />

        </div>

      </div>

    </div>
  );
}

export default ConsultationPage;