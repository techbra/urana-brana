import React, { useContext, useState } from "react";
import ItemCount from "../Components/ItemCount";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Context } from "../Context/Context";

const ItemDetail = ({ product }) => {
  const [PlayButton, setPlayButton] = useState(false);
  const { addItem } = useContext(Context);
 
 
  const onAdd = (contador) =>{
   addItem(product, contador);
    setPlayButton(true);

}

  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h2>{product.title}</h2>
      <h3>{product.description}</h3>
      <h3>{product.price}</h3>
      {!PlayButton ? (
        <ItemCount stock={27} initial={1} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button>Finalizar Compra</button>
        </Link>
      )}
    </div>
  );
};

export default ItemDetail