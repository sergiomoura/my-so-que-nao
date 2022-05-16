const {Publicacao, sequelize} = require('../models');

Publicacao.findByPk(2, {include:["autor","curtidores"]}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)


