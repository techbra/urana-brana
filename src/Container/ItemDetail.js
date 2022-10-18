import React from "react";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img alt={product.title} src={product.image} />
      <h2>{product.title}</h2>
      <h2>{product.description}</h2>
      <h3>{product.price}</h3>
    </div>
  );
};

export default ItemDetail