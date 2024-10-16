import React, { Component } from 'react';
import "./Navbar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <div className='main'>
        <div>  Logo </div>
  
          <ul className='navbar'>  <li> Home</li>
            <li> About</li>
            <li> Contacts</li></ul>
          <div>  <div> SignIn</div>
          <div>Profile</div></div>
        </div>
        
      </div>
    )
  }
}

