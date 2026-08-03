import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

function ChatWindow() {
  const messages = [
    {
      sender: "ai" as const,
      message:
        "Hello Himesh! Tell me about the room you want to redesign.",
    },
    {
      sender: "user" as const,
      message:
        "I want a modern luxury living room with warm lighting.",
    },
    {
      sender: "ai" as const,
      message:
        "Great choice. I recommend neutral colors, wooden textures, and minimalist furniture.",
    },
  ];

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-neutral-950">

      <div className="flex-1 space-y-4 overflow-y-auto p-6">

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            sender={message.sender}
            message={message.message}
          />
        ))}

      </div>


      <ChatInput />

    </div>
  );
}

export default ChatWindow;