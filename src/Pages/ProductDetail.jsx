import axios from "axios";
import React from 'react'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
 function ProductDetails () {
    const { id } = useParams();
    
    const [product, setProduct] = useState(null);
    useEffect(() => {
        axios({
            url: "http://localhost:8083/data",
            
            method: "get",
            params: {
                id:id
            }
        }).then((item) => { setProduct(item.data[0])});
    },[id]);
    return (
        <div >
          {
            product.map((e)=>(
             <h1>{e.id}</h1>  
            ))
          }
        </div>
    )
}
export default ProductDetails