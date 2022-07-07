import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Homepage from './auth/Homepage'
import Product from './auth/Product'
import Login from './auth/Login'

export default function MainRoute() {
    return (
      <Router>
          <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/products">
                <Product />
              </Route>
              <Route path="*">
                <h1>not found</h1>
              </Route>
          </Switch>
      </Router>
    )
}