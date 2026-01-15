import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

// Este código carimba todas as suas chamadas futuras automaticamente
api.interceptors.request.use((config) => {
  const data = localStorage.getItem('usuario');
  
  if (data) {
    const usuario = JSON.parse(data);
    // Aqui pegamos o que você salvou no login e mandamos para o backend
    config.headers['x-user-role'] = usuario.role;
    config.headers['x-user-id'] = usuario.id;
  }
  
  return config;
});

export default api;