import React, { useState, useEffect } from 'react';
import { FaRegFutbol } from "react-icons/fa";
import { api } from '../../services/api';
import './style.css';
import LoadingScreen from '../../../components/loadingScreen/LoadingScreen';

const Home = () => {
  const [dataFromAPI, setDataFromAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/destinos');
        setDataFromAPI(response.data);
      } catch (error) {
        console.error('Error fetching data from the API:', error);
      }
    };
    fetchData();
  }, []);

  const destinations = dataFromAPI && dataFromAPI.slice(0, 4);

  return (
    <div className="home">
      <div className="hero">
        <div className="overlay">
          <h1>Bem-vindo à Voa e Vibra</h1>
          <p>Escolha qual jogo você quer assistir pessoalmente já</p>
          <a href="#destaques" className="btn">Ver Destinos em destaques</a>
        </div>
      </div>
      <div id="#destaques" className="packages">
        <h2><FaRegFutbol /> Destaques <FaRegFutbol /></h2>
        {destinations ? (destinations.map((destination) => (
          <div key={destination.id} className="package">
            <div className="destination">
              <h3>{`${destination.pais}, ${destination.cidade} (${destination.estadio})`}</h3>
              <img src={destination.fotoUrl} alt={destination.estadio} />
              <p>{destination.descricao}</p>
            </div>
          </div>
        ))) : (<LoadingScreen />)}
      </div>
    </div>
  );
}

export default Home;
