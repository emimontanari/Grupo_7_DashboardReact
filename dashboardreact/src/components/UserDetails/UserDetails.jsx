import React, { useState, useEffect } from 'react';
import {
  LocationSearching,
  MailOutline,
  PermIdentity
} from "@material-ui/icons";
import "./userDetail.css";


export default function UserDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3000/api/users')
   .then(response => response.json())
   .then(data => setData(data));
  }, []);
  
  return (
    
    <div className="home">
     
  <div className="user">
      <div className="userContainer">
        <div className="userShow">

          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
          </div>
        </div>
        <div className="userUpdate">
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle Usuario</span><br/>
            <span className="userShowTitle">Usuario ID: </span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Nombre: </span>
              <span className="userShowInfoTitle">annabeck99</span>
            </div>

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Apellido: </span>
              <span className="userShowInfoTitle">annabeck99</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Email: </span>
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Profile ID:</span>
              <span className="userShowInfoTitle">1</span>
            </div>

            

          </div>
        </div>

      </div>
      
    </div>
    </div>
  );
}
