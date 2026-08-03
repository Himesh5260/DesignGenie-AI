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
    <div className="mt-8 rounded-2xl border border-white/10 bg-neutral-900 p-6">

      <h2 className="mb-5 text-xl font-semibold">
        Recent Projects
      </h2>


      <div className="space-y-4">

        {projects.map((project) => (
          <div
            key={project.name}
            className="flex items-center justify-between rounded-xl border border-white/10 p-4"
          >

            <div>
              <h3 className="font-semibold">
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