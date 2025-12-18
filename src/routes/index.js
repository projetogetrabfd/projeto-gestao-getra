const express = require('express');
const router = express.Router();

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

router.get('/clientes', clienteController.listar);
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