import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://images.tokopedia.net/img/cache/300-square/hDjmkQ/2023/6/24/488ea6ee-088c-466e-8ecf-b438d5c879bd.jpg"
            alt=""
          />
        </div>
        <p className="product-title">
          PINZY Headset Bluetooth Sport Magnetic design Original Pz03
        </p>
        <p className="product-price">Rp. 13.500</p>
        <Counter
          onCounterChange={(value) => this.props.onCounterChange(value)}
        />
      </div>
    );
  }
}

export default CardProduct;
