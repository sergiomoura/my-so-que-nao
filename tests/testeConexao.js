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

// 4 - Executar uma consulta contra o BD (SELECT * FROM alunos);
const promiseAlunos = conexao.query(
    'SELECT * FROM alunos',
    sequelize.QueryTypes.SELECT
);

const promiseTurmas = conexao.query(
    'SELECT * FROM turmas',
    sequelize.QueryTypes.SELECT
)


// 5 - Imprimir os dados levantados no BD

/* promiseAlunos
    .then((data) => {
        console.log("Cumpriu a promessa!");
        console.log(data);
        // 6 - Fechar conexão com o banco de dados.
        conexao.close();
    });

promiseTurmas
    .then((data) => {
        console.log("Cumpriu a promessa!");
        console.log(data);
        // 6 - Fechar conexão com o banco de dados.
        conexao.close();
    }); */

// 6 -Criando uma promessa de que todas as promessas serão cumpridas.
const promiseTotal = Promise.all([promiseAlunos, promiseTurmas]);

promiseTotal.then((data) => {
    console.log(data[0], data[1]);
    conexao.close();
})


