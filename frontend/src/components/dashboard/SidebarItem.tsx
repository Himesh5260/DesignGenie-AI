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
        `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
          isActive
            ? "bg-emerald-500 text-white"
            : "text-gray-300 hover:bg-white/10 hover:text-white"
        }`
      }
    >
      <Icon size={20} />
      <span>{label}</span>
    </NavLink>
  );
}

export default SidebarItem;