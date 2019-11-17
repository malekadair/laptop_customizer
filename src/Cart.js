import React, { Component } from "react";
import CartItem from "./CartItem";
// import { directive } from "@babel/types";
const USCurrencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

class Cart extends Component {
  render() {
    console.log("summary", this.props.summary);

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {/* {this.props.summary} */}
        <CartItem summary={this.props.summary} />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(this.props.total)}
          </div>
        </div>
      </section>
    );
  }
}

export default Cart;
