import React, { Component } from "react";
import { Button,Form,Card,Title } from "./AuthForm";
import { useAuth } from "./auth";
import { logout, isLogin } from '../utils';
import { Redirect } from "react-router-dom";


class Profile extends Component{
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

render(){
return (
  <div>
        <Form>
          <span>full name : </span> <br></br>
          <span>user name : </span>
          <br></br>
          <span>email : </span>
          <br></br>
          <span>password : </span>
          <br></br>
          <br></br>
          <br></br>
          <Button>edit my profile</Button>
          <br></br>
          <br></br>
        </Form>
        </div>
    );
}
  }


export default Profile;
