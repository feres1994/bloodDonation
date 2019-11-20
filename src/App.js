import React from "react";
import Header from "./component/navbar/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./component/home.js/Home";
import Login from "./component/login/login";
import RequestFor from "./component/requestBlood/requestBlood";
import AddPost from "./component/addPost";
import Inscription from "./component/inscription/index";
import Profile from "./component/profile";
import "./App.css";

const Routes = () => {
  return (
    <>
      {" "}
      <Header />
      <div className="container-fluid" style={{ minHeight: "100vh" }}>
        <AddPost />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/requestforblood" component={RequestFor} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </div>
    </>
  );
};
class App extends React.Component {
  componentDidMount(){
    Notification.requestPermission();
  }
  
  
  render() {
    console.log("********", this.props);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/inscription" component={Inscription} />
          <Route component={Routes} />
        </Switch>
      </div>
    );
  }
}

export default App;
