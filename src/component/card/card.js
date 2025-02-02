import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import TimeAgo from 'react-timeago'
import "./card.css";
import {PUBLIC_DIR} from '../../constants'
function Card({ post }) {
  return (
    <div className="card promoting-card">
      <div className="card-body d-flex flex-row">
        <img
          src={post.user.url}
          class="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />

        <div>
          <h4 class="card-title font-weight-bold mb-2">
            {post.user.firstname}
            {post.user.lastname}
          </h4>

          <p class="card-text">
            <i class="far fa-clock pr-2"></i>
            {/* <Moment>{post.timePost}</Moment> */}
            <TimeAgo date={post.timePost} />
          </p>
        </div>
      </div>
      <div className="view overlay">
        <img
          class="card-img-top rounded-0"
          src={PUBLIC_DIR+post.postImage}
          alt="Card image cap"
        />
        <a href="#!">
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>

      <div class="card-body">
        <div class="collapse-content">
          <p class="card-text collapse" id="collapseContent">
            Recently, we added several exotic new dishes to our restaurant menu.
            They come from countries such as Mexico, Argentina, and Spain. Come
            to us, have some delicious wine and enjoy our juicy meals from
            around the world.
          </p>

          <a
            class="btn btn-flat red-text p-1 my-1 mr-0 mml-1 collapsed"
            data-toggle="collapse"
            href="#collapseContent"
            aria-expanded="false"
            aria-controls="collapseContent"
          ></a>
          <p className="number-like">{post.numberLikes} likes</p>
          <p className="number-comments">{post.comments.length} comments</p>

          <i
            class="fas fa-heart text-muted float-right p-1 my-1 mr-3"
            data-toggle="tooltip"
            data-placement="top"
            title="I like it"
          ></i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
