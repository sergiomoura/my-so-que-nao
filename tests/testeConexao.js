// 1 - Importa sequelize
const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
const config = require('./config');

// 3 - Cria a conexão
const conexao = new sequelize(config);

// 4 - Realiza a consulta (assíncronas)!!!
let promise = conexao.query("SELECT * FROM funcionarios LIMIT 0,5");

// Forma 1 de lidar com promeses: callbacks
promise.then(
    data => {
        console.log(data);
        conexao.close();
    }
).catch(
    err => {
        console.log("Deu muito ruim!");
    }
)

console.log(promise);