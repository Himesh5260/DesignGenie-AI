import QuickActions from "../components/dashboard/QuickActions";
import RecentProjects from "../components/dashboard/RecentProjects";
import StatCard from "../components/dashboard/StatCard";

function DashboardPage() {
  return (
    <div className="space-y-10">

      <section>

        <h1 className="text-5xl font-bold text-white">
          Dashboard
        </h1>

        <p className="mt-3 max-w-2xl text-lg leading-8 text-slate-400">
          Manage your AI-generated interior designs, upload new rooms,
          consult with AI, and track all your design projects.
        </p>

      </section>

      <section className="grid gap-6 lg:grid-cols-3">

        <StatCard
          title="Projects"
          value="12"
          description="Active interior design projects"
        />

        <StatCard
          title="AI Designs"
          value="48"
          description="Designs successfully generated"
        />

        <StatCard
          title="Consultations"
          value="07"
          description="AI design consultation sessions"
        />

      </section>

      <QuickActions />

      <RecentProjects />

    </div>
  );
}

export default DashboardPage;