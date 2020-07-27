import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { login } from "../utils";
import { Input } from "./AuthForm";
import Profile from "./profile";
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
    <ul key={index}>
  <li key ={item.phone} >{"phone number : " + item.phone  }</li><br/>
  <li key ={item.details}>{"details : " + item.details}</li><br/>
  <li key ={item.place}>{"city : " + item.place}</li> <br/>
  <li style={{ color: 'green' }} key ={item.price}>{"Price : " + Price(item.price)}</li><br/>
  <li key ={item.createdAt}>{"puplished at : " + takeDate(item.createdAt) + " At " + takeTime(item.createdAt)}</li>

 <br/><br/><br/>
 </ul> ))
}
      </form>
    );
  }
}
