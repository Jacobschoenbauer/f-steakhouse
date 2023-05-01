import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
function Nav() {
  return (

    <div class="dropdown">
      <h1>Farmington Steakhouse</h1>
      <a href="tel:651-402-6956">651-402-6956</a>
      <Link to="/">Home</Link>

      <Link to="/menu">Menu</Link>

      <Link to="/map">Location</Link>

      <Link to="/specials">Specials</Link>

      <Link to="/about">About Us</Link>
    </div>
  );
}

export default Nav;
