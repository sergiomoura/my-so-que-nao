const { Sequelize, DataTypes, Model } = require('sequelize');
const bcrypt = require('bcrypt');


module.exports = (sequelize, DataTypes) => {

    class Usuario extends Model{
        static async login(email, senha){
            let u = await Usuario.findOne({where:{email}});
            if(u == undefined){
                return false;
            } else {
                return bcrypt.compareSync(senha, u.senha)
            }
        }
    }
    
    Usuario.init(
        {
            nome: {
              type: DataTypes.STRING(45),
              allowNull: false,
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
            nAmigos: {
                type: DataTypes.VIRTUAL,
                get(){
    
                    let id = this.getDataValue('id');
    
                    let f = async () => {
                        let result;
                        try {
                            result = await sequelize.query(
                                `SELECT count(*) as n FROM amizades WHERE (usuarios_id1=${id} OR usuarios_id2=${id}) AND aceita=1`,
                                {type: sequelize.QueryTypes.SELECT}
                            )
                            return result[0].n
                        } catch(e) {
                            throw e;
                        }
                    }
    
                    return f;
                }
            }
        },
        {
            modelName: "Usuario",
            sequelize,
            tableName: "usuarios",
            paranoid: true
        }
    )

    return Usuario;
}



