import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.handelChangePhone = this.handelChangePhone.bind(this);
    this.handelChangeDetails = this.handelChangeDetails.bind(this);
    this.handelChangePlace = this.handelChangePlace.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      phone: '',
      details: '',
      place: ''
    }
  }

  handelChangePhone=(e) =>{
    this.setState({
        phone: e.target.value
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
        place: this.state.place
    }

    console.log(post.phone.length);
    if(post.phone.length !== 10){
      document.getElementById('accoutCreated').innerText = "Phone number have to be 10 characters! "
    }

    axios.post('http://localhost:5000/posts/add', post)

    .then(res => {
      document.getElementById('accoutCreated').innerText = "Post created Successfully! "
      
    })

  }

  render() {
    return (
      <div>
        <h3>Create New Post</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                placeholder="details"
                className="form-control"
                name= "details"
                value={this.state.name}
                onChange={this.handelChangeDetails}
                />
                <label>Place: </label>
            <input  type="text"
                required
                className="form-control"
                name="place"
                placeholder="place"
                value={this.state.name}
                onChange={this.handelChangePlace}
                />
                  {/* <option>amman </option>
                  <option>irbid </option>
                  <option>aqaba </option>
                  <option>karak </option> */}
              <label>Phone number: </label>
            <input  type="text"
                required
                className="form-control"
                name="number"
                placeholder="Phone number"
                value={this.state.name}
                onChange={this.handelChangePhone}
                />


          </div>
          <div className="form-group">
            <input type="submit" value="Create Post" className="btn btn-primary" />
          </div>
          <br/>
          <p id="accoutCreated"></p>

        </form>
      </div>
    )
  }
}
