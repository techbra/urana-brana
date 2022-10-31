import React from "react";
import Card from "@mui/material/Card";
import{ Paper, CardContent, CardMedia,Typography,Button,CardActionArea,CardActions} from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <Paper elevation={3}>
    <Card sx={{ maxWidth: 250 }} style={styles.container}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
          >
            {product.title}
          </Typography>
          <Typography variant="h4" color="text.primary">
            ${product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/producto/" + product.id}>
        <Button variant="contained" color="secondary">
          Ver Detalles
        </Button>
       </Link>
      </CardActions>
    </Card>
    </Paper>
  );
};
const styles = {
    container: {
      width: window.innerHeight > 900 ? "50%" : "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      margin: 5,
      backgroundColor: "lilac",
    },
    title: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      height: 120,
      color: "purple"
    },
  };
  
  
export default Item