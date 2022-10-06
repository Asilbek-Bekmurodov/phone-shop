import React, { Component } from "react";
import "./stars.scss";
import { star, starHalf, starOutline } from "./../../assets/icons";

class Stars extends Component {
  render() {
    const { rate } = this.props;
    const full = new Array(parseInt(rate)).fill(1);
    const half = (rate % 1) * 2;
    const empty = new Array(parseInt(5 - rate)).fill(1);
    return (
      <div className="stars">
        {full.map((item, idx) => (
          <div className="full" key={idx}>
            {star}
          </div>
        ))}
        {half != 0 && <div className="half">{starHalf}</div>}
        {empty.map((item, idx) => (
          <div className="empty" key={idx}>
            {starOutline}
          </div>
        ))}
      </div>
    );
  }
}

export default Stars;
