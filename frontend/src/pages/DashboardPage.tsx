import StatCard from "../components/dashboard/StatCard";

function DashboardPage() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-semibold">
        Dashboard Overview
      </h2>


      <div className="grid gap-6 md:grid-cols-3">

        <StatCard
          title="Projects"
          value="12"
          description="Total design projects"
        />


        <StatCard
          title="AI Designs"
          value="48"
          description="Generated designs"
        />


        <StatCard
          title="Consultations"
          value="7"
          description="AI sessions completed"
        />

      </div>

    </div>
  );
}

export default DashboardPage;