import React, { Component, createContext } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import "./Home.css";

import LifeCycleComponent from "../pages/LifeCycleComponent/LifeCycleComponent";
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import YoutubeComponentPage from "../pages/YoutubeComponentPage/YoutubeComponentPage";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";

export const RootContext = createContext();
const Provider = RootContext.Provider;

class Home extends Component {
  state = {
    totalOrder: 5,
  };

  render() {
    return (
      <BrowserRouter>
        <Provider value={this.state}>
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
        </Provider>
      </BrowserRouter>
    );
  }
}

export default Home;
