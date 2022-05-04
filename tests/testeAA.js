// 1 - Importar o sequelize
const sequelize = require('sequelize');

// 2 - Elencar os dados para conexão com o BD (usuario, senha, porta, endereco...)
const config = {
    "username": "root",
    "password": null,
    "host": "localhost",
    "port": "3306",
    "dialect": "mysql",
    "database": "escola"
}

// 3 - Criar a conexão com o banco de dados
const conexao = new sequelize(config);

async function fazConsulta() {
    // 4 - Executar uma consulta contra o BD (SELECT * FROM alunos);
    const alunos = await conexao.query(
        'SELECT * FROM alunos',
        sequelize.QueryTypes.SELECT
    );

    const turmas = await conexao.query(
        'SELECT * FROM turmas',
        sequelize.QueryTypes.SELECT
    );

    console.log(alunos, turmas);

}

fazConsulta()