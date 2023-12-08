import React from 'react';

const LugaresComponent = ({ lugares }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {lugares.map((lugar) => (
        <div key={lugar.id} className="card">
          <img
            src={lugar.fotoUrl}
            alt={lugar.lugar}
            className="image"
          />
          <h3 className="title">
            {lugar.lugar} - {lugar.cidade}, {lugar.pais}
          </h3>
          <p className="description">{lugar.descricao}</p>
          <p className="price">Preço: {lugar.preco}</p>
        </div>
      ))}
    </div>
  );
};

export default LugaresComponent;
