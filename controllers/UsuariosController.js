const { Usuario } = require('../models');
const { Op } = require('sequelize');

module.exports = {
    registrar: async (req, res) => {
        //Criar usuário
        res.send('Vai criar um usuario...')
    },

    buscar: async (req, res) => {
        try{
            //Capturar o trecho que está sendo buscado

            let trechoBuscado = req.query.q;
            if(trechoBuscado){
                //Carregar os usuários que tenham o trecho busado no nome
                // SELECT * FROm usuarios WHERE nome like(%'{trechoBuscado}%');
                const usuario = await Usuario.findAll({
                    where: {nome: {[Op.substring]: trechoBuscado}}
                });
    
                //Enviar para o cliente os usuarios leventados
    
                return res.send(usuario);
    
                //Consulta: http://localhost:3000/api/v1/usuarios?q=1
            }

            const usuario = await Usuario.findAll();
            return res.send(usuario);

        } catch (error){
            console.log(error);
            return res.send({message: "Erro"});
        }
    }
};