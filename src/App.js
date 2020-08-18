import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/Navbar";

import Sync from "./pages/Sync";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="ui container">
        <Router>
          <Sync path="/" />
          <Products path="/products" />
          <Categories path="/categories" />
          <Quiz
            path="/quiz"
            userAnswers={userAnswers}
            setAnswers={setAnswers}
          />
          <Result
            path="/result"
            userAnswers={userAnswers}
            resetAnswers={resetAnswers}
          />
        </Router>
      </div>
    </div>
  );
};

export default App;
