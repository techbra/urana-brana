import { withTheme } from "@emotion/react";
import { pink } from "@mui/material/colors";

export const styles = {
    navbar: {
      display: "flex",
      alignItems: "center",
      height: 100,
      width: "70%",
      justifyContent: "space-around",
      background: "lilac"
    },
    logo: {
      height: "90%",
    },

    titulo: {
        color: "purple",
        textDecoration: "underline  purple",  
        textShadow: "2px 2px black"
    },

    items: {
      color: "purple",
      margin: 15,
      
      
      },
   
      button: {
        color:"purple",
        position: "absolute",
        right: 50,
        
        
      }, 

      greeting: {
        color:"purple"
      },
      fondo: {
        opacity: .4,
    },

    contador: {
      display: "left",
      alignItems: "left",
      height: 75,
      width: "65%",
      justifyContent: "space-around",
      backgroundColor: "pink",
      color:"purple"
    },

    categorias:{
      margin: 15,
      color: "purple",
      width: "65%",
      textDecoration: "underline  purple",
      

    }

   
}
  