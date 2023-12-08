import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import Table from "../../components/Table";

const listClientesPage = () => {
  const [dataFromAPI, setDataFromAPI] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/clientes');
        setDataFromAPI(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const deleteCliente = async (id) => {
    try {
      await api.delete(`/clientes/${id}`);
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      throw error;
    }
  };

  const titulos = ["Nome", "CPF", "CEP", "Telefone", "E-mail"];

  return (
    <div>
      {dataFromAPI ? (
        <>
          <h2> Listagem de clientes disponíveis!</h2>
          <Table titulos={titulos} dados={dataFromAPI} deleteFunction={deleteCliente} />
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
};

export default listClientesPage;
