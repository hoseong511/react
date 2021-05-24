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
            type: UNFOLLOW_SUCCESS,
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
            type: UNFOLLOW_FAILURE,
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
          return (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogIn), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchLogOut), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchSignUp), (0,_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(watchNick)]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvdXNlci5qcyJdLCJuYW1lcyI6WyJsb2dJbiIsImxvZ091dCIsInNpZ25VcCIsImNoYW5nZU5pY2siLCJmb2xsb3ciLCJ1bkZvbGxvdyIsIndhdGNoTG9nSW4iLCJ3YXRjaExvZ091dCIsIndhdGNoU2lnblVwIiwid2F0Y2hOaWNrIiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFVuRm9sbG93IiwidXNlclNhZ2EiLCJsb2dJbkFQSSIsImRhdGEiLCJheGlvcyIsImFjdGlvbiIsImRlbGF5IiwicHV0IiwidHlwZSIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJlcnJvciIsInJlc3BvbnNlIiwibG9nT3V0QVBJIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwic2lnblVwQVBJIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiY2hhbmdlTmlja0FQSSIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJmb2xsb3dBUEkiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwidW5Gb2xsb3dBUEkiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsInRha2VMYXRlc3QiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19PVVRfUkVRVUVTVCIsIlNJR05fVVBfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUIiwiRk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19SRVFVRVNUIiwiYWxsIiwiZm9yayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrTUFRVUEsSzttTUFtQkFDLE07bU1BbUJBQyxNO21NQW1CQUMsVTttTUFrQkFDLE07bU1BbUJBQyxRO21NQWVBQyxVO21NQUdBQyxXO21NQUdBQyxXO29NQUdBQyxTO29NQUdBQyxXO29NQUdBQyxhO29NQUdlQyxROztBQXZJekI7QUFD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LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSwgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLCBGT0xMT1dfRkFJTFVSRSwgRk9MTE9XX1NVQ0NFU1MsIExPR19JTl9GQUlMVVJFLCBMT0dfSU5fUkVRVUVTVCwgTE9HX0lOX1NVQ0NFU1MsIExPR19PVVRfRkFJTFVSRSwgTE9HX09VVF9SRVFVRVNULCBMT0dfT1VUX1NVQ0NFU1MsIFNJR05fVVBfRkFJTFVSRSwgU0lHTl9VUF9SRVFVRVNULCBTSUdOX1VQX1NVQ0NFU1MgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIHNhZ2HripQg7YWM7Iqk7Yq4IOyLnCBsb2ftmZXsnbjsnbQg7Jyg7Jqp7ZWY64ukLlxyXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKTtcclxufVxyXG5mdW5jdGlvbiogbG9nSW4oYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEsKSAvLyBjYWxs7J2AIOu5hOuPmeq4sOyymOumrCwgZm9ya+uKlCDrj5nquLDsspjrpqxcclxuICAgIHlpZWxkIHB1dCh7IC8vIGRpc3BhdGNoXHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSkgLy8gY2FsbOydgCDruYTrj5nquLDsspjrpqwsIGZvcmvripQg64+Z6riw7LKY66asXHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHNpZ25VcEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9zaWduVXAnKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpIC8vIGNhbGzsnYAg67mE64+Z6riw7LKY66asLCBmb3Jr64qUIOuPmeq4sOyymOumrFxyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICAgIC8vIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrQVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogY2hhbmdlTmljaygpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpIC8vIGNhbGzsnYAg67mE64+Z6riw7LKY66asLCBmb3Jr64qUIOuPmeq4sOyymOumrFxyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyxcclxuICAgICAgLy8gZGF0YTogcmVzdWx0LmRhdGFcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpO1xyXG59XHJcbmZ1bmN0aW9uKiBmb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyBjYWxs7J2AIOu5hOuPmeq4sOyymOumrCwgZm9ya+uKlCDrj5nquLDsspjrpqxcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHVuRm9sbG93QVBJKCkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3NpZ25VcCcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdW5Gb2xsb3coYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKSAvLyBjYWxs7J2AIOu5hOuPmeq4sOyymOumrCwgZm9ya+uKlCDrj5nquLDsspjrpqxcclxuICAgIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogVU5GT0xMT1dfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ091dCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExPR19PVVRfUkVRVUVTVCwgbG9nT3V0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTSUdOX1VQX1JFUVVFU1QsIHNpZ25VcCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTmljaygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KENIQU5HRV9OSUNLTkFNRV9SRVFVRVNULCBjaGFuZ2VOaWNrKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGT0xMT1dfUkVRVUVTVCwgZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hVbkZvbGxvdygpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuRm9sbG93KTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2dJbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaE5pY2spLFxyXG4gICAgXHJcbiAgXSk7XHJcbn1cclxuLy8gdGFrZUV2ZXJ567O064uk64qUIHRha2VMYXRlc3Trpbwg7KCB7Jqp7ZW07JW8IOunjOyVveyXkCDsl6zrn6zrsogg7Zi47Lac65CY7JeI7J2EIOyLnCDrp4jsp4Drp4kg7JqU7LKt66eMIO2VnCDrsogg7LKY66as65Cc64ukLlxyXG4vLyDrj5nsi5wg66Gc65SpIOykkeyduCDsg4Htmansl5DshJwg66eI7KeA66eJ7Jy866GcIOuTpOyWtOyYqCDqsoPrp4wg64Ko6riw6rOgIOuhnOuUqSDspJHsnbggam9i7J2EIOygnOqxsO2VnOuLpFxyXG4vKipcclxuICAgIOq3uOufsOuNsCDshJzrsoTsl5Ag67O064K064qUIOyalOyyreydhCDsoJzslrTtlZjsp4DripQg66q77ZWc64ukLlxyXG4gKiDsl7Dsho0g65GQ67KI7Jy866GcIOuztOuCtOuKlCDqsr3smrAg65GQ67KIIOuLpCDrsLHsl5Trk5wg7ISc67KE7JeQ7IScIOyymOumrCDtm4QgMuuyiCDsnZHri7XsnYQg7ZWY64qU642wXHJcbiAqIO2UhOuhoO2KuCDshJzrsoTqsIAg65Ok7Ja07JioIOydkeuLteykkSDrp4jsp4Drp4kg7J2R64u166eMIOyymOumrOulvCDtlZjqsqDri6TripQg7J2Y66+47J2064ukLlxyXG4gKiDqt7jrnpjshJwg7JqU7LKt7J2EIOygnOyWtO2VmOuKlCB0aHJvdHRsZeuPhCDsnojri6QuXHJcbiAqIHRocm90dGxlKFwiTE9HX0lOXCIsIGxvZ0luLCAyMDAwKVxyXG4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9