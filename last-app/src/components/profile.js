import React, { Component } from "react";
import { Button,Form,Card,Title } from "./AuthForm";
import { useAuth } from "./auth";
import { logout, isLogin } from '../utils';
import { Redirect } from "react-router-dom";
import axios from "axios"

class Profile extends Component{
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
this.state ={
email: "awselali77@gmail.com",
}
}
getData(e){
  e.preventDefault();
  const user = {
  email: this.state.email,
  }
  // console.log(user);
  axios
.get("http://localhost:5000/users/get",user)
.then((res) =>{
  console.log(res.data)
var x = res.data
  document.getElementById("loginResult").innerText = (x.email)
  // console.log(res)
})
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
