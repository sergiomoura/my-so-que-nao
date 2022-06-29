const jwt = require('jsonwebtoken');
require('dotenv').config();


function ValidarToken(req, res, next){

    // Validando e descriptografando o token
    console.log(process.env.JWT_SECRET);
    let usuario = jwt.verify(req.token, process.env.JWT_SECRET);

    // Se o token for inválido, usuário sera undefined
    if(usuario == undefined){
        return res.status(403).json({msg:"Vacilão morre cedo"});
    }

    // Pendurando as informações do usuário no req.usuario
    req.usuario = usuario;

    // Indo adiante!
    next();
}

module.exports = ValidarToken;