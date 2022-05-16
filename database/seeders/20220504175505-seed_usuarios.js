const bcrypt = require("bcrypt");

module.exports = {
  async up (queryInterface, Sequelize) {
    
    let usuarios = [];
    
    for(let i=1; i<=20; i++){
      usuarios.push(
        {
          id: i,
          nome: `Usuário ${i}`,
          email: `usuario${i}@teste.com`,
          senha: bcrypt.hashSync('123456', 10),
          foto: `perfil_${i}.jpg`,
          createdAt: (new Date()).toJSON().substring(0,19)
        }
      )
    }

    await queryInterface.bulkInsert('usuarios', usuarios, {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
