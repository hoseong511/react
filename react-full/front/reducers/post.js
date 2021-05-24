import shortid from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  postLoading: false,
  postLoaded: false,
  postAdding: false,
  postAdded: false,
  postRemoving: false,
  postRemoved: false,
  commentAdding: false,
  commentAdded: false,
  error: null,
};
export const generateDummyPost = (number) => Array(number).fill().map(() => ({
  id: shortid.generate(),
  User: {
    id: shortid.generate(),
    nickname: faker.name.findName(),
  },
  content: faker.lorem.paragraph(),
  Images: [{
    src: faker.image.image(),
  }],
  Comments: [{
    User: {
      id: shortid.generate(),
      nickname: faker.name.findName(),
    },
    content: faker.lorem.sentence(),
  }],
}));

// initialState.mainPosts = initialState.mainPosts.concat(
//   // 
// );

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const loadPostRequest = (data) => ({ type: LOAD_POST_REQUEST, data });
export const addPostRequest = (data) => ({ type: ADD_POST_REQUEST, data });
export const addCommentRequest = (data) => ({ type: ADD_COMMENT_REQUEST, data });
export const removePostRequest = (data) => ({ type: REMOVE_POST_REQUEST, data });

const dummyPost = (data) => ({ // 데이터를 구성한 후 화면??
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: 'Ho',
  },
  Images: [],
  Comments: [],
});
const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: 'Ho',
  },
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.postLoading = true;
        draft.postLoadded = false;
        draft.error = null;
        break;
      case LOAD_POST_SUCCESS:
        draft.postLoading = false;
        draft.postLoadded = true;
        draft.mainPosts = draft.mainPosts.concat(action.data); // 무한스크롤링을 구현
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;
      case LOAD_POST_FAILURE:
        draft.postLoading = false;
        draft.postLoadded = false;
        draft.error = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.postAdding = true;
        draft.postAdded = false;
        draft.error = null;
        break;
      case ADD_POST_SUCCESS:
        draft.postAdding = false;
        draft.postAdded = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;
      case ADD_POST_FAILURE:
        draft.postAdding = false;
        draft.postAdded = false;
        draft.error = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.postRemoving = true;
        draft.postRemoved = false;
        draft.error = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.postRemoving = false;
        draft.postRemoved = true;
        draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data)
        break;
      case REMOVE_POST_FAILURE:
        draft.postRemoving = false;
        draft.postRemoved = false;
        draft.error = action.arror;
        break;
      case ADD_COMMENT_REQUEST:
        draft.commentAdding = true;
        draft.commentAdded = false;
        draft.error = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        const post = draft.mainPosts.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.commentAdding = false;
        draft.commentAdded = true;
        break;        
      }
      case ADD_COMMENT_FAILURE:
        draft.commentAdding = false;
        draft.commentAdded = false;
        draft.error = action.error;
        break;
      default:
        break;
    }
  });
};

export default reducer;