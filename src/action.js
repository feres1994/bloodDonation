import axios from "axios";
import {API_SERVER} from './constants'
/* Get POSTS */

export const getPosts = payload => {
  return {
    type: "GET_POSTS",
    payload
  };
};
const LoadingPosts = payload => {
  return {
    type: "LOADING_POST",
    payload
  };
};
export const addPost = payload => {
  return {
    type: "ADD_POST",
    payload
  };
};
export const getPostFromApi = url => {
  return dispatch => {
    dispatch(LoadingPosts(true));
    axios.get(url).then(res => {
      dispatch(getPosts(res.data));
    });
  };
};
export const addPostApi = (data,description) => {
  return dispatch => {
    
    axios.post(API_SERVER+'uploadfile',data).then(res=>{
      console.log("uploadfile == ", res.data)
    }).catch(err =>{
      console.log("error  == ", err)

    })
    // dispatch(LoadingPosts(true));
    // axios.post(API_SERVER+'posts')
    // axios.get(url).then(res => {
    //   dispatch(getPosts(res.data));
    // });
  };
};

/* Add Comment */
const addCommentRequest = payload => {
  return {
    type: "ADD_COMMENT_REQUEST",
    payload
  };
};
const addCommentFailed = payload => {
  return {
    type: "ADD_COMMENT_FAILED",
    payload
  };
};
const addCommentSuccess = payload => {
  return {
    type: "ADD_COMMENT_SUCCESS",
    payload
  };
};

export const addCommentAPI = (path,data) => {
  return dispatch => {
    dispatch(addCommentRequest(data));
    axios.put(API_SERVER+path,data).then(res => {
      dispatch(addCommentSuccess(res.data));
      axios.get(API_SERVER+'posts').then(res => {
        dispatch(getPosts(res.data));
      });
    }).catch(err => {
      dispatch(addCommentFailed(err));
    });
  };
};