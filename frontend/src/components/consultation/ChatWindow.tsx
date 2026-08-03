import { useState } from "react";
import { sendConsultationMessage } from "../../services/consultationService";
import type { Message } from "../../types/message";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AI design consultant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");
    setIsLoading(true);

    const response = await sendConsultationMessage(input);

    const aiMessage: Message = {
      id: Date.now() + 1,
      sender: "ai",
      text: response.message,
    };

    setMessages((prev) => [...prev, aiMessage]);

    setIsLoading(false);
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

        {isLoading && (
          <div>
            <strong>AI:</strong> Typing...
          </div>
        )}
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