import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./login.css";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


import { LoginAPI } from '../../action.js';


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
    const responseFacebook = (response) => {
      const fullname = response.name.split(' ')
      const user = {
        id: response.id,
        email: response.email,
        number: "",
        firstname: fullname[0],
        lastname: fullname[1],
        url: response.picture.data.url,
        bloodgroup: "",
        gender: "",
      }
     this.props.login(user)
    }

    const responseGoogle = (response) => {
      console.log(response);
    }
    const failGoogle = (response,des) => {
      console.log(response);
      console.log(des);
    }

 

    if (localStorage.getItem('isLogin') == "1") {
      return <Redirect to="/inscription" />;
    }
    if (localStorage.getItem('isLogin') == "2") {
      return <Redirect to="/home" />;
    }
    return (
      <div className="my-login-container" style={{ minHeight: "100vh" }}>
        <div className="login-overlay"></div>
        <div className="container">
          <div className="row">
            <div
              className="col-12 bg-tt big-tt"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <p>welcome to </p>
              <h1>INSTABlOOD</h1>
              <form className="form-group form-login">
                <FacebookLogin
                  appId="217447735815875" //APP ID NOT CREATED YET
                  fields="name,email,picture"
                  callback={responseFacebook}
                />
                <br />
                <br />


                <GoogleLogin
                  clientId="630892663768-lsdnql7l89tt8661t9itonvsbd3mpuar.apps.googleusercontent.com" 
                  buttonText="LOGIN WITH GOOGLE"
                  onSuccess={responseGoogle}
                  onFailure={failGoogle}
                  cookiePolicy={'single_host_origin'}
                />
                {/* <input
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
                */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,

});

const mapDispatchToProps = { login: LoginAPI }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(login);
