import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarrinhoProvider } from './contexts/CarrinhoContext';
import Header from './components/Header';
import Home from './pages/Home';
import Carrinho from './pages/Carrinho';
import './styles/App.css';

function App() {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  );
}

export default App;
