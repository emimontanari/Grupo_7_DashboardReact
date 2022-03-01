import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>

            

            <Link to="/products" className="link">
            <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Productos
              </li>
            </Link>

            <Link to="/category" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                  Categorias
                </li>
            </Link >

            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                  Usuarios
                </li>
            </Link >
          
          </ul>
        </div>
      </div>
    </div>
  );
}
