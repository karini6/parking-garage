import type { ReactNode } from "react";
import "./Message.css";

type MessageProps = {
    heading?: string;
    text: string;
    action?: ReactNode;
}


const Message = ({ heading, text, action }: MessageProps) => {
  return (
    <div className="message">
      <div className="text-wrapper">
        <p className="message-heading">{heading}</p>
        <p className="message-text">{text}</p>
      </div>
      <div className="action-container">{action}</div>
    </div>
  );
};

export default Message;