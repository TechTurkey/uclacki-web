webpackHotUpdate(6,{

/***/ "./pages/events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "D:\\spens\\Documents\\cki-next\\pages\\events.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Events =
/*#__PURE__*/
function (_Component) {
  _inherits(Events, _Component);

  function Events() {
    _classCallCheck(this, Events);

    return _possibleConstructorReturn(this, (Events.__proto__ || Object.getPrototypeOf(Events)).apply(this, arguments));
  }

  _createClass(Events, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, "UCLA CKI Home"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "/static/events.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }), "Welcome to Events!");
    }
  }]);

  return Events;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Header =
/*#__PURE__*/
function (_Component2) {
  _inherits(Header, _Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        role: "banner",
        className: "content-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/logo.jpg",
        alt: "CKI UCLA Logo",
        className: "logo-img header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "UCLA Circle K International")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        role: "navigation",
        "class": "header-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        id: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }, "LOGIN"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Members"))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Events);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/events")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.714c2936d76d54fda303.hot-update.js.map