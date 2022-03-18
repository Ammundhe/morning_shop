import React from "react";
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";
import useStyles from "./style";


const Product=({product, AddToCart})=>{
    const classes=useStyles()
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image} title={product.title}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.title}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {product.price}
                    </Typography>
                </div>  
                <Typography variant="body2" component="p">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardAction}>
                <IconButton aria-label="Add To Card" onClick={()=>AddToCart(product.id, 1)}>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}
export default Product;