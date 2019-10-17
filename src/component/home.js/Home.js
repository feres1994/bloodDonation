import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../card/card";
import "./home.css";
export class Home extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col-12 blood-hero">
            <div className="overlay">
              <h2>BLOOD DONATION</h2>
              <p>made in tunisia</p>
            </div>
          </div>
        </div>{" "}
        <div
          className="row "
          style={{ padding: "30px", boxSizing: "border-box" }}
        >
          <div className="col-12">
            <div className="row posts">
              <div className="col-lg-4 p-4">
                <Card />
              </div>
              <div className="col-lg-8 p-4">
                <div className="description-and-comments">
                  <div className="description">
                    <h6>mghirbi achref:</h6>
                    <p>
                      ldfkbmdfl lbfmlhkhmgfgkh lhgfhl gfmlfghmfhl
                      hgkhmlhmfkhmfghgmh
                    </p>
                  </div>
                  <div className="comments">
                    <h5>comments:</h5>
                    <div className="comment">
                      <h6>mohamed haffez:</h6>
                      <p>
                        thanks for the donation dud
                        <div className="reactions">
                          <i class="far fa-thumbs-up"></i>
                          <i class="far fa-thumbs-down"></i>
                          <i class="far fa-heart"></i>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
