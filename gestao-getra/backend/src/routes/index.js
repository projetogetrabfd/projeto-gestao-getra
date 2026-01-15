const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

// CORREÇÃO: Alterado de 'Auth' para 'mockAuth' para bater com o uso abaixo
const mockAuth = require('../middlewares/mockAuth'); 
const roleMiddleware = require('../middlewares/roleMiddleware');
const ROLES = require('../config/roles');

// Controllers
const authController = require('../controllers/authController');
const clienteController = require('../controllers/clienteController');
const faturaController = require('../controllers/faturaController');
const servicoController = require('../controllers/servicoController');
const uploadController = require('../controllers/uploadController');
const NotaController = require('../controllers/notaController'); 
const pagamentoController = require('../pagamento/pagamentoController');

/**
 * ROTAS PÚBLICAS
 */
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// Aplica o middleware em todas as rotas abaixo
router.use(mockAuth); 

/**
 * ROTAS PROTEGIDAS POR ROLE
 */

// CLIENTE
router.post('/upload-nota', roleMiddleware([ROLES.CLIENTE]), upload.single('pdf'), uploadController.lerNotaFiscal);
router.post('/notas', roleMiddleware([ROLES.CLIENTE]), NotaController.criarNota);
router.get('/notas', roleMiddleware([ROLES.CLIENTE]), NotaController.listarNotas);
router.post('/pagamento/pix', roleMiddleware([ROLES.CLIENTE]), pagamentoController.gerarPix);

// FINANCEIRO
router.get('/clientes', roleMiddleware([ROLES.FINANCEIRO]), clienteController.listar);
router.post('/clientes', roleMiddleware([ROLES.FINANCEIRO]), clienteController.criar);
router.put('/clientes/:id', roleMiddleware([ROLES.FINANCEIRO]), clienteController.atualizar);
router.delete('/clientes/:id', roleMiddleware([ROLES.FINANCEIRO]), clienteController.deletar);

router.get('/faturas', roleMiddleware([ROLES.FINANCEIRO]), faturaController.listar);
router.post('/faturas', roleMiddleware([ROLES.FINANCEIRO]), faturaController.criar);
router.put('/faturas/:id', roleMiddleware([ROLES.FINANCEIRO]), faturaController.atualizar);
router.delete('/faturas/:id', roleMiddleware([ROLES.FINANCEIRO]), faturaController.deletar);

// ADMIN/DIRETORIA
router.get('/servicos', roleMiddleware([ROLES.ADMIN]), servicoController.listar);
router.post('/servicos', roleMiddleware([ROLES.ADMIN]), servicoController.criar);
router.put('/servicos/:id', roleMiddleware([ROLES.ADMIN]), servicoController.atualizar);
router.delete('/servicos/:id', roleMiddleware([ROLES.ADMIN]), servicoController.deletar);

module.exports = router;