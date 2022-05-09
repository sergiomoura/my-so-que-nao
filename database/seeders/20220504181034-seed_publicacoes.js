'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let publicacoes = [];
    for (let i = 1; i <= 50; i++) {
      publicacoes.push(
        {
          id: i,
          texto: `Um texto grandioso e aleatório ${i}`,
          usuarios_id: Math.ceil(i/5),
          imagem: `post_${i}.jpg`,
          createdAt: new Date((new Date()).getTime() + i*1000000)
        }
      )
    }

    await queryInterface.bulkInsert('publicacoes', publicacoes, {});

  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('publicacoes', null, {});

  }
};
