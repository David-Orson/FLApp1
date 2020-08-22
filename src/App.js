import React, { useState, useEffect } from "react";
import { Router, useLocation, navigate } from "@reach/router";
import queryString from "query-string";
import axios from "axios";

import "./css/App.css";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Sync from "./pages/Sync";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import UserSetup from "./pages/UserSetup";

const App = () => {
  const [state, setState] = useState({
    userData: {
      mid: null,
      clMid: null,
      clName: null,
      clDashboardUrl: null,
      shMid: null,
      shName: null,
      shDashboardUrl: null,
      itemsCount: null,
      categoriesCount: null,
    },
  });
  const [mid, setMid] = useState(null);
  const [code, setCode] = useState(null);
  const [authToken, setAuthToken] = useState();
  const [buttonLoading, setButtonLoading] = useState(false);

  const location = useLocation();

  let url = location.search;
  /* console.log(`url`);
  console.log(location); */

  let midCode = queryString.parse(url);

  if (midCode.code && midCode.mid) {
    if (!mid && !code) {
      setMid(midCode.mid);
      setCode(midCode.code);
    }
  }

  const token = localStorage.AuthToken;
  const midStored = localStorage.mid;

  /* console.log(localStorage.AuthToken);
  console.log(localStorage.mid);
  console.log(`token ${authToken}`); */

  if (!authToken) {
    /* console.log("not auth") */ if (token) {
      /* console.log(token) */ setAuthToken(token);
    }
    if (location.href !== `${location.origin}/`) {
      if (location.href !== `${location.origin}/login`) {
        navigate(location.origin);
      }
    }
  }

  /* console.log(`here is mid ${mid}`) */ if (!mid) {
    if (midStored) {
      setMid(midStored);
    }
  }

  /* I found it difficult to implement a solution so that when the user navigates to the HomePage (after the redirect provides the mid and code in url) the url params contain the users mid and code */

  useEffect(() => {
    const fetchData = async (token) => {
      const res = await axios.get(`https://omnigateway.net/api/${mid}/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const returnData = { userData: { ...res.data } };
      setState({ ...returnData });
    };

    const authAndData = async (midX, codeX) => {
      try {
        /* const dummyData = {
          userData: {
            mid: 691,
            clMid: "NQWCTQAWCFC24",
            clName: "Test Store7771495",
            clDashboardUrl: "https://www.clover.com/dashboard",
            shMid: 43007443093,
            shName: "Test Store7771495",
            shDashboardUrl: "https://test-store7771495.myshopify.com/admin",
            itemsCount: 1066,
            categoriesCount: 9,
          },
        }; */

        /* mid commented out in Sync.js, may be required for future functionality, uncomment when needed */

        const auth = await axios.post(
          "https://omnigateway.net/auth",
          {},
          {
            headers: {
              mid: midX,
              code: codeX,
            },
          }
        );
        setAuthToken(auth.data.token);
        localStorage.setItem("AuthToken", `${auth.data.token}`);
        localStorage.setItem("mid", `${mid}`);

        const res = await axios.get(`https://omnigateway.net/api/${mid}/info`, {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        });

        const returnData = { userData: { ...res.data } };
        setState({ ...returnData });

        /* console.log(returnData);
        console.log(state); */

        /* setTimeout(() => {
          setState({ ...dummyData });
        }, 5000); */
      } catch (err) {
        console.error(err);
      }
    };

    if (authToken) {
      /* console.log("authToken"); */
      if (!code) {
        /* console.log("token for effect"); */
        fetchData(authToken);
      }
    } else {
      if (mid) {
        if (code) {
          /* console.log(`${mid} ${code}`); */
          authAndData(mid, code);
        }
      } else {
        console.log(location);
        if (location.href !== `${location.origin}/login`) {
          window.location.href = "/login";
        }

        /* navigate(`${location.href}/login`); */
      }
    }
  }, [authToken]);

  const syncCategoriesAction = async () => {
    setButtonLoading(true);
    /* const auth = await axios.post(
      "https://omnigateway.net/auth",
      {},
      {
        headers: {
          mid: mid,
          code: code,
        },
      }
    ); */

    /* used to use an extra request to gain the auth token, this implementation places the token in the App state. */

    const SyncData = await axios.post(
      `https://omnigateway.net/api/${mid}/sync/clover/categories`,
      {},
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    console.log(SyncData);
    setButtonLoading(false);
  };

  return (
    <div className="App">
      <Header mid={mid} code={code} />
      <div className="main-container">
        <div className="navbar-container">
          <Navbar userData={state.userData} mid={mid} code={code} />
        </div>

        <div className="content-container">
          <div className="content">
            <Router>
              <Sync
                path="/"
                userData={state.userData}
                syncAction={syncCategoriesAction}
                buttonLoading={buttonLoading}
              />
              <Products path="/products" />
              <Categories path="/categories" />
              <Login path="/login" />
              <UserSetup path="/usersetup" authToken={authToken} />
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
