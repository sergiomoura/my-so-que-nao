module.exports = (sequelize, DataTypes) => {
    let publicacao =  sequelize.define(
        'Publicacao', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
              },
              texto: {
                type: DataTypes.TEXT,
              },
              imagem:{
                type: DataTypes.STRING(45)
              },
              usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                  model:{
                    tableName: "usuarios"
                  },
                  key:"id"
                }
              },
            //Não é preciso colocar os timestamps (createdAt, updatedAt, deletedAt)
        }, {
            tableName: "publicacoes",
            timestamps: true,
            paranoid: false
        })
        
        publicacao.associate = (models) => {
          publicacao.belongsTo(models.Usuario, {
            as: "autor",
            foreignKey: "usuarios_id"
          })
        }

        return publicacao;
}