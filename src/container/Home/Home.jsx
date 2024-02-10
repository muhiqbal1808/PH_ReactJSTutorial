import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./Home.css";

import LifeCycleComponent from "../pages/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import YoutubeComponentPage from "../pages/YoutubeComponentPage/YoutubeComponentPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

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
          <Link to="/youtube">Youtube</Link>
        </div>
        <Routes>
          <Route path="/" Component={BlogPost} />
          <Route path="/detail-post/:id" Component={DetailPost} />
          <Route path="/product" Component={Product} />
          <Route path="/lifecycle" Component={LifeCycleComponent} />
          <Route path="/youtube" Component={YoutubeComponentPage} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Home;
