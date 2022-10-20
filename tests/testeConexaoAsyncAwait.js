// 1 - Importa sequelize
const sequelize = require('sequelize');

// 2 - Criar um objeto contendo os dados da conexão
const config = require('./config');

// 3 - Cria a conexão
const conexao = new sequelize(config);

// Forma 2 de lidar com promises - Assync/Await
async function levantarFuncionarios(){
    
    try {
        let resultado = await conexao.query("SELECT * FROM funcionarios LIMIT 0,5");
        console.log(resultado);
    } catch (error) {
        console.log("Deu muito ruim!");
        console.log(error.parent.errno);
    }

    conexao.close();
}

levantarFuncionarios();