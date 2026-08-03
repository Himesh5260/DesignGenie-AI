import "../../styles/chat.css";

export default function TypingIndicator() {
  return (
    <div className="message ai">
      <div className="bubble">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}