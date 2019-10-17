import React from "react";
import Header from "./component/navbar/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home.js/Home";
import RequestFor from "./component/requestBlood/requestBlood";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/requestforblood" component={RequestFor} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
