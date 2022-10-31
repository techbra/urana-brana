import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Container/ItemListContainer';
import fondo from "../src/assets/fondo.png";
import ItemDetailContainer from './Container/ItemDatailContainer';
import Cart from './Components/CartView/Cart';
import { styles } from './Components/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CustomProvider } from "./Context/Context";

function App() {
  const mensaje = "¡¡Bienvenidos a nuestro Universo!!"
  return (
    <div className="App">
    <BrowserRouter>
 <CustomProvider>
    <Navbar />
     <Routes>
      <Route path='/' element={<ItemListContainer greeting={mensaje} />}/>
      <Route path='/categoria/:id' element={<ItemListContainer greeting={mensaje} />}/>
      <Route path='/producto/:id' element={<ItemDetailContainer />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='*' element={<ItemListContainer />}/>
     </Routes>
     </CustomProvider>
    </BrowserRouter>
      <img style={styles.fondo}src={fondo} alt="ARTE Y MODA" /> 

    </div>
  );
}

export default App;
