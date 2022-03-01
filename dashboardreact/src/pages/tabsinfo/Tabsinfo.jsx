import "./tabsinfo.css";
import React, {useState, useEffect} from 'react';
import Sectionrow from '../../components/sectionRow/Sectionrow';


export default function Tabsinfo() {
  const [dataProducto, setDataProducto] = useState([]);
  
  useEffect(() => {
   fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(dataProducto => setDataProducto(dataProducto))
  },[]);
  let rowProducto;
  if (!dataProducto.meta){
      rowProducto = {
      title : "Productos",
      value: "0"
    };
  } else {
     rowProducto = {
      title : "Productos",
      value: dataProducto.meta.total
    }
  }

  const [dataUsuario, setDataUsuario] = useState([]);
  
  useEffect(() => {
   fetch('http://localhost:3000/api/users')
  .then(response => response.json())
  .then(dataUsuario => setDataUsuario(dataUsuario))
  },[]);
  let rowUsuarios;
  if (!dataUsuario.meta){
    rowUsuarios = {
      title : "Usuarios",
      value: "0"
    };
  } else {
    rowUsuarios = {
      title : "Usuarios",
      value: dataUsuario.meta.total
    }
  }
  
  const [dataCategoria, setDataCategoria] = useState([]);
  
  useEffect(() => {
   fetch('http://localhost:3000/api/category')
  .then(response => response.json())
  .then(dataCategoria => setDataCategoria(dataCategoria))
  },[]);
  let rowCategoria;
  if (!dataCategoria.meta){
    rowCategoria = {
      title : "Categorias",
      value: "0"
    };
  } else {
    rowCategoria = {
      title : "Categorias",
      value: dataCategoria.meta.total
    }
  }
  
  return (
    <div className="tabs">
      <Sectionrow {...rowProducto} key = {1} ></Sectionrow>
      <Sectionrow {...rowUsuarios} key = {2} ></Sectionrow>
      <Sectionrow {...rowCategoria} key = {3} ></Sectionrow>
    </div>
  );
}