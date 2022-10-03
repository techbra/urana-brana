import React from "react";
import logo from "../assets/logo.jpg";
import { styles }  from "./styles"
import CartWidget from "./CartWidget";


 
const Navbar = () => {
    return(
        <navbar style={styles.navbar}>
           <img style={styles.logo}src={logo} alt="ARTE Y MODA" />

           <h1 style={styles.titulo}> URANIANA </h1>
           <nav> 
        <a href="/create" claName="nav enlace" style={styles.items}>Quienes Somos</a>
        <a href="/create" claName="nav enlace" style={styles.items}>Ropa intevenida</a>
        <a href="/create" claName="nav enlace" style={styles.items}>Obras</a>
        <a href="/create" claName="nav enlace" style={styles.items}>Bijou Artesanal</a>
        <CartWidget />
           </nav>
       
           
          
        </navbar>
    )
}



export default Navbar