const {Publicacao, sequelize} = require('../models')

//Para trazer os dados dos relacionamentos, será necessário incluir um 2º parâmetro na consulta, ou seja, para trazer os dados do usuário, temos que realizar as associações nas models de Usuario e Publicao e no arquivo de teste que for realizar a consulta.

Publicacao.findByPk(2, {include:["autor", "curtidores"]}).then(result => { 
    console.log(result.toJSON());
    sequelize.close();
})
