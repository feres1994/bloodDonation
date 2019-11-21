import React from "react";
import "./index.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signupAPI } from "../../action"

import Notifications, {notify} from 'react-notify-toast';


class Inscription extends React.Component {
  state = {
    name: "",
    email: "",
    phone: "",
    bloodType: "",
    gender : "",
    redirectingToHome: false
  };

  componentDidMount(){
    const  user  = JSON.parse( localStorage.getItem('user') );

    this.setState({
    name: user.firstname + ' ' + user.lastname,
    email: user.email,
    phone: user.number,
    bloodType: "",
    gender : "",
    })
  }

  changeField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  SubmitInscription = () => {
     
    const { user } = this.props 

    if (this.state.bloodType == ""){
      notify.show("Blood Group is mandatory","error")
    }else{
      
    
    const data = {	
        id : user.data.id,
        email : user.data.email,
        number :  this.state.number,
        firstname : this.state.name.split(' ')[0],
        lastname : this.state.name.split(' ')[1],
        url : user.data.url,
        bloodgroup : this.state.bloodType,
        gender : this.state.gender,
        answer : "0",
        request : "0",
        rate: "0"
      }

        
      this.props.signup(data)
    }
  };
  render() {
    const { user } = this.props 

    if (user.status == 201) {
      return <Redirect to="/home" />;
    }
    if (localStorage.getItem('isLogin') == "2") {
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
                value={this.state.name}
              />
              <input
                className="inscription-input"
                name="email"
                placeholder="email"
                onChange={this.changeField}
                value={this.state.email}

              />
              <input
                className="inscription-input"
                name="phone"
                placeholder="phone"
                onChange={this.changeField}
                defaultValue={this.props.user.data.number}
                value={this.state.number}


              />
              <input
                className="inscription-input"
                name="gender"
                placeholder="Gender"
                onChange={this.changeField}
                defaultValue={this.props.user.data.gender}

              />
              <input
                className="inscription-input"
                name="bloodType"
                placeholder="blood type "
                onChange={this.changeField}
                defaultValue={this.props.user.data.bloodgroup}
                onLoad={this.changeField}

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
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = { signup : signupAPI}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inscription);
