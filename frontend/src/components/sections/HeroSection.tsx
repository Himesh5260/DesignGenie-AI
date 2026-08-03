function HeroSection() {
  return (
    <section className="flex min-h-[85vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
        AI-Powered Interior Design
      </p>

      <h1 className="max-w-5xl text-6xl font-extrabold leading-tight">
        Design Your
        <span className="text-emerald-400"> Dream Space </span>
        With Artificial Intelligence
      </h1>

      <p className="mt-8 max-w-2xl text-lg text-gray-400">
        Upload your room, describe your style, and let DesignGenie AI
        generate beautiful interior concepts, layouts, furniture
        suggestions, and moodboards in seconds.
      </p>

      <div className="mt-10 flex gap-5">
        <button className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold hover:bg-emerald-600 transition">
          Start Designing
        </button>

        <button className="rounded-xl border border-gray-700 px-8 py-3 hover:border-white transition">
          Watch Demo
        </button>
      </div>
    </section>
  );
}

export default HeroSection;