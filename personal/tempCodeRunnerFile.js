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