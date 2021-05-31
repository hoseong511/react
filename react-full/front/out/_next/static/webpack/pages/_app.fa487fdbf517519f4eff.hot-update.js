self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ postSaga; }
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _marked = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(retweet),
    _marked2 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(uploadImages),
    _marked3 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(loadPost),
    _marked4 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(addPost),
    _marked5 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(removePost),
    _marked6 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(likePost),
    _marked7 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(unLikePost),
    _marked8 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(addComment),
    _marked9 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchRetweet),
    _marked10 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchUploadImages),
    _marked11 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLoadPost),
    _marked12 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchAddPost),
    _marked13 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchAddComment),
    _marked14 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLikePost),
    _marked15 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchUnLikePost),
    _marked16 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchRemovePost),
    _marked17 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(postSaga);






function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post("/post/".concat(data, "/retweet"));
}

function retweet(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function retweet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(retweetAPI, action.data);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.RETWEET_SUCCESS,
            data: result.data
          });

        case 6:
          _context.next = 13;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
          _context.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.RETWEET_FAILURE,
            error: _context.t0.response.data
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

function uploadImagesAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/post/images', data);
}

function uploadImages(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function uploadImages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(uploadImagesAPI, action.data);

        case 3:
          result = _context2.sent;
          console.log(result);
          _context2.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.UPLOAD_IMAGES_SUCCESS,
            data: result.data
          });

        case 7:
          _context2.next = 13;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.UPLOAD_IMAGES_FAILURE,
            error: _context2.t0.response.data
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 9]]);
}

function loadPostAPI(lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().get("/posts?lastId=".concat(lastId || 0)); // get에서 2번째 인수는 withCredential
}

function loadPost(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function loadPost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(loadPostAPI, action.lastId);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POST_SUCCESS,
            data: result.data
          });

        case 6:
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 12;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POST_FAILURE,
            error: _context3.t0.response.data
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 8]]);
}

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/post', data);
}

function addPost(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function addPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(addPostAPI, action.data);

        case 3:
          result = _context4.sent;
          console.log(result);
          _context4.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_SUCCESS,
            data: result.data
          });

        case 7:
          _context4.next = 9;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.ADD_POST_TO_ME,
            data: result.data.id
          });

        case 9:
          _context4.next = 15;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 15;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_FAILURE,
            error: _context4.t0.response.data
          });

        case 15:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 11]]);
}

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().delete("/post/".concat(data));
}

function removePost(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function removePost$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log(action.data);
          _context5.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(removePostAPI, action.data);

        case 4:
          result = _context5.sent;
          console.log(result);
          _context5.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_SUCCESS,
            data: result.data
          });

        case 8:
          _context5.next = 10;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__.REMOVE_POST_OF_ME,
            data: result.data
          });

        case 10:
          _context5.next = 17;
          break;

        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);
          _context5.next = 17;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_FAILURE,
            error: _context5.t0.response.data
          });

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 12]]);
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().patch("/post/".concat(data, "/like"));
}

function likePost(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function likePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          console.log(action.data);
          _context6.next = 4;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(likePostAPI, action.data);

        case 4:
          result = _context6.sent;
          console.log(result);
          _context6.next = 8;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LIKE_POST_SUCCESS,
            data: result.data
          });

        case 8:
          _context6.next = 15;
          break;

        case 10:
          _context6.prev = 10;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          _context6.next = 15;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LIKE_POST_FAILURE,
            error: _context6.t0.response.data
          });

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 10]]);
}

function unLikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().delete("/post/".concat(data, "/like"));
}

function unLikePost(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function unLikePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(unLikePostAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.UNLIKE_POST_SUCCESS,
            data: result.data
          });

        case 6:
          _context7.next = 13;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          _context7.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.UNLIKE_POST_FAILURE,
            error: _context7.t0.response.data
          });

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post("/post/".concat(data.postId, "/comment"), data); // POST /post/1/comment
}

function addComment(action) {
  var result;
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function addComment$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.call)(addCommentAPI, action.data);

        case 3:
          result = _context8.sent;
          console.log(result.data);
          _context8.next = 7;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_SUCCESS,
            data: result.data
          });

        case 7:
          _context8.next = 13;
          break;

        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          _context8.next = 13;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_FAILURE,
            error: _context8.t0.response.data
          });

        case 13:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8, null, [[0, 9]]);
}

function watchRetweet() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchRetweet$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.RETWEET_REQUEST, retweet);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchUploadImages() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchUploadImages$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.UPLOAD_IMAGES_REQUEST, uploadImages);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchLoadPost() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLoadPost$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.throttle)(1000, _reducers_post__WEBPACK_IMPORTED_MODULE_3__.LOAD_POST_REQUEST, loadPost);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchAddPost() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchAddPost$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_POST_REQUEST, addPost);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function watchAddComment() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchAddComment$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.ADD_COMMENT_REQUEST, addComment);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

function watchLikePost() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLikePost$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.LIKE_POST_REQUEST, likePost);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

function watchUnLikePost() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchUnLikePost$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.UNLIKE_POST_REQUEST, unLikePost);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

function watchRemovePost() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchRemovePost$(_context16) {
    while (1) {
      switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_post__WEBPACK_IMPORTED_MODULE_3__.REMOVE_POST_REQUEST, removePost);

        case 2:
        case "end":
          return _context16.stop();
      }
    }
  }, _marked16);
}

function postSaga() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function postSaga$(_context17) {
    while (1) {
      switch (_context17.prev = _context17.next) {
        case 0:
          _context17.next = 2;
          return (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchRetweet), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchUploadImages), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLoadPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddPost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchRemovePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchUnLikePost), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchAddComment)]);

        case 2:
        case "end":
          return _context17.stop();
      }
    }
  }, _marked17);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJyZXR3ZWV0IiwidXBsb2FkSW1hZ2VzIiwibG9hZFBvc3QiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImxpa2VQb3N0IiwidW5MaWtlUG9zdCIsImFkZENvbW1lbnQiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoTG9hZFBvc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbkxpa2VQb3N0Iiwid2F0Y2hSZW1vdmVQb3N0IiwicG9zdFNhZ2EiLCJyZXR3ZWV0QVBJIiwiZGF0YSIsImF4aW9zIiwiYWN0aW9uIiwiY2FsbCIsInJlc3VsdCIsInB1dCIsInR5cGUiLCJSRVRXRUVUX1NVQ0NFU1MiLCJjb25zb2xlIiwiZXJyb3IiLCJSRVRXRUVUX0ZBSUxVUkUiLCJyZXNwb25zZSIsInVwbG9hZEltYWdlc0FQSSIsImxvZyIsIlVQTE9BRF9JTUFHRVNfU1VDQ0VTUyIsIlVQTE9BRF9JTUFHRVNfRkFJTFVSRSIsImxvYWRQb3N0QVBJIiwibGFzdElkIiwiTE9BRF9QT1NUX1NVQ0NFU1MiLCJMT0FEX1BPU1RfRkFJTFVSRSIsImFkZFBvc3RBUEkiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfVE9fTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImxpa2VQb3N0QVBJIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsInVuTGlrZVBvc3RBUEkiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJSRVRXRUVUX1JFUVVFU1QiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJ0aHJvdHRsZSIsIkxPQURfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a01BUVVBLE87bU1BbUJBQyxZO21NQWtCQUMsUTttTUFrQkFDLE87bU1BdUJBQyxVO21NQXlCQUMsUTttTUFvQkFDLFU7bU1BbUJBQyxVO21NQWVBQyxZO29NQUdBQyxpQjtvTUFHQUMsYTtvTUFHQUMsWTtvTUFHQUMsZTtvTUFHQUMsYTtvTUFHQUMsZTtvTUFHQUMsZTtvTUFHZUMsUTs7QUE3THpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCO0FBQ3hCLFNBQU9DLGlEQUFBLGlCQUFvQkQsSUFBcEIsY0FBUDtBQUNEOztBQUNELFNBQVVsQixPQUFWLENBQWtCb0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVtQixpQkFBTUMsd0RBQUksQ0FBQ0osVUFBRCxFQUFhRyxNQUFNLENBQUNGLElBQXBCLENBQVY7O0FBRm5CO0FBRVVJLGdCQUZWO0FBQUE7QUFHSSxpQkFBTUMsdURBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFQywyREFERTtBQUVSUCxnQkFBSSxFQUFFSSxNQUFNLENBQUNKO0FBRkwsV0FBRCxDQUFUOztBQUhKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFRSVEsaUJBQU8sQ0FBQ0MsS0FBUjtBQVJKO0FBU0ksaUJBQU1KLHVEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRUksMkRBREU7QUFFUkQsaUJBQUssRUFBRSxZQUFNRSxRQUFOLENBQWVYO0FBRmQs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SSxFQU1ScUQsd0RBQUksQ0FBQ3ZELGFBQUQsQ0FOSSxFQU9SdUQsd0RBQUksQ0FBQ3RELGVBQUQsQ0FQSSxFQVFSc0Qsd0RBQUksQ0FBQ3hELGVBQUQsQ0FSSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYTQ4N2ZkYmY1MTc1MTlmNGVmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCBjYWxsLCB0aHJvdHRsZSB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IEFERF9DT01NRU5UX0ZBSUxVUkUsIEFERF9DT01NRU5UX1JFUVVFU1QsIEFERF9DT01NRU5UX1NVQ0NFU1MsIEFERF9QT1NUX0ZBSUxVUkUsIEFERF9QT1NUX1JFUVVFU1QsIEFERF9QT1NUX1NVQ0NFU1MsIExJS0VfUE9TVF9GQUlMVVJFLCBMSUtFX1BPU1RfUkVRVUVTVCwgTElLRV9QT1NUX1NVQ0NFU1MsIExPQURfUE9TVF9GQUlMVVJFLCBMT0FEX1BPU1RfUkVRVUVTVCwgTE9BRF9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFVFdFRVRfRkFJTFVSRSwgUkVUV0VFVF9SRVFVRVNULCBSRVRXRUVUX1NVQ0NFU1MsIFVOTElLRV9QT1NUX0ZBSUxVUkUsIFVOTElLRV9QT1NUX1JFUVVFU1QsIFVOTElLRV9QT1NUX1NVQ0NFU1MsIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSwgVVBMT0FEX0lNQUdFU19SRVFVRVNULCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCwgKTtcclxufVxyXG5mdW5jdGlvbiogcmV0d2VldChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZXR3ZWV0QVBJLCBhY3Rpb24uZGF0YSlcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcbmZ1bmN0aW9uKiB1cGxvYWRJbWFnZXMoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodXBsb2FkSW1hZ2VzQVBJLCBhY3Rpb24uZGF0YSlcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsb2FkUG9zdEFQSShsYXN0SWQpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7IC8vIGdldOyXkOyEnCAy67KI7Ke4IOyduOyImOuKlCB3aXRoQ3JlZGVudGlhbFxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkUG9zdEFQSSwgYWN0aW9uLmxhc3RJZClcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPQURfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24uZGF0YSk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKGFjdGlvbi5kYXRhKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pOyAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gdW5MaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9saWtlYCk7XHJcbn1cclxuZnVuY3Rpb24qIHVuTGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5MaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpXHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpOyAvLyBQT1NUIC9wb3N0LzEvY29tbWVudFxyXG59XHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZENvbW1lbnRBUEksIGFjdGlvbi5kYXRhKVxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0LmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUmV0d2VldCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVVBMT0FEX0lNQUdFU19SRVFVRVNULCB1cGxvYWRJbWFnZXMpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0KCkge1xyXG4gIHlpZWxkIHRocm90dGxlKDEwMDAsIExPQURfUE9TVF9SRVFVRVNULCBsb2FkUG9zdCk7IC8vIHRocm90dGxl7J2EIOyCrOyaqe2VnOuLpCDtlZjrjZTrnbzrj4Qg6riw64ql7J20IOyekeuPme2VmOq4sCDsoIQg7JqU7LKtIOqxtOydgCDsoJzqsbDtlZjsp4Ag66q77ZWc64ukLlxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVuTGlrZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkxJS0VfUE9TVF9SRVFVRVNULCB1bkxpa2VQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoUmVtb3ZlUG9zdCksXHJcbiAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFVuTGlrZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gIF0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=