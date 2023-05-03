import React from "react";
import food1 from "./pic/steak1.jpg"
import food2 from "./pic/steak2.jpg"
import food3 from "./pic/gyro1.jpg"
import food4 from "./pic/chicken1.jpg"
import "../App.css";
function Header() {
  return (
    <div className="fpics">
     <div ><img className="food1" src={food1} alt="steak1"/></div>
     <div ><img className="food2" src={food2} alt="steak1"/></div>
     <div ><img className="food3" src={food3} alt="steak1"/></div>
     <div ><img className="food4" src={food4} alt="steak1"/></div>
    </div>
  );
}

export default Header;
