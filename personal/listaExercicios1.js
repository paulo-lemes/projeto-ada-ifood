// Exercicios Javascript - Fundamentos, Estruturas de controle e Funções.pdf

//1
const operacoes = (num1 = 0, num2 = 0) => {
    console.log(num1 + num2)
    console.log(num1 - num2)
    console.log(num1 * num2)
    console.log(num1 / num2)
}

operacoes(5, 4)

//2
const tipoTriangulo = (lado1 = 0, lado2 = 0, lado3 = 0) => {
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        console.log("Os valores colocados não compreendem um triângulo.")
    } else {
        if (lado1 === lado2 && lado2 === lado3) {
            console.log('O triângulo é equilátero.')
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            console.log('O triângulo é isósceles.')
        } else {
            console.log('O triângulo é escaleno.')
        }
    }
}

tipoTriangulo(10, 10, 0)
tipoTriangulo(10, 10, 10)
tipoTriangulo(10, 15, 10)
tipoTriangulo(10, 5, 20)

//3
const potencia = (base, expoente) => {
    let resultado = Math.pow(base, expoente)
    //Ou
    resultado = base ** expoente

    console.log(`O resultado é: ${resultado}`)
}

potencia(4, 2)
potencia(2, 4)
potencia(10, 2)
potencia(5, 5)

//4
const divisaoEResto = (num1, num2) => {
    console.log(`Resultado da divisão entre ${num1} e ${num2} é: ${num1 / num2}`)
    console.log(`Resto: ${num1 % num2}`)
    console.log('')
}

divisaoEResto(10, 2)
divisaoEResto(20, 5)
divisaoEResto(49, 7)

//5
const numReal = num => {
    valorReal = `R$${num.toFixed(2).toString().replace('.', ',')}`
    console.log(valorReal)
}

numReal(0.500000000)

//6
const jurosSimples = (capital, taxaJuros, tempoAplic) => {
    montante = capital * (1 + (taxaJuros / 100) * tempoAplic)
    console.log(`Valor total da aplicação com juros simples: R$${montante.toFixed(2).toString().replace('.', ',')}`)
}

jurosSimples(1000, 10, 6)

const jurosCompostos = (capital, taxaJuros, tempoAplic) => {
    montante = capital * ((1 + (taxaJuros / 100)) ** tempoAplic)
    console.log(`Valor total da aplicação com juros compostos: R$${montante.toFixed(2).toString().replace('.', ',')}`)
}

jurosCompostos(1000, 10, 6)

//7
const formulaBhaskara = (a, b, c) => {
    let delta = (b ** 2) - 4 * a * c

    let x1 = (-b + (Math.sqrt(delta))) / 2 * a
    let x2 = (-b - (Math.sqrt(delta))) / 2 * a

    let vetor = [x1, x2]

    if (delta < 0) {
        console.log('O delta é negativo')
    } else {
        console.log(`Os resultados da função são: ${vetor}`)
    }
}

formulaBhaskara(1, 3, 2)

//8
let stringPontuacoes = "28, 16, 19, 25, 32, 40, 21, 29, 45, 19"

const pontuacoes = stringPontuacoes => {
    let pontos = stringPontuacoes.split(", ")
    let quebraRecord = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 1; i < pontos.length; i++) {
        if (parseInt(pontos[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontos[i]
            quebraRecord++
        } else if (parseInt(pontos[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontos[i]
            piorJogo = i + 1
        }
    }
    return [quebraRecord, piorJogo]
}

console.log(pontuacoes(stringPontuacoes))

//9
const classificaAluno = nota => {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

const arredondar = nota => {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

//10
const numDiv3 = inteiro => {
    if (inteiro % 3 === 0) {
        return true
    } else {
        return false
    }
}

console.log(numDiv3(45))
console.log(numDiv3(22))
console.log(numDiv3(10))

//11
const anoBissexto = ano => {
    if (ano < 0) {
        console.log(`O ano ${ano} não é válido`)
        return false
    } else if (ano % 400 === 0) {
        console.log(`O ano ${ano} é bissexto`)
        return true
    } else if (ano % 100 === 0) {
        console.log(`O ano ${ano} não é bissexto`)
        return false
    }
    else if (ano % 4 === 0) {
        console.log(`O ano ${ano} é bissexto`)
        return true
    } else {
        console.log(`O ano ${ano} não é bissexto`)
        return false
    }
}

anoBissexto(2023)
anoBissexto(2024)
anoBissexto(1998)
anoBissexto(-1998)

//12
const calculoFatorial = numero => {
    if (numero == 0) {
        return 1
    } else {
        return numero * calculoFatorial(numero - 1)
    }
}

console.log(calculoFatorial(10))

//13
const diaSemana = (dia) => {
    switch (dia) {
        case 1:
            console.log(`Fim de semana`)
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log(`Dia útil`)
            break
        case 7:
            console.log(`Fim de semana`)
            break
        default:
            console.log(`Dia inválido`)
            break
    }
}

diaSemana(2)
diaSemana(4)
diaSemana(7)
diaSemana(1)
diaSemana(0)
diaSemana(1998)

//14
const quitanda = fruta => {
    switch (fruta) {
        case 'maçã':
            return 'Não vendemos essa fruta aqui'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
        default:
            return 'Erro'
    }
}

console.log(quitanda('maçã'))
console.log(quitanda('kiwi'))
console.log(quitanda('melancia'))
console.log(quitanda('nada'))

//15
const carro = tipo => {
    switch (tipo) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'caminhonete':
        case 'motocicleta':
            return 'Tem certeza que não prefere esse modelo?'
        default:
            return 'Não trabalhamos com esse tipo de automóvel aqui'
    }
}

console.log(carro('hatch'))
console.log(carro('motocicleta'))
console.log(carro('caminhonete'))
console.log(carro('sedan'))
console.log(carro('caminhão'))

//16
const calculadora = (n1, op, n2) => {
    switch (op) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(2, '-', 522))
console.log(calculadora(10, '*', 5))
console.log(calculadora(430, '/', 10))
console.log(calculadora('SE', '+', 105))
console.log(calculadora(2, '', 52))

//17
const aumentoSalario = (plano, salarioAtual) => {
    switch (plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido'
    }
}

console.log(aumentoSalario('A', 1000))
console.log(aumentoSalario('B', 1000))
console.log(aumentoSalario('C', 1000))
console.log(aumentoSalario('F', 500))

//18
function lerNumero(n) {
    switch (n) {
        case 0:
            return 'Número zero'
        case 1:
            return 'Número um'
        case 2:
            return 'Número dois'
        case 3:
            return 'Número três'
        case 4:
            return 'Número quatro'
        case 5:
            return 'Número cinco'
        case 6:
            return 'Número seis'
        case 7:
            return 'Número sete'
        case 8:
            return 'Número oito'
        case 9:
            return 'Número nove'
        case 10:
            return 'Número dez'
        default:
            return 'Fora do intervalo'
    }
}

console.log(lerNumero(0))
console.log(lerNumero(1))
console.log(lerNumero(4))
console.log(lerNumero(5))
console.log(lerNumero(8))
console.log(lerNumero(11))

//19
const lanchonete = (cod, qtd) => {
    let total
    switch (cod) {
        case 100:
            total = qtd * 3
            return `Produto: Cachorro Quente 
Preço: R$3.00
Quantidade: ${qtd}
Valor total: R$${total.toFixed(2)}`
        case 200:
            total = qtd * 4
            return `Produto: Hambúrguer Simples 
Preço: R$4.00
Quantidade: ${qtd}
Valor total: R$${total.toFixed(2)}`
        case 300:
            total = qtd * 5.5
            return `Produto: Cheeseburguer 
Preço: R$5.50
Quantidade: ${qtd}
Valor total: R$${total.toFixed(2)}`
        case 400:
            total = qtd * 7.5
            return `Produto: Bauru 
Preço: R$7.50
Quantidade: ${qtd}
Valor total: R$${total.toFixed(2)}`
        case 500:
            total = qtd * 3.5
            return `Produto: Refrigerante 
Preço: R$3.50
Quantidade: ${qtd}
Valor total: R$${total.toFixed(2)}`
        case 600:
            total = qtd * 2.8
            return `Produto: Suco 
Preço: R$2.80
Quantidade: ${qtd}
Valor total: R$${total.toFixed(2)}`
        default:
            total = qtd * 3
            return `Produto não existente`
    }
}

console.log(lanchonete(100, 3))
console.log(lanchonete(200, 2))
console.log(lanchonete(300, 1))
console.log(lanchonete(400, 4))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 1))
console.log(lanchonete(700, 1))

//20
function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }
    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }
    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }
    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }
    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }
    return resultado
}

console.log(sacarDinheiro(153));
console.log(sacarDinheiro(289));

//21
const valorPlanoParaIdade = idade => {
    const padrao = 100
    let total = padrao

    if (idade <= 0) {
        return `Idade inválida`
    } else if (idade < 10) {
        total += 80
        return `Valor do plano para crianças menores de 10 anos: R$${total.toFixed(2).toString().replace('.', ',')}`
    } else if (idade <= 30) {
        total += 50
        return `Valor do plano para adultos de 10 a 30 anos: R$${total.toFixed(2).toString().replace('.', ',')}`
    } else if (idade <= 60) {
        total += 95
        return `Valor do plano para adultos acima de 30 até 60 anos: R$${total.toFixed(2).toString().replace('.', ',')}`
    } else {
        total += 130
        return `Valor do plano para adultos acima de 60 anos: R$${total.toFixed(2).toString().replace('.', ',')}`
    }
}

console.log(valorPlanoParaIdade(-2))
console.log(valorPlanoParaIdade(8))
console.log(valorPlanoParaIdade(16))
console.log(valorPlanoParaIdade(34))
console.log(valorPlanoParaIdade(69))

//22
function jurosAnuidade(mes, valor) {
    let tempoAplic

    if (mes < 1 || mes > 12) {
        return `Mês inválido`
    } else if (mes === 1) {
        return `A anuidade foi paga no mês correto, portanto, os juros não são aplicáveis`
    } else {
        tempoAplic = mes - 1
        montante = valor * (1 + (5 / 100)) ** tempoAplic
        return `O valor a ser pago é: R$${montante.toFixed(2).toString().replace('.', ',')}`
    }
}

console.log(jurosAnuidade(0))
console.log(jurosAnuidade(16))
console.log(jurosAnuidade(2, 100))
console.log(jurosAnuidade(6, 100))
console.log(jurosAnuidade(8, 100))

//23
const input = require('readline-sync')

let erro = true

/*while (erro === true) {

    let cod = String(input.question("Digite o codigo do aluno: "));
    let nota1 = Number(input.question("Digite a primeira nota: "));
    let nota2 = Number(input.question("Digite a segunda nota: "));
    let nota3 = Number(input.question("Digite a terceira nota: "));

    function aprovacao(media) {
        if (media >= 5) {
            return 'APROVADO'
        } else {
            return 'REPROVADO'
        }
    }

    if (nota1 < 0 || nota2 < 0 || nota3 < 0) {
        erro = false
        console.log('Nota invalida')
    } else if (nota1 > nota2 && nota1 > nota3) {
        nota1 *= 4
        nota2 *= 3
        nota3 *= 3

        media = (nota1 + nota2 + nota3) / 10

        console.log(`Media do aluno cod. ${cod}: ${media}. ${aprovacao(media)}`)
    } else if (nota2 > nota1 && nota2 > nota3) {
        nota2 *= 4
        nota1 *= 3
        nota3 *= 3

        media = (nota1 + nota2 + nota3) / 10

        console.log(`Media do aluno cod. ${cod}: ${media}. ${aprovacao(media)}`)
    } else if (nota3 > nota2 && nota3 > nota1) {
        nota3 *= 4
        nota2 *= 3
        nota1 *= 3

        media = (nota1 + nota2 + nota3) / 10

        console.log(`Media do aluno cod. ${cod}: ${media}. ${aprovacao(media)}`)
    }
}*/

//24
function imprimirHW() {
    let contador = 11

    while (contador > 0) {
        console.log(`${contador} Hello World!`)
        contador--
    }
}

imprimirHW()

//25
function exibir5Num() {
    for (let i = 1; i <= 5; i++) {
        console.log(`${i}`)
    }
}

exibir5Num()

//26
function contarPares(a) {
    let cont = 0
    for (let i = 0; i <= a; i++) {
        if (i % 2 === 0) {
            console.log(i)
            cont++
        }
    }
    console.log(`Contagem de números pares: ${cont}`)
}

contarPares(100)

//27
const crescimento = (alt1, alt2, txCresc1, txCresc2) => {
    let ano = 0
    if (alt1 < alt2) {
        console.log(`A criança de altura ${alt1}cm é a menor`)
        if (txCresc1 > txCresc2) {
            while (alt1 < alt2) {
                alt1 *= txCresc1
                alt2 *= txCresc2
                ano++
            }
            console.log(`Após ${ano} ano(s) a altura da criança menor ultrapassará a da outra criança`)
        }
    } else if (alt2 < alt1) {
        console.log(`A criança de altura ${alt2}cm é a menor`)
        if (txCresc2 > txCresc1) {
            while (alt2 < alt1) {
                alt1 *= txCresc1
                alt2 *= txCresc2
                ano++
            }
            console.log(`Após ${ano} ano(s) a altura da criança menor ultrapassará a da outra criança`)
        }
    } else {
        console.log(`As crianças possuem a mesma altura`)
        if (txCresc2 > txCresc1) {
            while (alt2 < alt1) {
                alt1 *= txCresc1
                alt2 *= txCresc2
                ano++
            }
            console.log(`Após 1 ano a altura da segunda criança ultrapassará a da primeira criança`)
        } else if (txCresc1 > txCresc2) {
            while (alt1 < alt2) {
                alt1 *= txCresc1
                alt2 *= txCresc2
                ano++
            }
            console.log(`Após 1 ano a altura da primeira criança ultrapassará a da segunda criança`)
        }
    }
}

crescimento(140, 120, 1.05, 1.09)
crescimento(140, 120, 1.05, 1.05)
crescimento(140, 140, 1.08, 1.05)
crescimento(140, 140, 1.05, 1.05)

//28
function lerVetor(vetorParImp) {
    let qtdPar = 0
    let qtdImp = 0

    for (let i = 0; i < vetorParImp.length; i++) {
        if (vetorParImp[i] % 2 === 0) {
            qtdPar++
        } else {
            qtdImp++
        }
    }
    console.log(`A quantidade de números pares é ${qtdPar} e de números ímpares é ${qtdImp}`)
}

vetor = [4, 8, 9, 2, 17, 204, 285, 3, 6]
lerVetor(vetor)

//29
function contagemEntre10e20(vetor) {
    let qtdDentro = 0
    let qtdFora = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 10 || vetor[i] > 20) {
            qtdFora++
        } else {
            qtdDentro++
        }
    }
    console.log(`A quantidade de números dentro do intervalo de 10 à 20 é ${qtdDentro} e fora é ${qtdFora}`)
}

vetor = [1, 2, 8, 10, 11, 17, 16, 20, 4, 15, 3]
contagemEntre10e20(vetor)

//30
function maiorMenor(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))

//31
function negativos(vetor) {
    let negativos = 0

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) {
            negativos++
        }

    }
    return `A quantidade de números negativos no vetor é ${negativos}`
}

vetor = [-2, 5, -11, -6, 5, 2, 3, 4, -5]
console.log(negativos(vetor))

//32
function mediaVetor(vetor) {
    let soma = 0

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i]
    }

    return soma / vetor.length
}

vetor = [54, 25, 41]
console.log(mediaVetor(vetor))

//33
let vetor1 = [1, 2, 3, 4]
let vetor2 = ["um", "dois", "três", "quatro"]
let vetor3 = [0.1, 0.2, 0.3, 0.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetor1, vetor2))
console.log(concatenar(vetor3, vetor2))

console.clear()
//34
let string1 = "paulo"
let string2 = "oluap"

function mesmasLetras (string1, string2) {
    let resultado = false

    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}