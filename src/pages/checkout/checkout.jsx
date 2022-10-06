import React, { Component } from "react";
import Button from "../../components/button/button";
import SideBar from "../../components/side-bar/side-bar";
import Stars from "../../components/starts/star";

import "./checkout.scss";

class Checkout extends Component {
  totalCountValue = () => {
    const { handleBagProducts } = this.props;
    let count = 0;
    this.props.products.map(
      ({ price, countOfProduct }, idx) => (count += price * countOfProduct)
    );
    return count;
  };

  render() {
    const { onLogOut, onPageChange, user, products, inCrement } = this.props;
    return (
      <div className="dashboard">
        <div className="left-sidebar">
          <SideBar onLogOut={onLogOut} onPageChange={onPageChange} />
        </div>
        <div className="main-wrapper">
          <div className="checkout">
            <h1 className="checkout-title">Checkout</h1>
            <div className="user-info">
              <h2>Shipping Address</h2>
              <div className="user">
                <ul>
                  <li>{user[0]}</li>
                  <li>{user[1]}</li>
                  <li>{user[2]}</li>
                  <li>{user[3]}</li>
                  <li>{user[4]}</li>
                </ul>
                <Button title="Change" onLogOut={onLogOut} />
              </div>
            </div>
            <div className="shipping-info">
              <h1>Review Bag</h1>
              {products.map(
                ({ price, name, id, imgURL, countOfProduct, rate }, idx) => (
                  <div key={id} className="review-bag">
                    <div className="img-box">
                      <img src={imgURL} alt="" />
                    </div>
                    <div className="info">
                      <h2>{name}</h2>
                      <h5>White</h5>
                      <p>
                        Lorem ipsum dolor sit consectetur adipiscing elit ut
                        aliquam{" "}
                      </p>

                      <div className="stars-part">
                        <Stars rate={rate} /> {rate}/5
                      </div>

                      <div className="price">
                        <span>
                          $ {price} x {countOfProduct}
                        </span>
                        <div className="counts">
                          <button
                            className="btn-red"
                            onClick={() => inCrement(id, -1)}
                          >
                            -
                          </button>
                          <span>{countOfProduct}</span>
                          <button
                            className="btn-success"
                            onClick={() => inCrement(id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="total-wrapper">
            <div className="totalCount">
              <h2>Order Summary</h2>
              <div className="items">
                <p>Items:</p>
                <p>$ {this.totalCountValue()}</p>
              </div>
              <div className="shipping">
                <p>Shipping:</p>
                <p>$ {Math.floor(this.totalCountValue() / 90)} </p>
              </div>
              <hr />
              <div className="order-total">
                <h2>Order Total:</h2>
                <h2>
                  {this.totalCountValue() +
                    Math.floor(this.totalCountValue() / 90)}{" "}
                </h2>
              </div>
              <button onClick={() => alert("Thanks For Shopping")}>
                Place Your Orders
              </button>
            </div>
            <button
              className="backBtn"
              onClick={() => onPageChange("bag-items")}
            >
              &lt; Back
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Checkout;
