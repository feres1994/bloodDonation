import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../card/card";

export class Post extends Component {
  state = {
    commentDisplay: "none",
    buttonDisplay: "block"
  };
  changeElementDisplay = () => {
    this.setState({
      commentDisplay: "block",
      buttonDisplay: "none"
    });
  };
  addComment = e => {
    this.setState({
      commentDisplay: "none",
      buttonDisplay: "block"
    });
  };
  render() {
    const { post } = this.props;
    const { commentDisplay, buttonDisplay } = this.state;
    return (
      <div className="row posts">
        <div className="col-lg-4 p-4">
          <Card post={post} />
        </div>
        <div className="col-lg-8 p-4">
          <div className="description-and-comments">
            <div className="description">
              <h6>
                {post.user.firstname} {post.user.lastname}:
              </h6>
              <p>{post.postText}</p>
            </div>
            <div className="comments">
              <h5> comments:</h5>

              {post.comments.map(comment => (
                <div className="comment">
                  <h6 style={{ width: "120px" }}>{comment.username} : </h6>
                  <p>
                    {comment.textComment}
                    <div className="reactions">
                      <i class="far fa-thumbs-up"></i>
                      <i class="far fa-thumbs-down"></i>
                      <i class="far fa-heart"></i>
                    </div>
                    <p className="time">{comment.time}</p>
                  </p>
                </div>
              ))}
              <div className="add-comment">
                <div
                  style={{ display: buttonDisplay }}
                  onClick={this.changeElementDisplay}
                >
                  add comment
                </div>
                <div style={{ position: "relative", display: commentDisplay }}>
                  <textarea
                    placeholder="write you comment here thne press enter..."
                    type="text"
                  />
                  <span onClick={this.addComment} class="add-comment-btn-plus">
                    +
                  </span>
                </div>
              </div>
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
)(Post);
