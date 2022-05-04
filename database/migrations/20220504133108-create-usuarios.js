'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable(
      'usuarios',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        nome: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false
        },
        email: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false
        },
        senha: {
          type: Sequelize.DataTypes.STRING(64),
          allowNull: false
        },
        foto: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: true
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      }
    );

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
