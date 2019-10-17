import React from "react";
import Header from "./component/navbar/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home.js/Home";
import AboutUs from "./component/aboutUs";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
