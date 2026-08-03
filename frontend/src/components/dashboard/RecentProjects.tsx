function RecentProjects() {
  const projects = [
    {
      name: "Modern Living Room",
      type: "Interior Design",
      status: "Completed",
    },
    {
      name: "Luxury Bedroom",
      type: "AI Generated Design",
      status: "Processing",
    },
    {
      name: "Office Workspace",
      type: "Room Visualization",
      status: "Draft",
    },
  ];

  return (
    <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-6 transition hover:border-emerald-500/30">

      <h2 className="mb-5 text-xl font-semibold text-white">
        Recent Projects
      </h2>


      <div className="space-y-4">

        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between rounded-xl border border-white/10 p-4 transition hover:bg-white/5"
          >

            <div>
              <h3 className="font-semibold text-white">
                {project.name}
              </h3>

              <p className="text-sm text-gray-400">
                {project.type}
              </p>
            </div>


            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-400">
              {project.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentProjects;