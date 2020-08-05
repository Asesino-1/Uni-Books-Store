import React, { Component } from "react";
import { Button, Form, Card, Title } from "./AuthForm";
import { useAuth } from "./auth";
import { logout, isLogin } from "../utils";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    // this.getData = this.getData.bind(this);
    this.state = {
      email: '',
      userName:'',
      firstName:'',
      lastName:''
    };
  }
getData = ()=>{
  let that = this
  // console.log(that.state)
  axios.get(`http://localhost:5000/users/get`, {params:{email:window.localStorage.getItem("myEmail")}}).then((res) => {
    // console.log(res)
    that.setState({
      email:res.data.email,
      userName:res.data.username,
      firstName:res.data.firstname,
      lastName:res.data.lastname
    })
  }).catch((err) => console.log(err));
}
  componentDidMount = () => {
    this.getData()
    // var userEmail = window.localStorage.getItem("myEmail")
    // console.log(userEmail)
    // this.setState({email:userEmail})
    // console.log(this.state," hi from he didmount")
    
    // console.log(that.state)
  }
  render() {
    return (
      <div>
        <Form>
        <span>Username :{this.state.userName} </span>
          <br></br>
    <span>First name : {this.state.firstName}</span>
          <br></br>
    <span>Last name : {this.state.lastName}</span>
          <br></br>
          <span>email : {this.state.email} </span>
          <br></br>
          <br></br>
          <br></br>
        </Form>
        <p id="loginResult"></p>
      </div>
    );
  }
}

export default Profile;
