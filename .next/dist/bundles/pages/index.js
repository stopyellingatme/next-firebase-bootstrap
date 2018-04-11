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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__ = __webpack_require__("next-redux-wrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_store__ = __webpack_require__("./src/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_App__ = __webpack_require__("./src/components/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_style_scss__ = __webpack_require__("./styles/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_style_scss__);
var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/pages/index.js';







var LandingPage = function LandingPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3__src_components_App__["a" /* AppWithAuthentication */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'landing-page-content', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'h1',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        'Landing Page for everyone, yo...'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        'NOT SIGNED IN!!!'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        'NOT SIGNED IN!!!'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        },
        'NOT SIGNED IN!!!'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        'NOT SIGNED IN!!!'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        'NOT SIGNED IN!!!'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'NOT SIGNED IN!!!'
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_2__src_store__["a" /* default */])(LandingPage));

/***/ }),

/***/ "./src/components/App/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppWithAuthentication; });
/* unused harmony export AppWithAuthorization */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Navigation_Navigation__ = __webpack_require__("./src/components/Navigation/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SideBar_SideBar__ = __webpack_require__("./src/components/SideBar/SideBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SideBar_SideBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__SideBar_SideBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Session_withAuthentication__ = __webpack_require__("./src/components/Session/withAuthentication.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Session_withAuthorization__ = __webpack_require__("./src/components/Session/withAuthorization.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants_routes__ = __webpack_require__("./src/constants/routes.js");
var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/src/components/App/index.js';









var App = function App(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'app', __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Navigation_Navigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    children
  );
};

var AppWithAuthentication = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_4__Session_withAuthentication__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_5__Session_withAuthorization__["a" /* default */])(false))(App);

var AppWithAuthorization = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(__WEBPACK_IMPORTED_MODULE_4__Session_withAuthentication__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_5__Session_withAuthorization__["a" /* default */])(true))(App);



/***/ }),

/***/ "./src/components/Navigation/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_routes__ = __webpack_require__("./src/constants/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SignOut__ = __webpack_require__("./src/components/SignOut/index.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/src/components/Navigation/Navigation.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var NavigationAuth = function NavigationAuth() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'nav', __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: __WEBPACK_IMPORTED_MODULE_3__constants_routes__["c" /* LANDING */], __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          'Landing'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: __WEBPACK_IMPORTED_MODULE_3__constants_routes__["b" /* HOME */], __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          'Dashboard'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: __WEBPACK_IMPORTED_MODULE_3__constants_routes__["a" /* ACCOUNT */], __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          'Account'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__SignOut__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      })
    )
  );
};

var NavigationNonAuth = function NavigationNonAuth() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'ul',
    { className: 'nav', __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: __WEBPACK_IMPORTED_MODULE_3__constants_routes__["c" /* LANDING */], __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          },
          'Landing'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: __WEBPACK_IMPORTED_MODULE_3__constants_routes__["d" /* SIGN_IN */], __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          'Sign In'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      { className: 'nav-item', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
        { href: __WEBPACK_IMPORTED_MODULE_3__constants_routes__["e" /* SIGN_UP */], __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'nav-link', __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          'Sign Up'
        )
      )
    )
  );
};

var Navigation = function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));
  }

  _createClass(Navigation, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'navbar', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        this.props.authUser ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavigationAuth, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(NavigationNonAuth, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        })
      );
    }
  }]);

  return Navigation;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    authUser: state.sessionState.authUser
  };
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(mapStateToProps)(Navigation));

/***/ }),

/***/ "./src/components/Session/withAuthentication.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase__ = __webpack_require__("./src/firebase/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/src/components/Session/withAuthentication.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var withAuthentication = function withAuthentication(Component) {
  var WithAuthentication = function (_React$Component) {
    _inherits(WithAuthentication, _React$Component);

    function WithAuthentication() {
      _classCallCheck(this, WithAuthentication);

      return _possibleConstructorReturn(this, (WithAuthentication.__proto__ || Object.getPrototypeOf(WithAuthentication)).apply(this, arguments));
    }

    _createClass(WithAuthentication, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var onSetAuthUser = this.props.onSetAuthUser;


        __WEBPACK_IMPORTED_MODULE_2__firebase__["c" /* firebase */].auth.onAuthStateChanged(function (authUser) {
          authUser ? onSetAuthUser(authUser) : onSetAuthUser(null);
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }));
      }
    }]);

    return WithAuthentication;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      onSetAuthUser: function onSetAuthUser(authUser) {
        return dispatch({ type: 'AUTH_USER_SET', authUser: authUser });
      }
    };
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["connect"])(null, mapDispatchToProps)(WithAuthentication);
};

/* harmony default export */ __webpack_exports__["a"] = (withAuthentication);

/***/ }),

/***/ "./src/components/Session/withAuthorization.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase__ = __webpack_require__("./src/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants_routes__ = __webpack_require__("./src/constants/routes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/src/components/Session/withAuthorization.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var withAuthorization = function withAuthorization(needsAuthorization) {
  return function (Component) {
    var WithAuthorization = function (_React$Component) {
      _inherits(WithAuthorization, _React$Component);

      function WithAuthorization() {
        _classCallCheck(this, WithAuthorization);

        return _possibleConstructorReturn(this, (WithAuthorization.__proto__ || Object.getPrototypeOf(WithAuthorization)).apply(this, arguments));
      }

      _createClass(WithAuthorization, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          __WEBPACK_IMPORTED_MODULE_2__firebase__["c" /* firebase */].auth.onAuthStateChanged(function (authUser) {
            if (!authUser && needsAuthorization) {
              __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(__WEBPACK_IMPORTED_MODULE_3__constants_routes__["d" /* SIGN_IN */]);
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            }
          }));
        }
      }]);

      return WithAuthorization;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

    return WithAuthorization;
  };
};

/* harmony default export */ __webpack_exports__["a"] = (withAuthorization);

/***/ }),

/***/ "./src/components/SideBar/SideBar.js":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/SignOut/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__firebase__ = __webpack_require__("./src/firebase/index.js");
var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/src/components/SignOut/index.js';




var SignOutButton = function SignOutButton() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'button',
    {
      type: 'button',
      onClick: __WEBPACK_IMPORTED_MODULE_1__firebase__["a" /* auth */].doSignOut,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    },
    'Sign Out'
  );
};

/* harmony default export */ __webpack_exports__["a"] = (SignOutButton);

/***/ }),

/***/ "./src/constants/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LANDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SIGN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SIGN_IN; });
/* unused harmony export PASSWORD_FORGET */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCOUNT; });
var LANDING = '/';
var SIGN_UP = '/signup';
var SIGN_IN = '/signin';
var PASSWORD_FORGET = '/pw-forget';
var HOME = '/home';
var ACCOUNT = '/account';

/***/ }),

/***/ "./src/firebase/auth.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUserWithEmailAndPassword", function() { return doCreateUserWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignInWithEmailAndPassword", function() { return doSignInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doSignOut", function() { return doSignOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordReset", function() { return doPasswordReset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doPasswordUpdate", function() { return doPasswordUpdate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase__ = __webpack_require__("./src/firebase/firebase.js");


// Sign Up
var doCreateUserWithEmailAndPassword = function doCreateUserWithEmailAndPassword(email, password) {
  return __WEBPACK_IMPORTED_MODULE_0__firebase__["auth"].createUserWithEmailAndPassword(email, password);
};

// Sign In
var doSignInWithEmailAndPassword = function doSignInWithEmailAndPassword(email, password) {
  return __WEBPACK_IMPORTED_MODULE_0__firebase__["auth"].signInWithEmailAndPassword(email, password);
};

// Sign out
var doSignOut = function doSignOut() {
  return __WEBPACK_IMPORTED_MODULE_0__firebase__["auth"].signOut();
};

// Password Reset
var doPasswordReset = function doPasswordReset(email) {
  return __WEBPACK_IMPORTED_MODULE_0__firebase__["auth"].sendPasswordResetEmail(email);
};

// Password Change
var doPasswordUpdate = function doPasswordUpdate(password) {
  return __WEBPACK_IMPORTED_MODULE_0__firebase__["auth"].currentUser.updatePassword(password);
};

/***/ }),

/***/ "./src/firebase/db.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doCreateUser", function() { return doCreateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onceGetUsers", function() { return onceGetUsers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__firebase__ = __webpack_require__("./src/firebase/firebase.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("firebase");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);



// User API
// Add createdAt, updatedAt, type, etc.
var doCreateUser = function doCreateUser(id, email, type) {
  return __WEBPACK_IMPORTED_MODULE_0__firebase__["db"].collection('users').set({
    id: id,
    email: email,
    type: type
  });
};

var onceGetUsers = function onceGetUsers() {
  // db.ref('users').once('value');
  // db.collection('users').get().then('value');

  return __WEBPACK_IMPORTED_MODULE_0__firebase__["db"].collection("users").get().then(function (users) {
    users.forEach(function (user) {
      // user.data() is never undefined for query user snapshots
      console.log(user.id, " => ", user.data());
      return {
        id: user.id,
        email: user.email
      };
    });
  });
};

// Other db APIs ...

/***/ }),

/***/ "./src/firebase/firebase.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "db", function() { return db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
// import firebase from 'firebase';
var firebase = __webpack_require__("firebase");
// Required for side-effects
__webpack_require__("firebase/firestore");

var prodConfig = {
  apiKey: "AIzaSyBMB0dJqaK4TedsmpLmHptqlBDFXjAWHyQ",
  authDomain: "test0-abf15.firebaseapp.com",
  databaseURL: "https://test0-abf15.firebaseio.com",
  projectId: "test0-abf15",
  storageBucket: "test0-abf15.appspot.com",
  messagingSenderId: "964639469440"
};

var devConfig = {
  apiKey: "AIzaSyBMB0dJqaK4TedsmpLmHptqlBDFXjAWHyQ",
  authDomain: "test0-abf15.firebaseapp.com",
  databaseURL: "https://test0-abf15.firebaseio.com",
  projectId: "test0-abf15",
  storageBucket: "test0-abf15.appspot.com",
  messagingSenderId: "964639469440"
};

var config =  false ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

var db = firebase.firestore();
var auth = firebase.auth();



/***/ }),

/***/ "./src/firebase/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth__ = __webpack_require__("./src/firebase/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__db__ = __webpack_require__("./src/firebase/db.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase__ = __webpack_require__("./src/firebase/firebase.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__db__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__firebase__; });






/***/ }),

/***/ "./src/reducers/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__session__ = __webpack_require__("./src/reducers/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("./src/reducers/user.js");




var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  sessionState: __WEBPACK_IMPORTED_MODULE_1__session__["a" /* default */],
  userState: __WEBPACK_IMPORTED_MODULE_2__user__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (rootReducer);

/***/ }),

/***/ "./src/reducers/session.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  authUser: null
};

var applySetAuthUser = function applySetAuthUser(state, action) {
  return _extends({}, state, {
    authUser: action.authUser
  });
};

function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'AUTH_USER_SET':
      {
        return applySetAuthUser(state, action);
      }
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (sessionReducer);

/***/ }),

/***/ "./src/reducers/user.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var INITIAL_STATE = {
  users: []
};

var applySetUsers = function applySetUsers(state, action) {
  return _extends({}, state, {
    users: action.users
  });
};

function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  switch (action.type) {
    case 'USERS_SET':
      {
        return applySetUsers(state, action);
      }
    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["a"] = (userReducer);

/***/ }),

/***/ "./src/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_reducer__ = __webpack_require__("./src/reducers/reducer.js");



var initStore = function initStore() {
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_1__reducers_reducer__["a" /* default */]);

  return store;
};

/* harmony default export */ __webpack_exports__["a"] = (initStore);

/***/ }),

/***/ "./styles/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "firebase":
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),

/***/ "firebase/firestore":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map