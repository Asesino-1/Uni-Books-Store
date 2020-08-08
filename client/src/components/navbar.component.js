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
      <div>
          {this.state.isLogin ?
        <LoggedInNavbar/>
        :<NewNavbar/>


        }
</div>

    );
  }
}
