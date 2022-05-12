import axios from "axios";

const URL = 'http://localhost:5555'
export const instance = axios.create({
    baseURL: URL
})