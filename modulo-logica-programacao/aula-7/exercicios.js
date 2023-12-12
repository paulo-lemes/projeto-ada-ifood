const prompt = require('readline-sync')

//1) Defina uma função calculadora que aceita três argumentos: dois números e uma operação (por exemplo, '+', '-', '*', '/'). A função deve realizar a operação especificada nos números.

// let n1 = Number(prompt.question("Digite o primeiro numero: "))
// let n2 = Number(prompt.question("Digite o segundo numero: "))
// let op = prompt.question("Digite o operador (+, -, *, /): ")

function calcular(n1, n2, op) {
    if (op === "+") {
        return n1 + n2
    } else if (op === "-") {
        return n1 - n2
    } else if (op === "*") {
        return n1 * n2
    } else if (op === "/") {
        return n1 / n2
    } else {
        return "Operador não válido"
    }
}

// console.log(calcular(n1, n2, op))

//2)Crie uma função inverteString que aceita uma string como entrada e retorna a string invertida.

// let string = prompt.question("Digite o uma palavra ou frase: ")

function inverteString(string) {
    if (string !== String) {
        return "Erro. Conteúdo digitado não corresponde à uma palavra ou frase."
    }

    array = string.split("")
    arrayInverte = []

    for (let i = array.length - 1; i >= 0; i--) {
        arrayInverte.push(array[i])
    }

    let stringInvertida = arrayInverte.join("")

    return stringInvertida
}

// console.log(inverteString(string))

// 3) Implemente uma função encadeamentoFuncoes que aceita um número como entrada e encadeia as seguintes operações: dobrar, subtrair 5 e então elevar ao quadrado. A função deve retornar o resultado final.

// let numero = Number(prompt.question("Digite um numero: "))

function encadeamentoFuncoes(numero) {
    let resultado = 0

    const dobrar = (n) => n * 2
    resultado = dobrar(numero)
    // console.log(resultado)

    const subtrair5 = (n) => n - 5
    resultado = subtrair5(resultado)
    // console.log(resultado)

    const elevar2 = (n) => n ** 2
    resultado = elevar2(resultado)

    return resultado
}

// console.log(encadeamentoFuncoes(numero))

// 4) Escreva uma função chamada compor que aceita uma matriz de funções e retorna uma nova função que executa cada função na matriz em sequência, passando o resultado de uma como entrada para a próxima.

// let matrizFuncoes = [dobrar(), subtrair5(), elevar2()]

function compor(matriz) {
    for (let i = 0; i <= matriz.length; i++) {

    }
}

//5) Escreva uma função que solicite dois números do usuário e divida um número pelo outro. Use um bloco try/catch para garantir que a divisão seja segura e trate qualquer exceção que possa ocorrer.

let num1 = Number(prompt.question("Digite o primeiro numero: "))
let num2 = Number(prompt.question("Digite o segundo numero: "))

try {
    const resultado = num1 / num2
    console.log(`Resultado da divisao: ${resultado}`)
    if (resultado !== Number) throw "Erro"
} catch (e) {
    console.log(e.message)
}

//6) Validação de E-mail: Crie uma função que verifique se um e-mail é válido.
//Use um bloco try/catch para capturar exceções relacionadas à validação do e-mail.



//7) Acesso a Propriedades de Objeto: Crie um objeto com propriedades e tente acessar uma propriedade que não existe. Use um bloco try/catch para capturar o erro.



// 8) Crie uma função que tente converter uma string em um número.
//Use um bloco try/catch para tratar erros de conversão.


