const publicacoes=[
  {
    id: 1,
    texto:"my life is beautiful",
    usuarios_id: 1,
    imagem: "nat.jpg"
  },
  {
    id: 2,
    texto:"to com fome nat",
    usuarios_id: 2,
    imagem: "ana.jpg"
  },
  {
    id: 3,
    texto:"já posso dar aula no figma",
    usuarios_id: 3,
    imagem: "geo.jpg"
  },
  {
    id: 4,
    texto:"eu não gosto do gustavo teacher",
    usuarios_id: 1,
    imagem: "nat.jpg"
  },
  {
    id: 5,
    texto:"vou ali pegar um cafezinho nat",
    usuarios_id: 2,
    imagem: "ana.jpg"
  },
  {
    id: 6,
    texto:"I'm amazing",
    usuarios_id: 3,
    imagem: "geo.jpg"
  }
]
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('publicacoes', publicacoes, {});
  },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('publicacoes', null, {});
  }
};