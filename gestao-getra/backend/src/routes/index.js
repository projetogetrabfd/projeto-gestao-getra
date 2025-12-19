const express = require('express');
const router = express.Router();

// --- 1. Importar o Controller de Login (Que acabamos de criar) ---
const authController = require('../controllers/authController');

// --- 2. Seus 10 Controllers (Verifique se os nomes dos arquivos estão EXATOS) ---
const clienteController = require('../controllers/clienteController');
const usuarioController = require('../controllers/usuarioController');
const servicoController = require('../controllers/servicoController');
const faturaController = require('../controllers/faturaController');
const parceiroController = require('../controllers/parceiroController');
const perfilController = require('../controllers/perfilController');
const recorrenciaController = require('../controllers/recorrenciaController');
const contaPagarController = require('../controllers/contaPagarController');
const notaFiscalController = require('../controllers/notaFiscalController');
const transacaoController = require('../controllers/transacaoController');

// --- 3. Rotas de Autenticação ---
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// --- 4. Suas Rotas do CRUD ---
router.get('/clientes', clienteController.listar);
router.post('/clientes', clienteController.criar);
router.put('/clientes/:id', clienteController.atualizar); 
router.delete('/clientes/:id', clienteController.deletar);
router.get('/usuarios', usuarioController.listar);
router.get('/servicos', servicoController.listar);
router.get('/faturas', faturaController.listar);
router.get('/parceiros', parceiroController.listar);
router.get('/perfis', perfilController.listar);
router.get('/recorrencias', recorrenciaController.listar);
router.get('/contas-pagar', contaPagarController.listar);
router.get('/notas-fiscais', notaFiscalController.listar);
router.get('/transacoes', transacaoController.listar);

module.exports = router;