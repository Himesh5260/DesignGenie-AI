import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-neutral-900 p-6">
        <h1 className="text-2xl font-bold">DesignGenie AI</h1>

        <nav className="mt-10 space-y-4">
          <p>Dashboard</p>
          <p>Consultation</p>
          <p>Upload Room</p>
          <p>Projects</p>
        </nav>
      </aside>

      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;