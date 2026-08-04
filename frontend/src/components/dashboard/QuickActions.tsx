import {
  Sparkles,
  Upload,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <section className="mt-10">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Quick Actions
          </h2>

          <p className="text-slate-400">
            Start your next AI-powered design in one click.
          </p>

        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <Link
          to="/upload-room"
          className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600">

            <Upload className="text-white" size={30} />

          </div>

          <h3 className="text-2xl font-semibold text-white">
            Upload Room
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            Upload your room image and let AI redesign it in seconds.
          </p>

          <div className="mt-8 flex items-center gap-2 text-blue-400">

            Continue

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-2"
            />

          </div>

        </Link>

        <Link
          to="/consultation"
          className="group rounded-3xl border border-slate-800 bg-slate-900 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500"
        >

          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600">

            <Sparkles className="text-white" size={30} />

          </div>

          <h3 className="text-2xl font-semibold text-white">
            AI Consultation
          </h3>

          <p className="mt-3 leading-7 text-slate-400">
            Chat with DesignGenie AI and receive personalized interior ideas.
          </p>

          <div className="mt-8 flex items-center gap-2 text-violet-400">

            Continue

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-2"
            />

          </div>

        </Link>

      </div>

    </section>
  );
}

export default QuickActions;