import React, { useState, useEffect } from "react";
import { Router, useLocation } from "@reach/router";
import queryString from "query-string";
import axios from "axios";

import "./css/App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Sync from "./pages/Sync";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

const App = () => {
  const [state, setState] = useState({
    userData: {
      mid: null,
      clMid: null,
      clName: null,
      shMid: null,
      shName: null,
      itemsCount: null,
      categoriesCount: null,
    },
  });
  const dummyData = {
    userData: {
      mid: 691,
      clMid: "NQWCTQAWCFC24",
      clName: "Test Store7771495",
      shMid: 43007443093,
      shName: "Test Store7771495",
      itemsCount: 1066,
      categoriesCount: 9,
    },
  };

  const location = useLocation();

  let url = location.search;
  let { mid, code } = queryString.parse(url);

  useEffect(async () => {
    try {
      /* const auth = await axios.post(
        "http://54.219.211.245:8080/omnigateway/auth",
        {},
        {
          headers: {
            mid: mid,
            code: code,
          },
        }
      );

      const userData = await axios.get(
        `http://54.219.211.245:8080/omnigateway/api/${mid}/info`,
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      ); */

      setTimeout(() => {
        setState({ ...dummyData });
      }, 5000);

      /*  console.log(userData); */
    } catch (err) {
      console.error(err);
    }
  }, []);

  const syncCategoriesAction = async (auth) => {
    const SyncData = await axios.post(
      `http://54.219.211.245:8080/omnigateway/api/${mid}/sync/clover/categories`,
      {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      }
    );
    console.log(SyncData);
  };

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
              <Sync userData={state.userData} path="/" />
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
