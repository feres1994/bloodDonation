import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./post";
import "./home.css";

import { getPostFromApi } from '../../action.js';

export class Home extends Component {
  
  componentDidMount(){
    this.props.getPosts('http://127.0.0.1:8888/api/posts')
  }
  render() {
    const { posts,loading } = this.props.posts;
    if (loading) {
      return <h1>Loading</h1>
    }
      return (
        <>
          <div className="row">
            <div className="col-12 blood-hero">
              <div className="overlay text-focus-in">
                <h2>BLOOD DONATION</h2>
                <p className="text-flicker-in-glow">made in tunisia</p>
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
      )
    
    
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
    loading : state.loading

  };
};

const mapDispatchToProps = { getPosts: getPostFromApi }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
