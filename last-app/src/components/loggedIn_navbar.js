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
}

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          
          <Link onClick={() => this.handleLogout()}>Log out</Link>
          <Link to="/profile" className="nav-link">Profile</Link>

        


          </li>
        </ul>
      </nav>
    );
  }
}
