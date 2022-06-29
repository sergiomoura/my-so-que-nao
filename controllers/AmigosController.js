const {sequelize, Sequelize} = require('../models');

module.exports = {
    listar: async (req, res) =>{
        
        // Capturar o usuario
        let usuario = req.usuario;

        // levantar os amigos do usuário atual
        let sql = `
            SELECT
                u.id, 
                u.nome,
                u.email,
                u.foto
            FROM
            amizades a
            INNER JOIN usuarios u ON (a.usuarios_id1 = u.id or a.usuarios_id2 = u.id)
            WHERE (a.usuarios_id1=${usuario.id} OR a.usuarios_id2=${usuario.id}) and aceita=1 and u.id<>${usuario.id}
        `;

        let amigos = await sequelize.query(sql, {type: Sequelize.QueryTypes.SELECT});

        // Enviar os amigos para ele
        res.status(200).json(amigos);
    }
}