import React from 'react';
import './style.css';

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Carregando...</p>
    </div>
  );
};

export default LoadingScreen;
