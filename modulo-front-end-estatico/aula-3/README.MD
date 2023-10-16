# Atividade de fixação 3 (escopo fechado):
Criar um formulário;
Utilizar labels com for para cada input;
Utilizar as propriedades id e name;
Utilizar pelo menos 5 tipos de inputs diferentes;
Utilizar uma API (dada pelo professor) para registrar os dados;

# [Frontend Estático] Atividades Aula 3

![travel-planning__1_.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/ab59cb88-a0e7-4a28-bf94-5e70619da12d/travel-planning__1_.gif)

## Atividade 1 - Agência ✈️ TravelMundo

Você é o desenvolvedor do um site de reservas de viagens chamado "TravelMundo". 

![_36d4613f-7a34-4b3c-8c0b-2962015633c6.jpeg](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/667d04ab-2cdc-4dd9-ad0f-e5c88da0bc42/_36d4613f-7a34-4b3c-8c0b-2962015633c6.jpeg)

A empresa deseja criar uma página de reserva que ofereça uma experiência intuitiva e fácil de usar para os usuários. No entanto, você precisa escolher o tipo correto de campo de entrada HTML para cada parte do processo de reserva. 

Crie uma página HTML (CSS é opcional) que contenha o formulário de reserva com o tipo correto de campo de entrada para cada um dos cenários trazidos pelo cliente. 

Aqui estão as situações em que você deve escolher o tipo apropriado de campo de entrada:

- **Cenário 1:** Para permitir que os usuários insiram seu nome completo ao fazer uma reserva de viagem.
- **Cenário 2:** Para que os usuários escolham a data de partida de sua viagem.
- **Cenário 3:** Para que os usuários informem o número de passageiros.
- **Cenário 4:** Para que os usuários selecionem seu país de residência a partir de uma lista suspensa.
- **Cenário 5:** Para que os usuários insiram seu endereço de e-mail ao fazer uma reserva.
- **Cenário 6:** Para que os usuários escolham o tipo de refeição desejado durante o voo (por exemplo, vegetariana, sem glúten, padrão) [uma refeição].
- **Cenário 7:** Para permitir que os usuários insiram o número de telefone de contato durante o processo de reserva.
- **Cenário 8:** Para que os usuários escolham o destino da viagem entre várias opções (por exemplo, Paris, Londres, Nova York, Tóquio).
- **Cenário 9:** Para que os usuários indiquem se têm alguma preferência de assento (por exemplo, janela, corredor, próximo à saída de emergência) durante o voo.
- **Cenário 10:** Para que os usuários insiram os detalhes do cartão de crédito ao efetuar o pagamento da reserva.
- **Cenário 11:** Para que os usuários façam o upload de uma cópia digitalizada de seu passaporte como parte do processo de reserva para viagens internacionais.
- **Cenário 12**: Para que os usuários possam selecionar as opções de preferências de serviço, como serviço de quarto, traslado do aeroporto e passeis turisticos adicionais. É possível escolher várias opções.

## Atividade 2 - Realizando a reserva da TravelMundo

Agora que você criou o formulário de reserva de viagem para o "TravelMundo," é hora de simular a submissão do formulário e entender como os dados seriam processados.

- Utilize o método GET para enviar os dados
- Verifique se os dados foram enviados corretamente, utilize o console do navegador.

```jsx
const urlParams = window.location.search
```

## Atividade 3 - Refatorando a reserva

Você avançou em conhecimentos como desenvolvedor e agora irá persistir os dados da reserva usando o servidor da agência. 

- Utilize o método POST para enviar os dados
- Verifique se os dados foram enviados corretamente

> *Lembre-se, como o servidor foi desenvolvido pelo sobrinho do dono da agência então ele ainda não está completo, você terá apenas o JSON como resposta.*
> 

<aside>
💡 Para esta atividade vamos precisar da fake API. Baixe o arquivo **TravelMundo.zip** no drive da aula.

</aside>

## Nosso desafio de hoje

Você é um desenvolvedor web experiente e está participando de um projeto para uma organização sem fins lucrativos. A organização está se preparando para um evento de arrecadação de fundos para uma causa nobre. Eles precisam de um sistema de registro eficiente para acompanhar e receber inscrições dos participantes. O evento envolve a corrida anual "**Ajude a Causa**" em que pessoas de todas as idades se reúnem para correr e contribuir com doações para uma instituição de caridade local.

## Atividade 4 [entrega] - Evento da ONG Ajude a Causa

O problema é que a organização está recebendo um grande número de inscrições manualmente por e-mail e telefone, o que é demorado e propenso a erros. Além disso, eles não têm uma maneira eficaz de rastrear as doações e os detalhes dos participantes. Eles precisam urgentemente de um sistema de registro online para tornar o processo mais fácil, rápido e preciso.

**Tarefa**

Sua missão é criar um formulário de registro de participantes para o evento "Ajude a Causa". O formulário deve coletar informações essenciais dos participantes, como nome, idade, endereço de e-mail e tamanho da camiseta. Além disso, o formulário deve incluir opções para escolher entre diferentes categorias de inscrição e permitir que os participantes façam doações voluntárias. Uma vez preenchido, o formulário deve enviar os dados para uma API de registro fornecida pela organização, que registrará oficialmente os participantes e suas doações.

**Campos do formulário**

- Nome do participante
- Idade
- E-mail
- Tamanho camiseta [P/M/G/GG/XG]
- Categoria de inscrição
    - Corrida 3km [3RUN]
    - Corrida 5km [5RUN]
    - Caminhada 4km [4WALK]
- Valor da Doação

**Extras**

- Estilizar a pagina usando CSS vanilla
- Validação de campos

<aside>
💡 Nesta atividade iremos utilizar o Json-server como API. Baixe o arquivo **AjudeACausa** no drive da disciplina. Lembre-se de inicializar o servidor estando dentro da pasta onde está o arquivo `db.json`

</aside>

<aside>
💡 **A entrega deve ser feita no link** >>> https://dontpad.com/vemsertechAula3

</aside>

---

# Materiais Extras

### Instalação da Fake API - Json Server

https://www.npmjs.com/package/json-server

- Pré-requisitos
    - NodeJS 12+ >> https://nodejs.org/pt-br
    - NPM >> https://rockcontent.com/br/blog/npm/

Vamos instalar de forma global no computador, utilize o seguinte comando no `cmd`

```bash
npm install -g json-server
```

Após a instalação podemos criar estruturas JSON que irão simular o backend. 

Para rodar o servidor utilizamos o seguinte comando (na pasta onde se encontra o a estrutura JSON criada)

```bash
json-server db.json 
```

### Lista de Inputs HTML

```html
<form>
    <div>
      <label for="text">Texto:</label>
      <input type="text" id="text" name="text" />
    </div>
    <div>
      <label for="password">Senha:</label>
      <input type="password" id="password" name="password" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>
    <div>
      <label for="number">Número:</label>
      <input type="number" id="number" name="number" />
    </div>
    <div>
      <label for="tel">Telefone:</label>
      <input type="tel" id="tel" name="tel" placeholder="(12)12345-6789" pattern="[0-9]{2}[0-9]{5}-[0-9]{4}" />
    </div>
    <div>
      <label for="date">Data:</label>
      <input type="date" id="date" name="date" />
    </div>
    <div>
      <label for="checkbox">Checkbox:</label>
      <input type="checkbox" id="checkbox" name="checkbox" />
    </div>
    <div>
      <label for="radio">Radio:</label>
      <input type="radio" id="radio" name="radio" />
    </div>
    <div>
      <label for="file">Arquivo:</label>
      <input type="file" id="file" name="file" />
    </div>
    <div>
      <label for="range">Intervalo:</label>
      <input type="range" id="range" name="range" />
    </div>
    <div>
      <label for="color">Cor:</label>
      <input type="color" id="color" name="color" />
    </div>
    <div>
     <button type="submit" >Enviar</button>
    </div>
  </form>
```

### Input text + label + for + propriedade "id”

A relação entre os elementos HTML `input` (tipo `text`), `label`, os atributos `for` e `id` é uma parte importante da acessibilidade e usabilidade de formulários web. Vamos analisar cada elemento e atributo e explicar como eles se relacionam:

1. **`<input type="text">`:** O elemento `<input>` com `type="text"` é usado para criar um campo de entrada de texto em um formulário web. Isso permite que os usuários insiram texto, como nomes, endereços de e-mail, mensagens, etc.
2. **`<label>`:** O elemento `<label>` é usado para rotular um campo de entrada em um formulário. O rótulo fornece uma descrição ou identificação do campo, tornando-o mais acessível e compreensível para os usuários.
3. **`for` e `id`:** O atributo `for` em um elemento `<label>` e o atributo `id` em um elemento `<input>` estão relacionados. Através da propriedade `for`, um rótulo é associado a um campo de entrada específico. O valor do atributo `for` deve corresponder ao valor do atributo `id` do campo de entrada que o rótulo está rotulando.

**Exemplo de Uso:**

```html
<label for="nome">Nome:</label>
<input type="text" id="nome" name="nome" required>
```

Neste exemplo, o rótulo "Nome:" está associado ao campo de entrada de texto. O atributo `for` do `<label>` tem o valor "nome", que corresponde ao atributo `id` do campo de entrada `<input>`. Essa associação entre o rótulo e o campo de entrada permite que os usuários cliquem no rótulo para ativar o campo de entrada correspondente, tornando a interação mais fácil e acessível.

Em resumo, a relação entre `input` (tipo `text`), `label`, `for` e `id` é usada para criar rótulos descritivos para campos de entrada em formulários e melhorar a usabilidade e acessibilidade, garantindo que os rótulos estejam associados aos campos corretos. Isso também é útil para dispositivos de auxílio, como leitores de tela, que podem ler os rótulos para os usuários, facilitando a compreensão do formulário.