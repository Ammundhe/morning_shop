import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Menu,MenuItem, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons";
import Logo from "../../assets/Logo.jpg"
import useStyle from "./style"

function Header() {
  const classes=useStyle()
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant='h6' className={classes.title} color="inherit">
            <img src={Logo} alt="Morning shop" height="25px" className={classes.image} /> Morning Shop
          </Typography>
          <div className={classes.grow}/>
          <div className={classes.button}>
            <IconButton aria-label='show card items' color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart/>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;
