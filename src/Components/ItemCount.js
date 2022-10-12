
import React, { useState } from "react";
import { styles } from "./styles";
import { Button } from "@mui/material";



const ItemCount = ({ stock, initial, agregar }) => {
  
    const [contador, setContador] = useState(initial);

  const restar = () => {
    if (contador > 1) {
        setContador(contador - 1);
    }
  };

  const sumar = () => {
    if (contador < stock) {
        setContador(contador + 1);
    }
  };

    return (
        <div style={styles.contador}>
        <Button variant="outlined"
        color="secondary"
        size="medium"
        disableElevation
        onClick={restar}>-</Button>
        <h3>{contador}</h3>
        <Button variant="outlined"
        color="secondary"
        size="medium"onClick={sumar}>+</Button>
        <Button variant="outlined"
        color="secondary"
        size="medium"disabled={stock === 0} onClick={()=>agregar(contador)}>
          <span>{stock === 0 ? 'sin stock' : 'Agregar al carrito'}</span>
        </Button>
      </div>
    );
};
export default ItemCount