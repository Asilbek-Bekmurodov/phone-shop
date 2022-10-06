import React, { Component } from "react";

import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import BagItems from "./pages/bag-items/bag-items";
import View from "./pages/view/view";
import products from "./products";
import Checkout from "./pages/checkout/checkout";
import { set } from "lodash";
const USER_KEY = "user";
const PAGE_KEY = "page";
const REDIRECT_PAGE = "login";

class App extends Component {
  constructor(props) {
    super(props);
    const user = JSON.parse(localStorage.getItem(USER_KEY)); // get user
    const page = JSON.parse(localStorage.getItem(PAGE_KEY)); // get page
    this.state = {
      page: user ? page : REDIRECT_PAGE,
      user,
      products: products,
      viewProduct: JSON.parse(localStorage.getItem("viewProduct")),
    };
  }

  handleLogOut = () => {
    localStorage.setItem(PAGE_KEY, JSON.stringify("login"));
    this.setState({
      user: JSON.parse(localStorage.getItem(USER_KEY)),
      page: REDIRECT_PAGE,
    });
  };

  handleLogIn = (value) => {
    localStorage.setItem(USER_KEY, JSON.stringify(value));
    localStorage.setItem(PAGE_KEY, JSON.stringify("dashboard")); // save page
    this.setState({ user: value, page: "dashboard" });
  };

  handlePageChange = (newPage, selectedProduct) => {
    const viewProduct = this.state.products.filter(
      ({ id }) => id === selectedProduct
    );

    localStorage.setItem(PAGE_KEY, JSON.stringify(newPage)); // save page
    localStorage.setItem("viewProduct", JSON.stringify(viewProduct)); // save page
    this.setState({ page: newPage, viewProduct });
  };

  handleBagProducts = () => {
    const { products } = this.state;
    const bagProducts = products.filter(
      ({ countOfProduct }) => countOfProduct > 0
    );

    return bagProducts;
  };

  handleInCrement = (id, aggregade) => {
    const { products } = this.state;
    const newProducts = products.map((product) => {
      if (product.id === id) {
        product.countOfProduct = product.countOfProduct + 1 * aggregade;
      }
      return product;
    });
    this.setState({ products: newProducts });
  };
  addToBag = (product, zero) => {
    const { products } = this.state;
    const selectedIdx = products.findIndex((t) => t === product);

    products[selectedIdx].countOfProduct = zero;
    this.setState({ products });
  };

  getPage = () => {
    const { products, user, page, viewProduct, totalCount } = this.state;
    const defaultProps = {
      onPageChange: this.handlePageChange,
      onLogOut: this.handleLogOut,
    };

    switch (page) {
      case "login":
        return <Login onLogin={this.handleLogIn} value={user && user} />;
      case "dashboard":
        return (
          <Dashboard
            {...defaultProps}
            products={products}
            handleBagProducts={this.handleBagProducts()}
            addToBag={this.addToBag}
          />
        );
      case "bag-items":
        return (
          <BagItems
            {...defaultProps}
            products={this.handleBagProducts()}
            inCrement={this.handleInCrement}
            handleBagProducts={this.handleBagProducts()}
            isEmpty="You Select Nothing To Buy"
            addToBag={this.addToBag}
          />
        );

      case "view":
        return (
          <View
            {...defaultProps}
            handleBagProducts={this.handleBagProducts()}
            viewProduct={viewProduct[0]}
            addToBag={this.addToBag}
          />
        );
      case "checkout":
        return (
          <Checkout
            {...defaultProps}
            user={user}
            products={this.handleBagProducts()}
            inCrement={this.handleInCrement}
            handleBagProducts={this.handleBagProducts()}
          />
        );
      default:
        return <Login onLogin={this.handleLogIn} />;
    }
  };

  render() {
    console.log("state = ", this.state);
    return <div className="wrapper">{this.getPage()}</div>;
  }
}

export default App;
