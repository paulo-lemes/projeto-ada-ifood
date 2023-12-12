// Criar um jogo da forca usando OO;
// Pelo menos três classes para três entidades presentes no sistema do jogo (GameController, Player e Match);
// O usuário deve poder chutar a palavra de uma vez;
// O usuário deve poder jogar/tentar novamente (reiniciar);
// Deve haver uma dica ou tema visualmente indicados;
// O jogo deve possuir pontuação;

const prompt = require('prompt-sync')();

class Match {
    static #conjuntoPalavras = ["vermelho", "amarelo", "azul", "verde"]
    static #conjuntoDicas = ["cor", "cor", "cor", "cor"]

    static inserirPalavraEDica(palavra, dica) {
        if (this.#conjuntoPalavras.includes(palavra.toLowerCase())) {
            console.log(`A palavra já existe.`);
            return
        }
        if (typeof palavra === "string" && typeof dica === "string") {
            this.#conjuntoPalavras.push(palavra.toLowerCase())
            this.#conjuntoDicas.push(dica.toLowerCase())
            console.log(`
Palavra e dica cadastradas com sucesso!

Palavras: ${this.#conjuntoPalavras}
Dicas: ${this.#conjuntoDicas}
`);
            return
        }
        console.log(`Não foi possível cadastrar a palavra e/ou dica.`);
        return
    }

    static sortearPalavra() {
        this.numeroPalavraEDica = parseInt(Math.random() * (this.#conjuntoPalavras.length));
        return this.#conjuntoPalavras[this.numeroPalavraEDica]
    }
    static obterDica(palavra) {
        this.numeroDica = this.#conjuntoPalavras.indexOf(palavra)
        return this.#conjuntoDicas[this.numeroDica]
    }

    #palavraSorteada
    #letrasPalavra
    visualizacaoPalavra
    #palavra

    constructor() {
        this.iniciarPalavra()
    }

    iniciarPalavra() {
        this.#palavraSorteada = Match.sortearPalavra()
        this.#letrasPalavra = this.#palavraSorteada.split("")
        this.visualizacaoPalavra = this.#letrasPalavra.map((letra) => letra = "_")
        this.#palavra = this.#palavraSorteada
        this.dica = Match.obterDica(this.#palavraSorteada)
        this.qtdLetras = this.#palavraSorteada.length
        this.qtdLetrasRestantes = this.qtdLetras
        this.maxTentativas = 6
        this.bonecoForca = ""
        this.pontos = 0
    }

    atualizarPontosEBonecoForca() {
        switch (this.maxTentativas) {
            case 6:
                this.pontos = 750
                break;
            case 5:
                this.pontos = 500
                this.bonecoForca = "O";
                break;
            case 4:
                this.pontos = 300
                this.bonecoForca = `O
|                              |`;
                break;
            case 3:
                this.pontos = 150
                this.bonecoForca = `O
|                             /|`;
                break;
            case 2:
                this.pontos = 50
                this.bonecoForca = `O
|                             /|)`;
                break;
            case 1:
                this.pontos = 25
                this.bonecoForca = `O
|                             /|)
|                             /`;
                break;
            case 0:
                this.bonecoForca = `
|----|
|    O
|   /|) 
|   / )
|_______________|
`;
                break;

            default:
                break;
        }

        return this.pontos
    }

    verificarPalavra() {
        try {
            this.verificarTentativas()
            let palavra = prompt("- Digite a palavra: ");

            if (!palavra) {
                throw new Error(`> Não é possível verificar um caractere vazio.`);
            }

            if (!isNaN(parseInt(palavra))) {
                throw new Error(`> A palavra não possui um número.`);
            }

            if (palavra.length < 3) {
                this.maxTentativas--
                this.atualizarPontosEBonecoForca()
                throw new Error(`> A palavra deve ter no mínimo 3 letras.`);
            }

            if (palavra.toLowerCase() === this.#palavra) {
                this.#letrasPalavra = []
                this.qtdLetrasRestantes = 0
                console.log(`Acertou!`);
                return
            }
            this.maxTentativas--
            this.atualizarPontosEBonecoForca()
            console.log(`Palavra incorreta.`)
        }
        catch (e) { console.log(e.message); }
    }


    verificarLetra() {
        try {
            this.verificarTentativas()
            let letra = prompt("- Digite uma letra: ");

            if (!letra) {
                throw new Error(`> Não é possível verificar um caractere vazio.`);
            }

            if (!isNaN(parseInt(letra))) {
                throw new Error(`> A palavra não possui um número.`);
            }

            if (letra.length > 1) {
                throw new Error(`> Só é possível verificar uma letra por vez.`);
            }

            if (this.#letrasPalavra.includes(letra)) {
                this.atualizarLetras(this.#letrasPalavra, letra, this.visualizacaoPalavra)
                console.log(`
Letra correta!
`)
                return
            }
            this.maxTentativas--
            this.atualizarPontosEBonecoForca()
            console.log(`
Letra incorreta.
`)
        } catch (e) {
            console.error(e.message)
        }
    }

    atualizarLetras(arrayPalavra, letra, arrayVisualizacao) {
        let posicoes = [];
        let indice = arrayPalavra.indexOf(letra);

        while (indice !== -1) {
            posicoes.push(indice);
            arrayVisualizacao[indice] = letra;
            indice = arrayPalavra.indexOf(letra, indice + 1);
            this.qtdLetrasRestantes--
        }

        return arrayVisualizacao;
    }

    verificarTentativas() {
        if (this.maxTentativas < 1) {
            console.log(this.bonecoForca);
            console.log(`O máximo de tentativas foi alcançado.`)
            return true
        }
    }

    get status() {
        if (this.verificarTentativas()) {
            return true
        }

        return this.qtdLetrasRestantes < 1 ? console.log(`Palavra completa!`) : false
    }
}

class GameController {
    constructor(jogo) {
        this.player = jogo
        this.mostrarMenuInicial()
    }

    opcao
    nome
    player
    comoFuncionaPontuacao = `
____________________________________________________________________________

Como funciona a pontuação de acordo com o acerto:

Sem nenhum erro: 750pts
Após um erro: 500pts
Após dois erros: 300pts
Após três erros: 150pts
Após quatro erros: 50pts
Após cinco erros: 25pts

Após o sexto erro, o jogo encerra como derrota e zero pontos somados.
____________________________________________________________________________`;

    mostrarMenuInicial() {
        do {
            console.log(`
____________________________________

        MENU JOGO DA FORCA

   1 - Iniciar novo jogo
   2 - Ver pontuação
   3 - Como funciona a pontuação
   0 - Sair
____________________________________
    `);

            this.opcao = parseInt(prompt("Digite o número da opção desejada: "));

            switch (this.opcao) {
                case 1:
                    let validacao = Player.verificarNome()
                    if (validacao) {
                        this.player.iniciarPalavra()
                        this.iniciarJogo()
                    }
                    break;
                case 2:
                    Player.mostrarPontuacoes()
                    break;
                case 3:
                    console.log(this.comoFuncionaPontuacao);
                    break;

                case 0:
                    console.log(`> Jogo finalizado.`);
                    break;
                default:
                    console.log(`> Opção incorreta! Selecione outra.`);
                    break;
            }

        } while (this.opcao != 0);
    }

    iniciarJogo() {
        do {
            console.log(`
|------------------------------|
|                              ${this.player.bonecoForca}
|
|           Tema/dica: ${this.player.dica}
|
|               ${this.player.visualizacaoPalavra.join(" ")}
|
|          A palavra possui ${this.player.qtdLetras} letras
|       Quantidade de letras restantes: ${this.player.qtdLetrasRestantes}
|     Quantidade de tentativas restantes: ${this.player.maxTentativas}
|    
|   1 - Tentar uma letra
|   2 - Tentar a palavra completa
|   3 - Ver pontuação
|   4 - Como funciona a pontuação
|   5 - Reiniciar jogo
|   0 - Encerrar jogo
|________________________________________________________________________|
    `);

            this.opcao = parseInt(prompt("Digite o número da opção desejada: "));

            switch (this.opcao) {
                case 1:
                    this.player.verificarLetra()
                    this.verificarStatus(this.player.status)
                    break;
                case 2:
                    this.player.verificarPalavra()
                    this.verificarStatus(this.player.status)
                    break;
                case 3:
                    Player.mostrarPontuacoes()
                    break;
                case 4:
                    console.log(this.comoFuncionaPontuacao);
                    break;
                case 5:
                    console.log(`
     Jogo reiniciado com outra palavra sorteada.
            `);
                    this.player.iniciarPalavra()
                    this.iniciarJogo()
                    break;
                case 0:
                    console.log(`> Jogo finalizado.`);
                    Player.mostrarPontuacoes()
                    break;
                default:
                    console.log(`> Opção incorreta! Selecione outra.`);
                    break;
            }

        } while (this.opcao != 0);
    }

    verificarStatus(status) {
        if (status !== false && status !== true) {
            Player.atualizarPontuacao(true, this.player.atualizarPontosEBonecoForca())
            Player.mostrarPontuacoes()
            this.opcao = 0
            this.mostrarMenuInicial()
        }

        if (status) {
            Player.atualizarPontuacao(false)
            Player.mostrarPontuacoes()
            this.opcao = 0
            this.mostrarMenuInicial()
        }
    }
}

class Player {
    static dados = []
    static nome = ""

    static mostrarPontuacoes() {
        if (this.dados.length === 0) {
            console.log(`
> Não existe registro de pontuações.`);
            return
        }
        console.log(`
        PONTUAÇÕES`);
        this.dados.forEach((x) => {
            console.log(` ____________________________________   
|
|    Nome jogador - ${x.nome}
|       Pontuação - ${x.pontuacao} pts
|        Vitórias - ${x.vitorias}
|        Derrotas - ${x.derrotas}
|____________________________________`);
        })
    }

    static inserirInfosPlayer(nome) {
        this.dados.push({ id: this.dados.length + 1, nome: `${nome}`, pontuacao: 0, vitorias: 0, derrotas: 0, data: Date() })
    }

    static verificarNome() {
        try {
            this.nome = prompt("- Digite seu nome: ");

            if (!this.nome) {
                throw new Error(`> Não é possível iniciar com um nome vazio.`);
            }

            if (!isNaN(parseInt(this.nome))) {
                throw new Error(`> O nome não pode ser somente um número.`);
            }

            if (this.nome.length < 3) {
                throw new Error(`> O nome deve ter no mínimo 3 letras.`);
            }

            if (this.dados.findIndex((x) => x.nome.toLowerCase() === this.nome.toLowerCase()) === -1) {
                Player.inserirInfosPlayer(this.nome)
            }
            return true
        } catch (e) {
            console.error(e.message);
        }
    }

    static atualizarPontuacao(resultado, pontuacao) {

        let index = this.dados.findIndex((x) => x.nome.toLowerCase() === this.nome.toLowerCase())

        if (resultado) {
            this.dados[index].pontuacao += pontuacao
            this.dados[index].vitorias++
        } else {
            this.dados[index].derrotas++
        }
    }
}

Match.inserirPalavraEDica("camiseta", "roupa")
Match.inserirPalavraEDica("blusa", "roupa")
Match.inserirPalavraEDica("regata", "roupa")
Match.inserirPalavraEDica("camiseta", "roupa")

console.clear()

let jogo = new Match()
let game = new GameController(jogo)
