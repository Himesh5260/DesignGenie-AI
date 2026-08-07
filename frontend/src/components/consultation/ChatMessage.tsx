import { useEffect, useRef } from "react";
import type { Message } from "../../types/message";
import TypingIndicator from "./TypingIndicator";
import "../../styles/chat.css";

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessagesProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender}`}
        >
          <div className="bubble">
            <p>{message.text}</p>

            <span className="timestamp">
              {message.timestamp}
            </span>
          </div>
        </div>
      ))}

      {isLoading && <TypingIndicator />}

      <div ref={bottomRef} />
    </div>
  );
}