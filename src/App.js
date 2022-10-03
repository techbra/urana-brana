import './App.css';
import Navbar from './Components/Navbar';
import ItemListContainer from './Container/ItemListContainer';
import fondo from "../src/assets/fondo.png";
import { styles } from './Components/styles';


function App() {
  const mensaje = "¡Bienvenidos a nuestro Universo Artistico!"
  return (
    <div className="App">
    <app>
      <Navbar />
      <ItemListContainer greeting={mensaje} />
      <img style={styles.fondo}src={fondo} alt="ARTE Y MODA" />
      </app>
    </div>
  );
}

export default App;
