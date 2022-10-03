const express = require('express');
const UsuariosRouter = require('./routes/UsuariosRouter');
const session = require('express-session');

const app = express();

// Dizendo para o express utilizar o ejs como view engine
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: true
}));

app.use('/', UsuariosRouter);
console.log("Aqui é servidor, meu amigo!")
app.listen(3000,()=>{console.log("Estou escutando na porta 3000")})