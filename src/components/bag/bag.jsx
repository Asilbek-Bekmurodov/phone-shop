import { Component } from "react";
import "./bag.scss";

import { bagHandle } from "../../assets/icons";
class Bag extends Component {
  totalCountValue = () => {
    let count = 0;
    this.props.products.map(
      ({ price, countOfProduct }, idx) => (count += price * countOfProduct)
    );
    return count;
  };

  render() {
    const {
      onPageChange,
      btnTitle = "View Bag",
      products,
      isEmpty = "Empty",
      addToBag,
    } = this.props;
    return (
      <>
        <div className="bag">
          <h1 className="bagTitle">Bag</h1>
          {products.length == 0 && (
            <h2
              style={{
                textAlign: "center",
                color: "#e6d117",
              }}
            >
              {isEmpty}
            </h2>
          )}
          <div className="cards">
            {products.map((product, idx) => (
              <div className="card" key={product.id}>
                <p onClick={() => addToBag(product, 0)}>x</p>
                <span>{product.countOfProduct}</span>
                <img src={product.imgURL} alt="" />
              </div>
            ))}
          </div>

          <h1 className="money">Bag Total: {this.totalCountValue()}$</h1>
          <button
            onClick={() =>
              onPageChange(btnTitle === "View Bag" ? "bag-items" : "checkout")
            }
            className="btnBag"
          >
            {bagHandle} {btnTitle}
          </button>
        </div>
      </>
    );
  }
}

export default Bag;
