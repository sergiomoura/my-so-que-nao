'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.removeColumn('usuarios', 'foto');
    await queryInterface.addColumn('usuarios', 'imagem',{
      type: Sequelize.DataTypes.STRING(45),
      allowNull: true,
    });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'imagem');
    await queryInterface.addColumn('usuarios', 'foto',{
      type: Sequelize.DataTypes.STRING(45),
      allowNull: true,
    });
  }
};
