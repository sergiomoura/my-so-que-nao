module.exports = (sequelize, DataTypes) => {

    let publicacao = sequelize.define(
        "Publicacao",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            texto:{
                type: DataTypes.STRING,
            },
            imagem:{
                type: DataTypes.STRING,
                allowNull: true
            },
            usuarios_id: {
                type: DataTypes.INTEGER
            }
        },
        {
            tableName: "publicacoes",
            timestamps: true,
            paranoid: false
        }
    )
    
    publicacao.associate = (models)=>{
        publicacao.belongsTo(models.Usuario, {foreignKey:'usuarios_id', as: 'autor'});
    }

    return publicacao;

}
