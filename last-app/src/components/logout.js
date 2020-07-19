import React, { Component } from "react";
import axios from "axios";

class Logout extends React.Component {
  componentDidMount() {
    axios
      .get("http://localhost:5000/logout")
      .then((response) => {
        console.log(response.data);
        window.location = "/login";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div></div>;
  }
}

export default Logout;