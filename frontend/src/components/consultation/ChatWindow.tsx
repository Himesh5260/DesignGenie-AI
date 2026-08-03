import { useState } from "react";
import { sendConsultationMessage } from "../../services/consultationService";

type Message = {
  id: number;
  sender: "user" | "ai";
  text: string;
};

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AI design consultant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user" as const,
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const response = await sendConsultationMessage(input);

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai" as const,
      text: response.message,
    };

    setMessages((prev) => [...prev, aiMessage]);

    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>
              {message.sender === "user" ? "You" : "AI"}:
            </strong>{" "}
            {message.text}
          </div>
        ))}
      </div>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your design idea..."
        />

        <button onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
}