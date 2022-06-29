const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const UsuariosRouter = require('./routes/UsuariosRouter');
const AmigosRouter = require('./routes/AmigosRouter');
const VerificaExistenciaDeToken = require('./middlewares/VerificaExistenciaDeToken');
const ValidarToken = require('./middlewares/ValidarToken');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/api/v1/usuarios', UsuariosRouter);
app.use('/api/v1/amigos', VerificaExistenciaDeToken, ValidarToken, AmigosRouter);

module.exports = app;
