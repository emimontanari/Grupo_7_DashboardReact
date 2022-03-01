import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";
import ProductDetails from "./components/productDetail/ProductDetail";
import Users from "./components/users/Users";
import Products from "./components/products/Products";


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
          <Route exact path="/products">
            <Products />
          </Route>
          <Route  path="/users/:id">
            <UserDetails />
          </Route>
          <Route  path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
