import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./post";
import "./home.css";
export class Home extends Component {
  render() {
    const { posts } = this.props;
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
            {posts.map(el => (
              <Post post={el} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
