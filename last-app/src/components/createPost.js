import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Card, Form, Input, Button } from './AuthForm';

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handelChangePhone = this.handelChangePhone.bind(this);
    this.handelChangeDetails = this.handelChangeDetails.bind(this);
    this.handelChangePlace = this.handelChangePlace.bind(this);
    this.handelChangePrice = this.handelChangePrice.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      phone: '',
      details: '',
      place: '',
      price:'',
    }
  }

  handelChangePhone=(e) =>{
    this.setState({
        phone: e.target.value
    })
  }
    handelChangePrice=(e) =>{
      this.setState({
          price: e.target.value
      })
  
  }
  handelChangeDetails(e) {
    this.setState({
        details: e.target.value
    });
  }
  handelChangePlace(e) {
    this.setState({
        place: e.target.value
    });
  }


  onSubmit(e) {
    e.preventDefault();

    const post = {
        phone: this.state.phone,
        details: this.state.details,
        place: this.state.place,
        price:this.state.price,
    }

    if(post.phone.length !== 10){
      document.getElementById('accoutCreated').innerText = "Phone number have to be 10 characters! "
    }
    if(post.place === ""){
      document.getElementById('accoutCreated').innerText = "Please select a city! "
    }
    if(this.state.place === "Please select one"){
      this.setState({
        place : ""
      })

    }


    axios.post('http://localhost:5000/posts/add', post)

    .then(res => {
      document.getElementById('accoutCreated').innerText = "Post created Successfully! "
      setTimeout(function(){ window.location = "/homepage"; }, 1000);

    })

  }

  render() {
    return (
      <div>        
        <Card>

        <h3>Create New Post</h3>
          <Form>        
            <form onSubmit={this.onSubmit}>

          <div className="form-group"> 
            <label>Description: </label>
            <textarea  type="text"
                required
                placeholder="details"
                className="form-control"
                name= "details"
                value={this.state.name}
                onChange={this.handelChangeDetails}
                />
                <label>City: </label>
            <select  type="text"
                
                className="form-control"
                name="place"
                placeholder="place"
                value={this.state.name}
                onChange={this.handelChangePlace}
                required>
                  <option>Amman </option>
                  <option>Irbid </option>
                  <option>Aqaba </option>
                  <option>Karak </option>
                  </select>
              <label>Phone number: </label>
            <input  type="number"
                required
                className="form-control"
                name="number"
                placeholder="Phone number"
                value={this.state.name}
                onChange={this.handelChangePhone}
                />

<label>Price: </label>
            <input  type="number"
                required
                placeholder="Price"
                className="form-control"
                name= "price"
                value={this.state.name}
                onChange={this.handelChangePrice}
                />

          </div>
          <div className="form-group">
            <Button type="submit"  className="btn btn-primary" >
            Create Post
            </Button>
          </div>
          <br/>
          <p id="accoutCreated"></p> 
          </form>
          </Form>
       
        </Card>
      </div>
    )
  }
}
