import "./home.css";
import Tabsinfo from "../tabsinfo/Tabsinfo"
import Products from "../../components/products/Products"
import Users from "../../components/users/Users"
import Category from "../../components/Category/Category"
export default function Home() {
  return (
    <div className="home">
    <Tabsinfo />
    <Products />
    <Category />
    <Users />
    </div>
  );
}
