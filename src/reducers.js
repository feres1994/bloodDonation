const initialState = [
  {
    postImage: "",
    type: {
      type: Number,
      default: 1
    },
    user: {
      firstname: "achref",
      lastname: "mghirbi",

      url: {
        type: String
      }
    },
    postText:
      "this the first time i m using this plateform and i found it amazing and really greatful",
    timePost: Date.now(),
    numberLikes: 113,
    NumberComments: 2,
    comments: [
      {
        textComment: "thanx dude",
        time: "22/22/22",
        username: "mohamed haffez"
      },
      {
        textComment: "perfect one broo <3",
        time: "22/22/22",
        username: "feres fatnassi"
      },
      {
        textComment: "thanx dude",
        time: "22/22/22",
        username: "mohamed haffez"
      }
    ]
  },
  {
    postImage: "",
    type: {
      type: Number,
      default: 1
    },
    user: {
      firstname: "feres",
      lastname: "fatnassi",

      url: {
        type: String
      }
    },
    postText:
      "this the first time i m using this plateform and i found it amazing and really greatful",
    timePost: Date.now(),
    numberLikes: 113,
    NumberComments: 2,
    comments: [
      {
        textComment: "thanx greaaaat",
        time: "22/22/22",
        username: "achref mghirbi"
      }
    ]
  }
];

export function postsReducer(state = initialState, action) {
  if (action.type === "GET_POSTS") {
    return action.payload;
  }
  return state;
}
