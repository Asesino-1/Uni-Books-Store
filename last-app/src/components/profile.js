import React, { Component } from "react";
import { Button, Form, Card, Title } from "./AuthForm";
import { useAuth } from "./auth";
import { logout, isLogin } from "../utils";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      email: window.localStorage.getItem("myEmail"),
    };
  }

  getData(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
    };
    console.log(user)

    axios.get("http://localhost:5000/users/get", user).then((res) => {
      var x = res.data;
      console.log(res.data)
      document.getElementById("loginResult").innerText = x.email;
    });
  }
  render() {
    return (
      <div>
        <Form>
          <span>email : {this.state.email} </span>
          <br></br>
          <span>First name : </span>
          <br></br>
          <span>Last name : </span>
          <br></br>
          <span>Username : </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Button onClick={this.getData}>edit my profile</Button>
          <br></br>
          <br></br>
        </Form>
        <p id="loginResult"></p>
      </div>
    );
  }
}

export default Profile;
