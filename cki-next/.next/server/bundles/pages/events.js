module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/events.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
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
      }, "UCLA CKI | Events"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        href: "/static/events.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/CKI-logo.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Banner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavBar, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Stripes, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cards, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }));
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
          lineNumber: 28
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "title-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/logo.jpg",
        alt: "CKI UCLA Logo",
        className: "logo-img header-logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "UCLA Circle K International")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        role: "navigation",
        "class": "header-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        id: "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, "LOGIN"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Members"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, "Resources"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Events"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "About"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, "Home"))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Banner =
/*#__PURE__*/
function (_Component3) {
  _inherits(Banner, _Component3);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, (Banner.__proto__ || Object.getPrototypeOf(Banner)).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "banner",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "banner-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, "Events")));
    }
  }]);

  return Banner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var NavBar =
/*#__PURE__*/
function (_Component4) {
  _inherits(NavBar, _Component4);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Calendar"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "Chairing Information")));
    }
  }]);

  return NavBar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Stripes =
/*#__PURE__*/
function (_Component5) {
  _inherits(Stripes, _Component5);

  function Stripes() {
    _classCallCheck(this, Stripes);

    return _possibleConstructorReturn(this, (Stripes.__proto__ || Object.getPrototypeOf(Stripes)).apply(this, arguments));
  }

  _createClass(Stripes, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/stripes.jpg",
        alt: "stripes",
        id: "stripe-border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      });
    }
  }]);

  return Stripes;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Cards =
/*#__PURE__*/
function (_Component6) {
  _inherits(Cards, _Component6);

  function Cards() {
    _classCallCheck(this, Cards);

    return _possibleConstructorReturn(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).apply(this, arguments));
  }

  _createClass(Cards, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "cardarea",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, "This is where cards will go!"));
    }
  }]);

  return Cards;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var Footer =
/*#__PURE__*/
function (_Component7) {
  _inherits(Footer, _Component7);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("footer", {
        className: "content-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "logo-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/CKI-logo.png",
        alt: "CKI logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/CKI-metro.png",
        alt: "CKI Metro Division logo",
        id: "metro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/CKI-district.png",
        alt: "CKI District logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "\xA9 2017\u20132018 Circle K International at UCLA"));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/events.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=events.js.map