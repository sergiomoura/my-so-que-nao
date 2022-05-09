const {Usuario, sequelize} = require('../models');


let u = Usuario.build({
    nome: "Sérgio",
    email: "sergio@gmail.com",
    senha: "lalala"
})

u.nAmigos().then(c=>console.log(c));

Usuario.login("usuario1@teste.com", "123456").then(
    x => console.log(x)
)

