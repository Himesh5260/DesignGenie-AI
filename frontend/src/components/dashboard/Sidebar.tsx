import {
  LayoutDashboard,
  Sparkles,
  Upload,
  FolderOpen,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-white/10 bg-neutral-900 p-6">

      <h1 className="mb-10 text-2xl font-bold text-white">
        DesignGenie AI
      </h1>


      <nav className="space-y-3">

        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          icon={LayoutDashboard}
        />


        <SidebarItem
          to="/consultation"
          label="AI Consultation"
          icon={Sparkles}
        />


        <SidebarItem
          to="/upload-room"
          label="Upload Room"
          icon={Upload}
        />


        <SidebarItem
          to="/projects"
          label="Projects"
          icon={FolderOpen}
        />


        <SidebarItem
          to="/settings"
          label="Settings"
          icon={Settings}
        />

      </nav>

    </aside>
  );
}

export default Sidebar;