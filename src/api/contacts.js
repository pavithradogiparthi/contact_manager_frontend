import axios from 'axios';

const api = axios.create({
    baseURL:"https://contact-manage-backend-1.onrender.com",
})

export default api;