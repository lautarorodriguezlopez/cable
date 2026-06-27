import React from 'react';
import Chart from 'react-apexcharts';
import { Header } from '../shared/Header';
import { mockPatterns } from '../../data/mockPatterns';
import './PatternsView.css';

export const PatternsView = () => {
  const chartOptions = {
    chart: { type: 'bar', toolbar: { show: false }, sparkline: { enabled: true } },
    plotOptions: { bar: { borderRadius: 4, columnWidth: '60%' } },
    colors: ['var(--color-accent-cable)'],
    xaxis: {
      categories: mockPatterns.moodByDay.map(d => d.day),
      labels: { show: true, style: { colors: 'var(--color-text-secondary)', fontSize: '10px' } },
      axisBorder: { show: false }, axisTicks: { show: false }
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false }
  };

  const chartSeries = [{
    name: 'Ánimo',
    data: mockPatterns.moodByDay.map(d => d.value)
  }];

  return (
    <div className="screen-container patterns-screen">
      <Header 
        title="Tus Patrones" 
        showBack={false} 
      />
      
      <div className="patterns-content">
        <div className="unlocked-section">
          <h4 className="section-title">Top 3 palabras este mes</h4>
          <div className="word-chips">
            {mockPatterns.topWords.map((word, i) => (
              <span key={i} className="word-chip">{word}</span>
            ))}
          </div>

          <h4 className="section-title mt-24">Ánimo por día (Tendencia)</h4>
          <div className="chart-container">
            <Chart options={chartOptions} series={chartSeries} type="bar" height={120} />
          </div>
        </div>

        <div className="unlocked-section" style={{ marginTop: '2rem' }}>
          <h4 className="section-title">Correlaciones detectadas</h4>
          <div style={{ color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
            <p style={{ marginBottom: '1rem' }}>Los lunes con menos de 6hs de sueño correlacionan fuertemente con una subida en la mención de "presión" y "jefe".</p>
            <p>Tu mejor racha de humor positivo coincide con días donde mencionás "entrenamiento".</p>
          </div>
        </div>
      </div>
    </div>
  );
};
