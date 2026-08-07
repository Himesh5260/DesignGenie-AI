import { useState } from "react";
import { sendConsultationMessage } from "../../services/consultationService";
import type { Message } from "../../types/message";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
import SuggestedPrompts from "./SuggestedPrompts";
import "../../styles/chat.css";

export default function ChatWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I am your AI design consultant. How can I help you today?",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const response = await sendConsultationMessage(text);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: response.message,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "Something went wrong. Please try again.",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        sender: "ai",
        text: "Hello! I am your AI design consultant. How can I help you today?",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div>
          <h2>AI Design Consultant</h2>
          <p>Powered by DesignGenie AI</p>
        </div>

        <button
          className="clear-chat"
          onClick={clearChat}
        >
          Clear Chat
        </button>
      </div>

      <SuggestedPrompts
        onSelect={sendMessage}
        disabled={isLoading}
      />

      <ChatMessages
        messages={messages}
        isLoading={isLoading}
      />

      <ChatInput
        onSend={sendMessage}
        disabled={isLoading}
      />
    </div>
  );
}