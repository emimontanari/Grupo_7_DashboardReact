import "./Tabsinfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React, { useState, useEffect } from 'react';

export default function Tabsinfo() {
const [data, setData] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3000/api/users')
   .then(response => response.json())
   .then(data => setData(data));
  }, []);
  
  return (
    <>
    <div className="tabs">
      <div className="tabsItem">
        <span className="tabsTitle">Total Productos</span>
        <div className="tabsMoneyContainer">
            <span className="tabsMoney">
            
            </span>
            
          <span className="tabsMoneyRate">
            -11.4 <ArrowDownward  className="tabsIcon positive"/>
          </span>
        </div>

      </div>

      <div className="tabsItem">
        <span className="tabsTitle">Total de Usuarios</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">$4,415</span>
          <span className="tabsMoneyRate">
            -1.4 <ArrowDownward className="tabsIcon negative"/>
          </span>
        </div>
      </div>

      <div className="tabsItem">
        <span className="tabsTitle">Cost</span>
        <div className="tabsMoneyContainer">
          <span className="tabsMoney">$2,225</span>
          <span className="tabsMoneyRate">
            +2.4 <ArrowUpward className="tabsIcon"/>
          </span>
        </div>
      </div>
    </div>
    
    </>
  );
}
