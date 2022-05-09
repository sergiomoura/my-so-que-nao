'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let curtidas = [];

    for(let i=1; i<=200; i++){
      curtidas.push(
        {
          id: i,
          usuarios_id: 5 + Math.ceil(i/20),
          publicacoes_id: Math.ceil(Math.random() * 50)
        }
      )
    }

    await queryInterface.bulkInsert('curtidas', curtidas, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('curtidas', null, {});
  }
};
