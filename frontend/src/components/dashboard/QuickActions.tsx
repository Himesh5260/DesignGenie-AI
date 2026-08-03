import {
  Upload,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

function QuickActions() {
  return (
    <div className="mt-8">

      <h2 className="mb-5 text-xl font-semibold text-white">
        Quick Actions
      </h2>


      <div className="grid gap-6 md:grid-cols-2">

        <Link
          to="/upload-room"
          className="rounded-2xl border border-white/10 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
        >

          <Upload
            size={32}
            className="mb-4 text-emerald-400"
          />

          <h3 className="text-lg font-semibold text-white">
            Upload Room
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Upload your room image and start AI visualization.
          </p>

        </Link>


        <Link
          to="/consultation"
          className="rounded-2xl border border-white/10 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50"
        >

          <Sparkles
            size={32}
            className="mb-4 text-emerald-400"
          />

          <h3 className="text-lg font-semibold text-white">
            Start AI Consultation
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            Get personalized interior design suggestions.
          </p>

        </Link>

      </div>

    </div>
  );
}

export default QuickActions;