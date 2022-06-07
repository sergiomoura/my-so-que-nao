// Verificar se o email foi preenchdo
const verificaCampoPreenchido = (evento)=>{
    if(evento.target.value == ''){
        evento.target.style.outline = "2px solid #993300";
        evento.target.setAttribute('placeholder',`Preencha o campo ${evento.target.name}!`)
    } else {
        evento.target.style.outline = "none";
        evento.target.setAttribute('placeholder','')
    }
}

const onFileChange = evento => {
    let img = document.getElementById('output');
    img.src = URL.createObjectURL(evento.target.files[0])
}


// 1 - Capturar os elementos do HTML para o JS
let inputEmail = document.querySelector('#registro > form input[type=email]');
let inputSenha = document.querySelector('#registro > form input[type=password]');
let inputFile = document.querySelector('#registro > form input[type=file]');
let form = document.getElementById('formularioCadastro');

// 2 - Associar ao evento "perdeu o foco" uma função
// 3 - A função vai avisar ao usuário que o campo de
//     email foi deixado em branco
inputEmail.addEventListener('keypress', verificaCampoPreenchido);
inputSenha.addEventListener('blur', verificaCampoPreenchido);
// inputFile.addEventListener('change', onFileChange);
form.addEventListener(
    'submit',
    (evt)=>{

        // Impedir o formulário de ser enviado...
        evt.preventDefault();

        // Levantando os dados do formulário
        let formData = new FormData(form);
        
        // fetch
        fetch(
            'http://localhost:3000/api/v1/usuarios',
            {
                method:'POST',
                body: formData,
                headers:{'Content-Type': 'multipart/form-data'}
            }
        );
    }
);































// Criando um array de amigos
let amigos = [
    {
        id: 1,
        nome: "Wendel Cutrim",
        email: "wendel@digitalhouse.com",
        foto: `img/face.jpg`
    },
    {
        id: 2,
        nome: "Sérgio Moura",
        email: "ssiqueira@digitalhouse.com",
        foto: `img/face.jpg`
    },
    {
        id: 3,
        nome: "Silvia Fiacador",
        email: "silvia@digitalhouse.com",
        foto: `img/face.jpg`
    }
]

// Localizar/carregar elementos do HTML aqui para o mundo JS
// Exemplo: Carregar elemento que mostra lista de amigos
let listaDeAmigos = document.getElementById("listaDeAmigos");

// 1 - Criar uma string com a estrutura html que exibe um usuário
let string = '';
for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    string += `
    <article onclick="alert('clicou em ${amigo.nome}')">
        <img src="${amigo.foto}" alt="Foto de ${amigo.nome}">
        <span>${amigo.nome}</span>
        <a href="mailto:${amigo.email}">${amigo.email}</a>
    </article>
    `
}

// 2 - Injetar essa string no elemento listaDeAmigos
listaDeAmigos.innerHTML += string;

