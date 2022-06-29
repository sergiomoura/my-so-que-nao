const {Usuario} = require('../models');
const {Op} = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
    },

    login: async (req, res) => {

        // Definindo objeto de falha no login
        const loginFail = {error:'Falha no login'};

        // Capturar email e senha
        let {email, senha} = req.body;

        // Levantar o usuário a partir do email dado
        let u;
        try {
            u = await Usuario.findOne({where:{email}});
        } catch (error) {
            return res.status(500).json({error:'Erro interno. Tente novamente mais tarde.'});
        }
        
        // Caso o usuário não exista, responder com erro
        if(u === null) {
            return res.status(403).json(loginFail);
        }

        // Validar a senha (criptografada)
        let senhaOk = bcrypt.compareSync(senha, u.senha);

        if(senhaOk){

            // Extraindo o objeto literal do Model
            u = u.toJSON();

            // Removendo os campos desnecessários p/ front
            delete u.senha;
            delete u.createdAt;
            delete u.updatedAt;
            delete u.deletedAt;
            
            // Criar o token
            let token = jwt.sign(u, process.env.JWT_SECRET);

            // Caso de sucesso: Respondendo OK
            return res.status(200).json({usuario: u, token});

        } else {
            // Caso de fracasso: Respondendo NOT OK
            return res.status(403).json(loginFail);
        }

    }
}