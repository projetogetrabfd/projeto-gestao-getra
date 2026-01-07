const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

const authController = require('../controllers/authController');
const clienteController = require('../controllers/clienteController');
const faturaController = require('../controllers/faturaController');
const servicoController = require('../controllers/servicoController');
const uploadController = require('../controllers/uploadController');
const NotaController = require('../controllers/notaController'); 


// Leitura de PDF 
// ATENÇÃO: Aqui está esperando um campo chamado 'pdf'.
router.post('/upload-nota', upload.single('pdf'), uploadController.lerNotaFiscal);

// Salvar Nota e Fatura (A rota nova)
router.post('/notas', NotaController.criarNota);
router.get('/notas', NotaController.listarNotas); 

// Autenticação
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

// Serviços
router.get('/servicos', servicoController.listar);
router.post('/servicos', servicoController.criar);
router.put('/servicos/:id', servicoController.atualizar);
router.delete('/servicos/:id', servicoController.deletar);

// Exportar TUDO no final (SÓ PODE TER UM DESSE)
module.exports = router;