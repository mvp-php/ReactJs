import React, { Component } from 'react'
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Routes,Link,Switch} from 'react-router-dom'

import Register from '../Register';
import Login from '../Login/Login';
import Home from '../Home/Home';
class Header extends Component {
    render() {
    return (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              
            </ul>
    
            <hr />
    
           
            <Switch>
              
            
              <Route path="/home" component={Home}>
                <Home />
              </Route>
              <Route path="/register" component={Register}>
                <Register />
              </Route>
              <Route path="/login" component={Login}>
                <Login />
              </Route>
              
            </Switch>
          </div>
        </Router>
      );
    }
}
export default Header
