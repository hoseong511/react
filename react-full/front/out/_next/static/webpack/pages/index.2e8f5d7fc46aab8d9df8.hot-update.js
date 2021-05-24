self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\gitMgmt\\nomad\\react-redux\\react-full\\front\\components\\FollowButton.js",
    _this = undefined,
    _s = $RefreshSig$();







var FollowButton = function FollowButton(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      isFollowing = _useSelector.isFollowing,
      isUnFollowing = _useSelector.isUnFollowing;

  var isFollow = me === null || me === void 0 ? void 0 : me.Followings.find(function (v) {
    return v.id === post.User.id;
  });
  var onFollow = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    if (isFollow) {
      dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__.unFollowRequestAction)({
        data: post.User.id
      }));
    } else {
      dispatch((0,_reducers_user__WEBPACK_IMPORTED_MODULE_4__.followRequestAction)({
        data: post.User.id
      }));
    }
  }, [isFollow]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_5__.Button, {
    loading: isFollowing || isUnFollowing,
    onClick: onFollow,
    children: isFollow ? '언팔로우' : '팔로우'
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(FollowButton, "TU8CSyKp1J1cHhsZHgmb7OJKnyQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector];
});

_c = FollowButton;
FollowButton.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
    User: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowButton);

var _c;

$RefreshReg$(_c, "FollowButton");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dCdXR0b24uanMiXSwibmFtZXMiOlsiRm9sbG93QnV0dG9uIiwicG9zdCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaXNGb2xsb3dpbmciLCJpc1VuRm9sbG93aW5nIiwiaXNGb2xsb3ciLCJGb2xsb3dpbmdzIiwiZmluZCIsInYiLCJpZCIsIlVzZXIiLCJvbkZvbGxvdyIsInVzZUNhbGxiYWNrIiwidW5Gb2xsb3dSZXF1ZXN0QWN0aW9uIiwiZGF0YSIsImZvbGxvd1JlcXVlc3RBY3Rpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUNqQyxNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURpQyxxQkFFVUMsd0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGckI7QUFBQSxNQUV6QkMsRUFGeUIsZ0JBRXpCQSxFQUZ5QjtBQUFBLE1BRXJCQyxXQUZxQixnQkFFckJBLFdBRnFCO0FBQUEsTUFFUkMsYUFGUSxnQkFFUkEsYUFGUTs7QUFHakMsTUFBTUMsUUFBUSxHQUFHSCxFQUFILGFBQUdBLEVBQUgsdUJBQUdBLEVBQUUsQ0FBRUksVUFBSixDQUFlQyxJQUFmLENBQW9CLFVBQUNDLENBQUQ7QUFBQSxXQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU2IsSUFBSSxDQUFDYyxJQUFMLENBQVVELEVBQTFCO0FBQUEsR0FBcEIsQ0FBakI7QUFDQSxNQUFNRSxRQUFRLEdBQUdDLGtEQUFXLENBQUMsWUFBTTtBQUNqQyxRQUFJUCxRQUFKLEVBQWM7QUFDWlIsY0FBUSxDQUFDZ0IscUVBQXFCLENBQUM7QUFBRUMsWUFBSSxFQUFFbEIsSUFBSSxDQUFDYyxJQUFMLENBQVVEO0FBQWxCLE9BQUQsQ0FBdEIsQ0FBUjtBQUNELEtBRkQsTUFFTztBQUNMWixjQUFRLENBQUNrQixtRUFBbUIsQ0FBQztBQUFFRCxZQUFJLEVBQUVsQixJQUFJLENBQUNjLElBQUwsQ0FBVUQ7QUFBbEIsT0FBRCxDQUFwQixDQUFSO0FBQ0Q7QUFDRixHQU4yQixFQU16QixDQUFDSixRQUFELENBTnlCLENBQTVCO0FBT0Esc0JBQ0UsOERBQUMsd0NBQUQ7QUFBUSxXQUFPLEVBQUVGLFdBQVcsSUFBSUMsYUFBaEM7QUFBK0MsV0FBTyxFQUFFTyxRQUF4RDtBQUFBLGNBQ0dOLFFBQVEsR0FBRyxNQUFILEdBQVk7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FoQkQ7O0dBQU1WLFk7VUFDYUcsb0QsRUFDMEJDLG9EOzs7S0FGdkNKLFk7QUFrQk5BLFlBQVksQ0FBQ3FCLFNBQWIsR0FBeUI7QUFDdkJwQixNQUFJLEVBQUVxQix1REFBQSxDQUFnQjtBQUNwQlIsTUFBRSxFQUFFUSwwREFEZ0I7QUFFcEJQLFFBQUksRUFBRU8sMERBQWdCQztBQUZGLEdBQWhCLEVBR0hDO0FBSm9CLENBQXpCO0FBT0EsK0RBQWV4QixZQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJlOGY1ZDdmYzQ2YWFiOGQ5ZGY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGZvbGxvd1JlcXVlc3RBY3Rpb24sIHVuRm9sbG93UmVxdWVzdEFjdGlvbiB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuY29uc3QgRm9sbG93QnV0dG9uID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUsIGlzRm9sbG93aW5nLCBpc1VuRm9sbG93aW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IGlzRm9sbG93ID0gbWU/LkZvbGxvd2luZ3MuZmluZCgodikgPT4gdi5pZCA9PT0gcG9zdC5Vc2VyLmlkKVxyXG4gIGNvbnN0IG9uRm9sbG93ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKGlzRm9sbG93KSB7XHJcbiAgICAgIGRpc3BhdGNoKHVuRm9sbG93UmVxdWVzdEFjdGlvbih7IGRhdGE6IHBvc3QuVXNlci5pZCB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXNwYXRjaChmb2xsb3dSZXF1ZXN0QWN0aW9uKHsgZGF0YTogcG9zdC5Vc2VyLmlkIH0pKTtcclxuICAgIH1cclxuICB9LCBbaXNGb2xsb3ddKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvbiBsb2FkaW5nPXtpc0ZvbGxvd2luZyB8fCBpc1VuRm9sbG93aW5nfSBvbkNsaWNrPXtvbkZvbGxvd30+XHJcbiAgICAgIHtpc0ZvbGxvdyA/ICfslrjtjJTroZzsmrAnIDogJ+2MlOuhnOyasCd9XHJcbiAgICA8L0J1dHRvbj5cclxuICApXHJcbn07XHJcblxyXG5Gb2xsb3dCdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3RcclxuICB9KS5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==