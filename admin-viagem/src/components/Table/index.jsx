import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Table = ({ titulos, dados, deleteFunction }) => {
  const [itens, setItens] = useState(dados);

  const handleDelete = async (id) => {
    try {
      await deleteFunction(id);
      const updatedItens = itens.filter((item) => item.id !== id);
      setItens(updatedItens);
    } catch (error) {
      console.error('Erro ao excluir item:', error);
    }
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {titulos.map((titulo, index) => (
              <th key={index}>{titulo}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) =>
                key !== 'id' && key !== 'senha' ? (
                  <td key={key} data-label={key}>
                    {item[key]}
                  </td>
                ) : null
              )}
              <td className="actions-buttons">
                <Link to={`/${item.nome ? 'atualizarCliente' : 'atualizarDestino'}/${item.id}`}>
                  <button className="edit-button">Atualizar</button>
                </Link>
                <button className="delete-button" onClick={() => handleDelete(item.id)}>
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
