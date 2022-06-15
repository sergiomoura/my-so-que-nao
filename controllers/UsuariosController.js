const {Usuario} = require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = {
    registrar: async (req, res) => {
        try {
            // Capturando os dados do corpo da requisição
            const {nome, email, senha} = req.body;

            // Criptografando a senha inserida pelo usuario
            const hash = bcrypt.hashSync(senha, 10);

            // Verificando se o e-mail já existe
            const verificarUsuarioCadastrado = await Usuario.findOne({where:{email:email}})
            if(verificarUsuarioCadastrado){
                return res.status(409).json({erro: 'Usuário com email já cadastrado'});
            }

            // Criando um novo usuário
            const novoUsuario = await Usuario.create(
                {nome, email, senha:hash, foto: req.file?.filename}
            )

            // Retornando informação de sucesso para o cliente
            return res.status(201).json(novoUsuario);
            
        } catch (error) {
            console.log(error);
            res.status(500).json({error});
        }
    },

    buscar: async (req, res) => {

        // Capturar o trecho que está sendo buscado
        let trechoBuscado = req.query.q;

        // Carregar os usuários que tenham o tracho buscado no nome
        // 'SELECT * FROM usuarios WHERE nome like %${trechoBuscado}%';
        let usuarios = await Usuario.findAll(
            {
                where:{nome:{[Op.substring]:trechoBuscado}}
            }
        );

        // Enviar para o cliente os usuarios levantados
        res.send(usuarios);
    }
}