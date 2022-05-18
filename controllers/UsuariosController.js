const { Usuario } = require('../models');
const UsuariosController = {
    registrar: async (req, res) => {
        //Criar usuário
        res.send('Vai criar um usuario...')
    },

    buscar: async (req, res) => {
        try{
            const usuario = await Usuario.findAll();
            return res.send(usuario);
        } catch (error){
            console.log(error);
            return res.send({message: "Erro"});
        }
    }
};

module.exports = UsuariosController;