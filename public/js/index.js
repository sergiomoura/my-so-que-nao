console.log("Tudo que o meu javascript quiser!");

// Criando um array de amigos
let amigos = [
    {
        id: 1,
        nome: "Wendel Cutrim",
        email: "wendel@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?1`
    },
    {
        id: 2,
        nome: "Sérgio Moura",
        email: "ssiqueira@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?2`
    },
    {
        id: 3,
        nome: "Silvia Fiacador",
        email: "silvia@digitalhouse.com",
        foto: `http://lorempixel.com.br/500/500/?3`
    }
]

// Localizar/carregar elementos do HTML aqui para o mundo JS
// Exemplo: Carregar elemento que mostra lista de amigos
let listaDeAmigos = document.getElementById("listaDeAmigos");
console.log(listaDeAmigos);

// 1 - Criar uma string com a estrutura html que exibe um usuário
let string = '';
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article>
        <img src="${amigo.foto}" alt="Foto de ${amigo.nome}">
        <span>${amigo.nome}</span>
        <a href="mailto:${amigo.email}">${amigo.email}</a>
    </article>
    `
}
console.log(string);

// 2 - Injetar essa string no elemento listaDeAmigos
listaDeAmigos.innerHTML = string;



// Alterar elementos
// Exemplo 1: Sumindo com o corpo da página!
// document.body.innerHTML = "Essa página foi hackeada!!!"

// Remover elementos

// Criar elementos