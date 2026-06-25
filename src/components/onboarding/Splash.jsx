import React, { useState, useEffect } from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import './Splash.css';

export const Splash = ({ onStart }) => {
  const [step, setStep] = useState('intro'); // 'intro' o 'login'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Simulación de pantalla de carga
  useEffect(() => {
    if (step === 'intro') {
      const timer = setTimeout(() => {
        setStep('login');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulación de login encriptado validando credenciales crudas localmente
    const expectedUser = 'admin';
    const expectedPass = 'lautis';
    
    if (username === expectedUser && password === expectedPass) {
      onStart();
    } else {
      setError('Credenciales incorrectas');
    }
  };

  if (step === 'intro') {
    return (
      <div className="screen-container splash-screen centered">
        <div className="logo-mark intro-anim">
          <div className="logo-c-outer spin"></div>
          <div className="logo-c-inner reverse-spin"></div>
          <div className="logo-glow-center pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen-container splash-screen">
      <div className="splash-content">
        <div className="logo-container">
          <div className="logo-mark">
            <div className="logo-c-outer"></div>
            <div className="logo-c-inner"></div>
            <div className="logo-glow-center"></div>
          </div>
          <h1 className="logo-text">CABLE</h1>
        </div>
        
        <div className="slogan-container">
          <p className="tagline">Tu salud mental.</p>
          <p className="tagline">Tu historial.</p>
          <p className="tagline highlight">Un cable a la claridad.</p>
        </div>
      </div>

      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Usuario" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Contraseña segura" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <Lock size={16} className="input-icon" />
          </div>
          
          {error && <span className="login-error">{error}</span>}
          
          <button type="submit" className="btn-primary login-btn mt-16">
            Iniciar sesión protegida <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};
