const {Usuario, sequelize} = require('../database/models');

Usuario.findAll({include:'publicacoes'}).then(
    arrayDeUsuarios => {
        arrayDeUsuarios.forEach(u=> console.log(u.toJSON()));
        sequelize.close();
    }
);