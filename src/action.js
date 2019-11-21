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


/* USER */

const LoginFailed = payload => {
return {
  type: "LOGIN_FAILED",
  payload
};
};
const LoginSuccess = payload => {
return {
  type: "LOGIN_SUCCESS",
  payload
};
};
const SignupSuccess = payload => {
  return {
    type: "SIGNUP_SUCCESS",
    payload
  };
  };

  const SignupFailed = payload => {
    return {
      type: "SIGNUP_FAILED",
      payload
    };
    };

export const LoginAPI = (user) => {
  return dispatch => {
    axios.get(API_SERVER+'/donor/'+user.id).then(res => {
      user.isSubscribed = res.data.data
      if (user.isSubscribed){
        localStorage.setItem('isLogin',"2");
      }else{
        localStorage.setItem('isLogin',"1");

      }
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(LoginSuccess(user))
    }).catch(err => {
      console.log("error "+err)
      dispatch(LoginFailed(err));
    });
  };
};
export const signupAPI = (user) => {
  return dispatch => {
    axios.post(API_SERVER+'/donor',user).then(res => {
      const user =  res.data.data
      user.isSubscribed = true
      localStorage.setItem('isLogin',"2");
      localStorage.setItem('user', JSON.stringify(user));
      dispatch(SignupSuccess(user))
    }).catch(err => {
      dispatch(SignupFailed(err));
    });
  };
};

/** REQUEST BLOOD */

const AddRequestFailed = payload => {
  return {
    type: "ADD_REQUEST_FAILED",
    payload
  };
  };

  const AddRequestSuccess = payload => {
    return {
      type: "ADD_REQUEST_SUCCESS",
      payload
    };
    };
export const AddRequestAPI = (params) => {
      return dispatch => {
        axios.post(API_SERVER+'/request',params).then(res => {
          dispatch(AddRequestSuccess(res.data))
        }).catch(err => {
          dispatch(AddRequestFailed(err));
        });
      };
    };