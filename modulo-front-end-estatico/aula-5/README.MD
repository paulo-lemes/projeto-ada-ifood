# [Frontend Estático] Atividades Aula5

## Atividade 1 : Seletores

1. **Seletor de Tag:**
    - Exercício 1: Selecione e estilize todos os elementos `<p>` em uma página.
    
    ```html
    <p>Este é o primeiro parágrafo.</p>
    <p>Este é o segundo parágrafo.</p>
    <p>Este é o terceiro parágrafo.</p>
    ```
    
2. **Seletor de Classe:**
    - Exercício 2: Selecione e estilize todos os elementos com a classe "destacado".
    
    ```html
    <p class="destacado">Este parágrafo é destacado.</p>
    <div class="destacado">Esta div também é destacada.</div>
    <span>Não é destacado.</span>
    ```
    
3. **Seletor de ID:**
    - Exercício 3: Selecione e estilize o elemento com o ID "titulo".
    
    ```html
    <h1 id="titulo">Este é o título da página.</h1>
    <p>Este é um parágrafo.</p>
    ```
    
4. **Seletor de Atributo:**
    - Exercício 4: Selecione e estilize todos os links (`<a>`) que tenham o atributo `target` definido.
    
    ```html
    <a href="<https://www.example.com>">Link sem target</a>
    <a href="<https://www.example.com>" target="_blank">Link com target</a>
    <a href="<https://www.example.com>" target="_self">Outro link com target</a>
    ```
    

## Atividades 2: Combinadores

**Descendente (espaço em branco)**

Exercício: Selecione e estilize todos os elementos `<span>` que são descendentes de um elemento com a classe "destacado".

```html
<div class="destacado">
  <p>Parágrafo dentro de um elemento destacado.</p>
  <span>Span dentro de um elemento destacado - Este será estilizado de forma diferente</span>
</div>
<p>Parágrafo fora do elemento destacado.</p>
<span>Outro span - Este também será estilizado de forma diferente</span>
```

Exercício: Selecione e estilize todos os elementos de lista (`<li>`) que são descendentes de uma lista não ordenada (`<ul>`).

```html
<ul>
  <li>Item 1 - Este será estilizado de forma diferente</li>
  <li>Item 2 - Este também será estilizado de forma diferente</li>
</ul>
<ol>
  <li>Item 3</li>
  <li>Item 4</li>
</ol>
```

**Filho (`>`)**

Exercício: Selecione e estilize todos os `<li>` que são filhos diretos de uma lista não ordenada (`<ul>`).

HTML:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
<ul>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

Exercício: Selecione e estilize todos os `<h2>` que são filhos diretos de uma `<div>` com a classe "conteúdo".

```html
<div class="conteúdo">
  <h2>Título 1</h2>
  <p>Parágrafo 1</p>
</div>
<div class="conteúdo">
  <h2>Título 2</h2>
  <p>Parágrafo 2</p>
</div>
```

**Irmão Geral (`~`)**

Exercício: Selecione e estilize todos os parágrafos que são irmãos gerais do primeiro parágrafo.

```html
<p>Primeiro parágrafo</p>
<div>Primeira div</div>
<p>Segundo parágrafo - Este será estilizado de forma diferente</p>
<span>Primeiro span</span>
<p>Terceiro parágrafo - Este também será estilizado de forma diferente</p>
```

Exercício: Selecione e estilize a segunda tabela (`<table>`) que é irmã geral da primeira tabela.

```html
<table>
  <tr>
    <th>Cabeçalho 1</th>
    <th>Cabeçalho 2</th>
  </tr>
  <tr>
    <td>Dado 1</td>
    <td>Dado 2</td>
  </tr>
</table>
<table>
  <tr>
    <td>Dado 3 - Esta tabela será estilizada de forma diferente</td>
    <td>Dado 4</td>
  </tr>
</table>
```

**Irmão Adjacente (`+`)**

Exercício: Selecione e estilize o segundo parágrafo que é irmão adjacente do primeiro parágrafo.

```html
<p>Primeiro parágrafo</p>
<p>Segundo parágrafo</p>
<div>Terceiro elemento</div>
```

Exercício: Selecione e estilize a segunda lista não ordenada (`<ul>`) que é irmã adjacente da primeira lista não ordenada.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ul>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

## Atividade 3: Pseudo classes

Temos uma lista de exercicios para você treinar as pseudo classes, não existe certo ou errado, a proposta é treinar a utilização.

1. `:nth-child`
    - Exercício 1: Selecione e estilize o terceiro elemento de uma lista não ordenada.
    
    ```jsx
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
    ```
    
    - Exercício 2: Selecione e estilize todos os elementos pares de uma lista ordenada.
    
    ```jsx
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ol>
    ```
    
2. `:nth-of-type`
    - Exercício 3: Selecione e estilize o quarto elemento `<p>` de uma página.
    
    ```jsx
    <p>Primeiro parágrafo</p>
    <p>Segundo parágrafo</p>
    <p>Terceiro parágrafo</p>
    <p>Quarto parágrafo</p>
    <p>Quinto parágrafo</p>
    ```
    
    - Exercício 4: Selecione e estilize todos os terceiros elementos `<div>` dentro de uma `<section>`.
    
    ```jsx
    <section>
      <div>Primeiro elemento div</div>
      <div>Segundo elemento div</div>
      <div>Terceiro elemento div</div>
      <div>Quarto elemento div</div>
      <div>Quinto elemento div</div>
    </section>
    ```
    
3. `:not`
    - Exercício 5: Selecione e estilize todos os parágrafos que não têm a classe "destacado".
    
    ```jsx
    <p class="destacado">Parágrafo destacado</p>
    <p>Parágrafo normal</p>
    <p>Outro parágrafo normal</p>
    <p class="destacado">Outro parágrafo destacado</p>
    ```
    
    - Exercício 6: Selecione e estilize todos os links `<a>` que não possuem uma classe específica.
    
    ```jsx
    <a href="#" class="link-especial">Link especial</a>
    <a href="#">Link normal</a>
    <a href="#">Outro link normal</a>
    <a href="#" class="link-especial">Outro link especial</a>
    ```
    
4. `:has`
    - Exercício 7: Selecione e estilize uma tabela `<table>` que possui pelo menos uma célula de cabeçalho `<th>`.
    
    ```jsx
    <table border="1">
      <tr>
        <th>Cabeçalho 1</th>
        <th>Cabeçalho 2</th>
      </tr>
      <tr>
        <td>Dado 1</td>
        <td>Dado 2</td>
      </tr>
    </table>
    <table border="1">
      <tr>
        <td>Dado 3</td>
        <td>Dado 4</td>
      </tr>
    </table>
    ```
    
5. `:empty`
    - Exercício 8: Selecione e estilize todos os elementos `<div>` que estão vazios.
    
    ```jsx
    <div></div>
    <div>Uma div que será que está vazia?</div>
    <div></div>
    ```
    
    - Exercício 9: Selecione e estilize todos os elementos `<span>` que não possuem texto dentro deles.
    
    ```jsx
    <span></span>
    <span>Este elemento está vazio?</span>
    <span></span>
    ```
    
6. `:last-child`
    - Exercício 10: Selecione e estilize o último elemento de uma lista não ordenada.
    
    ```jsx
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul>
    ```
    
    - Exercício 11: Selecione e estilize o último parágrafo em um bloco de texto.
    
    ```jsx
    <p>Primeiro parágrafo</p>
    <p>Segundo parágrafo</p>
    <p>Terceiro parágrafo</p>
    <p>Último parágrafo</p>
    ```
    
7. `:first-child`
    - Exercício 12: Selecione e estilize o primeiro elemento de uma lista ordenada.
    
    ```jsx
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ol>
    ```
    
    - Exercício 13: Selecione e estilize o primeiro cabeçalho de nível 3 (`<h3>`) em uma página.
    
    ```jsx
    <h3>Primeiro cabeçalho h3</h3>
    <h3>Segundo cabeçalho h3</h3>
    <h3>Terceiro cabeçalho h3</h3>
    ```
    
8. `:is` ou `:where`
    - Exercício 14: Use `:is` para selecionar e estilizar todos os elementos de lista (`<ul>` ou `<ol>`) em uma página.
    
    ```jsx
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <ol>
      <li>Item 3</li>
      <li>Item 4</li>
    </ol>
    ```
    
    - Exercício 15: Use `:where` para selecionar e estilizar todos os links (`<a>`) que estão dentro de uma div com a classe "conteúdo".
    
    ```jsx
    <div class="conteúdo">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
    </div>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
    ```
    

---

As respostas são sugestões de resolução para as atividades.

### Resposta lista Seletores

1. **Seletor de Tag:**
    - Exercício: Selecione e estilize todos os elementos `<p>` em uma página.
    
    CSS:
    
    ```css
    p {
      background-color: lightyellow;
      padding: 10px;
      border: 1px solid #ccc;
      font-size: 18px;
    }
    ```
    
2. **Seletor de Classe:**
    - Exercício: Selecione e estilize todos os elementos com a classe "destacado".
    
    CSS:
    
    ```css
    .destacado {
      background-color: lightblue;
      color: white;
      font-weight: bold;
    }
    
    ```
    
3. **Seletor de ID:**
    - Exercício: Selecione e estilize o elemento com o ID "titulo".
    
    CSS:
    
    ```css
    #titulo {
      font-size: 24px;
      color: darkgreen;
      text-decoration: underline;
    }
    
    ```
    
4. **Seletor de Atributo:**
    - Exercício: Selecione e estilize todos os links (`<a>`) que tenham o atributo `target` definido.
    
    CSS:
    
    ```css
    a[target] {
      color: red;
      font-weight: bold;
      text-decoration: none;
    }
    
    ```
    

### Resposta lista combinadores

**Combinador: Descendente (espaço em branco)**

1. Exercício: Selecione e estilize todos os elementos `<span>` que são descendentes de um elemento com a classe "destacado".
    
    CSS:
    
    ```css
    .destacado span {
      background-color: #f0f0f0;
      color: blue;
    }
    ```
    
2. Exercício: Selecione e estilize todos os elementos de lista (`<li>`) que são descendentes de uma lista não ordenada (`<ul>`).
    
    CSS:
    
    ```css
    ul li {
      font-weight: bold;
      color: green;
    }
    ```
    

**Combinador: Filho (`>`)**

1. Exercício: Selecione e estilize todos os `<li>` que são filhos diretos de uma lista não ordenada (`<ul>`).
    
    CSS:
    
    ```css
    ul > li {
      background-color: #ffeeaa;
      font-weight: bold;
    }
    ```
    
2. Exercício: Selecione e estilize todos os `<h2>` que são filhos diretos de uma `<div>` com a classe "conteúdo".
    
    CSS:
    
    ```css
    .conteúdo > h2 {
      font-size: 24px;
      color: purple;
    }
    ```
    

**Combinador: Irmão Geral (`~`)**

1. Exercício: Selecione e estilize todos os parágrafos que são irmãos gerais do primeiro parágrafo.
    
    CSS:
    
    ```css
    p ~ p {
      background-color: #f2f2f2;
      border: 1px solid #ddd;
    }
    ```
    
2. Exercício: Selecione e estilize a segunda tabela (`<table>`) que é irmã geral da primeira tabela.
    
    CSS:
    
    ```css
    table ~ table {
      border: 2px solid red;
      background-color: #ffcccc;
    }
    ```
    

**Combinador: Irmão Adjacente (`+`)**

1. Exercício: Selecione e estilize o segundo parágrafo que é irmão adjacente do primeiro parágrafo.
    
    CSS:
    
    ```css
    p + p {
      font-weight: bold;
      color: blue;
    }
    ```
    
2. Exercício: Selecione e estilize a segunda lista não ordenada (`<ul>`) que é irmã adjacente da primeira lista não ordenada.
    
    CSS:
    
    ```css
    ul + ul {
      background-color: green;
      font-style: italic;
    }
    ```
    

### Resposta da lista de Pseudo Classes

Claro, aqui estão as regras CSS para cada exercício:

1. `:nth-child`
    - Exercício 1: Selecione e estilize o terceiro elemento de uma lista não ordenada.

CSS:

```css
ul li:nth-child(3) {
  color: red;
  font-weight: bold;
}
```

- Exercício 2: Selecione e estilize todos os elementos pares de uma lista ordenada.

CSS:

```css
ol li:nth-child(even) {
  color: blue;
  font-style: italic;
}
```

1. `:nth-of-type`
    - Exercício 3: Selecione e estilize o quarto elemento `<p>` de uma página.

CSS:

```css
p:nth-of-type(4) {
  background-color: yellow;
  color: black;
}
```

- Exercício 4: Selecione e estilize todos os terceiros elementos `<div>` dentro de uma `<section>`.

CSS:

```css
section div:nth-of-type(3) {
  border: 2px solid green;
  padding: 10px;
}
```

1. `:not`
    - Exercício 5: Selecione e estilize todos os parágrafos que não têm a classe "destacado".

CSS:

```css
p:not(.destacado) {
  font-weight: normal;
  color: gray;
}
```

- Exercício 6: Selecione e estilize todos os links `<a>` que não possuem uma classe específica.

CSS:

```css
a:not(.link-especial) {
  text-decoration: underline;
  color: #333;
}
```

1. `:has` (Nota: `:has` ainda não é amplamente suportado pelos navegadores.)
- Exercício 7: Selecione e estilize uma tabela `<table>` que possui pelo menos uma célula de cabeçalho `<th>`.

CSS:

```css
table:has(th) {
  border: 1px solid #ccc;
  background-color: #eee;
}
```

1. `:empty`
    - Exercício 8: Selecione e estilize todos os elementos `<div>` que estão vazios.

CSS:

```css
div:empty {
  border: 1px dashed red;
	padding: 10px;
  background-color: pink;
}
```

- Exercício 9: Selecione e estilize todos os elementos `<span>` que não possuem texto dentro deles.

CSS:

```css
span:empty {
	background-color: yellow;
  padding: 10px;
  color: lightgray;
}
```

1. `:last-child`
    - Exercício 10: Selecione e estilize o último elemento de uma lista não ordenada.

CSS:

```css
ul li:last-child {
  font-weight: bold;
  color: green;
}
```

- Exercício 11: Selecione e estilize o último parágrafo em um bloco de texto.

CSS:

```css
p:last-child {
  background-color: #ffcc00;
  font-weight: bold;
}
```

1. `:first-child`
    - Exercício 12: Selecione e estilize o primeiro elemento de uma lista ordenada.

CSS:

```css
ol li:first-child {
  font-weight: bold;
  color: blue;
}
```

- Exercício 13: Selecione e estilize o primeiro cabeçalho de nível 3 (`<h3>`) em uma página.

CSS:

```css
h3:first-child {
  font-size: 24px;
  color: purple;
}
```

1. `:is` ou `:where`
    - Exercício 14: Use `:is` para selecionar e estilizar todos os elementos de lista (`<ul>` ou `<ol>`) em uma página.

CSS:

```css
:is(ul, ol) {
  margin: 10px;
  padding: 10px;
  background-color: #f2f2f2;
}
```

- Exercício 15: Use `:where` para selecionar e estilizar todos os links (`<a>`) que estão dentro de uma div com a classe "conteúdo".

CSS:

```css
:where(.conteúdo) a {
  text-decoration: none;
  color: #0077b6;
  font-weight: bold;
}
```

# Materiais Extras

## Seletores Básicos

### Seletor de tag

CSS aplicado a todos elementos da tag

```jsx
label { color: red }
```

### Seletor de classe

CSS aplicado nos elementos que possuem a classe especifica

```jsx
.container { background-color: white }
```

### Seletor de Id

CSS aplicado no elemento que possui um ID especifico. 

```jsx
#especifico { font-size: 18px }
```

### Seletor de Atributo

CSS aplicado de acordo com os atributos dos elementos.

```jsx
a[target="_blank"] { color: red }
```

## Combinadores

### Irmão adjacente `+`

Seleciona o elemento imediatamente após o primeiro elemento

```jsx
div + div {
  background-color: yellow;
}
```

### Irmão Geral `˜`

Seleciona todos elementos que seguem o primeiro. 

```jsx
div ~ span {
	background-color: yellow;
}
```

### Filho `>`

Seleciona apenas os filhos diretos

```jsx
div > span {
	background-color: yellow;
}
```

### Descendente

Seleciona todos os elementos descendentes sendo filhos diretos ou não

```jsx
div span {
	background-color: yellow;
}
```

## Pseudo classes

É um seletor que permite aplicar estilos de acordo com um estado ou comportamento especifico.

### :nth-child(an)

Seleciona elementos de acordo com a sua posição.

- `:nth-child(2)` segundo filho de seu elemento pai.
- `:nth-child(odd)` todos os filhos ímpares.
- :`nth-child(3n)` todos os filhos em posições múltiplas de 3.
- `:nth-child(2n+1)` todos os filhos ímpares a partir do segundo filho.
- `:nth-child(4n-1)` todos os filhos em posições que são 1 a menos do que um múltiplo de 4.

```jsx
ul li:nth-child(3) {
  color: red;
  font-weight: bold;
}
```

### :nth-of-type(an)

Possui o mesmo comportamento da nth-child mas seleciona apenas os elementos iguais.

```jsx
div span:nth-of-type(3) {
  color: blue;
  font-style: italic;
}
```

### :not()

Seleciona todos os elementos que não correspondem ao que estiver nos parenteses

```jsx
p:not(.special) {
font-weight: bold;
color: violet;
}
```

### :after e :before

Adiciona conteúdo antes ou depois do elemento

```jsx
h2:before {
  content: "→ ";
  color: pink;
}

h2:after {
  content: " ←";
  color: red;
}
```

### :has()

Seleciona os elementos que possuem um determinado elemento dentro dele

```jsx
.container .box:has(p.important) h2 {
  color: blue;
}
```

### :empty()

Seleciona todos elementos que não tem filhos

```jsx
p:empty {
  background-color: lightyellow;
  border: 1px solid orange;
  padding: 10px;
}
```

### :last-child e :first-child()

Seleciona o primeiro ou o ultimo elemento filho 

```jsx
ul li:first-child {
  font-weight: bold;
  color: lightgreen;
}

ul li:last-child {
  font-weight: bold;
  color: lightsalmon;
}
```

### :is()

Permite agrupar vários seletores em uma única regra CSS para aplicar estilos a elementos que correspondam a qualquer um dos seletores dentro do grupo.

```jsx
button:is(:hover, :active) {
  background-color: #0074D9;
  color: white;
  border: 2px solid #0056b3;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 20px;
}
```

### :where()

## Showcase

```jsx
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    a[target="_blank"] {
      color: red
    }

    div > span > span {
      background-color: yellow;
    }

    ul#nth li:nth-child(even) {
      color: red;
      font-weight: bold;
    }

    #ofType span:nth-of-type(3) {
      color: blue;
      font-style: italic;
    }

    p:not(.special) {
      font-weight: bold;
      color: violet;
    }

    h2:before {
      content: "→ ";
      color: pink;
    }

    h2:after {
      content: " ←";
      color: red;
    }

    .container .box:has(label) h3 {
      color: green;
    }

    p:empty {
      background-color: lightyellow;
      border: 1px solid orange;
      padding: 10px;
    }

    ul#child li:first-child {
      font-weight: bold;
      color: lightgreen;
    }

    ul#child li:last-child {
      font-weight: bold;
      color: lightsalmon;
    }

    button:is(:hover, :active) {
      background-color: peru;
      color: white;
      border: 2px solid #0056b3;
      cursor: pointer;
      font-weight: bold;
      padding: 10px 20px;
    }
  </style>

</head>
<body>
  <p>
    <a href="#" target="_blank">Uma ancora com _blank</a>
    <br />
    <a href="#" target="_parent">Uma ancora com parent</a>
  </p>

  <hr />
  <div>Div 1</div>
  <div>Div 2
    <span>Span Filha
      <span>aaa</span>
    </span>
  </div>
  <span>spam Irmã 1</span>
  <span>spam Irmã 2</span>
  <label>Aside</label>

  <hr />
  <!-- :nth-child -->
  <ul id="nth">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3 - Este será estilizado de forma diferente</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>

  <hr />
  <!-- :nth-of-type -->
  <div id="ofType">
    <label>elemento 1</label><br/>
    <span>elemento 2</span><br/>
    <span>elemento 3 </span><br/>
    <label>elemento 4</label><br/>
    <span>elemento 5</span><br/>
  </div>
  
  <hr />
  <!-- :not -->
  <p>Este é um parágrafo normal.</p>
  <p class="special">Este é um parágrafo especial.</p>
  <p>Outro parágrafo normal.</p>
  <p class="special">Outro parágrafo especial.</p>

  <hr />
  <!-- :after e :before -->
  <h2>Título 1</h2>
  <h2>Título 2</h2>

  <hr />
  <!-- :has -->
  <div class="container">
    <div class="box">
      <h3>Título</h3>
      <label>Este é um texto de exemplo.</label>
    </div>
    <div class="box">
      <h4>Outro título</h4>
      <label>Este é outro texto de exemplo.</label>
    </div>
  </div>

  <hr />
  <!-- :empty  -->
  <p>Este é um parágrafo com conteúdo.</p>
  <p></p>
  <p>Outro parágrafo com conteúdo.</p>
  <p></p>

  <hr />
  <!-- :last-child e first-child  -->
  <ul id="child">
    <li>Primeiro item</li>
    <li>Segundo item</li>
    <li>Terceiro item</li>
    <li>Quarto item</li>
    <li>Último item</li>
  </ul>

  <hr />
  <!-- :is -->
  <button>Botão</button>

<p></p>

</body>
</html>
```