const {Publicacao, sequelize} = require('../database/models');

let teste = async () => {
    let publicacoes = await Publicacao.findAll({include:"autor"});
    console.log(publicacoes.map(p => p.toJSON()));
    sequelize.close();
}

teste();