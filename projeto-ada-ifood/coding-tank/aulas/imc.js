console.log('IMC')

function calcularIMC () {
const peso = document.getElementById("peso").value
const altura = document.getElementById("altura").value

const imc = peso/(altura**2)

document.getElementById("resultado").textContent = imc.toFixed(2)
}