const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');

const UsuariosRouter = express.Router();

UsuariosRouter.get('/', UsuariosController.index);
UsuariosRouter.get('/create', UsuariosController.create);
UsuariosRouter.post('/store', UsuariosController.store);

module.exports = UsuariosRouter;