import React, { Component} from 'react'
import { useState } from 'react';
import axios from "axios";
import ReactDOM from "react-dom";

class Login extends React.Component {
  
  constructor(props) {
    super(props);
    

    this.state = { email:"",password:""};
    this.handleChange = this.handleChange.bind(this);
    this.PhandleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(e) {
    console.log(e.target);
    this.setState({ email: e.target.value });
  }
  PhandleChange(e) {
    
    this.setState({ password: e.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    try {
          axios.get('http://localhost:5000/login', {
             
              email: "123",
              password: "1234",
             
          });
          this.props.history.push('/');
         
      } catch (error) {
          if (error.response) {
             // setMsg(error.response.data.msg);
          }
      }
  }


    render() {
      
    return (
      <div className="App">
        <div>Login</div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" name="email"  onChange={this.handleChange} value={this.state.email}/>
        </label>
        <label>
          password:
          <input type="text" name="password" onChange={this.PhandleChange} value={this.state.password}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
        
      );
    }
}
export default Login
