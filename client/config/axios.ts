import axios from "axios";

const baseUrl: string = 'https://blinkr-url.onrender.com';
const instance = axios.create({
    baseURL : baseUrl
})

export default instance