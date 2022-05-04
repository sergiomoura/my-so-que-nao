'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert(
      'usuarios', [
        {
          id: 1,
          nome: 'Iago Carvalho',
          email: "iago@ibm.com",
          senha: bcrypt.hashSync("123456", 10),
        },
        {
          id: 2,
          nome: 'Pastore',
          email: "pastore@digitalhouse.com",
          senha: bcrypt.hashSync("123456", 10),
        },
        {
          id: 3,
          nome: 'Wendel',
          email: "wendel@digitalhouse.com",
          senha: bcrypt.hashSync("123456", 10),
        }
      ],
    {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usuarios', null, {});
  }
};
