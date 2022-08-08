// Importar o express
const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');
const verificaSeLogado = require('../middlewares/verificaSeLogado');

// Criar o roteador
const router = express.Router();

// Definir a rota get para /create
// Essa deve direcionar a requisição para UsuariosController.create (ainda inexiste)
router.get(
    '/create',
    UsuariosController.create
)

router.post(
    '/create',
    UsuariosController.store
)

router.get(
    '/home',
    verificaSeLogado,
    UsuariosController.mostrarHome
)

// Expostar o roteador e UTILIZÁ-LO no app.js
module.exports = router;