import React, { useState } from 'react';
import { BookOpen, ShieldCheck, Brain, Zap, Users, Activity, Heart, ShieldAlert, ChevronDown, ChevronUp } from 'lucide-react';
import { Header } from '../shared/Header';
import './TherapyInfoScreen.css';

export const TherapyInfoScreen = () => {
  const [expandedSection, setExpandedSection] = useState('professionalism');
  const [expandedTherapy, setExpandedTherapy] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleTherapy = (id) => {
    setExpandedTherapy(expandedTherapy === id ? null : id);
  };

  const therapies = [
    {
      id: 'cbt',
      title: 'Terapia Cognitivo-Conductual (TCC)',
      icon: <Brain size={24} />,
      characteristics: 'Enfoque estructurado, basado en evidencia, de corta duración, orientado al presente.',
      focus: 'Identificar y modificar patrones de pensamiento y comportamiento disfuncionales.',
      bestFor: 'Depresión, ansiedad, fobias, TOC, trastornos alimentarios.'
    },
    {
      id: 'psychoanalysis',
      title: 'Psicoanálisis y Psicodinámica',
      icon: <Activity size={24} />,
      characteristics: 'Menos estructurada, de mayor duración, profunda y reflexiva.',
      focus: 'Explorar el inconsciente, experiencias tempranas de la niñez y conflictos internos.',
      bestFor: 'Patrones repetitivos, traumas profundos, crisis existenciales.'
    },
    {
      id: 'humanistic',
      title: 'Terapia Humanista / Gestalt',
      icon: <Heart size={24} />,
      characteristics: 'Centrada en el "aquí y ahora", empatía, autoconocimiento.',
      focus: 'El potencial humano, la autoaceptación y la responsabilidad personal.',
      bestFor: 'Baja autoestima, búsqueda de sentido, problemas de relación.'
    },
    {
      id: 'systemic',
      title: 'Terapia Sistémica',
      icon: <Users size={24} />,
      characteristics: 'Enfoque relacional y contextual.',
      focus: 'Las dinámicas y patrones de comunicación dentro de los sistemas (familia, pareja).',
      bestFor: 'Conflictos familiares, problemas de pareja, trastornos alimentarios en adolescentes.'
    },
    {
      id: 'dbt',
      title: 'Terapia Dialéctica Conductual (DBT)',
      icon: <ShieldAlert size={24} />,
      characteristics: 'Combina estrategias de TCC con aceptación y mindfulness.',
      focus: 'Regulación emocional, tolerancia al malestar y efectividad interpersonal.',
      bestFor: 'Trastorno Límite de la Personalidad (TLP), autolesiones, ideación suicida.'
    },
    {
      id: 'emdr',
      title: 'EMDR (Desensibilización)',
      icon: <Zap size={24} />,
      characteristics: 'Uso de estimulación bilateral (movimientos oculares).',
      focus: 'Reprocesar recuerdos traumáticos para reducir su carga emocional.',
      bestFor: 'Trastorno de Estrés Postraumático (TEPT), traumas específicos.'
    },
    {
      id: 'psychiatry',
      title: 'Psiquiatría y Psicofarmacología',
      icon: <ShieldCheck size={24} />,
      characteristics: 'Tratamiento médico, suele combinarse con psicoterapia.',
      focus: 'Corregir desbalances neuroquímicos a través de medicamentos.',
      bestFor: 'Depresión mayor, esquizofrenia, trastorno bipolar, trastornos graves de ansiedad.'
    }
  ];

  return (
    <div className="screen-container therapy-info-screen">
      <Header title="Guía Profesional" showBack={false} />

      <div className="info-content">
        <p className="intro-text">
          Conocer cómo trabajan los profesionales de la salud mental te ayuda a tomar decisiones informadas sobre tu bienestar. 
          Aquí te presentamos una guía sobre el profesionalismo y los diferentes métodos terapéuticos.
        </p>

        <section className={`info-section ${expandedSection === 'professionalism' ? 'expanded' : ''}`}>
          <button className="section-header" onClick={() => toggleSection('professionalism')}>
            <div className="header-title">
              <ShieldCheck size={24} color="var(--color-accent-cable)" />
              <h2>Profesionalismo en Salud Mental</h2>
            </div>
            {expandedSection === 'professionalism' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expandedSection === 'professionalism' && (
            <div className="section-body">
              <p>
                La psicología y la psiquiatría son disciplinas científicas regidas por estrictos códigos éticos. Un profesional de la salud mental se caracteriza por:
              </p>
              <ul className="professionalism-list">
                <li><strong>Confidencialidad:</strong> Tu información está protegida por secreto profesional, salvo riesgo inminente de vida.</li>
                <li><strong>Práctica Basada en Evidencia:</strong> Utilizan métodos que han demostrado eficacia científica.</li>
                <li><strong>Ausencia de Juicio:</strong> Un espacio seguro donde puedes expresarte sin temor a ser juzgado.</li>
                <li><strong>Formación Continua:</strong> Los profesionales se actualizan constantemente en los últimos avances científicos.</li>
                <li><strong>Límites Terapéuticos:</strong> Mantienen una relación estrictamente profesional para proteger el proceso terapéutico.</li>
              </ul>
              <div className="warning-box">
                <ShieldAlert size={16} />
                <span>Si sientes que un profesional vulnera estos principios, tienes derecho a buscar una segunda opinión o denunciar ante el colegio profesional correspondiente.</span>
              </div>
            </div>
          )}
        </section>

        <section className={`info-section ${expandedSection === 'methods' ? 'expanded' : ''}`}>
          <button className="section-header" onClick={() => toggleSection('methods')}>
            <div className="header-title">
              <BookOpen size={24} color="var(--color-accent-cable)" />
              <h2>Métodos Terapéuticos</h2>
            </div>
            {expandedSection === 'methods' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
          
          {expandedSection === 'methods' && (
            <div className="section-body">
              <p className="methods-intro">
                Existen diferentes enfoques (corrientes) en psicoterapia. Ninguno es "mejor" que otro en términos absolutos, pero algunos son más efectivos para problemáticas específicas.
              </p>
              
              <div className="therapies-list">
                {therapies.map(therapy => (
                  <div key={therapy.id} className={`therapy-card ${expandedTherapy === therapy.id ? 'expanded' : ''}`}>
                    <button className="therapy-header" onClick={() => toggleTherapy(therapy.id)}>
                      <div className="therapy-title-row">
                        <span className="therapy-icon">{therapy.icon}</span>
                        <h3>{therapy.title}</h3>
                      </div>
                      {expandedTherapy === therapy.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    
                    {expandedTherapy === therapy.id && (
                      <div className="therapy-body">
                        <div className="therapy-detail">
                          <strong>Características:</strong> {therapy.characteristics}
                        </div>
                        <div className="therapy-detail">
                          <strong>Foco:</strong> {therapy.focus}
                        </div>
                        <div className="therapy-detail highlight">
                          <strong>Ideal para:</strong> {therapy.bestFor}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
