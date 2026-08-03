import FeatureCard from "../ui/FeatureCard";

function FeaturesSection() {
  return (
    <section className="px-10 py-24">
      <h2 className="mb-16 text-center text-5xl font-bold">
        Why Choose
        <span className="text-emerald-400">
          {" "}DesignGenie AI
        </span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        <FeatureCard
          icon="🧠"
          title="AI Consultation"
          description="Receive intelligent design suggestions based on your preferences."
        />

        <FeatureCard
          icon="🏠"
          title="Smart Layouts"
          description="Generate optimized room layouts within seconds."
        />

        <FeatureCard
          icon="🎨"
          title="Moodboards"
          description="Visualize furniture, colors and decor before purchasing."
        />

        <FeatureCard
          icon="💰"
          title="Budget Planning"
          description="Create beautiful interiors while staying within your budget."
        />

      </div>
    </section>
  );
}

export default FeaturesSection;