const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

// Import dos Controllers
const authController = require('../controllers/authController');
const clienteController = require('../controllers/clienteController');
const faturaController = require('../controllers/faturaController');
const servicoController = require('../controllers/servicoController');
const pagamentoController = require('../pagamento/pagamentoController');

// Importante: Usaremos o notaController unificado que criamos antes
const notaController = require('../controllers/notaController'); 

// ROTA DE UPLOAD 
router.post('/notas/upload', upload.single('arquivo'), notaController.upload);

// Outras rotas de notas (Listagem e Delete)
router.get('/notas', notaController.listar);
router.delete('/notas/:id', notaController.deletar);

//  Autenticação 
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Clientes 
router.get('/clientes', clienteController.listar);
router.post('/clientes', clienteController.criar);
router.put('/clientes/:id', clienteController.atualizar); 
router.delete('/clientes/:id', clienteController.deletar);

// Faturas 
router.get('/faturas', faturaController.listar);
router.post('/faturas', faturaController.criar);
router.put('/faturas/:id', faturaController.atualizar); 
router.delete('/faturas/:id', faturaController.deletar); 

//  Serviços 
router.get('/servicos', servicoController.listar);
router.post('/servicos', servicoController.criar);
router.put('/servicos/:id', servicoController.atualizar);
router.delete('/servicos/:id', servicoController.deletar);

//  Pagamento 
router.post('/pagamento/pix', pagamentoController.gerarPix);

module.exports = router;