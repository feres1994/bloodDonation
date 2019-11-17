import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./login.css";
export class login extends Component {
  state = {
    redirected: false
  };
  redirectToHome = () => {
    this.setState({
      redirected: true
    });
  };
  render() {
    if (this.state.redirected) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="my-login-container" style={{ minHeight: "100vh" }}>
        <div className="login-overlay"></div>
        <div className="container">
          <div className="row">
            <div
              className="col-12 bg-tt"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <p>welcome to </p>
              <h1>INSTABlOOD</h1>
              <form
                className="form-group"
                style={{ width: "350px", marginTop: "50px" }}
              >
                <input
                  className="form-control login-input"
                  placeholder="email"
                ></input>
                <input
                  className="form-control login-input"
                  placeholder="mot de passe"
                ></input>
                <div className="login-btn-container">
                  <button
                    className="login-button"
                    onClick={this.redirectToHome}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(login);
