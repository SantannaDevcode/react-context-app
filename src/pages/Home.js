import ProdutoCard from '../components/ProdutoCard';
import '../styles/Home.css';

// Lista de produtos
const produtos = [
  {
    id: 1,
    nome: 'Notebook',
    descricao: 'Notebook para trabalho e estudos',
    preco: 3500.0,
    imagem: '💻',
  },
  {
    id: 2,
    nome: 'Celular',
    descricao: 'Smartphone com câmera de alta qualidade',
    preco: 2200.0,
    imagem: '📱',
  },
  {
    id: 3,
    nome: 'Fone de Ouvido',
    descricao: 'Fone bluetooth sem fio',
    preco: 350.0,
    imagem: '🎧',
  },
  {
    id: 4,
    nome: 'Smartwatch',
    descricao: 'Relógio inteligente com monitor de batimentos',
    preco: 800.0,
    imagem: '⌚',
  },
  {
    id: 5,
    nome: 'Teclado',
    descricao: 'Teclado mecânico para jogos',
    preco: 450.0,
    imagem: '⌨️',
  },
  {
    id: 6,
    nome: 'Mouse',
    descricao: 'Mouse gamer com sensor de precisão',
    preco: 180.0,
    imagem: '🖱️',
  },
];

function Home() {
  return (
    <div className="home">
      <h1>Produtos</h1>
      <div className="lista-produtos">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Home;
