const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'usuarios', [
      {
        id: 1,
        nome: 'Moraes',
        email: 'moraes@teste.com',
        senha: bcrypt.hashSync('123456', 10),
        createdAt: new Date().toISOString().substring(0,19),
        updatedAt: new Date().toISOString().substring(0,19)
      },
      {
        id: 2,
        nome: 'Mariana',
        email: 'mariana@teste.com',
        senha: bcrypt.hashSync('123456', 10),
        createdAt: new Date().toISOString().substring(0,19),
        updatedAt: new Date().toISOString().substring(0,19)
      }

    ], {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
