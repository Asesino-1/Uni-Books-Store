import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {

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
