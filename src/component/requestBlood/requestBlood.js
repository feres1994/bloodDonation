import React, { Component } from "react";
import { connect } from "react-redux";
import "./request.css";
export class RequestFor extends Component {
  state = {
    bloodGroup: ["A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    bloodType: "select one",
    name: "",
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
  render() {
    const { bloodType, name, location } = this.state;
    return (
      <div className="row" style={{ padding: "30px" }}>
        <div className="col-12">
          <h5 style={{ textAlign: "left" }}>Request for blood</h5>
        </div>
        <div className="col-lg-3">
          <div className="request-card">
            <div>
              <input
                placeholder="full name"
                onChange={this.changeInputs}
                value={name}
                name={name}
              />
              <input
                placeholder="location"
                onChange={this.changeInputs}
                value={location}
                name={location}
              />
              <div className="blood-type-form">
                <p>blood type :</p> <p>{bloodType}</p>
              </div>
            </div>
            <button className="submit-btn">submit</button>
          </div>
        </div>
        <div className="col-lg-9">
          <h6 style={{ textAlign: "left" }}>Select Blood group</h6>
          <div className="blood-group-container">
            {this.state.bloodGroup.map(el => (
              <div onClick={() => this.changeBloodType(el)}>{el}</div>
            ))}
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
)(RequestFor);
