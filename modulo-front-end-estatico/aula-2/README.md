# Atividade de fixação 2 (escopo fechado):
Criar uma tabela com um uso de colspan e um uso de rowspan;
Criar uma lista ordenada e uma lista não ordenada;
Aplicar uma classe pelo menos em uma tag;


# [Frontend Estático] Atividades Aula 2

![gif-dragon-ball.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/5cab28ee-6e0e-4748-bd05-3239a4877a87/gif-dragon-ball.gif)

## Atividade 1 - Classificação de Filmes

Você é um amante de cinema e deseja organizar sua coleção de filmes para compartilhar com teus amigos. Para isso resolve criar um site com algumas listas dos títulos mais icônicos que você assistiu nos últimos tempos.  

- Lista não ordenada: 6 títulos de filmes assistidos recentemente
- Lista ordenada: Top 5 filmes favoritos.

## Atividade 2 - Quadro de notas

Você é um estudante que deseja criar uma tabela para acompanhar suas notas em diferentes disciplinas ao longo de um trimestre. Crie uma tabela HTML que inclua os seguintes campos:

1. **Disciplinas:** Liste pelo menos duas disciplinas que você está estudando
2. **Notas:** Inclua duas colunas para as notas obtidas em cada disciplina (Nota 1 e Nota 2).
3. **Média:** Calcule e inclua uma coluna para a média das notas em cada disciplina.
    
    ![Captura de Tela 2023-10-05 às 20.35.48.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/bf05beff-dc28-4ea1-be9f-c375d1464685/Captura_de_Tela_2023-10-05_as_20.35.48.png)
    

## Atividade 3 - Pacotes Turísticos

Você é um agente de viagens e deseja criar uma tabela para fornecer informações sobre pacotes turísticos para diferentes destinos. Crie uma tabela HTML que represente um resumo de dois pacotes turísticos para destinos diferentes. A tabela deve incluir as seguintes informações para cada pacote:

- Destino
- Duração da Viagem
- Atividades Incluídas
- Preço por Pessoa
- Vagas Disponíveis
    
    ![Captura de Tela 2023-10-05 às 21.14.56.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/19ad57b3-5454-4413-8e92-422bf0b23607/Captura_de_Tela_2023-10-05_as_21.14.56.png)
    

## Atividade 4 - Nossa página de filmes

Você é um designer de front-end talentoso que foi contratado para dar uma nova aparência à página de filmes da Marvel. Sua tarefa é tornar esta página ainda mais espetacular e atraente para os fãs da Marvel que visitam o site. A seguir, estão as etapas do seu desafio:

- **Utilizar CSS vanilla:** A  manutenção do site será realizada pelo sobrinho do cliente, então o código precisa ser simples e direto.
- **Estilize o cabeçalho:** Dê um toque especial ao cabeçalho. Mude a cor de fundo, estilize as fontes e adicione elementos que remetam à Marvel. Certifique-se de que o título "Filmes da Marvel" se destaque.
- **Lista dos filmes:** A lista ordenada dos filmes da Marvel deve ser visualmente atraente. Estilize os itens da lista, adicione ícones ou símbolos relacionados à Marvel e ajuste as cores para cada filme.
- **Tabela de classificação:** Faça a tabela de classificação dos filmes brilhar. Estilize as células da tabela, mude as cores das bordas e coloque a avaliação em destaque.

Utilize o código HTML abaixo para iniciar seu projeto

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Filmes da Marvel</title>
</head>
<body>
    <h1>Filmes da Marvel</h1>
    <p>Os melhores filmes do Universo Cinematográfico da Marvel.</p>

    <ol>
        <li>Vingadores: Ultimato</li>
        <li>Pantera Negra</li>
        <li>Homem de Ferro</li>
        <li>Guardiões da Galáxia</li>
        <li>Thor: Ragnarok</li>
    </ol>

    <h2>Tabela de Classificação</h2>
    <table border="1">
        <tr>
            <th>Filme</th>
            <th>Avaliação</th>
        </tr>
        <tr>
            <td>Vingadores: Ultimato</td>
            <td>9/10</td>
        </tr>
        <tr>
            <td>Pantera Negra</td>
            <td>8/10</td>
        </tr>
        <tr>
            <td>Homem de Ferro</td>
            <td>8.5/10</td>
        </tr>
        <tr>
            <td>Guardiões da Galáxia</td>
            <td>8.5/10</td>
        </tr>
        <tr>
            <td>Thor: Ragnarok</td>
            <td>7.5/10</td>
        </tr>
    </table>
</body>
</html>
```

## Atividade 5 - Conflitos de CSS

Hoje é a festa de lançamento do novo portal de serviços do IEat, mas no último teste realizado pela equipe de QA fomos notificados que as corres não estão respeitando o que foi definido pela equipe de Design. Precisamos entender e corrigir o problema o mais rápido possível, pois a festa está para começar.

Esta é nossa página de referencia

![Captura de Tela 2023-10-08 às 18.03.16.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/c1091fc9-52a6-4118-bfae-6f8b5b2cac9c/Captura_de_Tela_2023-10-08_as_18.03.16.png)

Para corrigir o código, baixe a pasta iEat.zip disponível no drive compartilhado da ADA, analise o código e faça as correções necessárias. 

**Extras:**

- Altere a fonte do projeto para Roboto
- Transforme cada um dos boxes de serviço em uma ancora para outro site (pode usar o google como href)
- Adicione efeito de hover ao passar o mouse sobre cada um dos boxes de serviços

## Nosso desafio de hoje

Imagine que você é responsável por organizar a rotina semanal de uma família. Sua tarefa é criar uma lista de compras e uma lista de afazeres para a próxima semana. A família é composta por quatro pessoas: pai, mãe, filho adolescente e filha de 10 anos. Cada membro da família tem suas próprias preferências alimentares e necessidades de afazeres. 

## Atividade 6 [entrega] - Organização Familiar

Considerando nosso desafio, vamos criar uma página para visualizar as  informações da sua organização da rotina da familia.

Aqui estão algumas informações sobre eles:

- O pai é vegetariano e gosta de cozinhar pratos saudáveis. Ele também pratica esportes e precisa de alimentos ricos em proteínas.
- A mãe é alérgica a nozes e frutos do mar, mas gosta de comida picante.
- O filho adolescente está em uma fase de crescimento e precisa de lanches saudáveis para levar para a escola.
- A filha de 10 anos adora comida italiana e está aprendendo a tocar piano.

**Requisitos:**

1. Para facilitar a visualização, utilize cores diferentes para cada membro da família. Use esse padrão nas listas e no cardápio. 
2. Liste os itens de supermercado necessários para satisfazer as necessidades alimentares de todos os membros da família durante a semana.
    
    ![Captura de Tela 2023-10-04 às 21.56.04.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/fd66298c-0c26-4ffb-8f63-ea3f9d4f86b4/Captura_de_Tela_2023-10-04_as_21.56.04.png)
    
3. Crie um cardápio semanal que inclua pratos que agradem a todos e leve em consideração as preferências alimentares e atividades de cada um. 
    
    ![Captura de Tela 2023-10-04 às 22.01.38.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/35d09a94-f1fc-49c1-980a-b886884d21b6/Captura_de_Tela_2023-10-04_as_22.01.38.png)
    
4. Elabore uma lista, conforme o modelo abaixo, de afazeres para a semana, distribuindo tarefas como cozinhar, fazer compras, levar o filho à escola, praticar esportes, ajudar a filha com as aulas de piano, etc.
    
    ![Captura de Tela 2023-10-04 às 21.56.29.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/9f29284f-4e16-4ce5-a570-5f0bd85bf977/9336b008-b718-4562-88ba-08a00f3f296f/Captura_de_Tela_2023-10-04_as_21.56.29.png)
    

<aside>
💡 A entrega pode ser feita no link >> https://dontpad.com/vemsertechAula2

</aside>

---

## Atividade Extra - Pacotes turísticos para o Marketing

Você é um designer de experiência do usuário prestigiado que foi contratado por uma agência de viagens líder no setor. Sua missão é transformar uma página de pacotes turísticos monótona em uma aventura visual emocionante que inspire viajantes em potencial a explorar o mundo. A seguir, estão as etapas do seu desafio:

- **Use CSS vanilla:** A agência de viagens está com o buget curto, a manutenção do site será feita por você uma vez a cada dois anos, lembre-se o Eu do futuro precisa entender o que o Eu do presente está pensando.
- **Destaque os pacotes:** Cada pacote turístico merece destaque. Estilize as caixas de pacotes com cores vibrantes, ícones relacionados ao destino e detalhes atraentes. Certifique-se de que os preços e detalhes sejam facilmente visíveis.
- **Personalizar as fontes:** Escolha fontes legíveis, adicione espaçamento adequado e use estilos de texto que capturem a imaginação do viajante.