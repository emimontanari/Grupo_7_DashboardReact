import React from "react";
import "./topbar.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src="../images/logo.png" />
        </div>
        <div className="topRight">
          
          <div className="topbarIconContainer">
           <ExitToAppIcon/>
          </div>
          <img src="../images/profile.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
