import React from 'react';
import './style.css';

const Destinos = () => {

  const destinos = [
    {
      nome: 'Paris, França',
      descricao: 'Explore a cidade do amor e sua rica cultura.',
      imagem: 'link_para_imagem_paris'
    },
    {
      nome: 'Tóquio, Japão',
      descricao: 'Descubra a cidade futurista e tradicional ao mesmo tempo.',
      imagem: 'link_para_imagem_toquio'
    },
  ];

  return (
    <div className="destinos">
      <h1>Destinos</h1>
      <div className="destinos-grid">
        {destinos.map((destino, index) => (
          <div key={index} className="destino">
            <img src={destino.imagem} alt={destino.nome} />
            <h3>{destino.nome}</h3>
            <p>{destino.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinos;
