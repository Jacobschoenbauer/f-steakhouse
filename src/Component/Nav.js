import React from "react";
import { Link } from "react-router-dom";
import steakguy1 from "./pic/steakguy1.jpg"
import "../App.css";
function Nav() {
  return (
    <div className="navbox">
      <h1 className="mtitle">Farmington Steakhouse</h1>
      <div ><img className="steakguy1" src={steakguy1} alt="steakguy1"/></div>
      <section className="navgate">
        <div className="nav">
        <Link className="home" to="/">Home</Link>

        <Link className="menu" to="/menu">Menu</Link>

        <Link className="location" to="/map">Location</Link>

        <Link className="specials" to="/specials">Specials</Link>

        <Link className="about" to="/about">About Us</Link>
        </div>
        <div className="num">
          <a classname="phone" href="tel:651-402-6956">
            651-402-6956
          </a>
        </div>
      </section>
    </div>
  );
}

export default Nav;
