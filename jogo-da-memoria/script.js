document.addEventListener("DOMContentLoaded", () => {
  const azul1 = document.getElementById("carro-azul1");
  const azul2 = document.getElementById("carro-azul2");
  const vermelho1 = document.getElementById("carro-vermelho1");
  const vermelho2 = document.getElementById("carro-vermelho2");

  let selecionado = 0;
  let cards = [];

  azul1.addEventListener("click", () => {
    trocarImagem(azul1);
    verificarCards(azul1);
  });
  azul2.addEventListener("click", () => {
    trocarImagem(azul2);
    verificarCards(azul2);
  });
  vermelho1.addEventListener("click", () => {
    trocarImagem(vermelho1);
    verificarCards(vermelho1);
  });
  vermelho2.addEventListener("click", () => {
    trocarImagem(vermelho2);
    verificarCards(vermelho2);
  });

  function verificarCards(element) {
    if (!cards.includes(element)) {
      selecionado++;
      cards.push(element);
    }

    console.log(cards);
    console.log(selecionado);

    if (selecionado === 2) {
      let cardsId = cards.map((element) => (element = element.id.slice(0, -1)));

      console.log(cardsId);

      if (cardsId[0] === cardsId[1]) {
        console.log("Acertou");
      } else {
        console.log("Não acertou");

        // setTimeout(() => {
        voltarImagens();
        // }, 2000)
      }

      selecionado = 0;
      cards = [];
    }
  }

  function trocarImagem(element) {
    element.src = `./src/assets/${element.id}.svg`;
  }

  function voltarImagens() {
    cards[0].src = "./src/assets/default-image.jpg";
    cards[1].src = "./src/assets/default-image.jpg";
  }
});
