import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  to: string;
  label: string;
  icon: LucideIcon;
};

function SidebarItem({
  to,
  label,
  icon: Icon,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all duration-300 ${
          isActive
            ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-900/20"
            : "text-slate-400 hover:bg-slate-900 hover:text-white"
        }`
      }
    >
      <Icon
        size={21}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      <span>{label}</span>
    </NavLink>
  );
}

export default SidebarItem;