const {Usuario} = require('../database/models');

const UsuariosController = {
    index: async (req,res)=>{
        let usuarios = await Usuario.findAll({attributes:['id','nome','email']});
        res.render('usuarios.ejs', {usuarios});
    },
    create: (req, res ) => {
        res.render('usuarios-create.ejs');
    },
    store: async (req, res)=>{
        let usuario = await Usuario.create(
            {
                "nome": req.body.nome,
                "senha": req.body.senha,
                "email": req.body.email
            }
        );
        res.redirect('/usuarios');
    }
}

module.exports = UsuariosController;