self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ userSaga; }
/* harmony export */ });
/* harmony import */ var C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux-saga/core/effects */ "./node_modules/@redux-saga/core/dist/redux-saga-effects.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _marked = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(logIn),
    _marked2 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(logOut),
    _marked3 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(signUp),
    _marked4 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(changeNick),
    _marked5 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(follow),
    _marked6 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(unFollow),
    _marked7 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLogIn),
    _marked8 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchLogOut),
    _marked9 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchSignUp),
    _marked10 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchNick),
    _marked11 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchFollow),
    _marked12 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(watchUnFollow),
    _marked13 = /*#__PURE__*/C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(userSaga);



 // saga는 테스트 시 log확인이 유용하다.

function logInAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/login', data);
}

function logIn(action) {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function logIn$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);

        case 3:
          _context.next = 5;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            // dispatch
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_SUCCESS,
            data: action.data
          });

        case 5:
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          _context.next = 11;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_FAILURE,
            error: _context.t0.response.data
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 7]]);
}

function logOutAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/logout');
}

function logOut() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function logOut$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);

        case 3:
          _context2.next = 5;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_SUCCESS // data: result.data

          });

        case 5:
          _context2.next = 11;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 11;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_FAILURE,
            error: _context2.t0.response.data
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 7]]);
}

function signUpAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/signUp');
}

function signUp() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function signUp$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);

        case 3:
          _context3.next = 5;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_SUCCESS // data: result.data

          });

        case 5:
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 11;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_FAILURE,
            error: _context3.t0.response.data
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 7]]);
}

function changeNickAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/signUp');
}

function changeNick() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function changeNick$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);

        case 3:
          _context4.next = 5;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.CHANGE_NICKNAME_SUCCESS // data: result.data

          });

        case 5:
          _context4.next = 11;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 11;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.CHANGE_NICKNAME_FAILURE,
            error: _context4.t0.response.data
          });

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 7]]);
}

function followAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/signUp');
}

function follow(action) {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function follow$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);

        case 3:
          _context5.next = 5;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.FOLLOW_SUCCESS,
            data: action.data
          });

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 11;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.FOLLOW_FAILURE,
            error: _context5.t0.response.data
          });

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

function unFollowAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/signUp');
}

function unFollow(action) {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function unFollow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.delay)(1000);

        case 3:
          _context6.next = 5;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_SUCCESS,
            data: action.data
          });

        case 5:
          _context6.next = 11;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 11;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.put)({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__.UNFOLLOW_FAILURE,
            error: _context6.t0.response.data
          });

        case 11:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 7]]);
}

function watchLogIn() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLogIn$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_IN_REQUEST, logIn);

        case 2:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7);
}

function watchLogOut() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchLogOut$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.LOG_OUT_REQUEST, logOut);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

function watchSignUp() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchSignUp$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.SIGN_UP_REQUEST, signUp);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

function watchNick() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchNick$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(_reducers_user__WEBPACK_IMPORTED_MODULE_3__.CHANGE_NICKNAME_REQUEST, changeNick);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

function watchFollow() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchFollow$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(FOLLOW_REQUEST, follow);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

function watchUnFollow() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function watchUnFollow$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.takeLatest)(UNFOLLOW_REQUEST, unFollow);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

function userSaga() {
  return C_Users_Lenovo_Desktop_gitMgmt_nomad_react_redux_react_full_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function userSaga$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogIn), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogOut), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchSignUp), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchNick), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchUnFollow), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchFollow)]);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
} // takeEvery보다는 takeLatest를 적용해야 만약에 여러번 호출되었을 시 마지막 요청만 한 번 처리된다.
// 동시 로딩 중인 상황에서 마지막으로 들어온 것만 남기고 로딩 중인 job을 제거한다

/**
    그런데 서버에 보내는 요청을 제어하지는 못한다.
 * 연속 두번으로 보내는 경우 두번 다 백엔드 서버에서 처리 후 2번 응답을 하는데
 * 프론트 서버가 들어온 응답중 마지막 응답만 처리를 하겠다는 의미이다.
 * 그래서 요청을 제어하는 throttle도 있다.
 * throttle("LOG_IN", logIn, 2000)
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImNoYW5nZU5pY2siLCJmb2xsb3ciLCJ1bkZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hOaWNrIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93IiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiY2hhbmdlTmlja0FQSSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJmb2xsb3dBUEkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5Gb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrTUFvQlVBLEs7bU1BbUJBQyxNO21NQW1CQUMsTTttTUFtQkFDLFU7bU1Ba0JBQyxNO21NQW1CQUMsUTttTUFlQUMsVTttTUFHQUMsVzttTUFHQUMsVztvTUFHQUMsUztvTUFHQUMsVztvTUFHQUMsYTtvTUFHZUMsUTs7QUFuSnpCO0FBQ0E7Q0FlQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUF3QjtBQUN0QixTQUFPQyxpREFBQSxDQUFXLFlBQVgsRUFBeUJELElBQXpCLENBQVA7QUFDRDs7QUFDRCxTQUFVZCxLQUFWLENBQWdCZ0IsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSSxpQkFBTUMsK0RBQUssQ0FBQyxJQUFELENBQVg7O0FBRko7QUFBQTtBQUlJLGlCQUFNQyw2REFBRyxDQUFDO0FBQUU7QUFDVkMsZ0JBQUksRUFBRUMsMERBREU7QUFFUk4sZ0JBQUksRUFBRUUsTUFBTSxDQUFDRjtBQUZMLFdBQUQsQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSSxpQkFBTUksNkRBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFRSwwREFERTtBQUVSQyxpQkFBSyxFQUFFLFlBQU1DLFFBQU4sQ0FBZVQ7QUFGZCxXQUFELENBQVQ7O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBU1UsU0FBVCxHQUFxQjtBQUNuQixTQUFPVCxpREFBQSxDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVVkLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTWdCLCtEQUFLLENBQUMsSUFBRCxDQUFYOztBQUhKO0FBQUE7QUFJSSxpQkFBTUMsNkRBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFTSwyREFERSxDQUVSOztBQUZRLFdBQUQsQ0FBVDs7QUFKSjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTSSxpQkFBTVAsNkRBQUcsQ0FBQztBQUNSQyxnQkFBSSxFQUFFTywyREFERTtBQUVSSixpQkFBSyxFQUFFLGFBQU1DLFFBQU4sQ0FBZVQ7QUFGZCxXQUFELENBQVQ7O0FBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBZUEsU0FBU2EsU0FBVCxHQUFxQjtBQUNuQixTQUFPWixpREFBQSxDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVViLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTWUsK0RBQUssQ0FBQyxJQUFELENBQVg7O0FBSEo7QUFBQTtBQUlJLGlCQUFNQyw2REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVTLDJEQURFLENBRVI7O0FBRlEsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNViw2REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVVLDJEQURFO0FBRVJQLGlCQUFLLEVBQUUsYUFBTUMsUUFBTixDQUFlVDtBQUZkLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFTZ0IsYUFBVCxHQUF5QjtBQUN2QixTQUFPZixpREFBQSxDQUFXLGFBQVgsQ0FBUDtBQUNEOztBQUVELFNBQVVaLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSSxpQkFBTWMsK0RBQUssQ0FBQyxJQUFELENBQVg7O0FBSEo7QUFBQTtBQUlJLGlCQUFNQyw2REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVZLG1FQURFLENBRVI7O0FBRlEsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNYiw2REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVhLG1FQURFO0FBRVJWLGlCQUFLLEVBQUUsYUFBTUMsUUFBTixDQUFlVDtBQUZkLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFTbUIsU0FBVCxHQUFxQjtBQUNuQixTQUFPbEIsaURBQUEsQ0FBVyxhQUFYLENBQVA7QUFDRDs7QUFDRCxTQUFVWCxNQUFWLENBQWlCWSxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNQywrREFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUFBO0FBSUksaUJBQU1DLDZEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRWUsMERBREU7QUFFUnBCLGdCQUFJLEVBQUVFLE1BQU0sQ0FBQ0Y7QUFGTCxXQUFELENBQVQ7O0FBSko7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0ksaUJBQU1JLDZEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRWdCLDBEQURFO0FBRVJiLGlCQUFLLEVBQUUsYUFBTUMsUUFBTixDQUFlVDtBQUZkLFdBQUQsQ0FBVDs7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFlQSxTQUFTc0IsV0FBVCxHQUF1QjtBQUNyQixTQUFPckIsaURBQUEsQ0FBVyxhQUFYLENBQVA7QUFDRDs7QUFFRCxTQUFVVixRQUFWLENBQW1CVyxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdJLGlCQUFNQywrREFBSyxDQUFDLElBQUQsQ0FBWDs7QUFISjtBQUFBO0FBSUksaUJBQU1DLDZEQUFHLENBQUM7QUFDUkMsZ0JBQUksRUFBRWtCLDREQURFO0FBRVJ2QixnQkFBSSxFQUFFRSxNQUFNLENBQUNGO0FBRkwsV0FBRCxDQUFUOztBQUpKO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNJLGlCQUFNSSw2REFBRyxDQUFDO0FBQ1JDLGdCQUFJLEVBQUVtQiw0REFERTtBQUVSaEIsaUJBQUssRUFBRSxhQUFNQyxRQUFOLENBQWVUO0FBRmQsV0FBRCxDQUFUOztBQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVBLFNBQVVSLFVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1pQyxvRUFBVSxDQUFDQywwREFBRCxFQUFpQnhDLEtBQWpCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLFNBQVVPLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU1nQyxvRUFBVSxDQUFDRSwyREFBRCxFQUFrQnhDLE1BQWxCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLFNBQVVPLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU0rQixvRUFBVSxDQUFDRywyREFBRCxFQUFrQnhDLE1BQWxCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLFNBQVVPLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU04QixvRUFBVSxDQUFDSSxtRUFBRCxFQUEwQnhDLFVBQTFCLENBQWhCOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdBLFNBQVVPLFdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0UsaUJBQU02QixvRUFBVSxDQUFDSyxjQUFELEVBQWlCeEMsTUFBakIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0EsU0FBVU8sYUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRSxpQkFBTTRCLG9FQUFVLENBQUNNLGdCQUFELEVBQW1CeEMsUUFBbkIsQ0FBaEI7O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR2UsU0FBVU8sUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYixpQkFBTWtDLDZEQUFHLENBQUMsQ0FDUkMsOERBQUksQ0FBQ3pDLFVBQUQsQ0FESSxFQUVSeUMsOERBQUksQ0FBQ3hDLFdBQUQsQ0FGSSxFQUdSd0MsOERBQUksQ0FBQ3ZDLFdBQUQsQ0FISSxFQUlSdUMsOERBQUksQ0FBQ3RDLFNBQUQsQ0FKSSxFQUtSc0MsOERBQUksQ0FBQ3BDLGFBQUQsQ0FMSSxFQU1Sb0MsOERBQUksQ0FBQ3JDLFdBQUQsQ0FOSSxDQUFELENBQVQ7O0FBRGE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyxDQVVmO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mYjYxMTlkZTJiYTEyMWVkNmRmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0IH0gZnJvbSAnQHJlZHV4LXNhZ2EvY29yZS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgXHJcbiAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsIFxyXG4gIENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBcclxuICBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUywgXHJcbiAgRk9MTE9XX0ZBSUxVUkUsIFxyXG4gIEZPTExPV19TVUNDRVNTLCBcclxuICBMT0dfSU5fRkFJTFVSRSwgXHJcbiAgTE9HX0lOX1JFUVVFU1QsIFxyXG4gIExPR19JTl9TVUNDRVNTLCBcclxuICBMT0dfT1VUX0ZBSUxVUkUsIFxyXG4gIExPR19PVVRfUkVRVUVTVCwgXHJcbiAgTE9HX09VVF9TVUNDRVNTLCBcclxuICBTSUdOX1VQX0ZBSUxVUkUsIFNJR05fVVBfUkVRVUVTVCwgU0lHTl9VUF9TVUNDRVNTLCBVTkZPTExPV19GQUlMVVJFLCBVTkZPTExPV19TVUNDRVNTIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyBzYWdh64qUIO2FjOyKpO2KuCDsi5wgbG9n7ZmV7J247J20IOycoOyaqe2VmOuLpC5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhLCkgLy8gY2FsbOydgCDruYTrj5nquLDsspjrpqwsIGZvcmvripQg64+Z6riw7LKY66asXHJcbiAgICB5aWVsZCBwdXQoeyAvLyBkaXNwYXRjaFxyXG4gICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ091dCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpIC8vIGNhbGzsnYAg67mE64+Z6riw7LKY66asLCBmb3Jr64qUIOuPmeq4sOyymOumrFxyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvc2lnblVwJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzaWduVXAoKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyBjYWxs7J2AIOu5hOuPmeq4sOyymOumrCwgZm9ya+uKlCDrj5nquLDsspjrpqxcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAvLyBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlTmlja0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2soKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyBjYWxs7J2AIOu5hOuPmeq4sOyymOumrCwgZm9ya+uKlCDrj5nquLDsspjrpqxcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKTtcclxufVxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8gY2FsbOydgCDruYTrj5nquLDsspjrpqwsIGZvcmvripQg64+Z6riw7LKY66asXHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB1bkZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVuRm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8gY2FsbOydgCDruYTrj5nquLDsspjrpqwsIGZvcmvripQg64+Z6riw7LKY66asXHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoU2lnblVwKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaE5pY2soKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChDSEFOR0VfTklDS05BTUVfUkVRVUVTVCwgY2hhbmdlTmljayk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5Gb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChVTkZPTExPV19SRVFVRVNULCB1bkZvbGxvdyk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbXHJcbiAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgZm9yayh3YXRjaExvZ091dCksXHJcbiAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgIGZvcmsod2F0Y2hOaWNrKSxcclxuICAgIGZvcmsod2F0Y2hVbkZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICBdKTtcclxufVxyXG4vLyB0YWtlRXZlcnnrs7Tri6TripQgdGFrZUxhdGVzdOulvCDsoIHsmqntlbTslbwg66eM7JW97JeQIOyXrOufrOuyiCDtmLjstpzrkJjsl4jsnYQg7IucIOuniOyngOuniSDsmpTssq3rp4wg7ZWcIOuyiCDsspjrpqzrkJzri6QuXHJcbi8vIOuPmeyLnCDroZzrlKkg7KSR7J24IOyDge2ZqeyXkOyEnCDrp4jsp4Drp4nsnLzroZwg65Ok7Ja07JioIOqyg+unjCDrgqjquLDqs6Ag66Gc65SpIOykkeyduCBqb2LsnYQg7KCc6rGw7ZWc64ukXHJcbi8qKlxyXG4gICAg6re465+w642wIOyEnOuyhOyXkCDrs7TrgrTripQg7JqU7LKt7J2EIOygnOyWtO2VmOyngOuKlCDrqrvtlZzri6QuXHJcbiAqIOyXsOyGjSDrkZDrsojsnLzroZwg67O064K064qUIOqyveyasCDrkZDrsogg64ukIOuwseyXlOuTnCDshJzrsoTsl5DshJwg7LKY66asIO2bhCAy67KIIOydkeuLteydhCDtlZjripTrjbBcclxuICog7ZSE66Gg7Yq4IOyEnOuyhOqwgCDrk6TslrTsmKgg7J2R64u17KSRIOuniOyngOuniSDsnZHri7Xrp4wg7LKY66as66W8IO2VmOqyoOuLpOuKlCDsnZjrr7jsnbTri6QuXHJcbiAqIOq3uOuemOyEnCDsmpTssq3snYQg7KCc7Ja07ZWY64qUIHRocm90dGxl64+EIOyeiOuLpC5cclxuICogdGhyb3R0bGUoXCJMT0dfSU5cIiwgbG9nSW4sIDIwMDApXHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=