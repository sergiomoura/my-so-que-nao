'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'publicacoes',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        texto: {
          type: Sequelize.DataTypes.TEXT,
        },
        imagem:{
          type: Sequelize.DataTypes.STRING(45)
        },
        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model:{
              tableName: "usuarios"
            },
            key:"id"
          }
        },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
      }
    );
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('publicacoes');
  }
};
