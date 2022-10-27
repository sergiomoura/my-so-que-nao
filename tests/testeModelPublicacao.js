const {Publicacao, sequelize} = require('../database/models');
Publicacao.findByPk(33, {include:['autor', 'curtidores'], attributes:['id','texto']}).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)

