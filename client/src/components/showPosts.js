import React, { Component } from "react";
import axios from "axios";
import {Form} from './AuthForm';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem"

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
        <Grid>
{
  
  this.state.data.map((item,index) => (
    <Card className={{root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }}} variant="outlined">
    <ul key={index}>
  <ListItem key ={item.details}>{"details : " + item.details}</ListItem>
  <ListItem key ={item.phone} >{"phone number : " + item.phone  }</ListItem>
  <ListItem key ={item.place}>{"city : " + item.place}</ListItem> 
  <ListItem style={{ color: 'green' }} key ={item.price}>{"Price : " + Price(item.price)}</ListItem>
  <ListItem key ={item.createdAt}>{"puplished at : " + takeDate(item.createdAt) + " At " + takeTime(item.createdAt)}</ListItem>

 
 </ul> 
 </Card>
 ))
}
</Grid>
      </form>
    );
  }
}
