type StatCardProps = {
  title: string;
  value: string;
  description: string;
};

function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-neutral-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/50">

      <h3 className="text-gray-400">
        {title}
      </h3>


      <p className="mt-3 text-4xl font-bold text-white transition group-hover:text-emerald-400">
        {value}
      </p>


      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>

    </div>
  );
}

export default StatCard;