// ARQUIVO: backend/index.js
const express = require('express');
const cors = require('cors'); // 1. Importar o CORS
const routes = require('./src/routes'); // Suas rotas

const app = express();
app.use(cors()); 

app.use(express.json());

app.use(express.urlencoded({ extended: true })); // Permite ler dados de formulários padrão
app.use(routes); 

const PORT = 2000;
app.listen(PORT, () => {
  console.log(` Servidor rodando na porta http://localhost:${PORT}`);
});