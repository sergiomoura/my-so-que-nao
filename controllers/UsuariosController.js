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
    },
    edit: async (req, res) => {
        let id = req.params.id;
        let usuario = await Usuario.findByPk(id);
        res.render('usuarios-edit.ejs', {usuario});
    },
    update: async (req,res) => {
        let id = req.params.id;
        // let id = req.body.id;

        await Usuario.update(
            {
                nome: req.body.nome,
                email: req.body.email,
                senha: req.body.senha
            },
            {where:{id}}
        );

        res.redirect('/usuarios');
    },
    delete: async (req, res)=>{
        let id = req.params.id;
        await Usuario.destroy({where:{id}});
        res.redirect('/usuarios');
    }
}

module.exports = UsuariosController;