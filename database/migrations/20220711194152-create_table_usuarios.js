module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'usuarios',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        nome: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        },
        email: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: false,
        },
        senha: {
          type: Sequelize.DataTypes.STRING(64),
          allowNull: false,
        },
        foto: {
          type: Sequelize.DataTypes.STRING(45),
          allowNull: true,
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuarios');
  }
};
