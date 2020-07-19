import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout, isLogin } from '../utils';

export default class LoggedInNavbar extends Component {
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
   window.location = "/homepage"; 
}

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">

          <Link to="/profile" className="nav-link">Profile</Link>
          <Link onClick={() => this.handleLogout()} className="nav-link">Log out</Link>
          
          </li>
        </ul>
      </nav>
    );
  }
}