import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { login } from "../utils";
import Profile from "./profile";
import { Card, Form, Input, Button } from './AuthForm';

export default class ShowPosts extends Component {
  constructor(props) {
    super(props);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      data: []
    };
  }
  componentDidMount = () => {
    const post = {
      phone: this.state.data.phone,
      details: this.state.data.details,
      place: this.state.data.place,
    };

    axios
      .get("http://localhost:5000/posts/get", post)
      .then((req) => {
          this.setState({data:req.data})
        
      })
      .catch(() => console.log('error'));
  }


  render() {
    function Price(item){
    if(item === "0"){
      return "Free"
    }
    return item +" JD"
    }
    function takeDate (date){
      var result = []
      for(var i = 0; i < 10; i++){
        result.push(date[i])
      }
      return result.join('')
    }
    function takeTime(time){
      var result = []
      for(var i = 11; i < 16; i++){
        result.push(time[i])
      }
      return result.join('')
    }
    return (
      <form className="sign" onSubmit={this.onSubmit}>
        <div className="form-group">

          <br />
        </div>

{
  
  this.state.data.map((item,index) => (
      <Form key = {index+1}>
    <ul key={index}>
  <label key ={item.details}>{"details : " + item.details}</label><br/>
  <label key ={item.phone} >{"phone number : " + item.phone  }</label><br/>
  <label key ={item.place}>{"city : " + item.place}</label> <br/>
  <label style={{ color: 'green' }} key ={item.price}>{"Price : " + Price(item.price)}</label><br/>
  <label key ={item.createdAt}>{"puplished at : " + takeDate(item.createdAt) + " At " + takeTime(item.createdAt)}</label>

 <br/><br/><br/>
 </ul> 
 </Form>
 ))
}
      </form>
    );
  }
}
