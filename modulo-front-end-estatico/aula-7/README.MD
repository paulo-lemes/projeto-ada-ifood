# [Frontend Estático] Atividades Aula 7

## Nosso desafio de hoje: **Desenvolvimento de uma Proposta de Website para o iFood** ✨

Neste projeto final, você e seu grupo, como participantes da turma #VemSerTech, que é uma parceria entre o iFood e a Ada, terão a oportunidade de aplicar todo o conhecimento adquirido em HTML e CSS para desenvolver uma proposta inovadora de website para o iFood, uma das principais plataformas de entrega de comida online. Sua missão é apresentar uma visão criativa e aprimorada para a renovação do iFood por meio deste projeto de website.

## Projeto Two [ Entrega]

**Grupos:** 9 grupos

**Descrição:**

1. **Título e Descrição:** A página inicial do website deve conter um título atraente que represente a nova visão do iFood e uma breve descrição que explique os recursos e benefícios da plataforma renovada.
2. **Cardápio/Catálogo Digital:** A parte central do site deve apresentar o novo catálogo digital, destacando os recursos e funcionalidades inovadoras da plataforma. Cada prato deve ser apresentado em um "card" com as seguintes informações:
    - Uma imagem do prato.
    - Nome do prato.
    - Uma breve descrição do prato.
3. **Header e Footer:** O site deve incluir um cabeçalho (header) que contenha o logotipo ou nome do iFood (pode propor novo logotipo) e uma barra de navegação para diferentes seções do site. O rodapé (footer) deve conter informações de contato, como e-mail e telefone de suporte.
4. **Formulário de Contato:** Crie um formulário de contato que permita aos visitantes enviar perguntas, sugestões e feedback sobre a nova plataforma. O formulário deve incluir campos para nome, e-mail e mensagem.
5. **Responsividade:** Certifique-se de que o site seja responsivo, adaptando-se a diferentes dispositivos, como smartphones e computadores.
6. **Navegação Funcional:** Garanta que a navegação do site funcione corretamente. Os links na barra de navegação devem direcionar os visitantes para **outras seções,** como "Sobre Nós", "Recursos" e "Contato".
7. **Otimização para SEO:** Utilize boas práticas de SEO para garantir que a proposta de site para o iFood seja bem indexada pelos motores de busca.

**Notas Importantes:**

- Criar algum elemento que use <table> é opcional;
- O formulário solicitado pode ser de cadastro, neste caso o formulário deve incluir nome, e-mail e senha;
- Responsividade pode ser testada apenas em smartphone e computadores, não é necessário tablet.
- Embora este seja um projeto fictício, leve em consideração a importância de apresentar uma proposta profissional e inovadora para a renovação da plataforma iFood.
- Você pode usar imagens e informações fictícias para ilustrar sua proposta.

**Entrega:**

- A proposta final deve ser entregue através do Github
- Cada membro do grupo deve enviar o link do github no LMS

<aside>
💡 Esta atividade deve ser entregue no LMS. Na área de Projetos você enviará o link do seu github com o projeto.

</aside>

# Aula 7 - Criar uma página HTML utilizando Bootstrap e deixando-a responsiva

# Plano de Aula

### I. Conteúdo

- Conceitos de Bootstrap
- Grid do Bootstrap

### II. Objetivo geral

Demonstrar o funcionamento do Bootstrap.

### IV. Objetivos específicos

Ao final da aula o estudante deverá ser capaz de:

- Utilizar o bootstrap
- Criar páginas responsivas com o uso de bootstrap

### V. Procedimentos

### VI. Pré requistos

- 

### VII. Recursos

- Notion Page de exercicios: ‣

### VIII. Atividades

- Atividade 1 -

### IX. Avaliação

O desempenho será considerado satisfatório se a turma participar da aula e alcançar os objetivos propostos, compreendendo os conceitos de formulários apresentados e realizando a Atividade final proposta.

### X. Bibliografia

Bootstrap. Disponível em <https://getbootstrap.com/> Acesso em 21 de outubro de 2023.

Tailwind. Disponível em <https://tailwindcss.com/>. Acesso em 21 de outubro de 2023

https://app-sorteos.com/pt/apps/gerador-equipes-aleatorios

# Material

## Bootstrap conceitos

Bootstrap é um framework de design e desenvolvimento frontend. Fornece um conjunto de componentes, estilos e funcionalidades para serem utilizadas no processo de criação de sites, tendo como destaque e foco a responsividade.

### Biblioteca vs Framework

|  | Biblioteca | Framework |
| --- | --- | --- |
| Objetivo | Realizar tarefas específicas | Estrutura para o desenvolvimento completo do projeto |
| Controle | Existe um maior controle por parte do desenvolvedor para utilizar as funções conforme a necessidade. | Há uma inversão do controle. O framework limita o controle e impoe uma estrutura que deve ser seguida. |
| Flexibilidade | Mais flexiveis sem imposição de estrutura rígida para o desenvolvimento | Menos flexiveis, existe uma imposição da estrutura e de regras que devem ser seguidas. |
| Complexidade | Geralmente mais simples e fáceis de aprender | Geralmente mais complexos e requerem mais tempo e esforço de aprendizado. |
| Exemplos | JQuery, Tailwind | Ruby on Rails, NextJS, Bootstrap |

### Bootstrap vs Tailwind

|  | Bootstrap | Tailwind |
| --- | --- | --- |
| Posicionamento | Feature-packed frontend toolkit | Utility-first CSS framework |
| Filosofia de desing | Filosofia opinativa, com componentes pré-estabelecidos com aparencia e comportamentos especificos | Filosogia não opinativa, fornece classes CSS que auxiliam na construção dos componentes |
| Personalização | Altamente personalizável mas requer a substituição de estilos predefinidos | Altamente personalizável com a flexibilidade de usar as classes básicas para componsição de novos estilos dos componentes. |
| Tamanho do arquivo | Conjunto com tamanho considerável de CSS e JS, mas existe a opção de personalizar o pacote final para incluir apenas o que é necessário. | Por ter uma abordagem baseada em classes é possivel escolher exatamente quais serão incluídas no pacote final. |
| Aprendizado | Relativamente fácil devido a sua proposta de componentes prontos para uso. É uma ótima escolha para iniciantes. | A curva de aprendizado é um pouco mais longa pois é importante conhecer um pouco mais a fundo CSS. |
| Comunidade e ecossistema | Comunidade abrangente e com bons recursos e plugins disponíveis. | Comunidade mais recente mas crescendo rapidamente.  |

## Responsividade - Alguns detalhes

Tag `<meta name=”viewport">` controla como a página web será exibida em dispositivos mobile, ajustando o comportamento da viewport (janela de visualização) do navegador. O uso desta tag auxilia no controle e ajuste adequato das páginas em dispositivos com telas de tamanhos variados como smartphones e tablets.

Esta tag tem como atributo o content que define as configurações de viewport de acordo com as seguintes definições:

- `width=device-with`: determina que a largura da viewport será igual à largura do dispositivo;
- `initial-scale`: determina a escala inicial da página. O valor 1.0 representa a escala padrão, valores maiores ou menores ajustam o zoom inicial da página;
- `maximum-scale` e `minimum-scale`: Definem os limites de zoom da página;
- `user-scalable`: Controla se o usuário pode ou não aplicar zoom na página. Ao definir como `no` o zoom é desabilitado.
- `viewport-fit`: Determina como a página se encaixa na viewport de dispositivos com entalhes ou bordas curvas. Usar `cover` permite a sobreposição destas áreas e o uso de `contain` define que a página não irá sobrepor estes espaços.
    
    ```jsx
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```
    

## Primeiros passos

 Seguindo o tutorial disponível no site do Bootstrap (v5.3):

[Get started with Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

Anotações sobre os passos do site …

- Passo 1: Uso da Metatag `viewport` ler sobre no tópico sobre responsividade
- Passo 2: Inclusão do CSS e JS do bootstrap
    
    Adicionar o script JS ao **final do body** HTML garante que o **DOM** (Document Object Model) esteja totalmente carregado antes que o script seja executado. Existem exceções, mas o uso do script JS ao final evita que o script tente acessar elementos que ainda não foram carregados na página, ou seja, que ainda não existem.
    
    **Popper**: Esta é um lib JS leve que auxilia no posicionamento de elementos HTML. Muito utilizada para criar tooltips, popovers, menus suspensos e elementos que precisam ser posicionados de forma relativa a outros elementos na página. 
    

Grid System