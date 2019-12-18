import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected Page</Link>
        </nav>
        <Switch>
          <PrivateRoute path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
        </Switch>
        <h1>My Friends App</h1>
      </div>
    </Router>
  );
}

export default App;
