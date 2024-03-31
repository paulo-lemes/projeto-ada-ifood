{
    function cumprimentar(nome) { return "Olá, " + nome + "!" }
    console.log(cumprimentar("Paulo"))
}

{
    function calcularIdadeDias(idadeAnos) { return "A idade de " + idadeAnos + " anos corresponde a " + (idadeAnos) * 365 + " dias." }
    console.log(calcularIdadeDias(24))
}

{
    function calcularSalario(horasTrabalhadas, salarioHora) { return "Salário igual a R$" + horasTrabalhadas * salarioHora }
    console.log(calcularSalario(45, 23.75))
}

{
    function nomeDoMes(numeroDoMes) {
        const mapeamento = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
            "Setembro", "Outubro", "Novembro", "Dezembro"]
        return "O número " + numeroDoMes + " corresponde ao mês " + mapeamento[--numeroDoMes]
    }
    console.log(nomeDoMes(10))
}

{
    function maiorOuIgual(n1, n2) { return Boolean(n1 >= n2) }
    console.log(maiorOuIgual(0, 0))
}

{
    function inverso(valor) {
        const tipo = typeof valor
        if (tipo == Boolean) return !valor
        else if (tipo == Number) return -valor
        else return `Booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`
    }
    console.log(inverso(2000))
}

{
const input = require('readline-sync')

let erro = true

while (erro === true){

let nome = String(input.question("Qual seu nome? "));
let genero = String(input.question("Qual seu genero? Digite M para masculino e F para feminino: "));

if (genero.toUpperCase(genero) === "M"){
    console.log(`Olá, ${nome}! Seja bem-vindo!`)
    erro = false
} else if (genero.toUpperCase(genero) === "F"){
    console.log(`Olá, ${nome}! Seja bem-vinda!`)
    erro = false
} else {
    console.log(`Erro. Insira novamente seu nome e uma opção de genero valida.`)
}
}
}

{
    function criarProduto(nome = "sem nome", preco = 0) {
        return {
            descricao: nome,
            preco,
            desconto: preco*0.1,
            total: preco*0.9
        }
    }

    console.log(criarProduto("lápis", 10))
    console.log(criarProduto("notebook", 4000))
    console.log(criarProduto('',2000))
}