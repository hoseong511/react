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
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_1___default().image.image()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwicG9zdExvYWRpbmciLCJwb3N0TG9hZGVkIiwicG9zdEFkZGluZyIsInBvc3RBZGRlZCIsInBvc3RSZW1vdmluZyIsInBvc3RSZW1vdmVkIiwiY29tbWVudEFkZGluZyIsImNvbW1lbnRBZGRlZCIsImVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0aWQiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImxvYWRQb3N0UmVxdWVzdCIsImRhdGEiLCJ0eXBlIiwiYWRkUG9zdFJlcXVlc3QiLCJhZGRDb21tZW50UmVxdWVzdCIsInJlbW92ZVBvc3RSZXF1ZXN0IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwicG9zdExvYWRkZWQiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImFycm9yIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dGljL3dlYnBhY2svcGFnZXMvX2FwcC5jNjI3OTgyNjAyMzAwNjE3YmJkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBpbWFnZVBhdGhzOiBbXSxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgcG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHBvc3RMb2FkZWQ6IGZhbHNlLFxyXG4gIHBvc3RBZGRpbmc6IGZhbHNlLFxyXG4gIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgcG9zdFJlbW92aW5nOiBmYWxzZSxcclxuICBwb3N0UmVtb3ZlZDogZmFsc2UsXHJcbiAgY29tbWVudEFkZGluZzogZmFsc2UsXHJcbiAgY29tbWVudEFkZGVkOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gIEltYWdlczogW3tcclxuICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICB9XSxcclxuICBDb21tZW50czogW3tcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gIH1dLFxyXG59KSk7XHJcblxyXG4vLyBpbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoXHJcbi8vICAgLy8gXHJcbi8vICk7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgbG9hZFBvc3RSZXF1ZXN0ID0gKGRhdGEpID0+ICh7IHR5cGU6IExPQURfUE9TVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgYWRkUG9zdFJlcXVlc3QgPSAoZGF0YSkgPT4gKHsgdHlwZTogQUREX1BPU1RfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnRSZXF1ZXN0ID0gKGRhdGEpID0+ICh7IHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0UmVxdWVzdCA9IChkYXRhKSA9PiAoeyB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7IC8vIOuNsOydtO2EsOulvCDqtazshLHtlZwg7ZuEIO2ZlOuptD8/XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdIbycsXHJcbiAgfSxcclxuICBJbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgY29udGVudDogZGF0YSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnSG8nLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5wb3N0TG9hZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5wb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RMb2FkZGVkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YS5jb25jYXQoZHJhZnQubWFpblBvc3RzKTsgLy8g66y07ZWc7Iqk7YGs66Gk66eB7J2EIOq1rO2YhFxyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5wb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RMb2FkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5wb3N0QWRkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5wb3N0QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5wb3N0QWRkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucG9zdEFkZGVkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5wb3N0QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnBvc3RSZW1vdmluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucG9zdFJlbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5wb3N0UmVtb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5wb3N0UmVtb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5wb3N0UmVtb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5wb3N0UmVtb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmFycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY29tbWVudEFkZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuY29tbWVudEFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy51bnNoaWZ0KGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgZHJhZnQuY29tbWVudEFkZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRlZCA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7ICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY29tbWVudEFkZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9