import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import {
  LocationSearching,
  MailOutline,
  PermIdentity
} from "@material-ui/icons";
import "./userDetails.css";


export default function UserDetails() {
  let params = useParams()
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch('http://localhost:3000/api/users/'+params.id)
  .then(response => response.json())
  .then(data => setData(data))
  },[]);
 let row = data.data;

 if (row){
  return (
    
    <div className="home">
     
  <div className="user">
      <div className="userContainer">
        <div className="userShow">

          <div className="userShowTop">
            <img
              src={row.images + '?auto=compress&cs=tinysrgb&dpr=2&w=500'}
              alt={row.firstname + ' ' + row.lastname}
              className="userShowImg"
            />
          </div>
        </div>
        <div className="userUpdate">
          <div className="userShowBottom">
            <span className="userShowTitle">Detalle Usuario</span><br/>
            <span className="userShowTitle">Usuario ID: {row.id}</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Nombre: </span>
              <span className="userShowInfoTitle">{row.firstname}</span>
            </div>

            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Apellido: </span>
              <span className="userShowInfoTitle">{row.lastname}</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">Email: </span>
              <span className="userShowInfoTitle">{row.email}</span>
            </div>

            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">Profile ID:</span>
              <span className="userShowInfoTitle">{row.profile_id}</span>
            </div>

            

          </div>
        </div>

      </div>
      
    </div>
    </div>
  )
 } else {
  return (<></>);
}
  
  

  
}
