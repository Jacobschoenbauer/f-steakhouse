import React, { Component } from 'react';
import data from "../Data/Data.json";
export default class Menu extends Component {
  render() {
    const {
      menu
    } = data;

    return (
      <div>{menu}</div>
    )
      
    
  }
}