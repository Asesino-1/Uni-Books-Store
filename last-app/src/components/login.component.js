import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { login } from "../utils";
import { Card, Logo, Form, Input, Button } from './AuthForm';
import logoImg from "./logo.jpg"
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
    this.handleLogin = () => {
      login();
    };
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    // console.log(user);

    axios
      .post("http://localhost:5000/users/login", user)
      .then((res) => {
        if (res.data === "User not exist") {
          document.getElementById("loginResult").innerText =
            "Login Failed! The email not exists! ";
        } else if (res.data === "wrong") {
          document.getElementById("loginResult").innerText =
            "Login Failed! Wrong password! ";
        } else if (res.data === "success") {
          document.getElementById("loginResult").innerText =
            "Login Successed! ";
          this.handleLogin();
          // console.log("hi",this.state.email)

          window.localStorage.setItem("myEmail",this.state.email);
          setTimeout(function(){ window.location = "/homepage";}, 1000);
          // setTimeout(()=> <Profile message="hello" /> ,  2000);
        }
        // console.log(res.data.user.email);
        // window.localStorage.setItem("myEmail");
        // localStorage.setItem("id");
        // console.log(res.data);
      })
      .catch(() => console.log('error'));
  }

  render() {
    return (
      <form className="sign" onSubmit={this.onSubmit}>
                   <Card>
                   <Logo src={logoImg} />

                     <Form>
 <label htmlFor="email">Email address</label>
          <Input
            onChange={this.onChangeemail}
            type="email"
            name="email" 
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="email"
            value={this.state.email}
            required
          />
        {/* <div>
        <Profile message="hello" />
      </div> */}

          <label htmlFor="Password">Password</label>
          <Input
            onChange={this.onChangepassword}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={this.state.password}
            required
          />
          <Button type="submit" className="btn btn-primary">
            Login
          </Button>
</Form>
            <Link to="/sign-up"> Email not Exists ! Sign Up </Link>
          <br />
          <p id="loginResult"></p> 

                           </Card>

      </form>
    );
  }
}
