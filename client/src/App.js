import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from "./components/routing/Routes";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route component={Routes} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
