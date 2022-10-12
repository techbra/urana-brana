import React, { useEffect, useState } from "react";
import ItemList from "./ItemList/ItemList";




const ItemListContainer = ({ greeting })=>{ 
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
   useEffect(() => {
        fetch("https://api.bestbuy.com/v1/products/8880044.json?apiKey=YourAPIKey")
        .then((res) => res.json())
        .then((json) => products(json))
        .catch((error) => {
            console.log(error);
        })
        .finally(setLoading(false));
    }, []);
      
    
    
   
    return(
        <>
        <h1>{greeting}</h1>
        {
            <>
            {loading ? <h1>Aguarde unos Segundos...</h1> : <ItemList products={products} />}
         </>
}
          </>
        );
};

export default ItemListContainer
    