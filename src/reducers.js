const initialState = {
  loading: true
};

export function postsReducer(state = initialState, action) {

  switch (action.type) {
    case 'GET_POSTS':
      return { posts: action.payload, loading: false };
    case 'LOADING_POST':
      return { loading: action.payload };
    default:
      return state;
  }
}
export function commentReducer(state = {}, action) {

  switch (action.type) {
    case 'ADD_COMMENT_REQUEST':
      return { loading: true, comment: action.payload };
    case 'ADD_COMMENT_FAILED':
      return { loading: false, status: 200 };
    case 'ADD_COMMENT_FAILED':
      return { loading: false, status: 300 };
    default:
      return state;
  }
}


export function userReducer(state = {}, action) {

  switch (action.type) {
    case 'LOGIN_FAILED':
      return { loading: false, status: 400, };

    case 'LOGIN_SUCCESS':
      return { loading: false, status: 200, data: action.payload };

    case 'SIGNUP_SUCCESS':
      return { loading: false, status: 201, data: action.payload };

    case 'SIGNUP_FAILED':
      return { ...state ,loading: false, status: 401 };

    default:
      return { ...state };
  }
}
export function requestReducer(state = {status: 0} , action ){

  
  switch (action.type) {
  
    case 'ADD_REQUEST_SUCCESS':
      return { status: 200 };

    case 'ADD_REQUEST_FAILED':
      return { status: 400 };

      default:
      return { state };
  }
}