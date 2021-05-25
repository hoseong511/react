self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": function() { return /* binding */ initialState; },
/* harmony export */   "SIGN_UP_REQUEST": function() { return /* binding */ SIGN_UP_REQUEST; },
/* harmony export */   "SIGN_UP_SUCCESS": function() { return /* binding */ SIGN_UP_SUCCESS; },
/* harmony export */   "SIGN_UP_FAILURE": function() { return /* binding */ SIGN_UP_FAILURE; },
/* harmony export */   "SIGN_OUT_REQUEST": function() { return /* binding */ SIGN_OUT_REQUEST; },
/* harmony export */   "SIGN_OUT_SUCCESS": function() { return /* binding */ SIGN_OUT_SUCCESS; },
/* harmony export */   "SIGN_OUT_FAILURE": function() { return /* binding */ SIGN_OUT_FAILURE; },
/* harmony export */   "LOG_IN_REQUEST": function() { return /* binding */ LOG_IN_REQUEST; },
/* harmony export */   "LOG_IN_SUCCESS": function() { return /* binding */ LOG_IN_SUCCESS; },
/* harmony export */   "LOG_IN_FAILURE": function() { return /* binding */ LOG_IN_FAILURE; },
/* harmony export */   "LOG_OUT_REQUEST": function() { return /* binding */ LOG_OUT_REQUEST; },
/* harmony export */   "LOG_OUT_SUCCESS": function() { return /* binding */ LOG_OUT_SUCCESS; },
/* harmony export */   "LOG_OUT_FAILURE": function() { return /* binding */ LOG_OUT_FAILURE; },
/* harmony export */   "VISIBLE_ON": function() { return /* binding */ VISIBLE_ON; },
/* harmony export */   "VISIBLE_OFF": function() { return /* binding */ VISIBLE_OFF; },
/* harmony export */   "FOLLOW_REQUEST": function() { return /* binding */ FOLLOW_REQUEST; },
/* harmony export */   "FOLLOW_SUCCESS": function() { return /* binding */ FOLLOW_SUCCESS; },
/* harmony export */   "FOLLOW_FAILURE": function() { return /* binding */ FOLLOW_FAILURE; },
/* harmony export */   "UNFOLLOW_REQUEST": function() { return /* binding */ UNFOLLOW_REQUEST; },
/* harmony export */   "UNFOLLOW_SUCCESS": function() { return /* binding */ UNFOLLOW_SUCCESS; },
/* harmony export */   "UNFOLLOW_FAILURE": function() { return /* binding */ UNFOLLOW_FAILURE; },
/* harmony export */   "CHANGE_NICKNAME_REQUEST": function() { return /* binding */ CHANGE_NICKNAME_REQUEST; },
/* harmony export */   "CHANGE_NICKNAME_SUCCESS": function() { return /* binding */ CHANGE_NICKNAME_SUCCESS; },
/* harmony export */   "CHANGE_NICKNAME_FAILURE": function() { return /* binding */ CHANGE_NICKNAME_FAILURE; },
/* harmony export */   "ADD_POST_TO_ME": function() { return /* binding */ ADD_POST_TO_ME; },
/* harmony export */   "REMOVE_POST_OF_ME": function() { return /* binding */ REMOVE_POST_OF_ME; },
/* harmony export */   "signUpRequestAction": function() { return /* binding */ signUpRequestAction; },
/* harmony export */   "signOutRequestAction": function() { return /* binding */ signOutRequestAction; },
/* harmony export */   "loginRequestAction": function() { return /* binding */ loginRequestAction; },
/* harmony export */   "logoutRequestAction": function() { return /* binding */ logoutRequestAction; },
/* harmony export */   "visibleOn": function() { return /* binding */ visibleOn; },
/* harmony export */   "visibleOff": function() { return /* binding */ visibleOff; },
/* harmony export */   "followRequestAction": function() { return /* binding */ followRequestAction; },
/* harmony export */   "unFollowRequestAction": function() { return /* binding */ unFollowRequestAction; },
/* harmony export */   "changeNicknameRequestAction": function() { return /* binding */ changeNicknameRequestAction; }
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initialState = {
  isSigningUp: false,
  // 회원가입 중
  isSignedUp: false,
  isSigningOut: false,
  // 회원 탈퇴중
  isLoggingIn: false,
  // 로그인 시도 중
  isLoggedIn: false,
  isLoggingOut: false,
  // 로그아웃 시도 중
  isFollowing: false,
  // 팔로우 시도중
  isFollowed: false,
  isUnfollowing: false,
  // 언팔 시도중
  isNickChanging: false,
  // 닉네임 변경 시도 중
  isNickChanged: false,
  me: null,
  error: null,
  visible: false,
  signUpData: {},
  loginData: {}
};
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
var SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
var SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var VISIBLE_ON = 'VISIBLE_ON';
var VISIBLE_OFF = 'VISIBLE_OFF';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
var CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var signUpRequestAction = function signUpRequestAction(data) {
  return {
    type: SIGN_UP_REQUEST,
    data: data
  };
};
var signOutRequestAction = function signOutRequestAction(data) {
  return {
    type: SIGN_OUT_REQUEST,
    data: data
  };
};
var loginRequestAction = function loginRequestAction(data) {
  return {
    type: LOG_IN_REQUEST,
    data: data
  };
};
var logoutRequestAction = function logoutRequestAction(data) {
  return {
    type: LOG_OUT_REQUEST,
    data: data
  };
};
var visibleOn = function visibleOn(data) {
  return {
    type: VISIBLE_ON,
    data: data
  };
};
var visibleOff = function visibleOff(data) {
  return {
    type: VISIBLE_OFF,
    data: data
  };
};
var followRequestAction = function followRequestAction(data) {
  return {
    type: FOLLOW_REQUEST,
    data: data
  };
};
var unFollowRequestAction = function unFollowRequestAction(data) {
  return {
    type: UNFOLLOW_REQUEST,
    data: data
  };
};
var changeNicknameRequestAction = function changeNicknameRequestAction(data) {
  return {
    type: CHANGE_NICKNAME_REQUEST,
    data: data
  };
};

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: 'HoHo',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: '부기초1'
    }, {
      nickname: '부기초2'
    }, {
      nickname: '부기초3'
    }],
    Followers: [{
      nickname: '부기초1'
    }, {
      nickname: '부기초2'
    }, {
      nickname: '부기초3'
    }]
  });
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return (0,immer__WEBPACK_IMPORTED_MODULE_1__.default)(state, function (draft) {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.isSigningUp = true;
        draft.isSigningUp = false;
        draft.error = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.isSigningUp = false;
        draft.isSignedUp = true;
        draft.me = dummyUser(action.data);
        break;

      case SIGN_UP_FAILURE:
        draft.isSigningUp = false;
        draft.isSignedUp = false;
        draft.error = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.isLoggingIn = true;
        draft.isLoggedIn = false;
        break;

      case LOG_IN_SUCCESS:
        draft.isLoggingIn = false;
        draft.isLoggedIn = true;
        draft.me = dummyUser(action.data);
        break;

      case LOG_IN_FAILURE:
        draft.isLoggingIn = false;
        draft.isLoggedIn = false;
        draft.error = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.isLoggingOut = true;
        draft.isLoggedOut = false;
        draft.error = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.isLoggingOut = false;
        draft.isLoggedOut = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.isLoggingOut = false;
        draft.isLoggedOut = false;
        draft.error = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.isNickChanging = true;
        draft.isNickChanged = false;
        draft.error = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.isNickChanging = false;
        draft.isNickChanged = true;
        draft.me = action.data;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.isNickChanging = false;
        draft.isNickChanged = false;
        draft.error = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.isFollowing = true;
        draft.isFollowed = false;
        draft.error = null;
        break;

      case FOLLOW_SUCCESS:
        draft.isFollowing = false;
        draft.isFollowed = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.isFollowing = false;
        draft.isFollowed = false;
        draft.error = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.isUnFollowing = true;
        draft.isFollowed = true;
        draft.error = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.isUnFollowing = false;
        draft.isFollowed = false;
        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.isUnFollowing = false;
        draft.isFollowed = true;
        draft.error = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case VISIBLE_ON:
        draft.visible = true;
        break;

      case VISIBLE_OFF:
        draft.visible = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc1NpZ25pbmdVcCIsImlzU2lnbmVkVXAiLCJpc1NpZ25pbmdPdXQiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdPdXQiLCJpc0ZvbGxvd2luZyIsImlzRm9sbG93ZWQiLCJpc1VuZm9sbG93aW5nIiwiaXNOaWNrQ2hhbmdpbmciLCJpc05pY2tDaGFuZ2VkIiwibWUiLCJlcnJvciIsInZpc2libGUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiVklTSUJMRV9PTiIsIlZJU0lCTEVfT0ZGIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInNpZ25PdXRSZXF1ZXN0QWN0aW9uIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInZpc2libGVPbiIsInZpc2libGVPZmYiLCJmb2xsb3dSZXF1ZXN0QWN0aW9uIiwidW5Gb2xsb3dSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImlzTG9nZ2VkT3V0IiwicHVzaCIsImlzVW5Gb2xsb3dpbmciLCJmaWx0ZXIiLCJ2IiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsYUFBVyxFQUFFLEtBRGE7QUFDTjtBQUNwQkMsWUFBVSxFQUFFLEtBRmM7QUFHMUJDLGNBQVksRUFBRSxLQUhZO0FBR0w7QUFDckJDLGFBQVcsRUFBRSxLQUphO0FBSU47QUFDcEJDLFlBQVUsRUFBRSxLQUxjO0FBTTFCQyxjQUFZLEVBQUUsS0FOWTtBQU1MO0FBQ3JCQyxhQUFXLEVBQUUsS0FQYTtBQU9OO0FBQ3BCQyxZQUFVLEVBQUUsS0FSYztBQVMxQkMsZUFBYSxFQUFFLEtBVFc7QUFTSjtBQUN0QkMsZ0JBQWMsRUFBRSxLQVZVO0FBVUg7QUFDdkJDLGVBQWEsRUFBRSxLQVhXO0FBWTFCQyxJQUFFLEVBQUUsSUFac0I7QUFhMUJDLE9BQUssRUFBRSxJQWJtQjtBQWMxQkMsU0FBTyxFQUFFLEtBZGlCO0FBZTFCQyxZQUFVLEVBQUUsRUFmYztBQWdCMUJDLFdBQVMsRUFBRTtBQWhCZSxDQUFyQjtBQW1CQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFD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LFVBQU4sR0FBbUIsS0FBbkI7QUFDQXVELGFBQUssQ0FBQ25ELEVBQU4sQ0FBUzZDLFVBQVQsR0FBc0JNLEtBQUssQ0FBQ25ELEVBQU4sQ0FBUzZDLFVBQVQsQ0FBb0JVLE1BQXBCLENBQTJCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDYixFQUFGLEtBQVNNLE1BQU0sQ0FBQ2xCLElBQXZCO0FBQUEsU0FBM0IsQ0FBdEI7QUFDQTs7QUFDRixXQUFLUCxnQkFBTDtBQUNFMkIsYUFBSyxDQUFDRyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FILGFBQUssQ0FBQ3ZELFVBQU4sR0FBbUIsSUFBbkI7QUFDQXVELGFBQUssQ0FBQ2xELEtBQU4sR0FBY2dELE1BQU0sQ0FBQ2hELEtBQXJCO0FBQ0E7O0FBQ0YsV0FBSzJCLGNBQUw7QUFDRXVCLGFBQUssQ0FBQ25ELEVBQU4sQ0FBUzRDLEtBQVQsQ0FBZWEsT0FBZixDQUF1QjtBQUFFZCxZQUFFLEVBQUVNLE1BQU0sQ0FBQ2xCO0FBQWIsU0FBdkI7QUFDQTs7QUFDRixXQUFLRixpQkFBTDtBQUNFc0IsYUFBSyxDQUFDbkQsRUFBTixDQUFTNEMsS0FBVCxHQUFpQk8sS0FBSyxDQUFDbkQsRUFBTixDQUFTNEMsS0FBVCxDQUFlVyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDYixFQUFGLEtBQVNNLE1BQU0sQ0FBQ2xCLElBQXZCO0FBQUEsU0FBdEIsQ0FBakI7QUFDQTs7QUFDRixXQUFLZCxVQUFMO0FBQ0VrQyxhQUFLLENBQUNqRCxPQUFOLEdBQWdCLElBQWhCO0FBQ0E7O0FBQ0YsV0FBS2dCLFdBQUw7QUFDRWlDLGFBQUssQ0FBQ2pELE9BQU4sR0FBZ0IsS0FBaEI7QUFDQTs7QUFDRjtBQUNFO0FBdkdKO0FBeUdELEdBMUdhLENBQWQ7QUEyR0QsQ0E1R0Q7O0FBOEdBLCtEQUFlNkMsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdjNzExZTk0NDI0Y2Q2NjkyYWYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzU2lnbmluZ1VwOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOykkVxyXG4gIGlzU2lnbmVkVXA6IGZhbHNlLFxyXG4gIGlzU2lnbmluZ091dDogZmFsc2UsIC8vIO2ajOybkCDtg4jth7TspJFcclxuICBpc0xvZ2dpbmdJbjogZmFsc2UsIC8vIOuhnOq3uOyduCDsi5zrj4Qg7KSRXHJcbiAgaXNMb2dnZWRJbjogZmFsc2UsXHJcbiAgaXNMb2dnaW5nT3V0OiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhCDspJFcclxuICBpc0ZvbGxvd2luZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICBpc0ZvbGxvd2VkOiBmYWxzZSxcclxuICBpc1VuZm9sbG93aW5nOiBmYWxzZSwgLy8g7Ja47YyUIOyLnOuPhOykkVxyXG4gIGlzTmlja0NoYW5naW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4Qg7KSRXHJcbiAgaXNOaWNrQ2hhbmdlZDogZmFsc2UsXHJcbiAgbWU6IG51bGwsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAgc2lnblVwRGF0YToge30sXHJcbiAgbG9naW5EYXRhOiB7fSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9SRVFVRVNUID0gJ1NJR05fT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfU1VDQ0VTUyA9ICdTSUdOX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX0ZBSUxVUkUgPSAnU0lHTl9PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBWSVNJQkxFX09OID0gJ1ZJU0lCTEVfT04nO1xyXG5leHBvcnQgY29uc3QgVklTSUJMRV9PRkYgPSAnVklTSUJMRV9PRkYnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MgPSAnQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUgPSAnQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25VcFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogU0lHTl9VUF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3Qgc2lnbk91dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogU0lHTl9PVVRfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBMT0dfSU5fUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGxvZ291dFJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogTE9HX09VVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgdmlzaWJsZU9uID0gKGRhdGEpID0+ICh7IHR5cGU6IFZJU0lCTEVfT04sIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlT2ZmID0gKGRhdGEpID0+ICh7IHR5cGU6IFZJU0lCTEVfT0ZGLCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgZm9sbG93UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBGT0xMT1dfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IHVuRm9sbG93UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBVTkZPTExPV19SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBkYXRhIH0pO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgLi4uZGF0YSxcclxuICBuaWNrbmFtZTogJ0hvSG8nLFxyXG4gIGlkOiAxLFxyXG4gIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICBGb2xsb3dpbmdzOiBbeyBuaWNrbmFtZTogJ+u2gOq4sOy0iDEnfSwgeyBuaWNrbmFtZTogJ+u2gOq4sOy0iDInfSwgeyBuaWNrbmFtZTogJ+u2gOq4sOy0iDMnfV0sXHJcbiAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogJ+u2gOq4sOy0iDEnfSwgeyBuaWNrbmFtZTogJ+u2gOq4sOy0iDInfSwgeyBuaWNrbmFtZTogJ+u2gOq4sOy0iDMnfV0sXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNTaWduZWRVcCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzU2lnbmVkVXAgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdPdXQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzTmlja0NoYW5naW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc05pY2tDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzTmlja0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNOaWNrQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc05pY2tDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTmlja0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2luZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNVbkZvbGxvd2luZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNVbkZvbGxvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93ZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzVW5Gb2xsb3dpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzID0gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVklTSUJMRV9PTjpcclxuICAgICAgICBkcmFmdC52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBWSVNJQkxFX09GRjpcclxuICAgICAgICBkcmFmdC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9