import React, { Component } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./Home.css";

import LifeCycleComponent from "../pages/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import YoutubeComponentPage from "../pages/YoutubeComponentPage/YoutubeComponentPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import Hooks from "../pages/Hooks/Hooks";

import GlobalProvider from "../../context/context";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <Link to="/">Blog Post</Link>
          <Link to="/product">Product</Link>
          <Link to="/lifecycle">Lifecycle</Link>
          <Link to="/youtube">Youtube</Link>
          <Link to="/hooks">Hooks</Link>
        </div>
        <Routes>
          <Route path="/" Component={BlogPost} />
          <Route path="/detail-post/:id" Component={DetailPost} />
          <Route path="/product" Component={Product} />
          <Route path="/lifecycle" Component={LifeCycleComponent} />
          <Route path="/youtube" Component={YoutubeComponentPage} />
          <Route path="/hooks" Component={Hooks} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default GlobalProvider(Home);
