import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartContextProvider } from './components/CartContext';
import CartView from './components/CartView';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:category' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<CartView/>} />
      </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
