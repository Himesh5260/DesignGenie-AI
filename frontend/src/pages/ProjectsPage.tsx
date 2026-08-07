import { useEffect, useState } from "react";
import EmptyState from "../components/dashboard/EmptyState";
import { getProjects } from "../services/generationService";

function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      try {
        const res = await getProjects();
        if (mounted && res?.projects) {
          setProjects(res.projects);
        }
      } catch (err: any) {
        setError(err?.message || String(err));
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, []);

  return (
    <div>
      <h2 className="mb-6 text-2xl font-semibold text-white">Projects</h2>

      {loading && <p>Loading projects...</p>}
      {error && (
        <div className="text-red-400">Error loading projects: {error}</div>
      )}

      {!loading && projects.length === 0 && (
        <EmptyState
          title="No projects yet"
          description="Upload a room image or start an AI consultation to create your first design project."
        />
      )}

      {!loading && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="bg-gray-800 rounded-lg p-4">
              {p.generated_image && (
                <img src={p.generated_image} alt={`project-${p.id}`} className="w-full h-48 object-cover rounded-md mb-3" />
              )}
              <div className="text-sm text-gray-300">Style: {p.style || '—'}</div>
              <div className="text-sm text-gray-300">Room: {p.room_type || '—'}</div>
              <div className="text-xs text-gray-400 mt-2">Saved: {new Date(p.created_at).toLocaleString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
