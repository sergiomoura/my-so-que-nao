const bcrypt = require('bcryptjs');
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('usuarios', [
      {
        id: 1,
        nome: 'Moraes',
        email: "moraes@teste.com",
        senha: bcrypt.hashSync("123456", 10),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      },
      {
        id: 2,
        nome: 'Mariana',
        email: "mariana@teste.com",
        senha: bcrypt.hashSync("123456", 10),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};