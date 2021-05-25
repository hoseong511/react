self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJpc1NpZ25pbmdVcCIsImlzU2lnbmVkVXAiLCJpc1NpZ25pbmdPdXQiLCJpc0xvZ2dpbmdJbiIsImlzTG9nZ2VkSW4iLCJpc0xvZ2dpbmdPdXQiLCJpc0ZvbGxvd2luZyIsImlzRm9sbG93ZWQiLCJpc1VuZm9sbG93aW5nIiwiaXNOaWNrQ2hhbmdpbmciLCJpc05pY2tDaGFuZ2VkIiwibWUiLCJlcnJvciIsInZpc2libGUiLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiU0lHTl9PVVRfUkVRVUVTVCIsIlNJR05fT1VUX1NVQ0NFU1MiLCJTSUdOX09VVF9GQUlMVVJFIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiVklTSUJMRV9PTiIsIlZJU0lCTEVfT0ZGIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsInNpZ25VcFJlcXVlc3RBY3Rpb24iLCJkYXRhIiwidHlwZSIsInNpZ25PdXRSZXF1ZXN0QWN0aW9uIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInZpc2libGVPbiIsInZpc2libGVPZmYiLCJmb2xsb3dSZXF1ZXN0QWN0aW9uIiwidW5Gb2xsb3dSZXF1ZXN0QWN0aW9uIiwiY2hhbmdlTmlja25hbWVSZXF1ZXN0QWN0aW9uIiwiZHVtbXlVc2VyIiwibmlja25hbWUiLCJpZCIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsImlzTG9nZ2VkT3V0IiwicHVzaCIsImlzVW5Gb2xsb3dpbmciLCJmaWx0ZXIiLCJ2IiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFlBQVksR0FBRztBQUMxQkMsYUFBVyxFQUFFLEtBRGE7QUFDTjtBQUNwQkMsWUFBVSxFQUFFLEtBRmM7QUFHMUJDLGNBQVksRUFBRSxLQUhZO0FBR0w7QUFDckJDLGFBQVcsRUFBRSxLQUphO0FBSU47QUFDcEJDLFlBQVUsRUFBRSxLQUxjO0FBTTFCQyxjQUFZLEVBQUUsS0FOWTtBQU1MO0FBQ3JCQyxhQUFXLEVBQUUsS0FQYTtBQU9OO0FBQ3BCQyxZQUFVLEVBQUUsS0FSYztBQVMxQkMsZUFBYSxFQUFFLEtBVFc7QUFTSjtBQUN0QkMsZ0JBQWMsRUFBRSxLQVZVO0FBVUg7QUFDdkJDLGVBQWEsRUFBRSxLQVhXO0FBWTFCQyxJQUFFLEVBQUUsSUFac0I7QUFhMUJDLE9BQUssRUFBRSxJQWJtQjtBQWMxQkMsU0FBTyxFQUFFLEtBZGlCO0FBZTFCQyxZQUFVLEVBQUUsRUFmYztBQWdCMUJDLFdBQVMsRUFBRTtBQWhCZSxDQUFyQjtBQW1CQSxJQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLGlCQUF4QjtBQUNBLElBQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFD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LFVBQU4sR0FBbUIsS0FBbkI7QUFDQXVELGFBQUssQ0FBQ25ELEVBQU4sQ0FBUzZDLFVBQVQsR0FBc0JNLEtBQUssQ0FBQ25ELEVBQU4sQ0FBUzZDLFVBQVQsQ0FBb0JVLE1BQXBCLENBQTJCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDYixFQUFGLEtBQVNNLE1BQU0sQ0FBQ2xCLElBQXZCO0FBQUEsU0FBM0IsQ0FBdEI7QUFDQTs7QUFDRixXQUFLUCxnQkFBTDtBQUNFMkIsYUFBSyxDQUFDRyxhQUFOLEdBQXNCLEtBQXRCO0FBQ0FILGFBQUssQ0FBQ3ZELFVBQU4sR0FBbUIsSUFBbkI7QUFDQXVELGFBQUssQ0FBQ2xELEtBQU4sR0FBY2dELE1BQU0sQ0FBQ2hELEtBQXJCO0FBQ0E7O0FBQ0YsV0FBSzJCLGNBQUw7QUFDRXVCLGFBQUssQ0FBQ25ELEVBQU4sQ0FBUzRDLEtBQVQsQ0FBZWEsT0FBZixDQUF1QjtBQUFFZCxZQUFFLEVBQUVNLE1BQU0sQ0FBQ2xCO0FBQWIsU0FBdkI7QUFDQTs7QUFDRixXQUFLRixpQkFBTDtBQUNFc0IsYUFBSyxDQUFDbkQsRUFBTixDQUFTNEMsS0FBVCxHQUFpQk8sS0FBSyxDQUFDbkQsRUFBTixDQUFTNEMsS0FBVCxDQUFlVyxNQUFmLENBQXNCLFVBQUNDLENBQUQ7QUFBQSxpQkFBT0EsQ0FBQyxDQUFDYixFQUFGLEtBQVNNLE1BQU0sQ0FBQ2xCLElBQXZCO0FBQUEsU0FBdEIsQ0FBakI7QUFDQTs7QUFDRixXQUFLZCxVQUFMO0FBQ0VrQyxhQUFLLENBQUNqRCxPQUFOLEdBQWdCLElBQWhCO0FBQ0E7O0FBQ0YsV0FBS2dCLFdBQUw7QUFDRWlDLGFBQUssQ0FBQ2pELE9BQU4sR0FBZ0IsS0FBaEI7QUFDQTs7QUFDRjtBQUNFO0FBdkdKO0FBeUdELEdBMUdhLENBQWQ7QUEyR0QsQ0E1R0Q7O0FBOEdBLCtEQUFlNkMsT0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YzcxMWU5NDQyNGNkNjY5MmFmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc1NpZ25pbmdVcDogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDspJFcclxuICBpc1NpZ25lZFVwOiBmYWxzZSxcclxuICBpc1NpZ25pbmdPdXQ6IGZhbHNlLCAvLyDtmozsm5Ag7YOI7Ye07KSRXHJcbiAgaXNMb2dnaW5nSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+EIOykkVxyXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxyXG4gIGlzTG9nZ2luZ091dDogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4Qg7KSRXHJcbiAgaXNGb2xsb3dpbmc6IGZhbHNlLCAvLyDtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgaXNGb2xsb3dlZDogZmFsc2UsXHJcbiAgaXNVbmZvbGxvd2luZzogZmFsc2UsIC8vIOyWuO2MlCDsi5zrj4TspJFcclxuICBpc05pY2tDaGFuZ2luZzogZmFsc2UsIC8vIOuLieuEpOyehCDrs4Dqsr0g7Iuc64+EIOykkVxyXG4gIGlzTmlja0NoYW5nZWQ6IGZhbHNlLFxyXG4gIG1lOiBudWxsLFxyXG4gIGVycm9yOiBudWxsLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIHNpZ25VcERhdGE6IHt9LFxyXG4gIGxvZ2luRGF0YToge30sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9PVVRfUkVRVUVTVCA9ICdTSUdOX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUX1NVQ0NFU1MgPSAnU0lHTl9PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVF9GQUlMVVJFID0gJ1NJR05fT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgVklTSUJMRV9PTiA9ICdWSVNJQkxFX09OJztcclxuZXhwb3J0IGNvbnN0IFZJU0lCTEVfT0ZGID0gJ1ZJU0lCTEVfT0ZGJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9SRVFVRVNUID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTID0gJ0NIQU5HRV9OSUNLTkFNRV9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gJ0NIQU5HRV9OSUNLTkFNRV9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBzaWduVXBSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IFNJR05fVVBfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IHNpZ25PdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IFNJR05fT1VUX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogTE9HX0lOX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKGRhdGEpID0+ICh7IHR5cGU6IExPR19PVVRfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IHZpc2libGVPbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBWSVNJQkxFX09OLCBkYXRhIH0pO1xyXG5leHBvcnQgY29uc3QgdmlzaWJsZU9mZiA9IChkYXRhKSA9PiAoeyB0eXBlOiBWSVNJQkxFX09GRiwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogRk9MTE9XX1JFUVVFU1QsIGRhdGEgfSk7XHJcbmV4cG9ydCBjb25zdCB1bkZvbGxvd1JlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4gKHsgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCwgZGF0YSB9KTtcclxuZXhwb3J0IGNvbnN0IGNoYW5nZU5pY2tuYW1lUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiAoeyB0eXBlOiBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgZGF0YSB9KTtcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gIC4uLmRhdGEsXHJcbiAgbmlja25hbWU6ICdIb0hvJyxcclxuICBpZDogMSxcclxuICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgRm9sbG93aW5nczogW3sgbmlja25hbWU6ICfrtoDquLDstIgxJ30sIHsgbmlja25hbWU6ICfrtoDquLDstIgyJ30sIHsgbmlja25hbWU6ICfrtoDquLDstIgzJ31dLFxyXG4gIEZvbGxvd2VyczogW3sgbmlja25hbWU6ICfrtoDquLDstIgxJ30sIHsgbmlja25hbWU6ICfrtoDquLDstIgyJ30sIHsgbmlja25hbWU6ICfrtoDquLDstIgzJ31dLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzU2lnbmluZ1VwID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNJR05fVVBfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc1NpZ25pbmdVcCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzU2lnbmVkVXAgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNTaWduaW5nVXAgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc1NpZ25lZFVwID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gZHVtbXlVc2VyKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc0xvZ2dpbmdJbiA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5pc0xvZ2dlZE91dCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRPdXQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnaW5nT3V0ID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNMb2dnZWRPdXQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5pc05pY2tDaGFuZ2luZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuaXNOaWNrQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5pc05pY2tDaGFuZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzTmlja0NoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuaXNOaWNrQ2hhbmdpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc05pY2tDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93ZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2VkID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSlcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2luZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93ZWQgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5lcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmlzVW5Gb2xsb3dpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmlzRm9sbG93ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmlzVW5Gb2xsb3dpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5pc0ZvbGxvd2VkID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5pc1VuRm9sbG93aW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuaXNGb2xsb3dlZCA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFZJU0lCTEVfT046XHJcbiAgICAgICAgZHJhZnQudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVklTSUJMRV9PRkY6XHJcbiAgICAgICAgZHJhZnQudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==