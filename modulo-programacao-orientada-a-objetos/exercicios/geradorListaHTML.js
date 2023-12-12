class ListaNaoOrdenada {
    #itens
    #lista

    constructor(texto) {
        this.#lista = []

        if (texto !== undefined) {
            this.#itens = texto.split(",")
            this.#itens.forEach(texto =>
                this.#lista.push(`<li>${texto}</li>`)
            )
        }

        this.gerarEstrutura()
    }

    gerarEstrutura() {
        return `<html><body><ul>${this.#lista.join("")}</ul></body></html>`
    }

    adicionarItem(texto) {
        this.#lista.push(`<li>${texto}</li>`)
    }


}

let teste = new ListaNaoOrdenada("tarefa 1,tarefa 2")

teste.adicionarItem("tarefa 3")

console.log(teste.gerarEstrutura());