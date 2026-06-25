import React from 'react';
import Chart from 'react-apexcharts';
import { Moon, Briefcase, Coffee, Activity } from 'lucide-react';
import { Header } from '../shared/Header';
import './DailyRecap.css';

export const DailyRecap = ({ onCalendarClick }) => {
  const chartOptions = {
    chart: { type: 'radialBar', sparkline: { enabled: true } },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: { size: '65%' },
        track: { background: 'var(--color-bg-elevated)', margin: 0 },
        dataLabels: {
          name: { show: false },
          value: {
            offsetY: 0,
            fontSize: '32px',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            color: 'var(--color-text-primary)'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        colorStops: [
          { offset: 0, color: 'var(--color-accent-warm)', opacity: 1 },
          { offset: 100, color: 'var(--color-accent-ok)', opacity: 1 }
        ]
      }
    },
    stroke: { lineCap: 'round' }
  };

  return (
    <div className="screen-container daily-screen">
      <Header title="Resumen de hoy · 25 Jun" showBack={false} />
      
      <div className="daily-content">
        <div className="status-card">
          <div className="gauge-container">
            <Chart options={chartOptions} series={[54]} type="radialBar" height={200} />
          </div>
          <h3 className="mood-detected">Tensión moderada con descarga parcial</h3>
        </div>

        <div className="variables-section">
          <h4 className="section-title">Variables registradas hoy</h4>
          <div className="variable-list">
            <div className="variable-chip">
              <span className="var-icon"><Moon size={18} /></span>
              <span className="var-label">Sueño:</span>
              <span className="var-value warning">Bajo (5-6hs)</span>
            </div>
            <div className="variable-chip">
              <span className="var-icon"><Briefcase size={18} /></span>
              <span className="var-label">Presión laboral:</span>
              <span className="var-value danger">Alta</span>
            </div>
            <div className="variable-chip">
              <span className="var-icon"><Coffee size={18} /></span>
              <span className="var-label">Activadores:</span>
              <span className="var-value">Jefe / presupuesto</span>
            </div>
            <div className="variable-chip inactive">
              <span className="var-icon"><Activity size={18} /></span>
              <span className="var-label">Ejercicio:</span>
              <span className="var-value">No mencionado</span>
            </div>
          </div>
        </div>

        <div className="cable-note">
          <h4 className="section-title">Nota de CABLE</h4>
          <div className="note-content">
            <p>
              Arrancaste el día con mucha carga por temas de presupuesto y venís arrastrando mal sueño. 
              Pudiste hacer una buena descarga inicial. Te recomiendo buscar un corte temprano hoy para evitar arrastrar la tensión al miércoles.
            </p>
          </div>
        </div>

        <button className="btn-calendar-link" onClick={onCalendarClick}>
          Ver en el calendario
        </button>
      </div>
    </div>
  );
};
