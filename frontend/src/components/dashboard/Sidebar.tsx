function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-neutral-900 border-r border-neutral-800 p-6">
      <h2 className="text-2xl font-bold text-emerald-400">
        DesignGenie AI
      </h2>

      <nav className="mt-10 space-y-4">
        <a href="/dashboard" className="block hover:text-emerald-400">
          Dashboard
        </a>

        <a href="/consultation" className="block hover:text-emerald-400">
          AI Consultation
        </a>

        <a href="/upload-room" className="block hover:text-emerald-400">
          Upload Room
        </a>

        <a href="/projects" className="block hover:text-emerald-400">
          Projects
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;