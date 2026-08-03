import { Send } from "lucide-react";
import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
};

function ChatInput({
  onSend,
}: ChatInputProps) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  }

  return (
    <div className="flex gap-3 border-t border-white/10 bg-neutral-950 p-4">

      <input
        value={message}
        onChange={(event) =>
          setMessage(event.target.value)
        }
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSend();
          }
        }}
        type="text"
        placeholder="Describe your room..."
        className="flex-1 rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-emerald-500"
      />


      <button
        onClick={handleSend}
        className="flex items-center justify-center rounded-xl bg-emerald-500 px-5 text-white transition hover:bg-emerald-600"
      >
        <Send size={20} />
      </button>

    </div>
  );
}

export default ChatInput;