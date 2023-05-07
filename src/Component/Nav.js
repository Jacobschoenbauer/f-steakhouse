import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../Data/Data.json";
import logo from "./pic/steakguy1.jpg"
import "../App.css";
export default class Nav extends Component {
 
  render() {
    
    const {
     about:{
      title,
    telephone,
    },
    } = data;
    

  return (
    <div className="navbox">
      <h1 className="mtitle"><div>{title}</div></h1>
      <div ><img className="logo1" src={logo} alt="logo1"/></div>
      <section className="navgate">
        <div className="nav">
        <Link className="home" to="/">Home</Link>

        <Link className="menu" to="/menu">Menu</Link>

        <Link className="location" to="/map">Location</Link>
 
        </div>
        <div className="num">
          <a className="phone" href="tel:651-463-3726">
            {telephone}
          </a>
        </div>
      </section>
    </div>
  );
}

}
