import "./tabsinfo.css";
import React, {useState, useEffect} from 'react';


export default function Tabsinfo() {
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3000/api/products')
  .then(response => response.json())
  .then(data => setData(data))
  },[]);
  
  return (
    <>
    <div className="tabs">
      <div className="tabsItem">
        <span className="tabsTitle">Productos</span>
        <div className="tabsMoneyContainer">
            <span className="tabsMoney">16</span>
        </div>

      </div>

      <div className="tabsItem">
        <span className="tabsTitle">Usuarios</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">4</span>
          
        </div>
      </div>

      <div className="tabsItem">
        <span className="tabsTitle">Categorias</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">4</span>
         
        </div>
      </div>
    </div>
    
    </>
  );
}