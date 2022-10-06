import React, { Component } from "react";
import Stars from "../../components/starts/star";
import "./bag-items.scss";

class BagItem extends Component {
  render() {
    const { product, inCrement } = this.props;
    const { imgURL, rate, name, model, price, countOfProduct, id } = product;
    return (
      <div className="bag-item">
        <div className="bag-items-box">
          <div className="bag-items-box__img">
            <img src={imgURL} alt="" />
          </div>
          <div className="bag-items-box__description">
            <h1>{name}</h1>
            <p>{model}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </p>
            <div className="bag-items__starts-vs-rate">
              <span className="bag-items__starts"></span>
              <span className="bag-items__rate">
                <Stars rate={rate} /> {rate}/5
              </span>
            </div>
            <div className="bag-items-box__description__price-part">
              <div className="bag-items-box__price-box">
                <span className="bag-items-box__price">${price}</span>
                <span>x</span>
                <span className="bag-items-box__goods">{countOfProduct}</span>
              </div>
              <div className="bag-items-box__total-goods">
                <span
                  className="bag-items-box__dec"
                  onClick={() => inCrement(id, -1)}
                >
                  -
                </span>
                <span className="bag-items-box__count">{countOfProduct}</span>
                <span
                  className="bag-items-box__inc"
                  onClick={() => inCrement(id, 1)}
                >
                  +
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BagItem;
