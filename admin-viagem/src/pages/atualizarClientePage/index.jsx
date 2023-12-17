import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/button';
import { useForm } from 'react-hook-form';
import './style.css';

const AtualizarClientePage = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState({});

  const { register, handleSubmit, reset } = useForm({
    defaultValues: cliente,
  });

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await api.get(`/clientes`);

        (response.data).forEach(element => {
          if (element.id = id)
            setCliente(element);
          reset(element)
        });

      } catch (error) {
        console.error('Erro ao buscar cliente:', error);
      }
    };

    fetchCliente();
  }, [reset]);


  const onSubmit = async (formData) => {
    try {
      await api.put(`/clientes/${id}`, formData);
      alert('Cliente atualizado com sucesso!');
     

    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
     
    }
  };

  return (
    <div className="cadastro-container">
      <div className="imagem-container">
        <img src='https://png.pngtree.com/thumb_back/fh260/background/20220604/pngtree-soccer-passion-executive-active-person-photo-image_8359110.jpg' alt="Cliente" />
      </div>
      <div className="formulario-container">
        <h2>Atualizar Cliente</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite o nome"
            register={register}
            name="nome"

          />

          <Input
            label="CPF"
            type="text"
            placeholder="Digite seu CPF"
            register={register}
            name="cpf"
          />
          <Input
            label="CEP"
            type="text"
            placeholder="Digite seu CEP"
            register={register}
            name="endereco"
          />
          <Input
            label="Telefone"
            type="text"
            placeholder="Digite seu telefone"
            register={register}
            name="telefone"
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite um e-mail válido"
            register={register}
            name="email"
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite uma senha"
            register={register}
            name="senha"
          />
          <Button type="submit">Atualizar</Button>
        </form>
      </div>
    </div>
  );
};

export default AtualizarClientePage;
