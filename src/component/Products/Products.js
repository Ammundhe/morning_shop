import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const Products=()=>{
    const products=[{
        id:1,
        name:"shoes",
        description:"Runing shoes"

    },
    {
        id:2,
        name:"mac Book",
        description:"mac book laptop"
    }
]
    return(
        <main>
            <div>
                <Grid container justify="center" spacing={4}>
                    {products.map((product)=>{
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <product product={product}/>
                        </Grid>
                    })}
                </Grid>
            </div>
        </main>
    )
}
export default Products;