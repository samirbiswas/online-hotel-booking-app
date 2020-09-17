import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Logo.png'

import './Header.css'


const Header = () => {
  
 
    return (
     
            <div className="container">

            <nav className="navbar navbar-expand-lg navbar-color nav-color">
  <a className="navbar-brand header-logo" href="/">
      <img className="logo-design" src={logo} alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
      
      <li className="nav-item">
        <Link
        to='/blog' 
         className="nav-link" >Blog</Link>
      </li>
      <li className="nav-item">
        <Link to='/login' className="nav-link">Login</Link>
      </li>
    </ul> 
    
  </div>
</nav>

            </div>
   
      
      
    );
};

export default Header;