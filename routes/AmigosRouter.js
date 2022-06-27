const express = require('express');
const AmigosController = require('../controllers/AmigosController');
const router = express.Router();

router.get('/', AmigosController.listar);

module.exports = router;