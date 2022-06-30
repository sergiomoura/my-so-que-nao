const {squelize, Usuario, sequelize} = require('../models');

sequelize.query("SELECT * FROM usuarios").then(result => console.log(result));

//Seria a mesma coisa que:
// Usuario.findAll();

//Outra maneira de usar raw queries:
// const sequelize = require('sequelize');
