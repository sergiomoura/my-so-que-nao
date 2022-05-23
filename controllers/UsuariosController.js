const {Usuario} = require('../models');

module.exports = {
    registrar: (req, res) => {
        // Criar um usuário
        res.send("vai cirar um usuario...")
    },
    buscar: async (req, res) => {

        // Carregar todos os usuários
        let usuarios = await Usuario.findAll();

        // Enviar para o cliente
        res.send(usuarios);
    }
}