import axios from "axios";

export const baseURL = 'http://localhost:5555'
export const instance = axios.create({
    baseURL: baseURL
})