import EmptyState from "../components/dashboard/EmptyState";

function ProjectsPage() {
  return (
    <div>

      <h2 className="mb-6 text-2xl font-semibold text-white">
        Projects
      </h2>


      <EmptyState
        title="No projects yet"
        description="Upload a room image or start an AI consultation to create your first design project."
      />

    </div>
  );
}

export default ProjectsPage;