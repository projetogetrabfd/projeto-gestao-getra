const express = require('express');
const routes = require('./src/routes'); // Importa o arquivo que você acabou de criar

const app = express();
const port = 3000; 

app.use(express.json()); // Essencial para receber dados JSON
app.use('/api', routes); // Prefixa todas as suas rotas com /api

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});