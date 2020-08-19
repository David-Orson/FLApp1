import React from "react";
import { Router } from "@reach/router";

import "./css/App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Sync from "./pages/Sync";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <div className="navbar-container">
          <Navbar />
        </div>

        <div className="content-container">
          <div className="content">
            <Router>
              <Sync path="/" />
              <Products path="/products" />
              <Categories path="/categories" />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
