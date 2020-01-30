import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>My Friends App</h1>
        <nav>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link className="link" to="/protected">
            Protected Page
          </Link>
          <Link className="link" to="/login">
            <Logout />
          </Link>
        </nav>
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
