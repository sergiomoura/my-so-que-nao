let televisao = {
    nome: "TV da sala",
    tamanho: 40,
    ligado: true,
    fabricante: {
        nome: "SAMSUNG",
        endereco: "Rua das Camélias, 220",
        funcionarios: [
            {nome: "joão", idade: 30},
            {nome: "maria", idade: 25}
        ]
    },
    ligar: (nome) => {
        console.log(`Estou ligando a TV para ${nome}`)
    }   
}

televisao.ligar("Lili");