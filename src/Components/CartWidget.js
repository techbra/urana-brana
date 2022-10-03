import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styles }  from "./styles"

const CartWidget =() => {
    return (
      <button style={styles.button}>
            <ShoppingCartIcon color="secondary" fontSize="large" />
            </button>
    )


}

export default CartWidget;