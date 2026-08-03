function Topbar() {
  return (
    <header className="mb-8 flex items-center justify-between border-b border-neutral-800 pb-4">
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, Himesh
        </h1>

        <p className="text-gray-400">
          Let's create something beautiful today.
        </p>
      </div>

      <button className="rounded-lg bg-emerald-500 px-4 py-2 font-semibold">
        New Project
      </button>
    </header>
  );
}

export default Topbar;