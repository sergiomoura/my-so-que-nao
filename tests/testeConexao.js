// 1 - Importar o sequelize
const sequelize = require('sequelize');

// 2 - Elencar os dados para conexão com o BD
const config = {
    username:"root",
    password:"vaiplaneta",
    host:"localhost",
    port:3306,
    dialect:"mysql",
    database:"osmaker"
}

// 3 - Criar a conexão com o banco!
const conexao = new sequelize(config)

// 4 - Realizar uma consulta!!!
let promessa1 = conexao.query("SELECT * FROM funcionarios LIMIT 0,5");
let promessa2 = conexao.query("SELECT * FROM oss LIMIT 0,1");
let promessa3 = conexao.query("SELECT * FROM bairros LIMIT 0,2");

promessa1.then(
    (dados)=>{
        console.log(dados)
        conexao.close();
    }
)

promessa2.then(
    ()=>{
        console.log("Óia!")
        conexao.close();
    }
)

promessa3.then(
    (dados)=>{
        console.log("Peguei o primeiro bairro!")
        conexao.close();
    }
)

