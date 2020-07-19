import React, { Component } from 'react';
import { logout, isLogin } from '../utils';
import NewNavbar from "./loggedOut_navbar"
import LoggedInNavbar from "./loggedIn_navbar"

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        isLogin: isLogin()
    }
}
handleLogout = () => {
  logout();
  this.setState({
      isLogin: false
  })
}

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          {this.state.isLogin ?
        <LoggedInNavbar/>
        :<NewNavbar/>


        }


          </li>
        </ul>
      </nav>
    );
  }
}
