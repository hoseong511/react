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
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc1NpZ25pbmdVcCIsImlzU2lnbmVkVXAiLCJpc1NpZ25pbmdPdXQiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdPdXQiLCJpc0ZvbGxvd2luZyIsImlzRm9sbG93ZWQiLCJpc1VuZm9sbG93aW5nIiwiaXNOaWNrQ2hhbmdpbmciLCJpc05pY2tDaGFuZ2VkIiwibWUiLCJlcnJvciIsInZpc2libGUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiVklTSUJMRV9PTiIsIlZJU0lCTEVfT0ZGIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInNpZ25PdXRSZXF1ZXN0QWN0aW9uIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInZpc2libGVPbiIsInZpc2libGVPZmYiLCJmb2xsb3dSZXF1ZXN0QWN0aW9uIiwidW5Gb2xsb3dSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImlzTG9nZ2VkT3V0IiwicHVzaCIsImlzVW5Gb2xsb3dpbmciLCJmaWx0ZXIiLCJ2IiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsYUFBVyxFQUFFLEtBRGE7QUFDTjtBQUNwQkMsWUFBVSxFQUFFLEtBRmM7QUFHMUJDLGNBQVksRUFBRSxLQUhZO0FBR0w7QUFDckJDLGFBQVcsRUFBRSxLQUphO0FBSU47QUFDcEJDLFlBQVUsRUFBRSxLQUxjO0FBTTFCQyxjQUFZLEVBQUUsS0FOWTtBQU1MO0FBQ3JCQyxhQUFXLEVBQUUsS0FQYTtBQU9OO0FBQ3BCQyxZQUFVLEVBQUUsS0FSYztBQVMxQkMsZUFBYSxFQUFFLEtBVFc7QUFTSjtBQUN0QkMsZ0JBQWMsRUFBRSxLQVZVO0FBVUg7QUFDdkJDLGVBQWEsRUFBRSxLQVhXO0FBWTFCQyxJQUFFLEVBQUUsSUFac0I7QUFhMUJDLE9BQUssRUFBRSxJQWJtQjtBQWMxQkMsU0FBTyxFQUFFLEtBZGlCO0FBZTFCQyxZQUFVLEVBQUUsRUFmYztBQWdCMUJDLFdBQVMsRUFBRTtBQWhCZSxDQUFyQjtBQW1CQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsWUFBbkI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsYUFBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLGdCQUF2QjtBQUNBLElBQU1DLGNBQWMsR0FBRyxnQkFBdkI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyx1QkFBdUIsR0FBRyx5QkFBaEM7QUFDQSxJQUFNQyxjQUFjLEdBQUcsZ0JBQXZCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUcsbUJBQTFCO0FBRUEsSUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxJQUFEO0FBQUEsU0FBVztBQUFFQyxRQUFJLEVBQUUzQixlQUFSO0FBQXlCMEIsUUFBSSxFQUFKQTtBQUF6QixHQUFYO0FBQUEsQ0FBNUI7QUFDQSxJQUFNRSxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNGLElBQUQ7QUFBQSxTQUFXO0FBQUVDLFFBQUksRUFBRXhCLGdCQUFSO0FBQTBCdUIsUUFBSSxFQUFKQTtBQUExQixHQUFYO0FBQUEsQ0FBN0I7QUFDQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNILElBQUQ7QUFBQSxTQUFXO0FBQUVDLFFBQUksRUFBRXJCLGNBQVI7QUFBd0JvQixRQUFJLEVBQUpBO0FBQXhCLEdBQVg7QUFBQSxDQUEzQjtBQUNBLElBQU1JLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0osSUFBRDtBQUFBLFNBQVc7QUFBRUMsUUFBSSxFQUFFbEIsZUFBUjtBQUF5QmlCLFFBQUksRUFBSkE7QUFBekIsR0FBWDtBQUFBLENBQTVCO0FBQ0EsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0wsSUFBRDtBQUFBLFNBQVc7QUFBRUMsUUFBSSxFQUFFZixVQUFSO0FBQW9CYyxRQUFJLEVBQUpBO0FBQXBCLEdBQVg7QUFBQSxDQUFsQjtBQUNBLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNOLElBQUQ7QUFBQSxTQUFXO0FBQUVDLFFBQUksRUFBRWQsV0FBUjtBQUFxQmEsUUFBSSxFQUFKQTtBQUFyQixHQUFYO0FBQUEsQ0FBbkI7QUFDQSxJQUFNTyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNQLElBQUQ7QUFBQSxTQUFXO0FBQUVDLFFBQUksRUFBRWIsY0FBUjtBQUF3QlksUUFBSSxFQUFKQTtBQUF4QixHQUFYO0FBQUEsQ0FBNUI7QUFDQSxJQUFNUSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNSLElBQUQ7QUFBQSxTQUFXO0FBQUVDLFFBQUksRUFBRVYsZ0JBQVI7QUFBMEJTLFFBQUksRUFBSkE7QUFBMUIsR0FBWDtBQUFBLENBQTlCO0FBQ0EsSUFBTVMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUE4QixDQUFDVCxJQUFEO0FBQUEsU0FBVztBQUFFQyxRQUFJLEVBQUVQLHVCQUFSO0FBQWlDTSxRQUFJLEVBQUpBO0FBQWpDLEdBQVg7QUFBQSxDQUFwQzs7QUFFUCxJQUFNVSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDVixJQUFEO0FBQUEseUNBQ2JBLElBRGE7QUFFaEJXLFlBQVEsRUFBRSxNQUZNO0FBR2hCQyxNQUFFLEVBQUUsQ0FIWTtBQUloQkMsU0FBSyxFQUFFLENBQUM7QUFBRUQsUUFBRSxFQUFFO0FBQU4sS0FBRCxDQUpTO0FBS2hCRSxjQUFVLEVBQUUsQ0FBQztBQUFFSCxjQUFRLEVBQUU7QUFBWixLQUFELEVBQXNCO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBQXRCLEVBQTJDO0FBQUVBLGNBQVEsRUFBRTtBQUFaLEtBQTNDLENBTEk7QUFNaEJJLGFBQVMsRUFBRSxDQUFDO0FBQUVKLGNBQVEsRUFBRTtBQUFaLEtBQUQsRUFBc0I7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBdEIsRUFBMkM7QUFBRUEsY0FBUSxFQUFFO0FBQVosS0FBM0M7QUFOSztBQUFBLENBQWxCOztBQVNBLElBQU1LLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QjVELFlBQXlCO0FBQUEsTUFBWDZELE1BQVc7QUFDaEQsU0FBT0MsOENBQU8sQ0FBQ0YsS0FBRCxFQUFRLFVBQUNHLEtBQUQsRUFBVztBQUMvQixZQUFRRixNQUFNLENBQUNqQixJQUFmO0FBQ0UsV0FBSzNCLGVBQUw7QUFDRThDLGFBQUssQ0FBQzlELFdBQU4sR0FBb0IsSUFBcEI7QUFDQThELGFBQUssQ0FBQzlELFdBQU4sR0FBb0IsS0FBcEI7QUFDQThELGFBQUssQ0FBQ2xELEtBQU4sR0FBYyxJQUFkO0FBQ0E7O0FBQ0YsV0FBS0ssZUFBTDtBQUNFNkMsYUFBSyxDQUFDOUQsV0FBTixHQUFvQixLQUFwQjtBQUNBOEQsYUFBSyxDQUFDN0QsVUFBTixHQUFtQixJQUFuQjtBQUNBNkQsYUFBSyxDQUFDbkQsRUFBTixHQUFXeUMsU0FBUyxDQUFDUSxNQUFNLENBQUNsQixJQUFSLENBQXBCO0FBQ0E7O0FBQ0YsV0FBS3hCLGVBQUw7QUFDRTRDLGFBQUssQ0FBQzlELFdBQU4sR0FBb0IsS0FBcEI7QUFDQThELGFBQUssQ0FBQzdELFVBQU4sR0FBbUIsS0FBbkI7QUFDQTZELGFBQUssQ0FBQ2xELEtBQU4sR0FBY2dELE1BQU0sQ0FBQ2hELEtBQXJCO0FBQ0E7O0FBQ0YsV0FBS1UsY0FBTDtBQUNFd0MsYUFBSyxDQUFDM0QsV0FBTixHQUFvQixJQUFwQjtBQUNBMkQsYUFBSyxDQUFDMUQsVUFBTixHQUFtQixLQUFuQjtBQUNBOztBQUNGLFdBQUttQixjQUFMO0FBQ0V1QyxhQUFLLENBQUMzRCxXQUFOLEdBQW9CLEtBQXBCO0FBQ0EyRCxhQUFLLENBQUMxRCxVQUFOLEdBQW1CLElBQW5CO0FBQ0EwRCxhQUFLLENBQUNuRCxFQUFOLEdBQVd5QyxTQUFTLENBQUNRLE1BQU0sQ0FBQ2xCLElBQVIsQ0FBcEI7QUFDQTs7QUFDRixXQUFLbEIsY0FBTDtBQUNFc0MsYUFBSyxDQUFDM0QsV0FBTixHQUFvQixLQUFwQjtBQUNBMkQsYUFBSyxDQUFDMUQsVUFBTixHQUFtQixLQUFuQjtBQUNBMEQsYUFBSyxDQUFDbEQsS0FBTixHQUFjZ0QsTUFBTSxDQUFDaEQsS0FBckI7QUFDQTs7QUFDRixXQUFLYSxlQUFMO0FBQ0VxQyxhQUFLLENBQUN6RCxZQUFOLEdBQXFCLElBQXJCO0FBQ0F5RCxhQUFLLENBQUNDLFdBQU4sR0FBb0IsS0FBcEI7QUFDQUQsYUFBSyxDQUFDbEQsS0FBTixHQUFjLElBQWQ7QUFDQTs7QUFDRixXQUFLYyxlQUFMO0FBQ0VvQyxhQUFLLENBQUN6RCxZQUFOLEdBQXFCLEtBQXJCO0FBQ0F5RCxhQUFLLENBQUNDLFdBQU4sR0FBb0IsSUFBcEI7QUFDQUQsYUFBSyxDQUFDbkQsRUFBTixHQUFXLElBQVg7QUFDQTs7QUFDRixXQUFLZ0IsZUFBTDtBQUNFbUMsYUFBSyxDQUFDekQsWUFBTixHQUFxQixLQUFyQjtBQUNBeUQsYUFBSyxDQUFDQyxXQUFOLEdBQW9CLEtBQXBCO0FBQ0FELGFBQUssQ0FBQ2xELEtBQU4sR0FBY2dELE1BQU0sQ0FBQ2hELEtBQXJCO0FBQ0E7O0FBQ0YsV0FBS3dCLHVCQUFMO0FBQ0UwQixhQUFLLENBQUNyRCxjQUFOLEdBQXVCLElBQXZCO0FBQ0FxRCxhQUFLLENBQUNwRCxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FvRCxhQUFLLENBQUNsRCxLQUFOLEdBQWMsSUFBZDtBQUNBOztBQUNGLFdBQUt5Qix1QkFBTDtBQUNFeUIsYUFBSyxDQUFDckQsY0FBTixHQUF1QixLQUF2QjtBQUNBcUQsYUFBSyxDQUFDcEQsYUFBTixHQUFzQixJQUF0QjtBQUNBb0QsYUFBSyxDQUFDbkQsRUFBTixHQUFXaUQsTUFBTSxDQUFDbEIsSUFBbEI7QUFDQTs7QUFDRixXQUFLSix1QkFBTDtBQUNFd0IsYUFBSyxDQUFDckQsY0FBTixHQUF1QixLQUF2QjtBQUNBcUQsYUFBSyxDQUFDcEQsYUFBTixHQUFzQixLQUF0QjtBQUNBb0QsYUFBSyxDQUFDbEQsS0FBTixHQUFjZ0QsTUFBTSxDQUFDaEQsS0FBckI7QUFDQTs7QUFDRixXQUFLa0IsY0FBTDtBQUNFZ0MsYUFBSyxDQUFDeEQsV0FBTixHQUFvQixJQUFwQjtBQUNBd0QsYUFBSyxDQUFDdkQsVUFBTixHQUFtQixLQUFuQjtBQUNBdUQsYUFBSyxDQUFDbEQsS0FBTixHQUFjLElBQWQ7QUFDQTs7QUFDRixXQUFLbUIsY0FBTDtBQUNFK0IsYUFBSyxDQUFDeEQsV0FBTixHQUFvQixLQUFwQjtBQUNBd0QsYUFBSyxDQUFDdkQsVUFBTixHQUFtQixJQUFuQjtBQUNBdUQsYUFBSyxDQUFDbkQsRUFBTixDQUFTNkMsVUFBVCxDQUFvQlEsSUFBcEIsQ0FBeUI7QUFBRVYsWUFBRSxFQUFFTSxNQUFNLENBQUNsQjtBQUFiLFNBQXpCO0FBQ0E7O0FBQ0YsV0FBS1YsY0FBTDtBQUNFOEIsYUFBSyxDQUFDeEQsV0FBTixHQUFvQixLQUFwQjtBQUNBd0QsYUFBSyxDQUFDdkQsVUFBTixHQUFtQixLQUFuQjtBQUNBdUQsYUFBSyxDQUFDbEQsS0FBTixHQUFjZ0QsTUFBTSxDQUFDaEQsS0FBckI7QUFDQTs7QUFDRixXQUFLcUIsZ0JBQUw7QUFDRTZCLGFBQUssQ0FBQ0csYUFBTixHQUFzQixJQUF0QjtBQUNBSCxhQUFLLENBQUN2RCxVQUFOLEdBQW1CLElBQW5CO0FBQ0F1RCxhQUFLLENBQUNsRCxLQUFOLEdBQWMsSUFBZDtBQUNBOztBQUNGLFdBQUtzQixnQkFBTDtBQUNFNEIsYUFBSyxDQUFDRyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FILGFBQUssQ0FBQ3ZELFVBQU4sR0FBbUIsS0FBbkI7QUFDQXVELGFBQUssQ0FBQ25ELEVBQU4sQ0FBUzZDLFVBQVQsR0FBc0JNLEtBQUssQ0FBQ25ELEVBQU4sQ0FBUzZDLFVBQVQsQ0FBb0JVLE1BQXBCLENBQTJCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDYixFQUFGLEtBQVNNLE1BQU0sQ0FBQ2xCLElBQXZCO0FBQUEsU0FBM0IsQ0FBdEI7QUFDQTs7QUFDRixXQUFLUCxnQkFBTDtBQUNFMkIsYUFBSyxDQUFDRyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FILGFBQUssQ0FBQ3ZELFVBQU4sR0FBbUIsSUFBbkI7QUFDQXVELGFBQUssQ0FBQ2xELEtBQU4sR0FBY2dELE1BQU0sQ0FBQ2hELEtBQXJCO0FBQ0E7O0FBQ0YsV0FBSzJCLGNBQUw7QUFDRXVCLGFBQUssQ0FBQ25ELEVBQU4sQ0FBUzRDLEtBQVQsQ0FBZWEsT0FBZixDQUF1QjtBQUFFZCxZQUFFLEVBQUVNLE1BQU0sQ0FBQ2xCO0FBQWIsU0FBdkI7QUFDQTtBQUNFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNGLFdBQUtGLGlCQUFMO0FBQ0VzQixhQUFLLENBQUNuRCxFQUFOLENBQVM0QyxLQUFULEdBQWlCTyxLQUFLLENBQUNuRCxFQUFOLENBQVM0QyxLQUFULENBQWVXLE1BQWYsQ0FBc0IsVUFBQ0MsQ0FBRDtBQUFBLGlCQUFPQSxDQUFDLENBQUNiLEVBQUYsS0FBU00sTUFBTSxDQUFDbEIsSUFBdkI7QUFBQSxTQUF0QixDQUFqQjtBQUNBOztBQUVGLFdBQUtkLFVBQUw7QUFDRWtDLGFBQUssQ0FBQ2pELE9BQU4sR0FBZ0IsSUFBaEI7QUFDQTs7QUFDRixXQUFLZ0IsV0FBTDtBQUNFaUMsYUFBSyxDQUFDakQsT0FBTixHQUFnQixLQUFoQjtBQUNBOztBQUNGO0FBQ0U7QUEvR0o7QUFpSEQsR0FsSGEsQ0FBZDtBQW1IRCxDQXBIRDs7QUFzSEEsK0RBQWU2QyxPQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmQ3ODhlNzQ1OWUzZjAzOTZlMDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXNTaWduaW5nVXA6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoUg7KSRXHJcbiAgaXNTaWduZWRVcDogZmFsc2UsXHJcbiAgaXNTaWduaW5nT3V0OiBmYWxzZSwgLy8g7ZqM7JuQIO2DiO2HtOykkVxyXG4gIGlzTG9nZ2luZ0luOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhCDspJFcclxuICBpc0xvZ2dlZEluOiBmYWxzZSxcclxuICBpc0xvZ2dpbmdPdXQ6IGZhbHNlLCAvLyDroZzqt7jslYTsm4Mg7Iuc64+EIOykkVxyXG4gIGlzRm9sbG93aW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gIGlzRm9sbG93ZWQ6IGZhbHNlLFxyXG4gIGlzVW5mb2xsb3dpbmc6IGZhbHNlLCAvLyDslrjtjJQg7Iuc64+E7KSRXHJcbiAgaXNOaWNrQ2hhbmdpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhCDspJFcclxuICBpc05pY2tDaGFuZ2VkOiBmYWxzZSxcclxuICBtZTogbnVsbCxcclxuICBlcnJvcjogbnVsbCxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1JFUVVFU1QgPSAnU0lHTl9PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9TVUNDRVNTID0gJ1NJR05fT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfRkFJTFVSRSA9ICdTSUdOX09VVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFZJU0lCTEVfT04gPSAnVklTSUJMRV9PTic7XHJcbmV4cG9ydCBjb25zdCBWSVNJQkxFX09GRiA9ICdWSVNJQkxFX09GRic7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2lnblVwUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBTSUdOX1VQX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBzaWduT3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBTSUdOX09VVF9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgbG9naW5SZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IExPR19JTl9SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgbG9nb3V0UmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCB2aXNpYmxlT24gPSAoZGF0YSkgPT4gKHsgdHlwZTogVklTSUJMRV9PTiwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IHZpc2libGVPZmYgPSAoZGF0YSkgPT4gKHsgdHlwZTogVklTSUJMRV9PRkYsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBmb2xsb3dSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IEZPTExPV19SRVFVRVNULCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgdW5Gb2xsb3dSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VOaWNrbmFtZVJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGRhdGEgfSk7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAuLi5kYXRhLFxyXG4gIG5pY2tuYW1lOiAnSG9IbycsXHJcbiAgaWQ6IDEsXHJcbiAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gIEZvbGxvd2luZ3M6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIMSd9LCB7IG5pY2tuYW1lOiAn67aA6riw7LSIMid9LCB7IG5pY2tuYW1lOiAn67aA6riw7LSIMyd9XSxcclxuICBGb2xsb3dlcnM6IFt7IG5pY2tuYW1lOiAn67aA6riw7LSIMSd9LCB7IG5pY2tuYW1lOiAn67aA6riw7LSIMid9LCB7IG5pY2tuYW1lOiAn67aA6riw7LSIMyd9XSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc1NpZ25lZFVwID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNTaWduZWRVcCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ0luID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGR1bW15VXNlcihhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRPdXQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0ID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2luZ091dCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNOaWNrQ2hhbmdpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzTmlja0NoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNOaWNrQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc05pY2tDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmlzTmlja0NoYW5naW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNOaWNrQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93aW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc1VuRm9sbG93aW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc1VuRm9sbG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNVbkZvbGxvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgICAgLy8gICBtZToge1xyXG4gICAgICAgIC8vICAgICAuLi5zdGF0ZS5tZSxcclxuICAgICAgICAvLyAgICAgUG9zdHM6IFt7IGlkOiBhY3Rpb24uZGF0YSB9LCAuLi5zdGF0ZS5tZS5Qb3N0c10sXHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMgPSBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgY2FzZSBWSVNJQkxFX09OOlxyXG4gICAgICAgIGRyYWZ0LnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFZJU0lCTEVfT0ZGOlxyXG4gICAgICAgIGRyYWZ0LnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=