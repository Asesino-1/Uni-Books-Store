import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.handelChangeEmail = this.handelChangeEmail.bind(this);
    this.handelChangeUsername = this.handelChangeUsername.bind(this);
    this.handelChangePassword = this.handelChangePassword.bind(this);
    this.handelChangeFirstname = this.handelChangeFirstname.bind(this);
    this.handelChangeLastname = this.handelChangeLastname.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    }
  }

  handelChangeUsername=(e) =>{
    this.setState({
      username: e.target.value
    })
  }
  handelChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  handelChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  handelChangeFirstname(e){
      this.setState({
          firstname: e.target.value
      })
  }
  handelChangeLastname(e){
    this.setState({
        lastname: e.target.value
    })
}


  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => {document.getElementById('accoutCreated').innerText = "Account created Successfully! "});

    this.setState({
      username: '',
      email: '',
      password: '',
      firstname: '',
      lastname: ''
    })

  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                name= "username"
                value={this.state.name}
                onChange={this.handelChangeUsername}
                />
                <label>Email: </label>
            <input  type="email"
                required
                className="form-control"
                name="email"
                value={this.state.name}
                onChange={this.handelChangeEmail}
                />
              <label>Password: </label>
            <input  type="Password"
                required
                className="form-control"
                name="password"
                value={this.state.name}
                onChange={this.handelChangePassword}
                />
               <label>First Name: </label>
            <input  type="text"
                required
                className="form-control"
                name="firstname"
                value={this.state.name}
                onChange={this.handelChangeFirstname}
                />
                <label>Last Name: </label>
            <input  type="text"
                required
                className="form-control"
                name="lastname"
                value={this.state.name}
                onChange={this.handelChangeLastname}
                />


          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
          <p id="accoutCreated"></p>

        </form>
      </div>
    )
  }
}
