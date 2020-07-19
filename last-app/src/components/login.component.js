import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { login } from '../utils';
import {Input} from './AuthForm'
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
  }

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
    console.log(user);

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
            this.handleLogin()
            setTimeout(function(){ window.location = "/homepage"; }, 1000);
        }
        localStorage.setItem("myEmail", res.data.user.email);
        localStorage.setItem("id", res.data.user._id);
        console.log(res.data);
      })
      .catch(() => console.log());
  }

  render() {
    return (
      <form className="sign" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <br />
          <Input
            onChange={this.onChangeemail}
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={this.state.email}
            required
          />
        </div>
        <div className="form-group">
          <br />
          <label htmlFor="Password">Password</label>
          <br />
          <Input
            onChange={this.onChangepassword}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={this.state.password}
            required
          />
        </div>
        <br />
        <div className="btn">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <br/>
          <br/>

          <p>
            <Link to="/sign-up"> Email not Exists ! Sign Up </Link>
          </p>
          <br/>
          <p id="loginResult"></p>
        </div>
      </form>
    );
  }
}
