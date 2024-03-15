import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home/Home";

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={Home} />
          <Route exact path="/services" component={Home} />
          <Route exact path="/blog" component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default Pages;
