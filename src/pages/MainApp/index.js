import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "..";
import { Header } from "../../components";

const MainApp = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/orders">
            <div>
              <h1>Order Page</h1>
            </div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default MainApp;
