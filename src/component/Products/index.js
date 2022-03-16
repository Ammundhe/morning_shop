import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css"

const Products =()=>{
  const [products, setProducts]=useState([])
  useEffect(()=>{
    const fetchProducts=async()=>{
      const response=await axios.get('https://fakestoreapi.com/products')
      setProducts( response.data)
    }
    fetchProducts()
  },[])
  const allProducts=products.map((product)=>{
    const {id, title, image, category, price}=product
    return(
      <div className="card" key={id}>
            <img src={image} alt={title} style={{width:"100%", height:"50%"}}/>
            <h4><Link to={`/product/${id}`}>{title} </Link></h4>
            <h4 className="price">${price}</h4>
            <h4>{category}</h4>
        </div>
    )
  })
  return<div className="product-container">{allProducts}</div>
}
export default Products;