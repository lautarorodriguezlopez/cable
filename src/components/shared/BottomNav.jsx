import React from 'react';
import { MessageSquare, LayoutList, CalendarDays, BarChart2, User } from 'lucide-react';
import './BottomNav.css';

export const BottomNav = ({ activeTab, onChangeTab }) => {
  const tabs = [
    { id: 'chat', icon: <MessageSquare size={24} />, label: 'Chat' },
    { id: 'daily', icon: <LayoutList size={24} />, label: 'Hoy' },
    { id: 'calendar', icon: <CalendarDays size={24} />, label: 'Calendario' },
    { id: 'patterns', icon: <BarChart2 size={24} />, label: 'Patrones' },
    { id: 'profile', icon: <User size={24} />, label: 'Perfil' }
  ];

  return (
    <div className="bottom-nav">
      {tabs.map((tab) => (
        <button 
          key={tab.id}
          className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
          onClick={() => onChangeTab(tab.id)}
        >
          <span className="nav-icon">{tab.icon}</span>
          {activeTab === tab.id && <div className="nav-indicator" />}
        </button>
      ))}
    </div>
  );
};
