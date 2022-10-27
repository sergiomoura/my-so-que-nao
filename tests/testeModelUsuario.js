const {Usuario, sequelize} = require('../database/models');


async function levantarUsuarios(){

    let arrayDeUsuarios = await Usuario.findAll({include:'publicacoes'});
    arrayDeUsuarios.forEach(u => console.log(u.toJSON()));
    sequelize.close();
}

levantarUsuarios();
