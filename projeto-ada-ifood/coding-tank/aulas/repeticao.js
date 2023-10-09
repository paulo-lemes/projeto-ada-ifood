document.write("<h2>Alfabeto com letras minúsculas utilizando tabela ASCII</h2>")

let contador = 97;
let limite = 122;

while (contador <= limite){
    document.write(String.fromCharCode(contador), " ");
    contador++;
}

document.write("<h2>Códigos decimais da frase 'Coding Tank Ifood'</h2>")

contador = 0;

const frase = "Coding Tank Ifood";

while (contador < frase.length){
    document.write(frase.charCodeAt(contador), " ");
    contador++;
}

document.write("<h2>Números pares de 100 à 2</h2>")

for (let i = 100; i >= 2; i -= 2) {
    document.write(i)
    if (i > 2){
    document.write(" - ")
    }
}

document.write("<h2>Asteríscos</h2>")

for (let i = 0; i < 5; i++) {
    for(let i = 0; i < 10; i++){
        document.write('*')
    }
    document.write("<br>")
}