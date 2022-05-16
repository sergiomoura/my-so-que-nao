module.exports = (sequelize, DataTypes) => {
    let publicacao = sequelize.define(
        'Publicacao',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            texto: {
                type: DataTypes.STRING(120),
                allowNull: true
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            imagem: {
                type: DataTypes.STRING(45),
                allowNull: true
            }
        },
        {
            tableName: 'publicacoes',
            timestamps: true,
            paranoid: false
        }
    )

    publicacao.associate = (models)=>{
        publicacao.belongsTo(models.Usuario,{foreignKey:"usuarios_id", as:"autor"});
        publicacao.belongsToMany(
            models.Usuario,
            {
                through:"curtidas",   // <== Nome da tabela auxiliar/de ligação
                foreignKey: "publicacoes_id", // Coluna na table auxiliar que tem o id da model atual
                otherKey: "usuarios_id", // Coluna da table auxiliar que tem o id da model que está se relacionando com a atual
                as: "curtidores",
                timestamps: false
            }
        );
    }

    return publicacao;
}