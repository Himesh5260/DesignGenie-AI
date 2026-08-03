import { Link } from "react-router-dom";
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
    <Link
      to={to}
      className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-300 transition hover:bg-emerald-500 hover:text-white"
    >
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
}

export default SidebarItem;