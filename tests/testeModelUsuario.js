const { Usuario } = require('../models');

Usuario.findAll().then(result => console.log(result));