import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CarrinhoContext } from '../contexts/CarrinhoContext';
import '../styles/Header.css';

function Header() {
  // Consumindo o contexto
  const { totalItens } = useContext(CarrinhoContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        🛒 Minha Loja
      </Link>

      <nav className="nav">
        <Link to="/">Produtos</Link>
        <Link to="/carrinho" className="link-carrinho">
          Carrinho
          {totalItens > 0 && <span className="badge">{totalItens}</span>}
        </Link>
      </nav>
    </header>
  );
}

export default Header;
