import React, { Component } from "react";
import { bagHandle, logout, storefront } from "../../assets/icons";

import "./side-bar.scss";
export default class SideBar extends Component {
  render() {
    const { onLogOut, onPageChange } = this.props;
    return (
      <div className="side-bar">
        <span
          className="store-icon"
          style={
            JSON.parse(localStorage.getItem("page")) == "view" ||
            JSON.parse(localStorage.getItem("page")) == "dashboard"
              ? {
                  backgroundColor: "black",
                  color: "white",
                }
              : {}
          }
          onClick={() => onPageChange("dashboard")}
        >
          {storefront}
        </span>
        <span
          className="bagHandle-icon"
          onClick={() => onPageChange("bag-items")}
          style={
            JSON.parse(localStorage.getItem("page")) == "bag-items" ||
            JSON.parse(localStorage.getItem("page")) == "checkout"
              ? {
                  backgroundColor: "black",
                  color: "white",
                }
              : {}
          }
        >
          {bagHandle}
        </span>
        <span className="logout-icon" onClick={onLogOut}>
          {logout}
        </span>
      </div>
    );
  }
}
