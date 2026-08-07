function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6">
      <h1 className="text-2xl font-bold text-white">
        DesignGenie AI
      </h1>

      <ul className="hidden md:flex gap-8 text-gray-300">
        <li className="hover:text-white cursor-pointer transition">
          Features
        </li>
        <li className="hover:text-white cursor-pointer transition">
          Pricing
        </li>
        <li className="hover:text-white cursor-pointer transition">
          About
        </li>
      </ul>

      <div className="flex gap-4">
        <button className="text-gray-300 hover:text-white">
          Login
        </button>

        <button className="bg-emerald-500 hover:bg-emerald-600 px-5 py-2 rounded-xl font-semibold transition">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;