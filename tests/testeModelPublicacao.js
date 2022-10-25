const {Publicacao, sequelize} = require('../database/models');
Publicacao.findByPk(2,{include:'autor'}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)