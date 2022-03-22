import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useStyle from "./style";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart=({cart,handleUpdateQty, handleRemoveCart, handleEmptyCart})=>{
    const classes=useStyle()
    const cartPrice=cart.map((product)=>{
        const {price}=product
        return price
    })
    let subTotal=0
    for(let i of cartPrice){
        subTotal+=i
    }
 
    const renderEmptyCart=()=>{
        return(
            <Typography variant="subtitle1">You have no item in your cart <Link to={"/"} className={classes.link}>start to add something</Link></Typography>
        )
    }
    const renderCart=()=>{
        return(
            <>
                <Grid container spacing={3}>
                    {cart.map((item)=>{
                        return(
                            <Grid item xs={12} sm={4} key={item.id}>
                                <CartItem item={item} handleUpdateQty={handleUpdateQty} handleRemoveCart={handleRemoveCart}/>
                            </Grid>
                        )
                    })}

                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant="h4">SubTotal:${subTotal}</Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={()=>handleEmptyCart()}>Empty Cart</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">check out</Button>
                    </div>
                </div>
            </>
        )
    }
    return(
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart </Typography>
            {!cart.length?renderEmptyCart():renderCart()}
        </Container>
    )
}
export default Cart;