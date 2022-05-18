var express = require('express');
var router = express.Router();
const UsuariosController = require('../controllers/UsuariosController');

/* GET users listing. */
router.post('/', UsuariosController.registrar);
router.get('/', UsuariosController.buscar)

module.exports = router;
