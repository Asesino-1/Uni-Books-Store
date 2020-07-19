import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Dashboard from './components/Dashboard';

import Navbar from "./components/navbar.component"
import NewNavbar from "./components/loggedOut_navbar"

import CreateUser from "./components/sign-up.component"
import Login from "./components/login.component"
import HomePage from "./components/homepage.component"
import PrivateRoute from './components/privateRoute';
import { AuthContext } from "./components/auth";
import Profile from "./components/profile";


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>

    <Router>
      <Navbar />
        <br/>
        <div className="container">
        <Route path="/sign-up" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/" component={HomePage} />
        <PrivateRoute path="/profile" component={Profile} exact />
        <PrivateRoute component={Dashboard} path="/dashboard" exact />

        </div>
    </Router>
    </AuthContext.Provider>

  );
}

export default App;
