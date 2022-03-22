import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import Product from "../../Products/Product/Product";


const Review=({cart})=>{
    const cartPrice=cart.map((product)=>{
        const {price}=product
        return price
    })
    let subTotal=0
    for(let i of cartPrice){
        subTotal+=i
    }
    return(
        <>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {cart.map((product)=>{
                    return(
                        <>
                            <ListItem style={{padding:"10px,0"}} key={product.id}>
                                <ListItemText primary={product.title} secondary={`Quantity:${product.quantity}`}/>
                                <Typography variant="body2">${product.price}</Typography>
                            </ListItem>

                            <ListItem style={{padding:"10px,0"}} key={product.name}>
                                <ListItemText primary="Total"/>
                                <Typography variant="subtitle1" style={{fontWeight:700}}>${subTotal}</Typography>
                            </ListItem>
                        </>
                    )
                })}
            </List>
        </>

    )
}
export default Review;