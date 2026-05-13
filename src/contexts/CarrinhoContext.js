import { createContext, useState } from 'react';

// Criando o contexto
export const CarrinhoContext = createContext();

// Provider que vai envolver a aplicação
export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  // Adiciona um produto no carrinho
  function adicionarProduto(produto) {
    // Verifica se o produto já existe
    const existe = carrinho.find((item) => item.id === produto.id);

    if (existe) {
      // Se já existe, aumenta a quantidade
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === produto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
      setCarrinho(novoCarrinho);
    } else {
      // Se não existe, adiciona com quantidade 1
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  // Remove um produto do carrinho
  function removerProduto(id) {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
  }

  // Aumenta a quantidade de um item
  function aumentarQuantidade(id) {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === id) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  }

  // Diminui a quantidade de um item
  function diminuirQuantidade(id) {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === id && item.quantidade > 1) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  }

  // Limpa o carrinho
  function limparCarrinho() {
    setCarrinho([]);
  }

  // Calcula o total de itens
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

  // Calcula o valor total
  const valorTotal = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        removerProduto,
        aumentarQuantidade,
        diminuirQuantidade,
        limparCarrinho,
        totalItens,
        valorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
