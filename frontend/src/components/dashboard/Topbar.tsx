import {
  Search,
  Bell,
} from "lucide-react";

function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">

      <div>
        <h1 className="text-3xl font-bold text-white">
          Welcome back, Himesh
        </h1>

        <p className="text-gray-400">
          Let's create something beautiful today.
        </p>
      </div>


      <div className="flex items-center gap-5">

        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-neutral-900 px-4 py-2">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-32 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
          />

        </div>


        <button className="rounded-xl border border-white/10 bg-neutral-900 p-3 transition hover:border-emerald-500">

          <Bell
            size={20}
            className="text-gray-300"
          />

        </button>


        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-900 px-4 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 font-bold text-white">
            H
          </div>

          <div>
            <p className="text-sm font-semibold text-white">
              Himesh
            </p>

            <p className="text-xs text-gray-400">
              Designer
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;