import axios, { AxiosInstance } from "axios";

export const client:AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {Accept : 'application/json', "Content-Type" : 'application/json'}   
})
