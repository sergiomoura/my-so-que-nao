module.exports = (sequelize, DataTypes) => {
    let usuario = sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            senha: {
                type: DataTypes.STRING(64),
                allowNull: false
            },
            foto: {
                type: DataTypes.STRING(45),
                allowNull: true
            }
        },
        {
            tableName: 'usuarios',
            timestamps: true,
            paranoid: true
        }
    )

    usuario.associate = (models) =>{
        usuario.hasMany(
            models.Publicacao,
            {foreignKey:"usuarios_id", as:"publicacoes"}
        );
    }

    return usuario;
}
