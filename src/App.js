import React, {useState, useEffect} from "react";
import Products from "./component/Products/Products";
import Header from "./component/Header/Header";
import axios from "axios";

const App=()=>{
    const [products, setProduct]= useState([])
    const [cart, setCart]=useState([])
    const fetchAllProduct=async()=>{
        const response= await axios.get("http://localhost:3006/products")
        setProduct(response.data);
    }
    useEffect(()=>{
        fetchAllProduct()
    }, [])
    const handleAddToCart=(productId, quantity)=>{
        console.log(productId, quantity);
        
    }
    return(
        <div>
            <Header/>
            <Products products={products} AddToCart={handleAddToCart}/>
        </div>
    )
}
export default App;