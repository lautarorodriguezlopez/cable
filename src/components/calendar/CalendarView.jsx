import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Header } from '../shared/Header';
import { mockCalendar } from '../../data/mockCalendar';
import { DayDrawer } from './DayDrawer';
import './CalendarView.css';

export const CalendarView = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const getMoodColor = (mood) => {
    switch(mood) {
      case 'good': return 'var(--color-accent-ok)';
      case 'neutral': return '#FFB86B';
      case 'bad': return 'var(--color-accent-warm)';
      default: return 'var(--color-bg-elevated)';
    }
  };

  const handleDayClick = (dayData) => {
    if (dayData.active) {
      setSelectedDay(dayData);
    }
  };

  return (
    <div className="screen-container calendar-screen">
      <Header title="Junio 2026" showBack={false} />
      
      <div className="calendar-content">
        <div className="calendar-nav">
          <button className="icon-button"><ChevronLeft size={20} /></button>
          <span className="current-month">JUNIO</span>
          <button className="icon-button"><ChevronRight size={20} /></button>
        </div>

        <div className="calendar-grid">
          {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
            <div key={i} className="calendar-header-cell">{d}</div>
          ))}
          
          {/* Espacios vacíos para alinear el día 1 (asumiendo que empieza en Lunes) */}
          {mockCalendar.map((dayData, i) => (
            <div 
              key={i} 
              className={`calendar-cell ${dayData.active ? 'active' : ''}`}
              onClick={() => handleDayClick(dayData)}
            >
              <span className="day-number mono">{dayData.day}</span>
              <div 
                className="mood-dot"
                style={{ backgroundColor: getMoodColor(dayData.mood) }}
              />
            </div>
          ))}
        </div>

        <div className="stats-strip">
          <div className="stat-item">
            <span className="stat-value mono">18</span>
            <span className="stat-label">Días registrados</span>
          </div>
          <div className="stat-item">
            <span className="stat-value mono">6</span>
            <span className="stat-label">Mejor racha</span>
          </div>
        </div>
      </div>

      {selectedDay && (
        <DayDrawer day={selectedDay} onClose={() => setSelectedDay(null)} />
      )}
    </div>
  );
};
