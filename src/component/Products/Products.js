import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";
import useStyle from "./style";

const Products=({products, AddToCart})=>{
    const classes=useStyle()
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
                <Grid container justifyContent="center" spacing={4}>
                    {products.map((product)=>{
                        return(
                            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} AddToCart={AddToCart}/>
                            </Grid>
                        )
                    })}
                </Grid>
        </main>
    )
}
export default Products;