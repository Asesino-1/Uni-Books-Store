import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import CreateUser from "./components/sign-up.component"
import Login from "./components/login.component"

function App() {
  return (
    <Router>
      <Navbar />
        <br/>
        <div className="container">
        <Route path="/sign-up" component={CreateUser} />
        <Route path="/login" component={Login} />
        </div>
    </Router>
  );
}

export default App;
