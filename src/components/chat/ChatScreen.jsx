import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../shared/Header';
import { mockMessages } from '../../data/mockMessages';
import { MessageBubble } from './MessageBubble';
import { InputBar } from './InputBar';
import './ChatScreen.css';

export const ChatScreen = () => {
  const [messages, setMessages] = useState(mockMessages);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMsg]);
  };

  return (
    <div className="screen-container chat-screen">
      <Header title="CABLE" showCalendar={false} />
      
      <div className="chat-messages-area">
        {messages.length === 0 ? (
          <div className="empty-chat-state">
            <MessageBubble 
              message={{
                id: 'empty',
                sender: 'cable',
                text: 'Buenas. ¿Cómo vas hoy?'
              }} 
            />
          </div>
        ) : (
          messages.map(msg => (
            <MessageBubble key={msg.id} message={msg} />
          ))
        )}
        <div ref={messagesEndRef} className="scroll-spacer" />
      </div>

      <InputBar onSend={handleSend} />
    </div>
  );
};
