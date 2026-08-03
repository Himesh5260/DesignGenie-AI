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


        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20">

            <span className="text-lg">
              🤖
            </span>

          </div>


          <div className="rounded-2xl border border-white/10 bg-neutral-900 px-5 py-3">

            <p className="text-xs text-gray-400">
              DesignGenie AI
            </p>


            <div className="mt-2 flex gap-1">

              <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400"></span>

              <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:150ms]"></span>

              <span className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:300ms]"></span>

            </div>

          </div>

        </div>

      </div>


      <ChatInput />

    </div>
  );
}

export default ChatWindow;