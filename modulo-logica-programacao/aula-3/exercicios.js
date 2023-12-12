//1) Crie um objeto que represente uma pessoa com propriedades como "nome", "idade" e "cidade".

let pessoa = {
    "nome": "Paulo",
    "idade": 25,
    "cidade": "São Paulo"
}

//console.log(pessoa)

//2) Crie um array de números e calcule a soma de todos os números no array.

let vetor = [1, 2, 3, 4, 5]

function somar(array) {
    let soma = 0

    array.forEach(element => {
        soma += element
    });

    return soma
}

//console.log(somar(vetor))

//3) Use um Map para armazenar informações sobre produtos (nome do produto e preço) e, em seguida, imprima todos os produtos e seus preços.

let produtos = new Map();

produtos.set("mouse", 50)
produtos.set("teclado", 150)
produtos.set("monitor", 300)
produtos.set("cpu", 1000)

// console.log(produtos)

//4) Use um Map para criar uma lista de contatos com nomes como chaves e informações de contato (por exemplo, e-mail) como valores.

let listaContatos = new Map();

listaContatos.set("Ana", ["ana@email.com", 11991234567])
listaContatos.set("João", ["joão@email.com", 11998910111])
listaContatos.set("Maria", ["maria@email.com", 11991314151])

// console.log(listaContatos)

//5) Use um Map para armazenar informações sobre estudantes (nome, idade, nota) e, em seguida, encontre o aluno com a nota mais alta.

let estudantes = new Map();

estudantes.set("Ana", { "idade": 21, "nota": 8 })
estudantes.set("Pedro", { "idade": 20, "nota": 5 })
estudantes.set("Eduardo", { "idade": 24, "nota": 7 })
estudantes.set("Leticia", { "idade": 19, "nota": 7 })

function maiorNota(objeto) {
    let maiorNota = 0
    let alunoMaiorNota = ""

    objeto.forEach((dados, nome) => {
        if (dados.nota > maiorNota) {
            alunoMaiorNota = nome
            maiorNota = dados.nota
        }
    });
    return alunoMaiorNota
}

// console.log(maiorNota(estudantes))

//6) Crie um array associativo que associe nomes de produtos a objetos que contenham informações sobre o produto (por exemplo, nome, preço, descrição).

let arrayProdutos = []

arrayProdutos["mouse"] = {preco:"R$50,00", descricao:"O mouse é uma das partes do computador e nos permite interagir com os objetos, programas e documentos que aparecem na tela."}
arrayProdutos["teclado"] = {preco:"R$150,00", descricao:"É um tipo de periférico de entrada utilizado pelo usuário para a entrada manual no sistema de dados e comandos."}
arrayProdutos["monitor"] = {preco:"R$400,00", descricao:"Um monitor é um dispositivo de saída do computador, cuja função é transmitir informação ao utilizador através da imagem. "}

console.log(arrayProdutos)
