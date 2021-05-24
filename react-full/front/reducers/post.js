import shortid from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: { // User, Images, Comments는 다른 정보들과 합져 보내기 때문에 대문자로 작성한다.
      id: 1,
      nickname: 'HoHo',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortid.generate(),
      src: 'https://images.unsplash.com/photo-1620413808828-0e577e22d131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
    }, {
      id: shortid.generate(),
      src: 'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80',
    }],
    Comments: [{
      id: shortid.generate(),
      User: {
        id: shortid.generate(),
        nickname: 'nero',
      },
      content: '와와~~,',
    }, {
      User: {
        id: shortid.generate(),
        nickname: 'hero',
      },
      content: 'ㅎㅎㅎㅎㅎ',
    }],
  }],
  imagePaths: [],
  postAdding: false,
  postAdded: false,
  postRemoving: false,
  postRemoved: false,
  commentAdding: false,
  commentAdded: false,
  error: null,
};

initialState.mainPosts = initialState.mainPosts.concat(
  Array(20).fill().map(() => ({
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
  })),
);

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
export const addPostRequest = (data) => ({
  type: ADD_POST_REQUEST,
  data
});
export const addCommentRequest = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data
});
export const removePostRequest = (data) => ({
  type: REMOVE_POST_REQUEST,
  data
});

const dummyPost = (data) => ({ // 데이터를 구성한 후 화면??
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '제로초',
  },
  Images: [],
  Comments: [],
});
const dummyComment = (data) => ({
  id: shortid.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '제로초',
  },
});

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
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
        // const postIndex = state.mainPosts.findIndex( v => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
        // return {
        //   ...state,
        //   mainPosts,
        //   commentAdding: false,
        //   commentAdded: true,
        // };
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