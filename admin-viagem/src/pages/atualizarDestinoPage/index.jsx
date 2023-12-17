import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/button';
import './style.css';

const AtualizarDestinoPage = () => {
    const { id } = useParams();
  const [destino, setDestino] = useState({});
  
  const { register, handleSubmit, reset } = useForm({
    defaultValues:destino,
  });
  
  useEffect(() => {
    const fetchDestino = async () => {
      try {
        const response = await api.get(`/destinos`);
        
        (response.data).forEach(element => {
          if(element.id = id) 
            setDestino(element);
          reset(element)
          });
        
      } catch (error) {
        console.error('Erro ao buscar Destino:', error);
      }
    };
    
    fetchDestino();
  }, [reset]);
  

  const onSubmit = async (formData) => {
    try {
      await api.put(`/destinos/${id}`, formData);
      console.log(destino);
      alert('Destino atualizado com sucesso!');

    } catch (error) {
      console.error('Erro ao atualizar Destino:', error);
     
    }
  };

    return (
        <div className="cadastro-container">
            <div className="imagem-container">
            <img src='https://www.dicaseducacaofisica.info/wp-content/uploads/2023/04/maiores-estadios-futebol-mundo.webp' alt="Destino" />
            </div>
            <div className="formulario-container">
                <h2>Atualizar Destino</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        label="País"
                        type="text"
                        placeholder="Digite o País"
                        register={register}
                        name="pais"
                    />
                    <Input
                        label="Cidade"
                        type="text"
                        placeholder="Digite a cidade"
                        register={register}
                        name="cidade"
                    />
                    <Input
                        label="Estadio"
                        type="text"
                        placeholder="Digite o estadio de futebol"
                        register={register}
                        name="estadio"
                    />
                    <Input
                        label="URL da Foto"
                        type="url"
                        placeholder="Cole a URL da foto"
                        register={register}
                        name="fotoUrl"
                    />
                    <Input
                        label="Valor"
                        type="text"
                        placeholder="Valor do Destino"
                        register={register}
                        name="preco"
                    />
                    <Input
                        label="Descrição"
                        type="text"
                        placeholder="Digite a descrição"
                        register={register}
                        name="descricao"
                    />
                    <Button type="submit">Atualizar</Button>
                </form>
            </div>
        </div>
    );
};

export default AtualizarDestinoPage;
