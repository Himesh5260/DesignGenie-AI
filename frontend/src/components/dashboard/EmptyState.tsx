import { Sparkles } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
};

function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-neutral-900 p-10 text-center">

      <div className="mb-5 rounded-full bg-emerald-500/20 p-4">

        <Sparkles
          size={32}
          className="text-emerald-400"
        />

      </div>


      <h2 className="text-xl font-semibold text-white">
        {title}
      </h2>


      <p className="mt-2 max-w-md text-gray-400">
        {description}
      </p>

    </div>
  );
}

export default EmptyState;