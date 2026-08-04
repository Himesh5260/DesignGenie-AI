import {
  LayoutDashboard,
  Sparkles,
  Upload,
  FolderOpen,
  Settings,
  Palette,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 flex h-screen w-72 flex-col border-r border-slate-800 bg-slate-950">

      <div className="border-b border-slate-800 px-8 py-8">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 shadow-lg shadow-blue-900/30">

            <Palette size={28} className="text-white" />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              DesignGenie
            </h1>

            <p className="text-sm text-slate-400">
              AI Interior Studio
            </p>

          </div>

        </div>

      </div>

      <nav className="flex-1 space-y-3 px-6 py-8">

        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          icon={LayoutDashboard}
        />

        <SidebarItem
          to="/upload-room"
          label="Upload Room"
          icon={Upload}
        />

        <SidebarItem
          to="/consultation"
          label="AI Consultation"
          icon={Sparkles}
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

      <div className="border-t border-slate-800 p-6">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">

          <p className="text-sm font-semibold text-white">
            DesignGenie AI
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Transform your rooms into beautiful AI-generated interiors.
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;