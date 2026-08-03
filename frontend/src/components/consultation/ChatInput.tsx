import { Send } from "lucide-react";

function ChatInput() {
  return (
    <div className="flex gap-3 border-t border-white/10 bg-neutral-950 p-4">

      <input
        type="text"
        placeholder="Describe your room..."
        className="flex-1 rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-emerald-500"
      />


      <button className="flex items-center justify-center rounded-xl bg-emerald-500 px-5 text-white transition hover:bg-emerald-600">

        <Send size={20} />

      </button>

    </div>
  );
}

export default ChatInput;