import React, { Component } from "react";
import data from "../Data/Data.json";
import { Link } from "react-router-dom";
import "../App.css";
const logo = data.logo.map(({ alt, src }) => (
  <div>
    <img className="logo" src={src} alt={alt} />
  </div>
));

export default class Nav extends Component {
  render() {
    const {
      about: { title, telephone },
    } = data;

    return (
      <div className="navbox">
        <h1 className="mtitle">
          <div>{title}</div>
        </h1>
        <div className="logo">{logo}</div>
        <section className="navgate">
          <div className="nav">
            <Link className="home" to="/">
              Home
            </Link>

            <Link className="menu" to="/menu">
              Menu
            </Link>

            <Link className="location" to="/map">
              Location
            </Link>
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
