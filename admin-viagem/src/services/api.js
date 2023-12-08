import axios from "axios";

export const api = axios.create({
    baseURL: "https://agencia-api-z1s4.onrender.com/",
    timeout: 8000,
})
