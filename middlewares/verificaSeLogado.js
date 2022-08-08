function verificaSeLogado(req, res, next){
    if(req.session.usuario){
        next();
    } else {
        // Direcionar visitante para uma página de login
        res.redirect('/create') 
        return;
    }
}

module.exports = verificaSeLogado;