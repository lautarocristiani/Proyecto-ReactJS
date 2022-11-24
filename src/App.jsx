import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import './index.css';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer saludo="¡Bienvenido usuario!"/>
    </>
  );
}

export default App;
