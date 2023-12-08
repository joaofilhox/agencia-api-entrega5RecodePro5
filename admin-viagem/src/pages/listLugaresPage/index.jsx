import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import Table from "../../components/Table";

const ListLugaresPage = () => {
  const [dataFromAPI, setDataFromAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/lugares');
        setDataFromAPI(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const deleteLugar = async (id) => {
    try {
      await api.delete(`/lugares/${id}`);
    } catch (error) {
      console.error('Erro ao excluir lugar:', error);
      throw error;
    }
  };

  const titulos = ['País', "Cidade", "Lugar", "FotoURL", 'Descrição', "Valor"];

  return (
    <div>
      {dataFromAPI ? (
        <>
          <h2> Listagem de lugares disponíveis!</h2>
          <Table titulos={titulos} dados={dataFromAPI} deleteFunction={deleteLugar} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
};

export default ListLugaresPage;
