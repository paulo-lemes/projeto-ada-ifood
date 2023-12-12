// 1. Aplicação de classe ContaDeBanco
// 2. Ao criar essa classe, a gente vai ter o nome da pessoa que tem conta no banco, saldo dessa pessoa
// 3. Propriedade privada do saldo dela
// 4. Propriedade que fala se pode pedir empréstimo, se o saldo dessa pessoa for maior que R$ 2000
// 5. Propriedade que retorna o a seguinte string "O cliente [nome do cliente] possui XXXX de saldo no banco". Esta propriedade pode chamar Status
// 6. Todas as propriedades da classe criado no passo 2, devem ser priv

class ContaDeBanco {
    #nome
    #saldo
    
    constructor(nome, saldo) {
        this.#nome = nome
        this.#saldo = saldo
    }

    set nome(nome) {
        this.#nome = nome
    }

    set saldo(saldo) {
        this.#saldo = saldo
    }

    get emprestimo() {
        if (this.#saldo < 2000) {
            return "Não é possível solicitar empréstimo."
        }

        return "Empréstimo pode ser solicitado."
    }

    get status() {
        return `O cliente ${this.#nome} possui R$${this.#saldo} de saldo no banco.`
    }
}

const conta1 = new ContaDeBanco("Paulo Lemes", 3500)

console.log(conta1.emprestimo);
console.log(conta1.status);

conta1.saldo = 1500

console.log(conta1.emprestimo);