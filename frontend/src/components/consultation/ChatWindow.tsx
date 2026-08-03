import { useState } from "react";
import { sendConsultationMessage } from "../../services/consultationService";
import type { Message } from "../../types/message";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
import "../../styles/chat.css";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AI design consultant. How can I help you today?",
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (input: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const response = await sendConsultationMessage(input);

      const aiMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.message,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        sender: "ai",
        text: "Sorry, something went wrong. Please try again.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        AI Design Consultant
      </div>

      <ChatMessages
        messages={messages}
        isLoading={isLoading}
      />

      <ChatInput
        onSend={handleSend}
        disabled={isLoading}
      />
    </div>
  );
}