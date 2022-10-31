import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styles }  from "./styles"
import { Context } from "../Context/Context";


const CartWidget =() => {
  const {qty} = useContext(Context)
    return (
      <div>
      <button style={styles.button}> <h3>{qty}</h3>
            <ShoppingCartIcon color="secondary" fontSize="large" />
            </button>
            </div>
    )


}

export default CartWidget;