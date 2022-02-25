import React from "react";
import "./topbar.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">EcoShop</span>
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
           <ExitToAppIcon/>
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
