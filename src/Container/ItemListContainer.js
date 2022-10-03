import React from "react";
import Paper from '@mui/material/Paper'
import { styles } from "../Components/styles";


const ItemListContainer = ({ greeting, children })=>{
    return(
        <Paper elevation={10}>
        <div>
         <h2 style={styles.greeting}>{greeting}</h2>
        </div>
        </Paper>
    )
}

export default ItemListContainer
    