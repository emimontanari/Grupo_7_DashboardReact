import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

import Users from "./components/users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Products from "./components/products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Category from "./components/Category/Category";
import CategoryDetail from "./components/categoryDetail/CategoryDetail";
import { CategoryOutlined } from "@material-ui/icons";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route  path="/users/:id">
            <UserDetails />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route  path="/products/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/category">
            <Category />
          </Route>
          <Route  path="/category/:id">
            <CategoryDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
