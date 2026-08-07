import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Sidebar />

      <main className="ml-64 p-8">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;