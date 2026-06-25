import React from 'react';
import { CheckCircle2, MinusCircle, XCircle, X } from 'lucide-react';
import './DayDrawer.css';

export const DayDrawer = ({ day, onClose }) => {
  return (
    <>
      <div className="drawer-overlay" onClick={onClose} />
      <div className="drawer-container">
        <div className="drawer-handle" />
        
        <div className="drawer-header">
          <h3>{day.day} de Junio</h3>
          <button className="icon-button close-btn" onClick={onClose}><X size={24} /></button>
        </div>

        <div className="drawer-content">
          <div className="compact-status">
            <span className={`compact-mood-icon ${day.mood}`}>
              {day.mood === 'good' ? <CheckCircle2 size={24} /> : day.mood === 'neutral' ? <MinusCircle size={24} /> : <XCircle size={24} />}
            </span>
            <span>
              {day.mood === 'good' ? 'Día fluido' : day.mood === 'neutral' ? 'Día mixto' : 'Día difícil'}
            </span>
          </div>

          <div className="cable-note compact-note">
            <div className="note-content">
              <p>Este día registraste tensión y mencionaste problemas con el sueño. Fue un día de alta carga cognitiva.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
