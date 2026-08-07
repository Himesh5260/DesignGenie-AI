type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-emerald-400 hover:bg-white/10">
      <div className="mb-4 text-5xl">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;