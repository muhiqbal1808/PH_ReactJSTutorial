import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./Home.css";

import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../BlogPost/BlogPost";
import Product from "../Product/Product";

class Home extends Component {
  state = {
    showComponent: true,
  };

  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Blog Post</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifecycle">Lifecycle</Link>
        </div>
        <Routes>
          <Route path="/" Component={BlogPost} />
          <Route path="/product" Component={Product} />
          <Route path="/lifecycle" Component={LifeCycleComponent} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Home;
