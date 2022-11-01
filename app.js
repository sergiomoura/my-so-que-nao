// importar o express
const express = require('express');
const UsuariosRouter = require('./routers/UsuariosRouter');

// criar o servidor
const app = express();

// Middleware para ter req.body
app.use(express.urlencoded({ extended: false }));

// definir as rotas
app.use('/usuarios', UsuariosRouter);

// por servidor para rodar
app.listen(3000, ()=>{console.log("Servidor rodando na porta 3000")});