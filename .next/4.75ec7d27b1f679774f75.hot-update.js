webpackHotUpdate(4,{

/***/ "./pages/signin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInForm", function() { return SignInForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("./node_modules/next/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__("./node_modules/next-redux-wrapper/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_store__ = __webpack_require__("./src/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup__ = __webpack_require__("./pages/signup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pw_forget__ = __webpack_require__("./pages/pw-forget.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_App__ = __webpack_require__("./src/components/App/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_firebase__ = __webpack_require__("./src/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_constants_routes__ = __webpack_require__("./src/constants/routes.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/taylorking/Documents/Code/obvia_01/pages/signin.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var SignInPage = function SignInPage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_6__src_components_App__["a" /* AppWithAuthentication */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      'SignIn'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(SignInForm, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__pw_forget__["a" /* PasswordForgetLink */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__signup__["a" /* SignUpLink */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    })
  );
};

var updateByPropertyName = function updateByPropertyName(propertyName, value) {
  return function () {
    return _defineProperty({}, propertyName, value);
  };
};

var INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

/**
 *  CLASS: SIGN IN FORM 
 *  Used in the SignInPage constant above
 */

var SignInForm = function (_Component) {
  _inherits(SignInForm, _Component);

  function SignInForm(props) {
    _classCallCheck(this, SignInForm);

    var _this = _possibleConstructorReturn(this, (SignInForm.__proto__ || Object.getPrototypeOf(SignInForm)).call(this, props));

    _this.onSubmit = function (event) {
      var _this$state = _this.state,
          email = _this$state.email,
          password = _this$state.password;


      __WEBPACK_IMPORTED_MODULE_7__src_firebase__["a" /* auth */].doSignInWithEmailAndPassword(email, password).then(function () {
        _this.setState(function () {
          return _extends({}, INITIAL_STATE);
        });
        __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.push(__WEBPACK_IMPORTED_MODULE_8__src_constants_routes__["b" /* HOME */]);
      }).catch(function (error) {
        _this.setState(updateByPropertyName('error', error));
      });

      event.preventDefault();
    };

    _this.state = _extends({}, INITIAL_STATE);
    return _this;
  }

  _createClass(SignInForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          email = _state.email,
          password = _state.password,
          error = _state.error;


      var isInvalid = password === '' || email === '';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'form',
        { onSubmit: this.onSubmit, __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          value: email,
          onChange: function onChange(event) {
            return _this2.setState(updateByPropertyName('email', event.target.value));
          },
          type: 'text',
          placeholder: 'Email Address',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', {
          value: password,
          onChange: function onChange(event) {
            return _this2.setState(updateByPropertyName('password', event.target.value));
          },
          type: 'password',
          placeholder: 'Password',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { disabled: isInvalid, type: 'submit', __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          },
          'Sign In'
        ),
        error && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            }
          },
          error.message
        )
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SignInForm;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

var _default = __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_3__src_store__["a" /* default */])(SignInPage);

/* harmony default export */ __webpack_exports__["default"] = (_default);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SignInPage, 'SignInPage', '/Users/taylorking/Documents/Code/obvia_01/pages/signin.js');
  reactHotLoader.register(updateByPropertyName, 'updateByPropertyName', '/Users/taylorking/Documents/Code/obvia_01/pages/signin.js');
  reactHotLoader.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/taylorking/Documents/Code/obvia_01/pages/signin.js');
  reactHotLoader.register(SignInForm, 'SignInForm', '/Users/taylorking/Documents/Code/obvia_01/pages/signin.js');
  reactHotLoader.register(_default, 'default', '/Users/taylorking/Documents/Code/obvia_01/pages/signin.js');
  leaveModule(module);
})();

;
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/signin")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.75ec7d27b1f679774f75.hot-update.js.map