const {Publicacao, sequelize} = require('../database/models');
Publicacao.findAll({include:'autor', attributes:['id','texto']}).then(
    data => {
        data.forEach(d => console.log(d.toJSON()));
        sequelize.close();
    }
)

