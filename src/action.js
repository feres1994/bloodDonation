import axios from "axios";
export const getPosts = payload => {
  return {
    type: "GET_POSTS",
    payload
  };
};
const LoadingPosts = payload => {
  return {
    type: "LOADING",
    payload
  };
};
export const getPostFromApi = url => {
  return dispatch => {
    dispatch(LoadingPosts(true));
    axios.get(url).then(res => {
      dispatch(getPosts(res.data));
      dispatch(LoadingPosts(false));
    });
  };
};
