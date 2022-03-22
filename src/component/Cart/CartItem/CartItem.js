import React from 'react';
import { Typography, Button, Card, CardActions, CardMedia,CardContent } from '@material-ui/core';
import useStyle from "./style";

const CartItem=({item, handleRemoveCart, handleUpdateQty})=> {
    const classes=useStyle()
    return(
        <Card>
            <CardMedia image={item.image} alt={item.title} className={classes.media}/>
            <CardContent>
                <Typography variant='h4'>{item.title}</Typography>
                <Typography variant='h5'>${item.price*item.quantity}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type='button' size="small" onClick={()=>handleUpdateQty(item.id, item.quantity-1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type='button' size="small" onClick={()=>handleUpdateQty(item.id, item.quantity+1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=>handleRemoveCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
  
}

export default CartItem;
