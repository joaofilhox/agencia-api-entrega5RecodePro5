import axios from "axios";

export const api = axios.create({
    baseURL: "https://agencia-api-z1s4.onrender.com/",
    timeout: 8000,
})

const chamarApi = async () => {
    try {
        const response = await api.get("clientes"); 
        console.log("Resposta da API:", response.data);
    } catch (error) {
        console.error("Erro ao chamar a API:", error);
    }
};


setInterval(chamarApi, 2 * 60 * 1000);

