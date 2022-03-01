import React, {useState, useEffect}  from 'react';
import { useParams } from "react-router-dom"
import {
  PermIdentity
} from "@material-ui/icons";
import "./productDetails.css";

export default function ProductDetails() {
  let params = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3000/api/products/'+params.id)
  .then(response => response.json())
  .then(data => setData(data))
  },[]);
 let row = data.data;
 
 if (row){
  return (
    <div className="home">
      <div className="product">
          
          <div className="productContainer">
            <div className="productShow">
    
              <div className="productShowTop">
                <img
                  src={row.picture + "?auto=compress&cs=tinysrgb&dpr=2&w=500"}
                  alt={row.name}
                  className="productShowImg"
                />
               
              </div>
            </div>
            <div className="productUpdate">
    
              <div className="productShowBottom">
                <span className="productShowTitle">Detalles de Producto</span><br/>
                <span className="productShowTitle">Producto ID: {row.id}</span>
                <div className="productShowInfo">
                  <PermIdentity className="productShowIcon" />
                  <span className="productShowInfoTitle">Nombre de producto: </span>
                  <span className="productShowInfoTitle">{row.name}</span>
                </div>
                
                <div className="productShowInfo">
                  <PermIdentity className="productShowIcon" />
                  <span className="productShowInfoTitle">Precio: </span>
                  <span className="productShowInfoTitle">{row.price}</span>
                </div>
    
                <div className="productShowInfo">
                  <PermIdentity className="productShowIcon" />
                  <p className="productShowInfoTitle">Descripción: {row.description} </p>
                  
                </div>
                
                <div className="productShowInfo">
                  <PermIdentity className="productShowIcon" />
                  <span className="productShowInfoTitle">Categoria ID: </span>
                  <span className="productShowInfoTitle">{row.category_id}</span>
                </div>
    
                
              </div>
            </div>
    
          </div>
          
        </div>
        </div>
      );
 } else {
   return (<></>);
 }
  
}
