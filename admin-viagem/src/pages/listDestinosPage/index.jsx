import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import Table from "../../components/Table";

const ListaDestinosPage = () => {
  const [dataFromAPI, setDataFromAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/destinos');
        setDataFromAPI(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const deleteDestino = async (id) => {
    try {
      await api.delete(`/destinos/${id}`);
    } catch (error) {
      console.error('Erro ao excluir destino:', error);
      throw error;
    }
  };

  const titulos = ['País', "Cidade", "Estadio", "FotoURL", "Descrição", "Valor"];

  return (
    <div>
      {dataFromAPI ? (
        <>
          <h2> Listagem de Destinos disponíveis!</h2>
          <Table titulos={titulos} dados={dataFromAPI} deleteFunction={deleteDestino} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
};

export default ListaDestinosPage;
