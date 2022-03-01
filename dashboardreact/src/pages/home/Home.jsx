import "./home.css";
import Tabsinfo from "../../components/tabsInfo/Tabsinfo"
import Products from "../../components/products/Products"
import Users from "../../components/users/Users"
import Category from "../../components/category/category"
export default function Home() {
  return (
    <div className="home">
  
    <Tabsinfo />
    <Users />
    <Products />
    <Category />
    </div>
  );
}
