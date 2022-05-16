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
          });

          //Relacionamento de publicacoes com as curtidas. Uma publicacao pode ter varias curtidas
          publicacao.belongsToMany(models.Usuario, {
            through: "curtidas", //Nome da tabela auxiliar/ligação
            foreignKey: "publicacoes_id", //FK que liga as tabelas (Coluna na tabela auxiliar que tem o id do model atual)
            otherKey: "usuarios_id", //Coluna da tebela auxiliar que tem o id da 
            as: "curtidores",
            timestamps: false
          })
        }

        return publicacao;
}