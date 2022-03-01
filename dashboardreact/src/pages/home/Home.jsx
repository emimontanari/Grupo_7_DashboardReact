import "./home.css";
import Tabsinfo from "../../components/tabsInfo/Tabsinfo"
import Products from "../../components/products/Products"
import Users from "../../components/users/Users"

export default function Home() {
  return (
    <div className="home">
  
    <Tabsinfo />
    <Users />
    <Products />
    </div>
  );
}
