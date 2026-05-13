import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import '../styles/Carrinho.css';

function Carrinho() {
  // Consumindo o contexto
  const {
    carrinho,
    removerProduto,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho,
    valorTotal,
  } = useContext(CarrinhoContext);

  function finalizarCompra() {
    alert('Compra finalizada com sucesso! Total: R$ ' + valorTotal.toFixed(2));
    limparCarrinho();
  }

  // Se o carrinho estiver vazio
  if (carrinho.length === 0) {
    return (
      <div className="carrinho-vazio">
        <h2>Seu carrinho está vazio 😢</h2>
        <Link to="/" className="botao-voltar">
          Ver produtos
        </Link>
      </div>
    );
  }

  return (
    <div className="carrinho">
      <h1>Meu Carrinho</h1>

      <div className="lista-itens">
        {carrinho.map((item) => (
          <div key={item.id} className="item-carrinho">
            <div className="item-imagem">{item.imagem}</div>

            <div className="item-info">
              <h3>{item.nome}</h3>
              <p>R$ {item.preco.toFixed(2)}</p>
            </div>

            <div className="item-quantidade">
              <button onClick={() => diminuirQuantidade(item.id)}>-</button>
              <span>{item.quantidade}</span>
              <button onClick={() => aumentarQuantidade(item.id)}>+</button>
            </div>

            <div className="item-subtotal">
              <strong>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
            </div>

            <button
              className="botao-remover"
              onClick={() => removerProduto(item.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="resumo">
        <h2>Total: R$ {valorTotal.toFixed(2)}</h2>
        <button className="botao-finalizar" onClick={finalizarCompra}>
          Finalizar Compra
        </button>
        <button className="botao-limpar" onClick={limparCarrinho}>
          Limpar Carrinho
        </button>
      </div>
    </div>
  );
}

export default Carrinho;
