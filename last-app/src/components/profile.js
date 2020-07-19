import React, { Component } from "react";
import { Button,Form,Card,Title } from "./AuthForm";
import { useAuth } from "./auth";
import { logout, isLogin } from '../utils';
import { Redirect } from "react-router-dom";
import axios from "axios"

class Profile extends Component{
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
    };

    this.state = {
        isLogin: isLogin()
    }
    
}
onSubmit = (e) => {
  e.preventDefault();
  const user = {
    email: this.state.email,
    password: this.state.password,
  };
}

render(){
  
return (
  <div>
        <Form>
          <span>First name : </span> 
          <br></br>
          <span>Last name : </span>
          <br></br>
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
