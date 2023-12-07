import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClienteCRUD = () => {
  const [lugares, setLugares] = useState([]);

  useEffect(() => {
    carregarLugares();
  }, []);

  const carregarLugares = async () => {
    try {
      const response = await axios.get('https://agencia-api-z1s4.onrender.com/lugares');
      setLugares(response.data);
    } catch (error) {
      console.error('Erro ao carregar lugares:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Lugares</h1>
      <ul className="list-group mb-4">
        {lugares.map((lugar) => (
          <li key={lugar.id} className="list-group-item">
            <h3>{lugar.lugar} - {lugar.cidade}, {lugar.pais}</h3>
            <img src={lugar.fotoUrl} alt={lugar.lugar} className="img-fluid" />
            <p>{lugar.descricao}</p>
            <p>Preço: {lugar.preco}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClienteCRUD;
