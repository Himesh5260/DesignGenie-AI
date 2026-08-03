import type { Message } from "../../types/message";
import "../../styles/chat.css";

type ChatMessagesProps = {
  messages: Message[];
  isLoading: boolean;
};

export default function ChatMessages({
  messages,
  isLoading,
}: ChatMessagesProps) {
  return (
    <div className="chat-messages">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${message.sender}`}
        >
          <div className="bubble">
            {message.text}
          </div>
        </div>
      ))}

      {isLoading && (
        <div className="message ai">
          <div className="bubble typing">
            AI is typing...
          </div>
        </div>
      )}
    </div>
  );
}