import { useState } from "react";
import "../../styles/chat.css";

type ChatInputProps = {
  onSend: (message: string) => void;
  disabled: boolean;
};

export default function ChatInput({
  onSend,
  disabled,
}: ChatInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || disabled) return;

    onSend(input);

    setInput("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-input">
      <input
        value={input}
        disabled={disabled}
        placeholder="Describe your design idea..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        onClick={handleSend}
        disabled={disabled}
      >
        {disabled ? "Thinking..." : "Send"}
      </button>
    </div>
  );
}