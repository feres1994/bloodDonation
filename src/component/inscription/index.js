import React from "react";
import "./index.css";
import { Redirect } from "react-router-dom";

class Inscription extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    redirectingToHome: false
  };

  changeField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitInscription = () => {
    this.setState({
      redirectingToHome: true
    });
  };
  render() {
    if (this.state.redirectingToHome) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="container-fluid">
        <div className="row inscription-form ">
          <div className="col-sm-12 p-4 inscription-column">
            <div className="inscription">
              <p style={{ textAlign: "left", fontWeight: "bold" }}>
                inscription
              </p>
              <input
                className="inscription-input"
                name="name"
                placeholder="name"
                onChange={this.changeField}
              />
              <input
                className="inscription-input"
                name="email"
                placeholder="email"
                onChange={this.changeField}
              />
              <input
                className="inscription-input"
                name="phone"
                placeholder="phone"
                onChange={this.changeField}
              />
              <input
                className="inscription-input"
                name="bloodType"
                placeholder="blood type "
                onChange={this.changeField}
              />
              <div className="submit-full-container">
                <button className="submit-btn" onClick={this.SubmitInscription}>
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Inscription;
