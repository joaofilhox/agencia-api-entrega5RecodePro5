import React from 'react';
import './style.css';

const QuemSomos = () => {
  return (
    <div className="quem-somos">
      <div className="about-section">
        <h1>Quem Somos</h1>
        <p>Somos uma agência de viagens apaixonada por proporcionar experiências incríveis para nossos clientes.</p>
      </div>
      <div className="team-section">
        <h2>Nossa Equipe</h2>
        <div className="member">
          <img src="link_para_imagem" alt="Nome do membro da equipe" />
          <h3>Nome do Membro</h3>
          <p>Cargo na empresa</p>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
