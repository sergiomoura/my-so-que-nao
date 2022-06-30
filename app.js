var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var UsuariosRouter = require('./routes/UsuariosRouter');

var app = express();

//Server config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/v1/usuarios', UsuariosRouter);

module.exports = app;
