type SuggestedPromptsProps = {
  onSelect: (prompt: string) => void;
  disabled: boolean;
};

const prompts = [
  "Modern living room",
  "Minimalist bedroom",
  "Luxury office",
  "Scandinavian kitchen",
  "Industrial workspace",
  "Small apartment makeover",
];

export default function SuggestedPrompts({
  onSelect,
  disabled,
}: SuggestedPromptsProps) {
  return (
    <div className="suggested-prompts">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          disabled={disabled}
          onClick={() => onSelect(prompt)}
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}