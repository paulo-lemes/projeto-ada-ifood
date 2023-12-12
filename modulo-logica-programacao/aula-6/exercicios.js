// 1)Escreva um programa em JavaScript que imprima todos os números pares de 1 a 20.

for (let i = 2; i <= 20; i += 2) {
    // console.log(i)
}

// 2)Crie uma função que calcule a média de um array de números.

let array = [4, 14, 8, 6, 20, 10]

function media(array) {
    let soma = 0;
    let resultado = 0;

    for (const i of array) {
        soma += i
    }

    resultado = soma / array.length
    return `A média dos números do array é ${resultado.toFixed(2)}`
}

// console.log(media(array))

// 3)Escreva um programa que, dada uma string, conte o número de vogais nela.

let string = "Ola mundo"

function qtdVogais(string) {
    let contador = 0;

    string1 = string.toLowerCase()

    for (const i of string1) {
        if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
            contador++
        }
    }

    return `A quantidade de vogais da string é ${contador}`
}

// console.log(qtdVogais(string))

// 4) Escreva um programa que use um laço for para imprimir os números de 1 a 100 no console, mas substitua os números divisíveis por 3 por "Fizz" e os números divisíveis por 5 por "Buzz". Para números divisíveis por ambos 3 e 5, exiba "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        // console.log("Fizz")
    } else if (i % 5 === 0) {
        // console.log("Buzz")
    } else {
        // console.log(i)
    }
}

// 5) Crie um array de objetos, onde cada objeto representa um aluno com propriedades como nome e notas (um array de notas). Use um laço for...of para iterar sobre o array de alunos e, para cada aluno, use um laço for para calcular a média de suas notas. Exiba o nome do aluno e sua média no console.

const alunos = [
    { nome: "Paulo", notas: [8, 5, 6, 9] },
    { nome: "Fulana", notas: [9, 4, 10, 7] },
    { nome: "Ciclano", notas: [6, 5, 8, 5] }
]

for (const i of alunos) {
    let soma = 0;
    let resultado = 0;
    let array = i.notas

    for (const i of array) {
        soma += i
    }

    resultado = soma / array.length
    // console.log(`Aluno: ${i.nome} - Média notas: ${resultado.toFixed(2)}`)
}

// 6) Percorrer uma string e contar a frequência de cada caractere, ou seja quantas vezes cada um tem na string.

let frase = "Hello World"

let char = [];

for (const letra of frase) {
    char.push(letra.toLowerCase())
}

for (const letra of frase) {
    let contador = 0;
    char.forEach(element => {
       if (element == letra.toLowerCase()){
        contador++
       }
    });

    // console.log(`Frase: ${frase} - Contagem do caractere ${letra}: ${contador}`)
}

// 7) Dado um array de arrays, encontrar a soma de todos os números contidos nos arrays internos.

const infoArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (const i of infoArray) {
    let soma = 0;
    let resultado = 0;
    let array = i;

    for (const i of array) {
        soma += i
    }

    resultado = soma / array.length
    // console.log(`A média dos números do array [${array}] é ${resultado.toFixed(2)}`)
}

// 8) Escreva um loop para calcular o fatorial de um número fornecido.

let numero = 7
let resultado = 1;

for (let i = numero; i > 1; i--){
    resultado *= i
}

// console.log(resultado)