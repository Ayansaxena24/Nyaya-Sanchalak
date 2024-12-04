import axios from 'axios';
// const BASE_URL = 'http://localhost:8000/api';
const BASE_URL = process.env.REACT_APP_BACKEND_API;

export default axios.create({ 
    baseURL : BASE_URL
});


export const axiosPrivate = axios.create({
    baseURL : BASE_URL,
    headers : { 'Content-Type' : 'application/json'},
    withCredentials : true
});