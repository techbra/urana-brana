import React from "react";
import logo from "../assets/logo.jpg";
import { styles }  from "./styles"
import CartWidget from "./CartWidget";
import { style } from "@mui/system";
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
     
    const categorias =[
        {nombre:"electronics", id:0, ruta:"categoria/electronics"},
        {nombre:"jewelery", id:1, ruta:"categoria/jewelery"},
        {nombre:"men's clothing", id:2, ruta:"categoria/men's clothing"},
        {nombre:"women's clothing", id:3, ruta:"categoria/women's clothing"}
    ]


    return(
        <navbar style={styles.navbar}>
            <Link style={styles.logo} to="/">
           <img style={styles.logo}src={logo} alt="ARTE Y MODA" />
           </Link>
          <h1 style={styles.titulo}> URANIANA </h1>
          <nav>
        {categorias.map((categoria) => {
          return (
            <NavLink
              key={categoria.id}
              style={styles.categorias}
              to={categoria.ruta}
            >
              {categoria.nombre}
            </NavLink>
        );
        })}
        <Link to="/cart">
        <CartWidget />
        </Link>
           </nav>
       
           
          
        </navbar>
    )
}



export default Navbar