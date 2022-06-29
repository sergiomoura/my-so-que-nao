function VerificaExistenciaDeToken(req, res, next){
    
    if(req.headers.authorization){
        req.token = req.headers.authorization.replace("bearer ", "");
        next();
    } else {
        res.status(400).json({msg:"Requisição sem token"});
    }
}

module.exports = VerificaExistenciaDeToken;