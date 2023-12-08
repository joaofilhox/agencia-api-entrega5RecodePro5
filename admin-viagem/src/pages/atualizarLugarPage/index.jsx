import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import { useParams } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css';

const AtualizarLugarPage = () => {
    const { id } = useParams();
  const [lugar, setLugar] = useState({});
  
  const { register, handleSubmit, reset } = useForm({
    defaultValues:lugar,
  });
  
  useEffect(() => {
    const fetchLugar = async () => {
      try {
        const response = await api.get(`/lugares`);
        
        (response.data).forEach(element => {
          if(element.id = id) 
            setLugar(element);
          reset(element)
          });
        
      } catch (error) {
        console.error('Erro ao buscar lugares:', error);
      }
    };
    
    fetchLugar();
  }, [reset]);
  

  const onSubmit = async (formData) => {
    try {
      await api.put(`/lugares/${id}`, formData);
      alert('Lugar atualizado com sucesso!');

    } catch (error) {
      console.error('Erro ao atualizar Lugar:', error);
     
    }
  };

    return (
        <div className="cadastro-container">
            <div className="imagem-container">
            <img src='https://www.melhoresdestinos.com.br/wp-content/uploads/2021/08/melhores-praias-brasil-garapua-3-820x1230.jpg' alt="Lugar" />
            </div>
            <div className="formulario-container">
                <h2>Atualizar Lugar</h2>
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
                        label="Lugar"
                        type="text"
                        placeholder="Digite o lugar"
                        register={register}
                        name="lugar"
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

export default AtualizarLugarPage;
