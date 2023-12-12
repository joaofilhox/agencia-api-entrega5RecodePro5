import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>Sobre Nós</h2>
          <p>Texto sobre a agência de viagens e seus serviços.</p>
        </div>
        <div className="footer-section links">
          <h2>Links Rápidos</h2>
          <ul>
            <li><a href="#">Pacotes</a></li>
            <li><a href="#">Destinos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contato</h2>
          <p>Email: exemplo@example.com</p>
          <p>Telefone: (00) 1234-5678</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Agência de Viagens. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
