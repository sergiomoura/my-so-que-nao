const {Usuario, sequelize} = require('../database/models');
const bcrypt = require('bcrypt');

module.exports = {
    create: (req, res)=>{
        res.render('usuarioCreate.ejs');
    },
    store: async (req, res) => {

        // Capturar as informações vindas do formulário
        const {nome, email, senha, confirmacao} = req.body;

        // Verificar se a senha bate com a confirmação...
        // caso não bata, mandar msg de erro...e finalizar função

        if (senha !== confirmacao) {
            res.render('error.ejs', {msg: "Senha e confirmação não conferem."})
            return;
        }

        // Inserir as informações no BD
        const u = await Usuario.create(
            {
                nome,
                email,
                senha: bcrypt.hashSync(senha, 10)
            }
        )
        
        req.session.usuario = u;

        // Direciona o visitante para o endereço /home!
        res.redirect('/home');
    },
    mostrarHome: (req, res) => {
        // Capturando o nome do usuário a partir da session
        let nome = req.session.usuario.nome;

        res.render("home.ejs", {nome});
    }
}