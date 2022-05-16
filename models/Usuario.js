module.exports = (sequelize, DataTypes) => {
    let usuario =  sequelize.define('Usuario', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          nome: {
            type: DataTypes.STRING(45),
            allowNull: false
          },
          email: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
          },
          senha:{
            type: DataTypes.STRING(64),
            allowNull: false
          },
          foto: {
            type: DataTypes.STRING(45),
            allowNull: true
          },
          
          //Não é preciso colocar os timestamps (createdAt, updatedAt, deletedAt)
    }, 
    {
        tableName: "usuarios",
        timestamps: true,
        paranoid: true
    })

    //Para levantar as publicações do usuário direto pelo model de Usuario, precisamos fazer a sua assoiação também.
    usuario.associate = (models) => {
      usuario.hasMany(models.Publicacao, {
        as: "publicacoes", 
        foreignKey: "usuarios_id"
      })
    }

    return usuario;
}