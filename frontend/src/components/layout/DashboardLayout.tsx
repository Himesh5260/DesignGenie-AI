import {
  Search,
  Bell,
  Menu,
} from "lucide-react";

function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

      <div className="flex items-center gap-4">

        <button className="rounded-xl border border-white/10 bg-neutral-900 p-3 md:hidden">

          <Menu
            size={20}
            className="text-white"
          />

        </button>


        <div>
          <h1 className="text-2xl font-bold text-white md:text-3xl">
            Welcome back, Himesh
          </h1>

          <p className="hidden text-gray-400 sm:block">
            Let's create something beautiful today.
          </p>
        </div>

      </div>


      <div className="flex items-center gap-3">

        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-4 py-2 sm:flex">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-28 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />

        </div>


        <button className="rounded-xl border border-white/10 bg-neutral-900 p-3">

          <Bell
            size={20}
            className="text-gray-300"
          />

        </button>


        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
          H
        </div>

      </div>

    </header>
  );
}

export default Topbar;