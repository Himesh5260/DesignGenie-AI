import {
  Bot,
  User,
} from "lucide-react";

type ChatMessageProps = {
  sender: "user" | "ai";
  message: string;
};

function ChatMessage({
  sender,
  message,
}: ChatMessageProps) {
  const isUser = sender === "user";

  return (
    <div
      className={`flex gap-3 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >

      {!isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">
          <Bot
            size={22}
            className="text-emerald-400"
          />
        </div>
      )}


      <div
        className={`max-w-md rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-emerald-500 text-white"
            : "border border-white/10 bg-neutral-900 text-gray-200"
        }`}
      >

        <p className="mb-1 text-xs opacity-70">
          {isUser ? "You" : "DesignGenie AI"}
        </p>


        <p className="text-sm">
          {message}
        </p>

      </div>


      {isUser && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
          <User
            size={22}
            className="text-gray-300"
          />
        </div>
      )}

    </div>
  );
}

export default ChatMessage;