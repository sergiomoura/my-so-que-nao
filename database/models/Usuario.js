module.exports = (sequelize, DataTypes) => {
    
    let usuario = sequelize.define(
        "Usuario",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            senha: {
                type: DataTypes.STRING(64),
                allowNull: false,
            },
            foto: {
                type: DataTypes.STRING(45),
                allowNull: true,
            }
        },
        {
            tableName: "usuarios",
            timestamps: false
        }
    )

    usuario.associate = (models)=>{
        usuario.hasMany(models.Publicacao, {as:"publicacoes", foreignKey:"usuarios_id"});
        usuario.belongsToMany(
            models.Usuario,
            {
                as:"amigos",
                through:"amizades",
                foreignKey:"usuarios_id1",
                otherKey:"usuarios_id2",
                timestamps: false
            }
        );
    }

    return usuario;
}