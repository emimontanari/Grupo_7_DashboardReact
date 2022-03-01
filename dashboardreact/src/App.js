import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails/UserDetails";


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
          <Route  path="/users/:id">
            <UserDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
