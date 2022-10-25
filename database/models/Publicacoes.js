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
        // publicacao.hasMany => um para muitos (Uma publicação tem muitos comentários...)
        // publicacao.belongsToMany => muitos para muitos (Uma publicacao é curtida por muitos usuários)
        // publicacao.hasOne => um para um
    }

    return publicacao;

}
