'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      'usuarios', {
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
      },
      

    );

  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('usuarios');

  }
};