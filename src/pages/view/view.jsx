import React, { Component } from "react";
import SideBar from "../../components/side-bar/side-bar";
import Bag from "../../components/bag/bag";
import { bagAdd } from "../../assets/icons";
import "./view.scss";
import Button from "../../components/button/button";
export default class View extends Component {
  render() {
    const { onPageChange, onLogOut, viewProduct, handleBagProducts, addToBag } =
      this.props;
    const {
      imgURL,
      name,
      model,
      rate,
      price,
      description,
      id,
      countOfProduct,
    } = viewProduct;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <button className="backBtn" onClick={() => onPageChange("dashboard")}>
            &lt; Back
          </button>
          <div className="hero">
            <div className="hero-left">
              <ul className="img-list">
                <li className="item">
                  <img src={imgURL} alt="" />
                </li>
                <li className="item">
                  <img src={imgURL} alt="" />
                </li>
                <li className="item">
                  <img src={imgURL} alt="" />
                </li>
              </ul>
              <div className="currentImg">
                <img src={imgURL} alt="" />
              </div>
            </div>
            <div className="hero-right">
              <h2 className="title">{name}</h2>
              <p className="model">{model}</p>
              <div className="rateStar">{rate}</div>
              <p className="const">$ {price}</p>
              <p className="info">{description.substring(0, 250)}</p>
              <div onClick={() => addToBag(viewProduct, 1)}>
                <Button
                  disabled={countOfProduct >= 1 ? true : false}
                  icon={bagAdd}
                  title="Add to Bag"
                />
              </div>
            </div>
          </div>
          <span className="horizontLine"></span>
          <div className="description">
            <h3>Description</h3>
            <p>{description}</p>
          </div>
        </div>

        <div className="right-sidebar">
          <Bag
            addToBag={addToBag}
            products={handleBagProducts}
            onPageChange={onPageChange}
          />
        </div>
      </div>
      // Componentlar shu divlar ichida yoziladi !!!
    );
  }
}
