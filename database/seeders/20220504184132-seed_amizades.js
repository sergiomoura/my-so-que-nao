'use strict';

module.exports = {

  async up (queryInterface, Sequelize) {
    
    let amizades = [];
    let totUsuarios = 20;
    let i = 1;
    let chanceDeRecusarAmizade = 0.4;

    for(let idUsuario = 1; idUsuario <= totUsuarios; idUsuario++){
      
      for(let idAmigo = idUsuario + 1 ; idAmigo <= idUsuario + 7; idAmigo++ ){

        amizades.push(
          {
            id: i++,
            usuarios_id1: idUsuario,
            usuarios_id2: idAmigo <= totUsuarios ? idAmigo :  idAmigo - totUsuarios,
            aceita: (Math.random() > chanceDeRecusarAmizade)
          }
        )
      }
    }

    await queryInterface.bulkInsert('amizades',amizades, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('amizades', null, {});
    
  }
};
