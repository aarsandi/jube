import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from "./auth/Homepage";
import Product from "./auth/Product";
import Error503 from "./auth/Error503";
import Login from "./auth/Login";
import Analytics from "./auth/Analytics";

export default function MainRoute() {
  return (
    <Router>
      <Switch>
        <Route exact path="/503">
          <Error503 />
        </Route>
        <Route exact path="/products">
          <Product />
        </Route>
        <Route path="/Analytics">
          <Analytics />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route path="*">
          <h1>not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
