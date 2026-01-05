const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Pasta temporária

// --- CONTROLLERS ---
const authController = require('../controllers/authController');
const clienteController = require('../controllers/clienteController');
const faturaController = require('../controllers/faturaController');
const servicoController = require('../controllers/servicoController');
const uploadController = require('../controllers/uploadController');
const NotaController = require('../controllers/notaController'); // <--- Adicionei de volta

// --- ROTAS ---

// 1. Leitura de PDF (Mantive como você disse que funcionava)
// ATENÇÃO: Aqui está esperando um campo chamado 'pdf'.
// Se no front você estiver enviando como 'file', mude para upload.single('file')
router.post('/upload-nota', upload.single('pdf'), uploadController.lerNotaFiscal);

// 2. Salvar Nota e Fatura (A rota nova)
router.post('/notas', NotaController.criarNota);
// router.get('/notas', NotaController.listarNotas); // Descomente se tiver criado o listar

// 3. Autenticação
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);

// 4. Clientes
router.get('/clientes', clienteController.listar);
router.post('/clientes', clienteController.criar);
router.put('/clientes/:id', clienteController.atualizar); 
router.delete('/clientes/:id', clienteController.deletar);

// 5. Faturas
router.get('/faturas', faturaController.listar);
router.post('/faturas', faturaController.criar);
router.put('/faturas/:id', faturaController.atualizar); 
router.delete('/faturas/:id', faturaController.deletar); 

// 6. Serviços
router.get('/servicos', servicoController.listar);
router.post('/servicos', servicoController.criar);
router.put('/servicos/:id', servicoController.atualizar);
router.delete('/servicos/:id', servicoController.deletar);

// Exportar TUDO no final (SÓ PODE TER UM DESSE)
module.exports = router;