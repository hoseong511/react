self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwicG9zdExvYWRpbmciLCJwb3N0TG9hZGVkIiwicG9zdEFkZGluZyIsInBvc3RBZGRlZCIsInBvc3RSZW1vdmluZyIsInBvc3RSZW1vdmVkIiwiY29tbWVudEFkZGluZyIsImNvbW1lbnRBZGRlZCIsImVycm9yIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0aWQiLCJVc2VyIiwibmlja25hbWUiLCJmYWtlciIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsIkxPQURfUE9TVF9SRVFVRVNUIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsImxvYWRQb3N0UmVxdWVzdCIsImRhdGEiLCJ0eXBlIiwiYWRkUG9zdFJlcXVlc3QiLCJhZGRDb21tZW50UmVxdWVzdCIsInJlbW92ZVBvc3RSZXF1ZXN0IiwiZHVtbXlQb3N0IiwiZHVtbXlDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwicG9zdExvYWRkZWQiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImFycm9yIiwicG9zdCIsImZpbmQiLCJwb3N0SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFFLEVBRGU7QUFFMUJDLFlBQVUsRUFBRSxFQUZjO0FBRzFCQyxjQUFZLEVBQUUsSUFIWTtBQUkxQkMsYUFBVyxFQUFFLEtBSmE7QUFLMUJDLFlBQVUsRUFBRSxLQUxjO0FBTTFCQyxZQUFVLEVBQUUsS0FOYztBQU8xQkMsV0FBUyxFQUFFLEtBUGU7QUFRMUJDLGNBQVksRUFBRSxLQVJZO0FBUzFCQyxhQUFXLEVBQUUsS0FUYTtBQVUxQkMsZUFBYSxFQUFFLEtBVlc7QUFXMUJDLGNBQVksRUFBRSxLQVhZO0FBWTFCQyxPQUFLLEVBQUU7QUFabUIsQ0FBckI7QUFjQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE1BQUQ7QUFBQSxTQUFZQyxLQUFLLENBQUNELE1BQUQsQ0FBTCxDQUFjRSxJQUFkLEdBQXFCQyxHQUFyQixDQUF5QjtBQUFBLFdBQU87QUFDM0VDLFFBQUUsRUFBRUMsdURBQUEsRUFEdUU7QUFFM0VDLFVBQUksRUFBRTtBQUNKRixVQUFFLEVBQUVDLHVEQUFBLEVBREE7QUFFSkUsZ0JBQVEsRUFBRUMsMERBQUE7QUFGTixPQUZxRTtBQU0zRUMsYUFBTyxFQUFFRCw0REFBQSxFQU5rRTtBQU8zRUUsWUFBTSxFQUFFLENBQUM7QUFDUEMsV0FBRyxFQUFFSCx3REFBQTtBQURFLE9BQUQsQ0FQbUU7QUFVM0VJLGNBQVEsRUFBRSxDQUFDO0FBQ1ROLFlBQUksRUFBRTtBQUNKRixZQUFFLEVBQUVDLHVEQUFBLEVBREE7QUFFSkUsa0JBQVEsRUFBRUMsMERBQUE7QUFGTixTQURHO0FBS1RDLGVBQU8sRUFBRUQsMkRBQUE7QUFMQSxPQUFEO0FBVmlFLEtBQVA7QUFBQSxHQUF6QixDQUFaO0FBQUEsQ0FBMUIsQyxDQW1CUDtBQUNBO0FBQ0E7O0FBRU8sSUFBTUssaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCLEdBQUcsa0JBQXpCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUFFQyxRQUFJLEVBQUVkLGlCQUFSO0FBQTJCYSxRQUFJLEVBQUpBO0FBQTNCLEdBQVg7QUFBQSxDQUF4QjtBQUNBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0YsSUFBRDtBQUFBLFNBQVc7QUFBRUMsUUFBSSxFQUFFWCxnQkFBUjtBQUEwQlUsUUFBSSxFQUFKQTtBQUExQixHQUFYO0FBQUEsQ0FBdkI7QUFDQSxJQUFNRyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNILElBQUQ7QUFBQSxTQUFXO0FBQUVDLFFBQUksRUFBRUwsbUJBQVI7QUFBNkJJLFFBQUksRUFBSkE7QUFBN0IsR0FBWDtBQUFBLENBQTFCO0FBQ0EsSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSixJQUFEO0FBQUEsU0FBVztBQUFFQyxRQUFJLEVBQUVSLG1CQUFSO0FBQTZCTyxRQUFJLEVBQUpBO0FBQTdCLEdBQVg7QUFBQSxDQUExQjs7QUFFUCxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDTCxJQUFEO0FBQUEsU0FBVztBQUFFO0FBQzdCdEIsTUFBRSxFQUFFc0IsSUFBSSxDQUFDdEIsRUFEa0I7QUFFM0JLLFdBQU8sRUFBRWlCLElBQUksQ0FBQ2pCLE9BRmE7QUFHM0JILFFBQUksRUFBRTtBQUNKRixRQUFFLEVBQUUsQ0FEQTtBQUVKRyxjQUFRLEVBQUU7QUFGTixLQUhxQjtBQU8zQkcsVUFBTSxFQUFFLEVBUG1CO0FBUTNCRSxZQUFRLEVBQUU7QUFSaUIsR0FBWDtBQUFBLENBQWxCOztBQVVBLElBQU1vQixZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTixJQUFEO0FBQUEsU0FBVztBQUM5QnRCLE1BQUUsRUFBRUMsdURBQUEsRUFEMEI7QUFFOUJJLFdBQU8sRUFBRWlCLElBRnFCO0FBRzlCcEIsUUFBSSxFQUFFO0FBQ0pGLFFBQUUsRUFBRSxDQURBO0FBRUpHLGNBQVEsRUFBRTtBQUZOO0FBSHdCLEdBQVg7QUFBQSxDQUFyQjs7QUFTQSxJQUFNMEIsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7QUFBQSxNQUFqQ0MsS0FBaUMsdUVBQXpCaEQsWUFBeUI7QUFBQSxNQUFYaUQsTUFBVztBQUNoRCxTQUFPQyw4Q0FBTyxDQUFDRixLQUFELEVBQVEsVUFBQ0csS0FBRCxFQUFXO0FBQy9CLFlBQVFGLE1BQU0sQ0FBQ1IsSUFBZjtBQUNFLFdBQUtkLGlCQUFMO0FBQ0V3QixhQUFLLENBQUMvQyxXQUFOLEdBQW9CLElBQXBCO0FBQ0ErQyxhQUFLLENBQUNDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQUQsYUFBSyxDQUFDdkMsS0FBTixHQUFjLElBQWQ7QUFDQTs7QUFDRixXQUFLZ0IsaUJBQUw7QUFDRXVCLGFBQUssQ0FBQy9DLFdBQU4sR0FBb0IsS0FBcEI7QUFDQStDLGFBQUssQ0FBQ0MsV0FBTixHQUFvQixJQUFwQjtBQUNBRCxhQUFLLENBQUNsRCxTQUFOLEdBQWtCZ0QsTUFBTSxDQUFDVCxJQUFQLENBQVlhLE1BQVosQ0FBbUJGLEtBQUssQ0FBQ2xELFNBQXpCLENBQWxCLENBSEYsQ0FHeUQ7O0FBQ3ZEa0QsYUFBSyxDQUFDaEQsWUFBTixHQUFxQmdELEtBQUssQ0FBQ2xELFNBQU4sQ0FBZ0JxRCxNQUFoQixHQUF5QixFQUE5QztBQUNBOztBQUNGLFdBQUt6QixpQkFBTDtBQUNFc0IsYUFBSyxDQUFDL0MsV0FBTixHQUFvQixLQUFwQjtBQUNBK0MsYUFBSyxDQUFDQyxXQUFOLEdBQW9CLEtBQXBCO0FBQ0FELGFBQUssQ0FBQ3ZDLEtBQU4sR0FBY3FDLE1BQU0sQ0FBQ3JDLEtBQXJCO0FBQ0E7O0FBQ0YsV0FBS2tCLGdCQUFMO0FBQ0VxQixhQUFLLENBQUM3QyxVQUFOLEdBQW1CLElBQW5CO0FBQ0E2QyxhQUFLLENBQUM1QyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0E0QyxhQUFLLENBQUN2QyxLQUFOLEdBQWMsSUFBZDtBQUNBOztBQUNGLFdBQUttQixnQkFBTDtBQUNFb0IsYUFBSyxDQUFDN0MsVUFBTixHQUFtQixLQUFuQjtBQUNBNkMsYUFBSyxDQUFDNUMsU0FBTixHQUFrQixJQUFsQjtBQUNBNEMsYUFBSyxDQUFDbEQsU0FBTixDQUFnQnNELE9BQWhCLENBQXdCVixTQUFTLENBQUNJLE1BQU0sQ0FBQ1QsSUFBUixDQUFqQztBQUNBOztBQUNGLFdBQUtSLGdCQUFMO0FBQ0VtQixhQUFLLENBQUM3QyxVQUFOLEdBQW1CLEtBQW5CO0FBQ0E2QyxhQUFLLENBQUM1QyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0E0QyxhQUFLLENBQUN2QyxLQUFOLEdBQWNxQyxNQUFNLENBQUNyQyxLQUFyQjtBQUNBOztBQUNGLFdBQUtxQixtQkFBTDtBQUNFa0IsYUFBSyxDQUFDM0MsWUFBTixHQUFxQixJQUFyQjtBQUNBMkMsYUFBSyxDQUFDMUMsV0FBTixHQUFvQixLQUFwQjtBQUNBMEMsYUFBSyxDQUFDdkMsS0FBTixHQUFjLElBQWQ7QUFDQTs7QUFDRixXQUFLc0IsbUJBQUw7QUFDRWlCLGFBQUssQ0FBQzNDLFlBQU4sR0FBcUIsS0FBckI7QUFDQTJDLGFBQUssQ0FBQzFDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQTBDLGFBQUssQ0FBQ2xELFNBQU4sR0FBa0JrRCxLQUFLLENBQUNsRCxTQUFOLENBQWdCdUQsTUFBaEIsQ0FBdUIsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUN2QyxFQUFGLEtBQVMrQixNQUFNLENBQUNULElBQXZCO0FBQUEsU0FBdkIsQ0FBbEI7QUFDQTs7QUFDRixXQUFLTCxtQkFBTDtBQUNFZ0IsYUFBSyxDQUFDM0MsWUFBTixHQUFxQixLQUFyQjtBQUNBMkMsYUFBSyxDQUFDMUMsV0FBTixHQUFvQixLQUFwQjtBQUNBMEMsYUFBSyxDQUFDdkMsS0FBTixHQUFjcUMsTUFBTSxDQUFDUyxLQUFyQjtBQUNBOztBQUNGLFdBQUt0QixtQkFBTDtBQUNFZSxhQUFLLENBQUN6QyxhQUFOLEdBQXNCLElBQXRCO0FBQ0F5QyxhQUFLLENBQUN4QyxZQUFOLEdBQXFCLEtBQXJCO0FBQ0F3QyxhQUFLLENBQUN2QyxLQUFOLEdBQWMsSUFBZDtBQUNBOztBQUNGLFdBQUt5QixtQkFBTDtBQUEwQjtBQUN4QixjQUFNc0IsSUFBSSxHQUFHUixLQUFLLENBQUNsRCxTQUFOLENBQWdCMkQsSUFBaEIsQ0FBcUIsVUFBQ0gsQ0FBRDtBQUFBLG1CQUFPQSxDQUFDLENBQUN2QyxFQUFGLEtBQVMrQixNQUFNLENBQUNULElBQVAsQ0FBWXFCLE1BQTVCO0FBQUEsV0FBckIsQ0FBYjtBQUNBRixjQUFJLENBQUNqQyxRQUFMLENBQWM2QixPQUFkLENBQXNCVCxZQUFZLENBQUNHLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZakIsT0FBYixDQUFsQztBQUNBNEIsZUFBSyxDQUFDekMsYUFBTixHQUFzQixLQUF0QjtBQUNBeUMsZUFBSyxDQUFDeEMsWUFBTixHQUFxQixJQUFyQjtBQUNBO0FBQ0Q7O0FBQ0QsV0FBSzJCLG1CQUFMO0FBQ0VhLGFBQUssQ0FBQ3pDLGFBQU4sR0FBc0IsS0FBdEI7QUFDQXlDLGFBQUssQ0FBQ3hDLFlBQU4sR0FBcUIsS0FBckI7QUFDQXdDLGFBQUssQ0FBQ3ZDLEtBQU4sR0FBY3FDLE1BQU0sQ0FBQ3JDLEtBQXJCO0FBQ0E7O0FBQ0Y7QUFDRTtBQWpFSjtBQW1FRCxHQXBFYSxDQUFkO0FBcUVELENBdEVEOztBQXdFQSwrREFBZW1DLE9BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzYyNzk4MjYwMjMwMDYxN2JiZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydGlkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIHBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBwb3N0TG9hZGVkOiBmYWxzZSxcclxuICBwb3N0QWRkaW5nOiBmYWxzZSxcclxuICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG4gIHBvc3RSZW1vdmluZzogZmFsc2UsXHJcbiAgcG9zdFJlbW92ZWQ6IGZhbHNlLFxyXG4gIGNvbW1lbnRBZGRpbmc6IGZhbHNlLFxyXG4gIGNvbW1lbnRBZGRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IEFycmF5KG51bWJlcikuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgfSxcclxuICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICBJbWFnZXM6IFt7XHJcbiAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgfV0sXHJcbiAgQ29tbWVudHM6IFt7XHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydGlkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuLy8gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4vLyAgIC8vIFxyXG4vLyApO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IGxvYWRQb3N0UmVxdWVzdCA9IChkYXRhKSA9PiAoeyB0eXBlOiBMT0FEX1BPU1RfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGFkZFBvc3RSZXF1ZXN0ID0gKGRhdGEpID0+ICh7IHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50UmVxdWVzdCA9IChkYXRhKSA9PiAoeyB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdFJlcXVlc3QgPSAoZGF0YSkgPT4gKHsgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCwgZGF0YSB9KTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoeyAvLyDrjbDsnbTthLDrpbwg6rWs7ISx7ZWcIO2bhCDtmZTrqbQ/P1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnSG8nLFxyXG4gIH0sXHJcbiAgSW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRpZC5nZW5lcmF0ZSgpLFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ0hvJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5wb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucG9zdExvYWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5wb3N0TG9hZGRlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7IC8vIOustO2VnOyKpO2BrOuhpOungeydhCDqtaztmIRcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5wb3N0TG9hZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucG9zdEFkZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucG9zdEFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucG9zdEFkZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RBZGRlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5wb3N0QWRkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucG9zdEFkZGVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5wb3N0UmVtb3ZpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnBvc3RSZW1vdmVkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucG9zdFJlbW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucG9zdFJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucG9zdFJlbW92aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucG9zdFJlbW92ZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5hcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb21tZW50QWRkZWQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrOyAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmNvbW1lbnRBZGRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jb21tZW50QWRkZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==