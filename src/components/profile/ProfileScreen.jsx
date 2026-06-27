import React from 'react';
import Chart from 'react-apexcharts';
import { Brain, FileText, CheckCircle, ChevronRight, Beaker } from 'lucide-react';
import { Header } from '../shared/Header';
import { mockProfile } from '../../data/mockProfile';
import './ProfileScreen.css';

export const ProfileScreen = ({ tests, onCompleteTest }) => {
  const [activeTest, setActiveTest] = React.useState(null);
  const [currentStep, setCurrentStep] = React.useState(0);

  const radarOptions = {
    chart: {
      type: 'radar',
      toolbar: { show: false }
    },
    labels: mockProfile.personality.traits.map(t => t.name),
    colors: ['var(--color-accent-cable)'],
    fill: {
      opacity: 0.2,
      colors: ['var(--color-accent-glow)']
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['var(--color-accent-cable)']
    },
    markers: {
      size: 4,
      colors: ['#fff'],
      strokeColors: 'var(--color-accent-cable)',
      strokeWidth: 2
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100
    },
    xaxis: {
      labels: {
        style: {
          colors: 'var(--color-text-secondary)',
          fontSize: '11px',
          fontFamily: 'var(--font-body)'
        }
      }
    }
  };

  const radarSeries = [{
    name: 'Tu Perfil',
    data: mockProfile.personality.traits.map(t => t.score)
  }];

  const testQuestions = [
    "En las últimas 2 semanas, ¿con qué frecuencia has tenido poco interés o placer en hacer cosas?",
    "¿Te has sentido decaído/a, deprimido/a o sin esperanzas?",
    "¿Has tenido dificultad para quedarte o mantenerte dormido/a, o has dormido demasiado?"
  ];
  const testOptions = ["Nunca", "Varios días", "Más de la mitad de los días", "Casi todos los días"];

  const handleStartTest = (test) => {
    setActiveTest(test);
    setCurrentStep(0);
  };

  const handleAnswer = () => {
    if (currentStep < testQuestions.length - 1) {
      setCurrentStep(s => s + 1);
    } else {
      onCompleteTest(activeTest.id);
      setActiveTest(null);
    }
  };

  if (activeTest) {
    return (
      <div className="screen-container profile-screen" style={{ display: 'flex', flexDirection: 'column' }}>
        <Header title={activeTest.title} showBack={true} onBackClick={() => setActiveTest(null)} />
        <div style={{ padding: '2rem', flex: 1, backgroundColor: 'var(--color-bg-primary)', overflowY: 'auto', paddingBottom: '6rem' }}>
          <div style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
            Pregunta {currentStep + 1} de {testQuestions.length}
          </div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.4' }}>
            {testQuestions[currentStep]}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {testOptions.map((opt, i) => (
              <button 
                key={i} 
                onClick={handleAnswer} 
                style={{ 
                  padding: '1.2rem', 
                  borderRadius: '12px', 
                  border: '1px solid var(--color-border)', 
                  backgroundColor: 'var(--color-bg-secondary)', 
                  color: 'var(--color-text-primary)',
                  textAlign: 'left',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-container profile-screen">
      <Header title="Tu Evolución" showBack={false} />

      <div className="profile-content">
        <section className="personality-section">
          <div className="archetype-header">
            <div className="icon-wrapper">
              <Brain size={32} color="var(--color-accent-cable)" />
            </div>
            <div>
              <h2 className="archetype-title">{mockProfile.personality.archetype}</h2>
              <span className="archetype-subtitle">Perfil dinámico en construcción</span>
            </div>
          </div>
          
          <p className="personality-desc">{mockProfile.personality.description}</p>
          
          <div className="radar-container">
            <Chart options={radarOptions} series={radarSeries} type="radar" height={280} />
          </div>
        </section>

        <section className="tests-section">
          <div className="tests-header">
            <h3 className="section-title">Tests Científicos</h3>
            <span className="badge-scientific">
              <Beaker size={12} /> Respaldado
            </span>
          </div>
          <p className="section-desc">Conoce tus métricas base realizando estos test validados clínicamente. CABLE adaptará sus respuestas según tu perfil.</p>
          
          <div className="test-list">
            {(tests || mockProfile.availableTests).map(test => (
              <div key={test.id} className={`test-card ${test.status === 'completed' ? 'completed' : ''}`}>
                <div className="test-card-header">
                  <div className="test-icon">
                    <FileText size={20} />
                  </div>
                  <div className="test-info">
                    <h4>{test.title}</h4>
                    <span className="test-duration">{test.duration}</span>
                  </div>
                  {test.status === 'completed' ? (
                    <CheckCircle className="status-icon" size={24} color="var(--color-accent-ok)" />
                  ) : (
                    <button className="btn-take-test" onClick={() => handleStartTest(test)}>
                      Iniciar <ChevronRight size={16} />
                    </button>
                  )}
                </div>
                <p className="test-description">{test.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
