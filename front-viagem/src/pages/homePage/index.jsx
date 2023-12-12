import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Bem-vindo à Voa e Vibra</h1>
        <p>Escolha qual jogo você quer assistir pessoalmente já</p>
        <a href="#pacotes" className="btn">Ver Pacotes em destaques</a>
      </div>
      <div id="pacotes" className="packages">
        <h2>Destaques</h2>
        <div className="package">
          <h3>Pacote 1</h3>
          <p>Descrição do Pacote 1</p>
        </div>
        <div className="package">
          <h3>Pacote 2</h3>
          <p>Descrição do Pacote 2</p>
        </div>
        <div className="package">
          <h3>Pacote 2</h3>
          <p>Descrição do Pacote 2</p>
        </div>
        <div className="package">
          <h3>Pacote 2</h3>
          <p>Descrição do Pacote 2</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
