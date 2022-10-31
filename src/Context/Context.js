import React, { createContext, useState } from "react";

export const Context = createContext ();

export const CustomProvider = ({ children })=>{
const [cart, setCart] = useState([]);
const [qty, setQty] = useState(0);
const [total, setTotal] =useState(0);

const addItem = (item, cantidad) => {
    console.log(item);
    console.log("esta funcion se encarga de agregar unproducto al carrito")
}
const removerItem = (id) => {
   setCart(cart.filter(item => item.id !== id))
}

const IsinCart = (id) => cart.some(item => item.id === id);


const clear = () =>{
    setCart([]);
    setQty(0);
    setTotal(0);
}

return (
    <Context.Provider value={{cart, qty, total, addItem, removerItem, clear, IsinCart }}>{children}</Context.Provider>
     

    );
};


