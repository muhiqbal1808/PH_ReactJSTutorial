import React, { useState } from "react";

import "./Hooks.css";

// class Hooks extends Component {
//   state = {
//     count: 0,
//   };

//   onUpdate = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div className="p-hooks">
//         <p>Nilai saya saat ini Adalah : {this.state.count}</p>
//         <button onClick={this.onUpdate}>Update Nilai</button>
//       </div>
//     );
//   }
// }

const Hooks = () => {
  const [count, setCount] = useState(0);

  const onUpdate = () => {
    setCount(count + 1);
  };

  return (
    <div className="p-hooks">
      <p>Nilai saya saat ini Adalah : {count}</p>
      <button onClick={onUpdate}>Update Nilai</button>
    </div>
  );
};

export default Hooks;
