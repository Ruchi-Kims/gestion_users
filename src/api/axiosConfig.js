import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/users', // adapte cette URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
