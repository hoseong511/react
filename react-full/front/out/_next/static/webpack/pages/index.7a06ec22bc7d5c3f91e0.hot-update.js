self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _components_PostForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PostForm */ "./components/PostForm.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Lenovo\\Desktop\\gitMgmt\\nomad\\react-redux\\react-full\\front\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();


 // import AppLayout from '../components/AppLayout';







var Home = function Home() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      postLoading = _useSelector2.postLoading;

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_reducers_post__WEBPACK_IMPORTED_MODULE_7__.loadPostRequest)());
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    function onScroll() {
      console.log(postLoading);

      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !postLoading) {
          dispatch((0,_reducers_post__WEBPACK_IMPORTED_MODULE_7__.loadPostRequest)());
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, postLoading]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MyLayout__WEBPACK_IMPORTED_MODULE_6__.default, {
    children: [isLoggedIn && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostForm__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 22
    }, _this), mainPosts.map(function (post) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__.default, {
        post: post
      }, post.id, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 32
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Home, "ijHWuvyac5pZFcLDLPFF/EAPEQo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector, react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwb3N0IiwibWFpblBvc3RzIiwiaGFzTW9yZVBvc3RzIiwicG9zdExvYWRpbmciLCJ1c2VFZmZlY3QiLCJsb2FkUG9zdFJlcXVlc3QiLCJvblNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxRQUFRLEdBQUdDLHdEQUFXLEVBQTVCOztBQURpQixxQkFFTUMsd0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGakI7QUFBQSxNQUVUQyxVQUZTLGdCQUVUQSxVQUZTOztBQUFBLHNCQUdnQ0gsd0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRyxJQUFqQjtBQUFBLEdBQUQsQ0FIM0M7QUFBQSxNQUdUQyxTQUhTLGlCQUdUQSxTQUhTO0FBQUEsTUFHRUMsWUFIRixpQkFHRUEsWUFIRjtBQUFBLE1BR2dCQyxXQUhoQixpQkFHZ0JBLFdBSGhCOztBQUtqQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RWLFlBQVEsQ0FBQ1csK0RBQWUsRUFBaEIsQ0FBUjtBQUNELEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUQsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsYUFBU0UsUUFBVCxHQUFvQjtBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlMLFdBQVo7O0FBQ0EsVUFBSU0sTUFBTSxDQUFDQyxPQUFQLEdBQWlCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFlBQTFDLEdBQXlERixRQUFRLENBQUNDLGVBQVQsQ0FBeUJFLFlBQXpCLEdBQXNDLEdBQW5HLEVBQXdHO0FBQ3RHLFlBQUlaLFlBQVksSUFBSSxDQUFDQyxXQUFyQixFQUFpQztBQUMvQlQsa0JBQVEsQ0FBQ1csK0RBQWUsRUFBaEIsQ0FBUjtBQUNEO0FBQ0Y7QUFDRjs7QUFDREksVUFBTSxDQUFDTSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ1QsUUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEcsWUFBTSxDQUFDTyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ1YsUUFBckM7QUFDRCxLQUZEO0FBR0QsR0FiUSxFQWFOLENBQUNKLFlBQUQsRUFBZUMsV0FBZixDQWJNLENBQVQ7QUFlQSxzQkFDRSw4REFBQyx5REFBRDtBQUFBLGVBQ0dKLFVBQVUsaUJBQUksOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURqQixFQUVHRSxTQUFTLENBQUNnQixHQUFWLENBQWMsVUFBQ2pCLElBQUQ7QUFBQSwwQkFBVSw4REFBQyx5REFBRDtBQUF3QixZQUFJLEVBQUVBO0FBQTlCLFNBQWVBLElBQUksQ0FBQ2tCLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBVjtBQUFBLEtBQWQsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJCRCxDQW5ERDs7R0FBTXpCLEk7VUFDYUUsb0QsRUFDTUMsb0QsRUFDMEJBLG9EOzs7S0FIN0NILEk7QUFxRE4sK0RBQWVBLElBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2EwNmVjMjJiYzdkNWMzZjkxZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbi8vIGltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQnO1xyXG5pbXBvcnQgeyBXaW5kb3dTY3JvbGxlciwgQ2VsbE1lYXN1cmVyLCBDZWxsTWVhc3VyZXJDYWNoZSwgQXV0b1NpemVyLCBMaXN0IH0gZnJvbSAncmVhY3QtdmlydHVhbGl6ZWQnO1xyXG5cclxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9zdEZvcm0nO1xyXG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XHJcbmltcG9ydCBNeWxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcclxuaW1wb3J0IHsgbG9hZFBvc3RSZXF1ZXN0IH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBtYWluUG9zdHMsIGhhc01vcmVQb3N0cywgcG9zdExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGxvYWRQb3N0UmVxdWVzdCgpKTtcclxuICB9LCBbXSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0TG9hZGluZyk7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LTMwMCkge1xyXG4gICAgICAgIGlmIChoYXNNb3JlUG9zdHMgJiYgIXBvc3RMb2FkaW5nKXtcclxuICAgICAgICAgIGRpc3BhdGNoKGxvYWRQb3N0UmVxdWVzdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCBwb3N0TG9hZGluZ10pO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxNeWxheW91dD5cclxuICAgICAge2lzTG9nZ2VkSW4gJiYgPFBvc3RGb3JtIC8+fVxyXG4gICAgICB7bWFpblBvc3RzLm1hcCgocG9zdCkgPT4gPFBvc3RDYXJkIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICB7LyogPFdpbmRvd1Njcm9sbGVyPlxyXG4gICAgICAgICAgeyh7IGhlaWdodCwgc2Nyb2xsVG9wLCBpc1Njcm9sbGluZywgb25DaGlsZFNjcm9sbCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPEF1dG9TaXplciBkaXNhYmxlSGVpZ2h0PlxyXG4gICAgICAgICAgICAgICAgICB7KHsgd2lkdGggfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvSGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJzY2FuUm93Q291bnQ9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQ9e21haW5Qb3N0cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm93SGVpZ2h0PXtjYWNoZS5yb3dIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURhdGE9e21haW5Qb3N0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb3dSZW5kZXJlcj17cm93UmVuZGVyZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRNZWFzdXJlbWVudENhY2hlPXtjYWNoZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9BdXRvU2l6ZXI+XHJcbiAgICAgICAgICApfVxyXG4gICAgICA8L1dpbmRvd1Njcm9sbGVyPlxyXG4gICAgICAgKi99XHJcbiAgICAgIHsvKiog7KCI64yAIGluZGV466W8IGtleeuhnCDshKTsoJXtlZjsp4Ag66eQ7J6QLT7rjbDsnbTthLDqsIAg67OA6rK965CY64qUIOqyveyasOulvCDsg53qsIHtlbTrs7TsnpAgKi99XHJcbiAgICA8L015bGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9