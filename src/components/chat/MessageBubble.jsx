import React from 'react';
import { Activity, BarChart2 } from 'lucide-react';
import './MessageBubble.css';

export const MessageBubble = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`message-wrapper ${isUser ? 'user-wrapper' : 'cable-wrapper'}`}>
      <div className={`message-bubble ${isUser ? 'user-bubble' : 'cable-bubble'}`}>
        <p className="message-text">{message.text}</p>
        
        {message.insight && (
          <div className="insight-chip">
            <span className="insight-icon">
              {message.insight.type === 'pattern' ? <Activity size={14} color="var(--color-accent-cable)" /> : <BarChart2 size={14} color="var(--color-accent-cable)" />}
            </span>
            <span className="insight-text">{message.insight.text}</span>
          </div>
        )}
      </div>
      {message.time && <span className="message-time">{message.time}</span>}
    </div>
  );
};
