import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { login } from "../utils";
import { Input } from "./AuthForm";
import Profile from "./profile";
export default class ShowPosts extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      data: []
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      phone: this.state.data.phone,
      details: this.state.data.details,
      place: this.state.data.place,
    };

    axios
      .get("http://localhost:5000/posts/get", post)
      .then((req) => {
          this.setState({data:req.data})
          console.log(this.state.data)
      })
      .catch(() => console.log('error'));
  }

  render() {
    function takeDate (date){
      var result = []
      for(var i = 0; i < 10; i++){
        result.push(date[i])
      }
      return result.join('')
    }
    function takeTime(time){
      var result = []
      for(var i = 11; i < 19; i++){
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
  <li>{"details : " + item.details + ", phone number : " + item.phone + ", city : " + item.place + ", puplished at : " + takeDate(item.createdAt) + " At " + takeTime(item.createdAt) }</li>
  ))
}
        <div className="form-group">
            <button onClick={this.onSubmit} >show posts</button>

          <br />
        </div>
      </form>
    );
  }
}
