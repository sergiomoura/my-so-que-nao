module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        "Publicacao",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            texto: {
                type: DataTypes.STRING(120),
                allowNull: false,
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            imagem: {
                type: DataTypes.STRING(45),
                allowNull: true,
            }
        },
        {
            tableName: "publicacoes",
            timestamps: false
        }
    )
}