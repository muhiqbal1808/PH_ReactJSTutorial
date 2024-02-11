import React, { Component } from "react";
// import { connect } from "react-redux";
import { RootContext } from "../../Home/Home";

import "./Product.css";

import CardProduct from "./CardProduct/CardProduct";

class Product extends Component {
  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <>
              <p>Halaman Product</p>
              <hr />
              <div className="container">
                <div className="header">
                  <div className="logo">
                    <img
                      src="https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/zeus/production/e5b8438b.svg"
                      alt=""
                    />
                  </div>
                  <div className="troley">
                    <img
                      src="https://img.icons8.com/ios/50/shopping-cart--v1.png"
                      alt="shopping-cart--v1"
                    />
                    <div className="count">{value.state.totalOrder}</div>
                  </div>
                </div>
                <CardProduct />
              </div>
            </>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

// export default connect(mapStateToProps)(Product);
export default Product;
