const initialState = {
  loading : true
};

export function postsReducer(state = initialState, action) {
  console.log('action.type',action.type)

  switch (action.type) {
    case 'GET_POSTS':
       return { posts : action.payload , loading : false};
    case 'LOADING_POST':
      return { loading: action.payload };
    default:
       return state;
  }
}
export function commentReducer(state = {}, action) {
  console.log('commentReducer === > ',action.type)

  switch (action.type) {
    case 'ADD_COMMENT_REQUEST':
      return { loading : true, comment : action.payload};
    case 'ADD_COMMENT_FAILED':
      return { loading : false, status : 200};
    case 'ADD_COMMENT_FAILED':
      return { loading : false, status : 300 };
    default:
       return state;
  }
}
