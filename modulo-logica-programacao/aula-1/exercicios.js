// 1)
// Crie uma variável booleano e atribua a ela o valor true. Em seguida, crie uma variável numero e atribua a ela o valor 1. 
// Converta a variável booleano em um número inteiro e some com a variável numero. Qual é o resultado final? R: 2

let booleano = true
let numero = 1
let soma = Number(booleano) + numero

console.log(soma)

// 2) Crie uma variável numero e atribua a ela um número inteiro. Em seguida, crie uma variável texto e atribua a ela uma string com o valor "123". 
// Converta a variável texto em um número inteiro e armazene o resultado na variável numero.

numero = 25
let texto = "123"
numero = parseInt(texto)

console.log(numero)

// 3)
// Crie uma constante chamada PI e atribua a ela o valor de π (aproximadamente 3.14159). 
// Em seguida, crie uma variável chamada raio e calcule a área de um círculo com base no valor de PI e raio.

const pi = 3.14159
let raio = 5
let areaCirculo = (raio**2) * pi

console.log(areaCirculo)

// 4)
// Crie duas variáveis, numero1 e numero2, e atribua valores a elas. 
// Em seguida, realize as quatro operações aritméticas básicas (+, -, *, /) com essas variáveis e exiba os resultados.

let numero1 = 10
let numero2 = 2
soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log(soma, subtracao, multiplicacao, divisao)