module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('amizades',  {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      usuarios_id1: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "usuarios"
          },
          key:"id"
        }
      },
      usuarios_id2: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: "usuarios"
          },
          key:"id"
        }
      },
      aceita: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: 0,
        allowNull: false,
      }
    });
},
  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('amizades');
  }
};