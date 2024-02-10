import React, { Component, Fragment } from "react";
// import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../BlogPost/BlogPost";
// import YoutubeComponent from "../../components/YoutubeComponent/YoutubeComponent";
// import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 15000);
  }
  render() {
    return (
      <Fragment>
        {/* <p>Yotube Component</p>
        <hr />
        <YoutubeComponent
          time="7.12"
          title="FULL MATCH FINAL GAME 2: INDONESIA VS JEPANG | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 9 Jam yang lalu"
        />
        <YoutubeComponent
          time="8.22"
          title="FULL MATCH FINAL GAME 1: INDONESIA VS JEPANG | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 9 Jam yang lalu"
        />
        <YoutubeComponent
          time="5.04"
          title="FULL MATCH GAME 2: INDONESIA VS THAILAND | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 14 Jam yang lalu"
        />
        <YoutubeComponent
          time="7.52"
          title="FULL MATCH GAME 1: INDONESIA VS THAILAND | AFC eASIAN CUP QATAR"
          desc="2x ditonton, 14 Jam yang lalu"
        />
        <YoutubeComponent /> */}
        {/* <p>Counter</p>
        <hr />
        <Product /> */}
        {/* <p>Life Cycle Component</p>
        <hr />
        {this.state.showComponent ? <LifeCycleComponent /> : null} */}
        <p>Blog Post</p>
        <hr />
        <BlogPost />
      </Fragment>
    );
  }
}

export default Home;
