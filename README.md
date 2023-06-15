## ViaCEP APP
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)](https://sass-lang.com/)
[![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)](https://viacep-juan.onrender.com)

Esse projeto utiliza a API ViaCEP dos Correios para buscar e exibir informações de endereços em cards..

[Link do deploy](https://viacep-juan.onrender.com).

## Funcionalidades

O site possui as seguintes funcionalidades:

- Busca de endereço por CEP: O usuário pode inserir um CEP válido no campo de busca e o site automaticamente busca o endereço, bastando digitar o número e salvar.

- Exibição de dados dos endereços salvos: Após a busca ser realizada, o site exibe as informações do endereço em um card que é inserido abaixo de outros cards(caso já exista alguma busca anterior).

- Persistência de dados com Session Storage: O site utiliza o mecanismo de Session Storage do navegador para armazenar os dados dos cards. Dessa forma, quando o usuário recarrega a página, os endereços pesquisados anteriormente são exibido automaticamente. Caso deseje, o usuário pode remover clicando em "Limpar cards".

## Tecnologias Utilizadas

O site foi desenvolvido utilizando as seguintes tecnologias:

- HTML5: Estruturação e marcação do conteúdo do site.
- SASS: Estilização e aparência do site.
- JavaScript: Fetch API, Web Storage API, Timer API.

## Estrutura do projeto

```
├── index.html            # Página principal do site
├── css/
│   └── styles.scss       # Arquivo SASS usado para gerar todos os CSSs
│   └── styles.css        # Arquivo CSS para estilização
│   └── styles.min.css    # Arquivo CSS minimizado.
└── js/
│   └── index.js            # inicialização do controller e Web Storage API
│   └── controller/         
│   │   └── controller.js   # controla todas as interações com a pagin
│   └── service/
│   │   └── service.js      # lida com requisições à ViaCep API
│   └── utils/         
│   │   └── utils.js        
│   └── view/    
│   │   └── view.js         # lida com os elementos do DOM 

```
