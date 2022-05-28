'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'usuarios','senha',
      {
        type: Sequelize.STRING(200),
        allowNull: false
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'usuarios','senha',
      {
        type: Sequelize.STRING(64),
        allowNull: false
      }
    );
  }
};
