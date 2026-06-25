import React from 'react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import './Header.css';

export const Header = ({ title, showCalendar, onCalendarClick, showBack, onBackClick, rightElement }) => {
  return (
    <header className="header">
      <div className="header-left">
        {showBack && (
          <button className="icon-button" onClick={onBackClick}>
            <ArrowLeft size={20} />
          </button>
        )}
      </div>
      <div className="header-center">
        <h2 className="header-title">{title}</h2>
      </div>
      <div className="header-right">
        {showCalendar && (
          <button className="icon-button" onClick={onCalendarClick}>
            <Calendar size={20} />
          </button>
        )}
        {rightElement ? rightElement : (
          <button className="icon-button profile-button">
            <span className="profile-icon"><User size={18} /></span>
          </button>
        )}
      </div>
    </header>
  );
};
