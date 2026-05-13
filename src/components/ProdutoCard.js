import { useContext } from 'react';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import '../styles/ProdutoCard.css';

function ProdutoCard({ produto }) {
  // Consumindo o contexto
  const { adicionarProduto } = useContext(CarrinhoContext);

  return (
    <div className="produto-card">
      <div className="produto-imagem">{produto.imagem}</div>
      <h3>{produto.nome}</h3>
      <p className="produto-descricao">{produto.descricao}</p>
      <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
      <button
        className="botao-adicionar"
        onClick={() => adicionarProduto(produto)}
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}

export default ProdutoCard;
