//1) Verificação de Idade:
//Peça ao usuário para inserir sua idade e, em seguida, use um bloco if-else para verificar se ele é maior de idade (18 anos ou mais) ou menor de idade.

let idade = 4

if (idade > 0 && idade < 18) {
    console.log("Menor de idade")
} else if (idade >= 18 && idade <= 120) {
    console.log("Maior de idade")
} else {
    console.log("Número inválido")
}

//2)  Maior de Três Números:
//Peça ao usuário para inserir três números e use estruturas condicionais if e else para determinar qual deles é o maior.

let n1 = 15
let n2 = 25
let n3 = 2

if (n1 > n2 && n1 > n3) {
    console.log(`O número 'n1' é o maior dos informados`)
} else if (n2 > n1 && n2 > n3) {
    console.log(`O número 'n2' é o maior dos informados`)
} else {
    console.log(`O número 'n3' é o maior dos informados`)
}

//3) Calculadora de IMC:
//Crie uma calculadora de índice de massa corporal (IMC) que peça ao usuário para inserir seu peso e altura. Em seguida, use um bloco if-else para exibir uma mensagem que classifica a condição do usuário com base no IMC calculado.

let peso = 170
let altura = 1.70

const imc = peso/(altura**2)

if (imc < 18.5) {
    console.log(`IMC: ${imc.toFixed(2)}kg/m² - Classificação: Baixo peso`)
} else if (imc < 24.9) {
    console.log(`IMC: ${imc.toFixed(2)}kg/m² - Classificação: Peso normal`)
} else if (imc < 29.9) {
    console.log(`IMC: ${imc.toFixed(2)}kg/m² - Classificação: Sobrepeso`)
} else if (imc < 34.9) {
    console.log(`IMC: ${imc.toFixed(2)}kg/m² - Classificação: Obesidade grau I`)
} else if (imc < 39.9) {
    console.log(`IMC: ${imc.toFixed(2)}kg/m² - Classificação: Obesidade grau II`)
} else {
    console.log(`IMC: ${imc.toFixed(2)}kg/m² - Classificação: Obesidade grau III`)
}

//4) Conversão de Temperatura:
//Peça ao usuário para inserir uma temperatura em graus Celsius e use uma instrução if-else para converter essa temperatura para Fahrenheit ou vice-versa, com base na escolha do usuário.

let temperatura = "farenheint"
let graus = 55

if (temperatura === "celsius") {
    const resultado = graus * 1.8 + 32
    console.log(`A temperatura informada (${graus}°C) corresponde à ${resultado.toFixed(2)}°F`)
} else if (temperatura === "farenheint") {
    const resultado = (graus - 32) / 1.8 
    console.log(`A temperatura informada (${graus}°F) corresponde à ${resultado.toFixed(2)}°C`)
} else {
    console.log("Tipo de temperatura inválida")
}
 
//5) Validação de Login:
//Crie um formulário de login que solicite ao usuário um nome de usuário e uma senha. Use estruturas if-else para verificar se as credenciais inseridas estão corretas ou não.

let login = "email"
let senha = "12345"

if (login === "email" && senha === "12345") {
    console.log("Login realizado!")
} else {
    console.log("Login e/ou senha incorretos")
}

//6) Verificação de numero par ou impar: 
//Solicite ao usuário para inserir um número e use uma estrutura if-else para determinar se o número é par ou ímpar.

let numero = 44

if (numero % 2 === 0) {
    console.log("O número informado é par")
} else (
    console.log("O número informado não é par")
)
