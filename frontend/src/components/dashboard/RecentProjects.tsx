import {
  Clock3,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

function RecentProjects() {
  const projects = [
    {
      name: "Modern Living Room",
      style: "Modern",
      status: "Completed",
      icon: CheckCircle2,
      color: "text-emerald-400",
    },
    {
      name: "Luxury Bedroom",
      style: "Luxury",
      status: "Generating",
      icon: LoaderCircle,
      color: "text-blue-400",
    },
    {
      name: "Scandinavian Office",
      style: "Scandinavian",
      status: "Draft",
      icon: Clock3,
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-8">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Recent Projects
      </h2>

      <div className="space-y-5">

        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.name}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500"
            >

              <div>

                <h3 className="font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {project.style}
                </p>

              </div>

              <div
                className={`flex items-center gap-2 ${project.color}`}
              >

                <Icon size={18} />

                {project.status}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default RecentProjects;