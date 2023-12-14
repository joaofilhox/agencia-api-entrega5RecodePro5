import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './style.css';

const Destinos = () => {

  const [dataFromAPI, setDataFromAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/destinos');
        setDataFromAPI(response.data);
        console.log();
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="destinos">
      <h1>Destinos Futebolístico</h1>
      <div className="destinos-grid">
        {dataFromAPI && dataFromAPI.map((destino, index) => (
          <div key={index} className="destino">
            <div className="div-comeco">
            <h3>{`${destino.pais}, ${destino.cidade}`}</h3>
            <img src={destino.fotoUrl} alt={destino.estadio} />
            <h4>{destino.estadio}</h4>
            <p>{destino.descricao}</p>
            </div>
            
            <div className="div-final">
              <span>{`R$ ${destino.preco},00`}</span>
            <button className="btn">Comprar</button>
             
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinos;
