const {Usuario, sequelize} = require('../database/models');

let teste = async () => {
    let usuarios = await Usuario.findAll({include:["publicacoes","amigos"]});
    let usuariosSimplificados = usuarios.map(p=>p.toJSON())
    console.log(usuariosSimplificados[2]);
    sequelize.close();
}

teste();