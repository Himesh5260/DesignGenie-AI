type SuggestionCardProps = {
  title: string;
  description: string;
};

function SuggestionCard({
  title,
  description,
}: SuggestionCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-neutral-900 p-5 transition hover:border-emerald-500/50">

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>


      <p className="mt-2 text-sm text-gray-400">
        {description}
      </p>

    </div>
  );
}

export default SuggestionCard;