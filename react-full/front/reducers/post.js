
// 리덕스 중심으로 
export const initialState = {
  mainPosts: [{
    id: 1,
    User: { // User, Images, Comments는 다른 정보들과 합져 보내기 때문에 대문자로 작성한다.
      id:1,
      nickname: '제로초',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://images.unsplash.com/photo-1620413808828-0e577e22d131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80'
    }, {
      src: 'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80'
    }, {
      src: 'https://images.unsplash.com/photo-1620421680010-0766ff230392?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80'
    },],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '와와~~,'
    }, {
      User: {
        nickname: 'hero',
      },
      content: 'ㅎㅎㅎㅎㅎ'
    },]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST'; // 상수로 정리할 경우 오타걱정없다
export const addPost = {
  type: ADD_POST,
}

const dummyPost = { // 데이터를 구성한 후 화면??
  id:2,
  content: '더미데이터입니다.!',
  User: {
    id: 1,
    nickname: 'hoho', 
  },
  Images: [],
  Comments: [], 

}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost,...state.mainPosts],
        postAdded: true
      }

    default:
      return state;
  }
}

export default reducer;