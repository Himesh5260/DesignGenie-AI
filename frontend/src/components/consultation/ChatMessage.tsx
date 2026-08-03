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
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-md rounded-2xl px-5 py-3 ${
          isUser
            ? "bg-emerald-500 text-white"
            : "border border-white/10 bg-neutral-900 text-gray-200"
        }`}
      >
        <p className="text-sm">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ChatMessage;