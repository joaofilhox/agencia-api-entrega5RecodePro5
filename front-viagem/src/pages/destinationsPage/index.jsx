import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './style.css';
import LoadingScreen from '../../../components/loadingScreen/LoadingScreen';

const Destinations = () => {
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

  return (
    <div className="destinations">
      <h1>Destinos disponíveis.</h1>
      <div className="destinations-grid">
        {dataFromAPI ? (dataFromAPI.map((destination) => (
          <div key={destination.id} className="destination">
            <div className="start-div">
              <h3>{`${destination.pais}, ${destination.cidade}`}</h3>
              <img src={destination.fotoUrl} alt={destination.estadio} />
              <h4>{destination.estadio}</h4>
              <p>{destination.descricao}</p>
            </div>

            <div className="end-div">
              <span>{`$${destination.preco}.00`}</span>
              <button className="btn">Reservar já</button>
            </div>
          </div>
        ))) : (<LoadingScreen />) }
      </div>
    </div>
  );
}

export default Destinations;
