import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  const refresh = window.location.reload; //how do I make the forced refresh work?
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
            <Logout refresh={refresh} />
          </Link>
        </nav>
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
