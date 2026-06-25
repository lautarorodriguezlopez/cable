import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';
import './InputBar.css';

export const InputBar = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="input-bar-container">
      <div className="input-bar-wrapper">
        <textarea
          className="chat-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Contame cómo va..."
          rows={1}
        />
        <button 
          className="send-button"
          onClick={handleSend}
          disabled={!text.trim()}
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};
