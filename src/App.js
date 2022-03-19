import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products/Products";
import Header from "./component/Header/Header";
import Cart from "./component/Cart/Cart";
import axios from "axios";

const App=()=>{
    const [products, setProduct]= useState([])
    const [cart, setCart]=useState([])
    const fetchAllProduct=async()=>{
        const response= await axios.get("http://localhost:3006/products")
        setProduct(response.data);
    }
    
    const fetchCart=async()=>{
        const response= await axios.get("http://localhost:3006/cart")
        setCart(response.data)
    }

    const handleAddToCart=async(productId, quantity)=>{
        const newProductCart=products.filter((product)=>{
            if (productId===product.id){
                return product
            }
        })
        const {id, title, price, description, image}=newProductCart[0]
        const request={
            id:id,
            title:title,
            price:price,
            description:description,
            image:image,
            quantity:quantity
        }
        const response= await axios.post("http://localhost:3006/cart", request)
        setCart([...cart, response.data])
    }
    const handleUpdateQty=async(productId, quantity)=>{
        if (quantity!==0){
            const response= await axios.patch(`http://localhost:3006/cart/${productId}`,{quantity:quantity})
            setCart(cart.map((product)=>product.id===productId?{...response.data}:cart))
        }else{
            await axios.delete(`http://localhost:3006/cart/${productId}`)
            const newCart= cart.filter((product)=> product.id!==productId)
            setCart(newCart)
        }


    }
    const handleRemoveCart=async(productId)=>{
        const response = await axios.delete(`http://localhost:3006/cart/${productId}`)
        const newCart= cart.filter((product)=> product.id!==productId)
        setCart(newCart)
    }
    useEffect(async()=>{
        fetchAllProduct()
        fetchCart()
    }, [])
    
    return(
        <Router>
            <Header totalItem={(cart)?cart.length:0}/>
            <Routes>
                <Route path="/" element={<Products products={products} AddToCart={handleAddToCart}/>}/>
                <Route path="/cart" element={<Cart cart={cart} handleUpdateQty={handleUpdateQty} handleRemoveCart={handleRemoveCart}/>}/>
            </Routes>
        </Router>
    )
}
export default App;