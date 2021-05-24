self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "generateDummyPost": function() { return /* binding */ generateDummyPost; },
/* harmony export */   "LOAD_POST_REQUEST": function() { return /* binding */ LOAD_POST_REQUEST; },
/* harmony export */   "LOAD_POST_SUCCESS": function() { return /* binding */ LOAD_POST_SUCCESS; },
/* harmony export */   "LOAD_POST_FAILURE": function() { return /* binding */ LOAD_POST_FAILURE; },
/* harmony export */   "ADD_POST_REQUEST": function() { return /* binding */ ADD_POST_REQUEST; },
/* harmony export */   "ADD_POST_SUCCESS": function() { return /* binding */ ADD_POST_SUCCESS; },
/* harmony export */   "ADD_POST_FAILURE": function() { return /* binding */ ADD_POST_FAILURE; },
/* harmony export */   "REMOVE_POST_REQUEST": function() { return /* binding */ REMOVE_POST_REQUEST; },
/* harmony export */   "REMOVE_POST_SUCCESS": function() { return /* binding */ REMOVE_POST_SUCCESS; },
/* harmony export */   "REMOVE_POST_FAILURE": function() { return /* binding */ REMOVE_POST_FAILURE; },
/* harmony export */   "ADD_COMMENT_REQUEST": function() { return /* binding */ ADD_COMMENT_REQUEST; },
/* harmony export */   "ADD_COMMENT_SUCCESS": function() { return /* binding */ ADD_COMMENT_SUCCESS; },
/* harmony export */   "ADD_COMMENT_FAILURE": function() { return /* binding */ ADD_COMMENT_FAILURE; },
/* harmony export */   "loadPostRequest": function() { return /* binding */ loadPostRequest; },
/* harmony export */   "addPostRequest": function() { return /* binding */ addPostRequest; },
/* harmony export */   "addCommentRequest": function() { return /* binding */ addCommentRequest; },
/* harmony export */   "removePostRequest": function() { return /* binding */ removePostRequest; }
/* harmony export */ });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var initialState = {
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
  error: null
};
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_1___default().name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_1___default().lorem.paragraph(),
      Images: [{// src: faker.image.imageUrl(),
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_1___default().name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_1___default().lorem.sentence()
      }]
    };
  });
}; // initialState.mainPosts = initialState.mainPosts.concat(
//   // 
// );

var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var loadPostRequest = function loadPostRequest(data) {
  return {
    type: LOAD_POST_REQUEST,
    data: data
  };
};
var addPostRequest = function addPostRequest(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var addCommentRequest = function addCommentRequest(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};
var removePostRequest = function removePostRequest(data) {
  return {
    type: REMOVE_POST_REQUEST,
    data: data
  };
};

var dummyPost = function dummyPost(data) {
  return {
    // 데이터를 구성한 후 화면??
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: 'Ho'
    },
    Images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default().generate(),
    content: data,
    User: {
      id: 1,
      nickname: 'Ho'
    }
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0,immer__WEBPACK_IMPORTED_MODULE_2__.default)(state, function (draft) {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.postLoading = true;
        draft.postLoadded = false;
        draft.error = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.postLoading = false;
        draft.postLoadded = true;
        draft.mainPosts = action.data.concat(draft.mainPosts); // 무한스크롤링을 구현

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
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
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

      case ADD_COMMENT_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.postId;
          });
          post.Comments.unshift(dummyComment(action.data.content));
          draft.commentAdding = false;
          draft.commentAdded = true;
          break; // const postIndex = state.mainPosts.findIndex( v => v.id === action.data.postId);
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

/* harmony default export */ __webpack_exports__["default"] = (reducer);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwicG9zdExvYWRpbmciLCJwb3N0TG9hZGVkIiwicG9zdEFkZGluZyIsInBvc3RBZGRlZCIsInBvc3RSZW1vdmluZyIsInBvc3RSZW1vdmVkIiwiY29tbWVudEFkZGluZyIsImNvbW1lbnRBZGRlZCIsImVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0aWQiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsImNvbnRlbnQiLCJJbWFnZXMiLCJDb21tZW50cyIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImxvYWRQb3N0UmVxdWVzdCIsImRhdGEiLCJ0eXBlIiwiYWRkUG9zdFJlcXVlc3QiLCJhZGRDb21tZW50UmVxdWVzdCIsInJlbW92ZVBvc3RSZXF1ZXN0IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwicG9zdExvYWRkZWQiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImFycm9yIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q0FqRkQ7O0FBbUZBLCtEQUFla0MsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJmOWQzMjBiN2M3ODM4M2U5NDEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRpZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBwb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcG9zdExvYWRlZDogZmFsc2UsXHJcbiAgcG9zdEFkZGluZzogZmFsc2UsXHJcbiAgcG9zdEFkZGVkOiBmYWxzZSxcclxuICBwb3N0UmVtb3Zpbmc6IGZhbHNlLFxyXG4gIHBvc3RSZW1vdmVkOiBmYWxzZSxcclxuICBjb21tZW50QWRkaW5nOiBmYWxzZSxcclxuICBjb21tZW50QWRkZWQ6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gIH0sXHJcbiAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgLy8gc3JjOiBmYWtlci5pbWFnZS5pbWFnZVVybCgpLFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbe1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKTtcclxuXHJcbi8vIGluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuLy8gICAvLyBcclxuLy8gKTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBsb2FkUG9zdFJlcXVlc3QgPSAoZGF0YSkgPT4gKHsgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0UmVxdWVzdCA9IChkYXRhKSA9PiAoeyB0eXBlOiBBRERfUE9TVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudFJlcXVlc3QgPSAoZGF0YSkgPT4gKHsgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3RSZXF1ZXN0ID0gKGRhdGEpID0+ICh7IHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsIGRhdGEgfSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHsgLy8g642w7J207YSw66W8IOq1rOyEse2VnCDtm4Qg7ZmU66m0Pz9cclxuICBpZDogZGF0YS5pZCxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ0hvJyxcclxuICB9LFxyXG4gIEltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdIbycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RMb2FkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucG9zdExvYWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhLmNvbmNhdChkcmFmdC5tYWluUG9zdHMpOyAvLyDrrLTtlZzsiqTtgazroaTrp4HsnYQg6rWs7ZiEXHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucG9zdExvYWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RBZGRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RBZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5wb3N0QWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucG9zdEFkZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RBZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucG9zdFJlbW92aW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5wb3N0UmVtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RSZW1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RSZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RSZW1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RSZW1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uYXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5jb21tZW50QWRkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jb21tZW50QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBkcmFmdC5jb21tZW50QWRkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY29tbWVudEFkZGVkID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tYWluUG9zdHMuZmluZEluZGV4KCB2ID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgLy8gY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgICAvLyBwb3N0LkNvbW1lbnRzID0gW2R1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSwgLi4ucG9zdC5Db21tZW50c107XHJcbiAgICAgICAgLy8gY29uc3QgbWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgICAgLy8gbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgICAvLyAgIG1haW5Qb3N0cyxcclxuICAgICAgICAvLyAgIGNvbW1lbnRBZGRpbmc6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgY29tbWVudEFkZGVkOiB0cnVlLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb21tZW50QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==