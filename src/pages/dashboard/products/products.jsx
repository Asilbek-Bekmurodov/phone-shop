import React, { Component } from "react";
import products from "../../../products";
import Product from "./product";
import "./products.scss";
class Products extends Component {
  render() {
    const { onPageChange, addToBag } = this.props;
    return (
      <div className="products-section">
        <h1>Products</h1>
        <div className="products">
          {products.map((product, idx) => (
            <Product
              key={product.id}
              product={product}
              onPageChange={onPageChange}
              addToBag={addToBag}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
