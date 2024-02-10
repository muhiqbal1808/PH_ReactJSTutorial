import React, { Component } from "react";
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";
import { RootContext } from "../../../Home/Home";

class Counter extends Component {
  //   handleCounterChange = (newValue) => {
  //     this.props.onCounterChange(newValue);
  //   };

  //   handlePlus = () => {
  //     this.setState(
  //       {
  //         order: this.state.order + 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   };

  //   handleMinus = () => {
  //     if (this.state.order > 0) {
  //       this.setState(
  //         {
  //           order: this.state.order - 1,
  //         },
  //         () => {
  //           this.handleCounterChange(this.state.order);
  //         }
  //       );
  //     }
  //   };

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <div className="counter">
              <button className="minus" onClick={() => null}>
                -
              </button>
              <input type="text" value={value.totalOrder} />
              <button className="plus" onClick={() => null}>
                +
              </button>
            </div>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default Counter;
