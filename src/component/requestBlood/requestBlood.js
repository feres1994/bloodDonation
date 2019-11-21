import React, { Component } from "react";
import { connect } from "react-redux";
import "./request.css";
import { notify } from 'react-notify-toast';
import { AddRequestAPI } from '../../action'
class BloodCircle extends Component {
  state = {
    colored: false
  };
  changeColor = () => {
    this.setState({
      colored: true
    });
  };
  render() {
    return (
      <div
        onClick={() => {
          this.props.changeBloodType(this.props.data);
          this.changeColor();
        }}
        style={
          this.state.colored && this.props.data === this.props.blood
            ? { backgroundColor: "pink", color: "white" }
            : {}
        }
      >
        {this.props.data}
      </div>
    );
  }
}
export class RequestFor extends Component {
  state = {
    bloodGroup: ["A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    bloodType: "select one",
    fullname: "",
    location: ""
  };

  changeBloodType = bloodType => {
    this.setState({
      bloodType: bloodType
    });
  };
  changeInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    if (this.state.fullname == "") {
      notify.show("Fullname is mandatory", "error")
      return
    }
    if (this.state.location == "") {
      notify.show("Location is mandatory", "error")
      return
    }
    if (this.state.bloodGroup.indexOf(this.state.bloodType)< 0) {
      notify.show("Blood Group is mandatory", "error")
      return
    }
    const user = JSON.parse(localStorage.getItem("user"))
    const bloodgroup = user.bloodgroup
    var groupname = ""
    switch (bloodgroup) {
        case "A+": groupname = "AP"
        case "O+": groupname = "OP"
        case "B+": groupname = "BP"
        case "AB+":groupname = "ABP"
        case "A-": groupname = "AM"
        case "O-": groupname = "OM"
        case "B-": groupname = "BM"
        case "AB-":groupname = "ABM"
    }

    const params = {
    bloodgroup:groupname,
    place: this.state.location,
    userId: user._id,
    donor : user
    }
    this.props.addRequest(params)
  }
  render() {
    const { bloodType, fullname, location } = this.state;
    const {request } = this.props;

    if (request.status == 200){
      notify.show("Your request has been submitted", "success")
    }
    if (request.status == 400){
      notify.show("Your request has been rejected ", "error")
    }
    return (
      <div className="row" style={{ padding: "30px" }}>
        <div className="col-12">
          <h5 style={{ textAlign: "left" }}>Request for blood</h5>
        </div>
        <div className="col-lg-4">
          <div className="request-card">
            <div>
              <input
                placeholder="full name"
                onChange={this.changeInputs}
                name="fullname"
                value={this.state.fullname}
              />
              <input
                placeholder="location"
                onChange={this.changeInputs}
                name={"location"}
              />
              <div className="blood-type-form">
                <p>blood type :</p> <p>{bloodType}</p>
              </div>
            </div>
            <div className="hidden-request-blood">
              <h6 style={{ textAlign: "left" }}>Select Blood group</h6>
              <div className="blood-group-container">
                {this.state.bloodGroup.map(el => (
                  <BloodCircle
                    data={el}
                    changeBloodType={this.changeBloodType}
                    blood={this.state.bloodType}
                  />
                ))}
              </div>
            </div>
            <button className="submit-btn" onClick={this.submit}>submit</button>
          </div>
        </div>
        <div className="col-lg-8 request-blood-computer-device">
          <h6 style={{ textAlign: "left" }}>Select Blood group</h6>
          <div className="blood-group-container">
            {this.state.bloodGroup.map(el => (
              <BloodCircle data={el} changeBloodType={this.changeBloodType} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({request : state.request});

const mapDispatchToProps = {addRequest : AddRequestAPI};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestFor);
