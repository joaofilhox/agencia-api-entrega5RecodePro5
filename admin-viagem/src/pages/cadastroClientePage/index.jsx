import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/button';
import './style.css';

const cadastroClientePage = () => {
    const { register, handleSubmit } = useForm();

    const submit = async (formData) => {
        console.log(formData)
        try {
            const response = await api.post('/clientes', formData);
            console.log('Cliente cadastrado:', response.data);
            alert('Cliente cadastrado com sucesso!');

        } catch (error) {
            console.error('Erro ao cadastrar cliente:', error);

            if (error.response) {

                alert(`Erro ao cadastrar cliente: ${error.response.data.message}`);
            } else if (error.request) {

                alert('Erro ao realizar a solicitação. Por favor, tente novamente mais tarde.');
            } else {

                alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
            }
        }
    }
    return (
        <div className="cadastro-container">
            <div className="imagem-container">
                <img src='https://png.pngtree.com/thumb_back/fh260/background/20220604/pngtree-soccer-passion-executive-active-person-photo-image_8359110.jpg' alt="Cliente" />
            </div>
            <div className="formulario-container">
                <h2>Cadastro de Cliente</h2>
                <form onSubmit={handleSubmit(submit)}>
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
                    <Button type="submit">Cadastrar</Button>
                </form>
            </div>
        </div>
    );
};

export default cadastroClientePage;
