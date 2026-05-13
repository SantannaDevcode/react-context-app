# Carrinho de Compras com Context API

Projeto desenvolvido para a disciplina de React, utilizando a Context API para gerenciamento de estado global.

## Sobre o projeto

Aplicação de um carrinho de compras simples, onde é possível:
- Visualizar produtos
- Adicionar produtos no carrinho
- Aumentar ou diminuir a quantidade
- Remover produtos
- Finalizar a compra

## Tecnologias usadas

- React
- React Router DOM
- Context API
- CSS

## Estrutura do projeto

```
src/
  ├── components/      (componentes reutilizáveis)
  │   ├── Header.js
  │   └── ProdutoCard.js
  ├── contexts/        (Context API)
  │   └── CarrinhoContext.js
  ├── pages/           (páginas)
  │   ├── Home.js
  │   └── Carrinho.js
  ├── styles/          (arquivos CSS)
  │   ├── App.css
  │   ├── Header.css
  │   ├── Home.css
  │   ├── ProdutoCard.css
  │   └── Carrinho.css
  ├── App.js
  └── index.js
```

## Como executar

1. Instale as dependências:
```
npm install
```

2. Execute o projeto:
```
npm start
```

3. Abra no navegador:
```
http://localhost:3000
```
