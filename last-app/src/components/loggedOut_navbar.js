import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout, isLogin } from '../utils';

export default class NewNavbar extends Component {
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
          
        <Link to="/sign-up" className="nav-link">Create User</Link>
         <Link to="/login" className="nav-link">Login</Link>

        


          </li>
        </ul>
      </nav>
    );
  }
}
