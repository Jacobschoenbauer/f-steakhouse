import React, { Component } from "react";
import image1 from "./pic/steak1.jpg";
import image2 from "./pic/steak2.jpg";
import image3 from "./pic/gyro1.jpg";
import image4 from "./pic/chicken1.jpg";
import data from "../Data/Data.json";
import "../App.css";
export default class Header extends Component {
  render() {
    const {
      about: {},
    } = data;
    return (
      <div className="fpics">
        <div>
          <img className="image1" src={image1} alt="image 1" />
        </div>
        <div>
          <img className="image2" src={image2} alt="image 2" />
        </div>
        <div>
          <img className="image3" src={image3} alt="image 3" />
        </div>
        <div>
          <img className="image4" src={image4} alt="image 4" />
        </div>
      </div>
    );
  }
}
