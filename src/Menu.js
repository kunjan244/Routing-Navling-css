import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return(
        <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#"><font color="whitesmoke">React</font></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="div1" id="navbarNav">
    <ul className="navbar">
    <li className="navlink">
        <a className="nav-link" href="#"><span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/">Home</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/about"><font color="white">About us</font></Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/contact">Contact</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/login">Login</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/info">Info</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/user">User</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/function">Function</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link exact to="/product">Product</Link></a>
      </li>

      
     
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0 bg-light" type="submit">Search</button>
    </form>
      
    </ul>
  </div>
</nav>
      </div>
      </>
    );
}
      export default Menu;
      