import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './style.css';

const Home = () => {
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

  const destinos = dataFromAPI && dataFromAPI.slice(0, 4)

  return (
    <div className="home">
      <div className="hero">
        <div className="oxe">
          <h1>Bem-vindo à Voa e Vibra</h1>
          <p>Escolha qual jogo você quer assistir pessoalmente já</p>
          <a href="#destaques" className="btn">Ver Destinos em destaques</a>
        </div>
      </div>
      <div id="destaques" className="packages">
        <h2>Destaques</h2>

        {destinos && destinos.map((destino, index) => (
          <div key={index} className="package">
            <div className="destino">
              <h3>{`${destino.pais}, ${destino.cidade} (${destino.estadio})`}</h3>
              <img src={destino.fotoUrl} alt={destino.estadio} />
              <p>{destino.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
