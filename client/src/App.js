import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Switch from "./components/Switch";


import Navbar from "./components/navbar.component"

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes"


import CreatePost from './components/createPost'
import CreateUser from "./components/sign-up.component"
import Login from "./components/login.component"
import HomePage from "./components/homepage.component"
import PrivateRoute from './components/privateRoute';
import { AuthContext } from "./components/auth";
import Profile from "./components/profile";


function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  const [value, setValue] = useState(false);

  return (
    
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>

    <Router>
      
      <Navbar />
      <br/><br/><br/>
      <Switch
        isOn={value}
        handleToggle={() => setValue(themeToggler)}
      /><br/>

        <br/>
        <div className="container">
        <div className="app">
    </div>
        <Route path="/sign-up" component={CreateUser} />
        <Route path="/login" component={Login} />
        <Route path="/homepage" component={HomePage} />
        <PrivateRoute path="/profile" component={Profile} exact />
        <PrivateRoute path="/post" component={CreatePost} exact />

        </div>
    </Router>
    </>
    </ThemeProvider>

    </AuthContext.Provider>

  );
}

export default App;
