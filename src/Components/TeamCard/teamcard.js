/** @format */

import React from "react";
import "./teamcard.css";
export default class TeamCard extends React.Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${this.props.Image})`}} className="teamCardDiv">
        <div className='_colorBox'>
        <p className="_teamTitle">{this.props.title}</p>
        </div>
      </div>
    );
  }
}
