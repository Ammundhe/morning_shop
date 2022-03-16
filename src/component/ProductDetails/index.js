import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import "./style.css";
import { height } from "@mui/system";

const ProductDetails=()=>{
    const [product, setProduct]=useState([])
    const {productId}=useParams()
    useEffect(()=>{
        const fetchProduct=async()=>{
            const response= await axios.get(`https://fakestoreapi.com/products/${productId}`)
            setProduct([response.data])
        }
       fetchProduct()
    }, [productId])
    const singleProduct=product.map((item)=>{
        const {id,title, category, image, price, description }=item
       return(
           <div className="product" key={id}>
               <div className="image-info">
                   <img src={image} alt={title} style={{height:"500px"}} />
                </div>
                
                <div className="product-info">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <hr style={{width:"100%"}}/>
                    <h3>${price}</h3>
                    <h4>Category:{category}</h4>
                    <hr/>
                    <button>Add Card</button>
                </div>
           </div>
       )

    })
    return <div>{singleProduct}</div>
}
export default ProductDetails;