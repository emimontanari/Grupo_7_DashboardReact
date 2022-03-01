import React, { useState, useEffect } from 'react';
import {
  PermIdentity
} from "@material-ui/icons";
import "./productDetail.css";

export default function ProductDetails() {
 
  return (
      
<div className="home">
  <div className="product">
      
      <div className="productContainer">
        <div className="productShow">

          <div className="productShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="productShowImg"
            />
           
          </div>
        </div>
        <div className="productUpdate">

          <div className="productShowBottom">
            <span className="productShowTitle">Detalles de Producto</span><br/>
            <span className="productShowTitle">Producto ID:</span>
            <div className="productShowInfo">
              <PermIdentity className="productShowIcon" />
              <span className="productShowInfoTitle">Nombre de producto: </span>
              <span className="productShowInfoTitle">annabeck99</span>
            </div>
            
            <div className="productShowInfo">
              <PermIdentity className="productShowIcon" />
              <span className="productShowInfoTitle">Precio: </span>
              <span className="productShowInfoTitle">$200</span>
            </div>

            <div className="productShowInfo">
              <PermIdentity className="productShowIcon" />
              <span className="productShowInfoTitle">Descripcion: </span>
              <span className="productShowInfoTitle">annabeck99</span>
            </div>
            
            <div className="productShowInfo">
              <PermIdentity className="productShowIcon" />
              <span className="productShowInfoTitle">Categoria ID: </span>
              <span className="productShowInfoTitle">annabeck99</span>
            </div>

            
          </div>
        </div>

      </div>
      
    </div>
    </div>
  );
}
