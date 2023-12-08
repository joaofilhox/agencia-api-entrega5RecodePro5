import React from 'react';
import { useForm } from 'react-hook-form';
import { api } from '../../services/api';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css';

const CadastroLugarPage = () => {

    const { register, handleSubmit } = useForm();

    const submit = async (formData) => {
        console.log(formData)
        try {
            const response = await api.post('/lugares', formData);
            console.log('Lugar cadastrado:', response.data);

            alert('Lugar cadastrado com sucesso!');


        } catch (error) {
            console.error('Erro ao cadastrar Lugar:', error);

            if (error.response) {

                alert(`Erro ao cadastrar Lugar: ${error.response.data.message}`);
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
                <img src='https://www.melhoresdestinos.com.br/wp-content/uploads/2021/08/melhores-praias-brasil-garapua-3-820x1230.jpg' alt="Lugar" />
            </div>
            <div className="formulario-container">
                <h2>Cadastro de Lugar</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        label="País"
                        type="text"
                        placeholder="Digite o país"
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
                    <Button type="submit">Cadastrar</Button>
                </form>
            </div>
        </div>
    );
};

export default CadastroLugarPage;
