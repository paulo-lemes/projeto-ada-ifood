// Questão 1 -

console.log("Questão 1");

const horario1 = "06:15:25PM";
// const horario2 = "09:16:12PM";
// const horario3 = "06:15:25AM";
// const horario4 = "00:00:00AM";

function conversorHora(horario) {
    let horaConvertida = horario;
    let doisUltimosDigitos = (horario.slice(8, 10));
    let doisPrimeirosDigitos = Number(horario.slice(0, 2));

    if (doisUltimosDigitos == "PM") {
        for (let i = 1; i < 13; i++) {
            if (doisPrimeirosDigitos == i) {
                doisPrimeirosDigitos += 12
            };
        };
    } else {
        return horario.slice(0, 8)
    };

    horaConvertida = horario.replace(horario.slice(0, 2), doisPrimeirosDigitos);
    return horaConvertida.slice(0, 8);
};

console.log(conversorHora(horario1));
// console.log(conversorHora(horario2));
// console.log(conversorHora(horario3));
// console.log(conversorHora(horario4));

// Questão 2 -

console.log(" ");
console.log("Questão 2");

const frase1 = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
// const frase2 = "codingTankAdaIfood";
// const frase3 = "olá";
const frase4 = "";

function contadorPalavras(frase) {
    let qtd = 0;
    for (let i = 0; i <= frase.length; i++) {
        if (frase.charAt(i) === frase.charAt(i).toUpperCase()) {
            qtd++;
        };
    };
    return qtd;
};

console.log(contadorPalavras(frase1));
// console.log(contadorPalavras(frase2));
// console.log(contadorPalavras(frase3));
console.log(contadorPalavras(frase4));

// Questão 3 - 

console.log(" ");
console.log("Questão 3");

const array1 = [12, 17, 15, 19, 22, 17, 19, 12];
// const array2 = [5, 8, 6, 5, 6];
// const array3 = [1, 1, 1];

function encontrarSolitario(arr) {
    const numSolitario = [];

    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)){
            numSolitario.push(num)
        };
    });
    
    return numSolitario; 
};

console.log(encontrarSolitario(array1));
// console.log(encontrarSolitario(array2));
// console.log(encontrarSolitario(array3));

// Questão 4 - Resposta: E

// Questão 5 - Resposta: A

// Questão 6 - Resposta: B