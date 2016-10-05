module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.renderToString = exports.handleRender = undefined;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(2);

	var _server2 = _interopRequireDefault(_server);

	var _App = __webpack_require__(3);

	var _App2 = _interopRequireDefault(_App);

	var _resume = __webpack_require__(22);

	var _resume2 = _interopRequireDefault(_resume);

	var _redux = __webpack_require__(23);

	var _reactRedux = __webpack_require__(5);

	var _reducer = __webpack_require__(24);

	var _orientdb = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Colus on 2016. 8. 22..
	 */
	function renderToString() {

	  return _resume2.default.replace('<div id="root"></div>', '<div id="root">' + _server2.default.renderToString(_react2.default.createElement(_App2.default, null)) + '</div>');
	}

	function handleRender(req, res) {

	  (0, _orientdb.getInitialData)(req.params.id).then(function (initialData) {

	    var store = (0, _redux.createStore)(_reducer.reducer, initialData);

	    // Render the component to a string
	    var html = _server2.default.renderToString(_react2.default.createElement(
	      _reactRedux.Provider,
	      { store: store },
	      _react2.default.createElement(_App2.default, null)
	    ));

	    // Grab the initial state from our Redux store
	    var initialState = store.getState();

	    // Send the rendered page back to the client
	    res.send(renderFullPage(html, initialState));
	  });
	}

	function renderFullPage(html, initialState) {
	  return _resume2.default.replace('<div id="root"></div>', '<div id="root">' + html + '</div><script>window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';</script>');
	}

	exports.handleRender = handleRender;
	exports.renderToString = renderToString;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Title = __webpack_require__(4);

	var _Title2 = _interopRequireDefault(_Title);

	var _Content = __webpack_require__(9);

	var _Content2 = _interopRequireDefault(_Content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Colus on 2016. 8. 19..
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_Title2.default, null),
	        _react2.default.createElement(_Content2.default, null)
	      );
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = App;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _reactBootstrap = __webpack_require__(6);

	var _Contacts = __webpack_require__(7);

	var _Contacts2 = _interopRequireDefault(_Contacts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Colus on 2016. 8. 19..
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var propTypes = {
	  name: _react2.default.PropTypes.string,
	  moto: _react2.default.PropTypes.string,
	  resumeId: _react2.default.PropTypes.string,
	  image: _react2.default.PropTypes.string
	};

	var Title = function (_React$Component) {
	  _inherits(Title, _React$Component);

	  function Title(props) {
	    _classCallCheck(this, Title);

	    var _this = _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).call(this, props));

	    _this.state = {
	      name: _this.props.name,
	      moto: _this.props.moto,
	      resumeId: _this.props.resumeId,
	      image: _this.props.image
	    };

	    _this.handleDownload = _this.handleDownload.bind(_this);
	    return _this;
	  }

	  _createClass(Title, [{
	    key: 'handleDownload',
	    value: function handleDownload() {
	      window.location.assign('/resume/api/download/' + this.state.resumeId);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var baseStyle = { color: '#cdbfe3', backgroundColor: '#6f5499', paddingBottom: '6px' };
	      var nameStyle = { color: '#fff' };
	      var imgStyle = { height: '150px' };

	      return _react2.default.createElement(
	        _reactBootstrap.Jumbotron,
	        { id: 'content', tabIndex: '-1', style: baseStyle },
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          { fluid: true },
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 8, md: 5 },
	              _react2.default.createElement(
	                'h1',
	                { className: 'visible-xs-inline-block visible-sm-inline-block visible-lg-inline-block', style: nameStyle },
	                this.state.name
	              ),
	              _react2.default.createElement(
	                'h2',
	                { className: 'visible-md-inline-block', style: nameStyle },
	                this.state.name
	              ),
	              _react2.default.createElement(
	                'h2',
	                null,
	                this.state.moto
	              ),
	              _react2.default.createElement(
	                'p',
	                { className: 'lead' },
	                _react2.default.createElement(
	                  'a',
	                  { className: 'btn btn-outline-inverse btn-lg hidden-print', href: '#', onClick: this.handleDownload, role: 'button' },
	                  'Download PDF'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { md: 2, className: 'visible-md-block visible-lg-block' },
	              _react2.default.createElement(
	                'p',
	                null,
	                _react2.default.createElement('img', { src: this.state.image, className: 'img-responsive img-circle center-block',
	                  alt: 'Responsive image', style: imgStyle })
	              )
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 4, md: 5 },
	              _react2.default.createElement(_Contacts2.default, null)
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'h6',
	          { className: 'visible-lg-inline-block' },
	          ' ',
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-console' }),
	          ' This page is designed using NodeJs, ExpressJs, ReactJs, Redux, OrientDB, Bootstrap, PhantomJs, Jenkins, Docker.'
	        )
	      );
	    }
	  }]);

	  return Title;
	}(_react2.default.Component);

	Title.propTypes = propTypes;

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    name: state.name,
	    moto: state.moto,
	    resumeId: state.resumeId,
	    image: state.image
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Title);

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _dateutils = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Colus on 2016. 8. 20..
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var propTypes = {
	  address: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string,
	  phone: _react2.default.PropTypes.string,
	  email: _react2.default.PropTypes.string,
	  birthDate: _react2.default.PropTypes.string,
	  resumeUrl: _react2.default.PropTypes.string,
	  resumeId: _react2.default.PropTypes.string
	};

	var Contacts = function (_React$Component) {
	  _inherits(Contacts, _React$Component);

	  function Contacts(props) {
	    _classCallCheck(this, Contacts);

	    var _this = _possibleConstructorReturn(this, (Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call(this, props));

	    _this.handleResumeUrl = _this.handleResumeUrl.bind(_this);
	    _this.handleMailTo = _this.handleMailTo.bind(_this);
	    return _this;
	  }

	  _createClass(Contacts, [{
	    key: 'handleResumeUrl',
	    value: function handleResumeUrl() {
	      window.location.assign('' + this.props.resumeUrl);
	    }
	  }, {
	    key: 'handleMailTo',
	    value: function handleMailTo() {
	      window.location.assign('mailto:' + this.props.email);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'address',
	        null,
	        _react2.default.createElement(
	          'h4',
	          { className: 'text-right' },
	          this.props.birthDate,
	          ' ',
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-user', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'h4',
	          { className: 'text-right' },
	          _react2.default.createElement(
	            'abbr',
	            { title: 'phone' },
	            this.props.phone
	          ),
	          ' ',
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-earphone', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'h4',
	          { className: 'text-right' },
	          _react2.default.createElement(
	            'a',
	            { href: '#', onClick: this.handleMailTo },
	            this.props.email
	          ),
	          ' ',
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-envelope', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'h4',
	          { className: 'text-right' },
	          this.props.address,
	          ' ',
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-home', 'aria-hidden': 'true' })
	        ),
	        _react2.default.createElement(
	          'h4',
	          { className: 'text-right' },
	          _react2.default.createElement(
	            'a',
	            { href: '#', onClick: this.handleResumeUrl },
	            this.props.resumeUrl
	          ),
	          ' ',
	          _react2.default.createElement('span', { className: 'glyphicon glyphicon-link', 'aria-hidden': 'true' })
	        )
	      );
	    }
	  }]);

	  return Contacts;
	}(_react2.default.Component);

	Contacts.propTypes = propTypes;

	var mapStateToProps = function mapStateToProps(state) {

	  return {
	    phone: state.phone,
	    email: state.email,
	    address: state.address,
	    birthDate: _dateutils.DateFormat.format(_dateutils.DateTime.fromDateObject(new Date(state.birthDate)), 'Y-m-d', _dateutils.DateLocale.EN),
	    resumeUrl: state.resumeUrl,
	    resumeId: state.resumeId
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Contacts);

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("dateutils");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(5);

	var _reactBootstrap = __webpack_require__(6);

	var _Profile = __webpack_require__(10);

	var _Profile2 = _interopRequireDefault(_Profile);

	var _WorkExp = __webpack_require__(13);

	var _WorkExp2 = _interopRequireDefault(_WorkExp);

	var _ProjectExp = __webpack_require__(16);

	var _ProjectExp2 = _interopRequireDefault(_ProjectExp);

	var _Education = __webpack_require__(18);

	var _Education2 = _interopRequireDefault(_Education);

	var _Certification = __webpack_require__(19);

	var _Certification2 = _interopRequireDefault(_Certification);

	var _Skill = __webpack_require__(20);

	var _Skill2 = _interopRequireDefault(_Skill);

	var _Interest = __webpack_require__(21);

	var _Interest2 = _interopRequireDefault(_Interest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Colus on 2016. 8. 20..
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var propTypes = {
	  contents: _react2.default.PropTypes.object
	};

	var Content = function (_React$Component) {
	  _inherits(Content, _React$Component);

	  function Content() {
	    _classCallCheck(this, Content);

	    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
	  }

	  _createClass(Content, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var leftContents = new Array();
	      var rightContents = new Array();
	      var bottomContents = new Array();

	      Object.keys(this.props.contents).map(function (key, index) {

	        switch (_this2.props.contents[key].align) {
	          case 'left':
	            leftContents.push(contentFactory(key, index, _this2.props.contents[key]));break;
	          case 'right':
	            rightContents.push(contentFactory(key, index, _this2.props.contents[key]));break;
	          case 'bottom':
	            bottomContents.push(contentFactory(key, index, _this2.props.contents[key]));break;
	        }
	      });

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 12, md: 6, lg: 6 },
	              leftContents
	            ),
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 12, md: 6, lg: 6 },
	              rightContents
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: 'page-break' }),
	        _react2.default.createElement(
	          _reactBootstrap.Grid,
	          null,
	          _react2.default.createElement(
	            _reactBootstrap.Row,
	            null,
	            _react2.default.createElement(
	              _reactBootstrap.Col,
	              { xs: 12, sm: 12, md: 12, lg: 12 },
	              bottomContents
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Content;
	}(_react2.default.Component);

	Content.propTypes = propTypes;

	var contentFactory = function contentFactory(contentName, index, data) {
	  switch (contentName) {
	    case 'profile':
	      return _react2.default.createElement(_Profile2.default, { key: index, data: data });
	    case 'education':
	      return _react2.default.createElement(_Education2.default, { key: index, data: data });
	    case 'certification':
	      return _react2.default.createElement(_Certification2.default, { key: index, data: data });
	    case 'skill':
	      return _react2.default.createElement(_Skill2.default, { key: index, data: data });
	    case 'work':
	      return _react2.default.createElement(_WorkExp2.default, { key: index, data: data });
	    case 'interest':
	      return _react2.default.createElement(_Interest2.default, { key: index, data: data });
	    case 'project':
	      return _react2.default.createElement(_ProjectExp2.default, { key: index, data: data });
	    default:
	      return '';
	  }
	};

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    contents: state.contents
	  };
	};

	exports.default = (0, _reactRedux.connect)(mapStateToProps)(Content);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMarkdown = __webpack_require__(11);

	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

	var _reactBootstrap = __webpack_require__(6);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Colus on 2016. 8. 20..
	 */
	var Profile = function Profile(props) {

	  if (_underscore2.default.isEmpty(props.data.content) || _underscore2.default.isEmpty(props.data.content[0].aboutMe)) {
	    return _react2.default.createElement('div', null);
	  }

	  // const aboutMe = this.state.content.data[0].aboutMe.replace(/\n/g,'<br />');
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    _react2.default.createElement(_reactMarkdown2.default, { source: props.data.content[0].aboutMe })
	  );
	};

	Profile.propTypes = { data: _react2.default.PropTypes.object };
	Profile.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = Profile;

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("react-markdown");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("underscore");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Timeline = __webpack_require__(14);

	var _Timeline2 = _interopRequireDefault(_Timeline);

	var _timelineData = __webpack_require__(15);

	var _timelineData2 = _interopRequireDefault(_timelineData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var WorkExperience = function WorkExperience(props) {

	  if (_underscore2.default.isEmpty(props.data.content)) {
	    return _react2.default.createElement('div', null);
	  }

	  var datas = props.data.content.map(function (work, i) {
	    return new _timelineData2.default(i, new Date(work.startDate), new Date(work.endDate), work.title, work.content, work.labels ? new Object(work.labels).toString().split(',') : []);
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    _react2.default.createElement(_Timeline2.default, { datas: datas, usePeriod: true })
	  );
	}; /**
	    * Created by Colus on 2016. 8. 20..
	    */


	WorkExperience.propTypes = { data: _react2.default.PropTypes.object };
	WorkExperience.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = WorkExperience;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Colus on 2016. 8. 21..
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var propTypes = {
	  datas: _react2.default.PropTypes.array,
	  usePeriod: _react2.default.PropTypes.bool
	};

	var TimeLine = function (_React$Component) {
	  _inherits(TimeLine, _React$Component);

	  function TimeLine() {
	    _classCallCheck(this, TimeLine);

	    return _possibleConstructorReturn(this, (TimeLine.__proto__ || Object.getPrototypeOf(TimeLine)).call(this));
	  }

	  _createClass(TimeLine, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var style = { 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' };

	      var timeLines = this.props.datas.map(function (data) {

	        var period = '';
	        if (_this2.props.usePeriod) {
	          if (data.period.year > 0 && data.period.month > 0) {
	            period = data.period.year + ' ' + (data.period.year > 1 ? 'years' : 'year') + ' ' + data.period.month + ' ' + (data.period.month > 1 ? 'months' : 'month');
	          } else if (data.period.year > 0 && data.period.month <= 0) {
	            period = data.period.year + ' ' + (data.period.year > 1 ? 'years' : 'year');
	          } else if (data.period.year <= 0 && data.period.month > 0) {
	            period = data.period.month + ' ' + (data.period.month > 1 ? 'months' : 'month');
	          }
	        }

	        var timeLineHead = _react2.default.createElement(
	          'div',
	          { className: 'timeline-heading' },
	          _react2.default.createElement(
	            'h4',
	            { className: 'timeline-title' },
	            _react2.default.createElement(
	              'span',
	              { name: 'title' },
	              data.startDate,
	              ' ~ ',
	              data.endDate,
	              ' ',
	              _react2.default.createElement(
	                'strong',
	                null,
	                data.title
	              )
	            )
	          )
	        );

	        var timeLineBody = _react2.default.createElement(
	          'div',
	          { className: 'timeline-body' },
	          _react2.default.createElement(
	            'p',
	            null,
	            data.desc === '' ? '' : data.desc
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            data.badges === [] ? '' : data.badges.map(function (badge, i) {
	              return _react2.default.createElement(
	                'span',
	                { key: i, className: 'label label-primary', style: style },
	                badge
	              );
	            })
	          )
	        );

	        var timeLineFooter = _react2.default.createElement(
	          'div',
	          { className: 'timeline-footer' },
	          _react2.default.createElement(
	            'p',
	            { className: 'text-right' },
	            period
	          )
	        );

	        return _react2.default.createElement(
	          'div',
	          { key: data.id, className: 'timeline-item' },
	          _react2.default.createElement('div', { className: 'timeline-point timeline-point-blank' }),
	          _react2.default.createElement(
	            'div',
	            { className: 'timeline-event' },
	            timeLineHead,
	            timeLineBody,
	            timeLineFooter
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: 'timeline timeline-single-column' },
	        timeLines
	      );
	    }
	  }]);

	  return TimeLine;
	}(_react2.default.Component);

	TimeLine.propTypes = propTypes;

	exports.default = TimeLine;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dateutils = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by Colus on 2016. 8. 21..
	                                                                                                                                                           */


	var TimeLineData = function TimeLineData(id, startDate, endDate, title, desc, badges) {
	  _classCallCheck(this, TimeLineData);

	  this.id = id;
	  this.startDate = _dateutils.DateFormat.format(_dateutils.DateTime.fromDateObject(startDate), 'Y-m');
	  this.endDate = _dateutils.DateFormat.format(_dateutils.DateTime.fromDateObject(endDate), 'Y-m');
	  this.title = title;
	  this.desc = desc;
	  this.badges = badges;

	  var dateRange = new _dateutils.DateRange(_dateutils.DateTime.fromDateObject(startDate), _dateutils.DateTime.fromDateObject(endDate));

	  this.period = new Object();
	  this.period.year = 0;
	  this.period.month = 0;
	  if (dateRange.isValid()) {
	    this.period.year = parseInt(dateRange.days() / 365);
	    this.period.month = parseInt(dateRange.days() % 365 / 30);
	  }
	};

	exports.default = TimeLineData;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _Timeline = __webpack_require__(17);

	var _Timeline2 = _interopRequireDefault(_Timeline);

	var _timelineData = __webpack_require__(15);

	var _timelineData2 = _interopRequireDefault(_timelineData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ProjectExperience = function ProjectExperience(props) {

	  if (_underscore2.default.isEmpty(props.data.content)) {
	    return _react2.default.createElement('div', null);
	  }

	  var datas = props.data.content.map(function (project, i) {
	    return new _timelineData2.default(i, new Date(project.startDate), new Date(project.endDate), project.title, 'role : ' + project.content, project.labels ? new Object(project.labels).toString().split(',') : []);
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    _react2.default.createElement(_Timeline2.default, { datas: datas, useYearLabel: true })
	  );
	}; /**
	    * Created by Colus on 2016. 8. 21..
	    */


	ProjectExperience.propTypes = { data: _react2.default.PropTypes.object };
	ProjectExperience.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = ProjectExperience;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Colus on 2016. 8. 21..
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var propTypes = {
	  datas: _react2.default.PropTypes.array,
	  useYearLabel: _react2.default.PropTypes.bool
	};

	var TimeLine2 = function (_React$Component) {
	  _inherits(TimeLine2, _React$Component);

	  function TimeLine2() {
	    _classCallCheck(this, TimeLine2);

	    return _possibleConstructorReturn(this, (TimeLine2.__proto__ || Object.getPrototypeOf(TimeLine2)).call(this));
	  }

	  _createClass(TimeLine2, [{
	    key: "render",
	    value: function render() {
	      var timeLines = createTimeLine(this.props.datas, this.props.useYearLabel);

	      if (this.props.useYearLabel) {
	        timeLines.push(_react2.default.createElement(
	          "span",
	          { key: "timeline-labelEnd", className: "timeline-label" },
	          _react2.default.createElement(
	            "span",
	            { className: "label label-primary" },
	            "End"
	          )
	        ));
	      }

	      return _react2.default.createElement(
	        "div",
	        { className: "timeline" },
	        timeLines
	      );
	    }
	  }]);

	  return TimeLine2;
	}(_react2.default.Component);

	function createTimeLine(datas, useYearLabel) {

	  var yearLebel = '';
	  return datas.reduce(function (list, data, index) {

	    var label = void 0;
	    if (useYearLabel && yearLebel !== data.startDate.substr(0, 4)) {
	      yearLebel = data.startDate.substr(0, 4);
	      label = _react2.default.createElement(
	        "span",
	        { key: "timeline-label" + index, className: "timeline-label" },
	        _react2.default.createElement(
	          "span",
	          { className: "label label-primary" },
	          yearLebel
	        )
	      );
	    }

	    var item = _react2.default.createElement(
	      "div",
	      { key: data.id, className: "timeline-item" },
	      _react2.default.createElement("div", { className: "timeline-point timeline-point-blank timeline-point-success" }),
	      _react2.default.createElement(
	        "div",
	        { className: "timeline-event" },
	        _react2.default.createElement(
	          "div",
	          { className: "timeline-heading" },
	          _react2.default.createElement(
	            "h4",
	            { className: "timeline-title" },
	            _react2.default.createElement(
	              "span",
	              { name: "title" },
	              data.startDate,
	              " ~ ",
	              data.endDate,
	              " ",
	              _react2.default.createElement(
	                "strong",
	                null,
	                data.title
	              ),
	              " "
	            )
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "timeline-body" },
	          _react2.default.createElement(
	            "p",
	            null,
	            data.desc === '' ? '' : data.desc
	          ),
	          _react2.default.createElement(
	            "p",
	            null,
	            data.badges === [] ? '' : data.badges.map(function (badge, i) {
	              return _react2.default.createElement(
	                "span",
	                { key: i, className: "label label-primary", style: { 'display': 'inline-block', 'marginRight': '5px', 'color': '#fff' } },
	                badge
	              );
	            })
	          )
	        )
	      )
	    );

	    return list.concat([label, item]);
	  }, []);
	}

	TimeLine2.propTypes = propTypes;

	exports.default = TimeLine2;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMarkdown = __webpack_require__(11);

	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

	var _reactBootstrap = __webpack_require__(6);

	var _dateutils = __webpack_require__(8);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Education = function Education(props) {

	  if (_underscore2.default.isEmpty(props.data.content)) {
	    return _react2.default.createElement('div', null);
	  }

	  var educations = props.data.content.map(function (education, i) {
	    var startDate = _dateutils.DateFormat.format(_dateutils.DateTime.fromDateObject(new Date(education.startDate)), 'Y-m', _dateutils.DateLocale.EN);
	    var endDate = _dateutils.DateFormat.format(_dateutils.DateTime.fromDateObject(new Date(education.endDate)), 'Y-m', _dateutils.DateLocale.EN);
	    return '* ' + startDate + ' ~ ' + endDate + ' ' + education.title + '\n';
	  }).join(' ');

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    _react2.default.createElement(_reactMarkdown2.default, { source: educations })
	  );
	}; /**
	    * Created by Colus on 2016. 8. 20..
	    */


	Education.propTypes = { data: _react2.default.PropTypes.object };
	Education.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = Education;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactMarkdown = __webpack_require__(11);

	var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

	var _reactBootstrap = __webpack_require__(6);

	var _dateutils = __webpack_require__(8);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Certification = function Certification(props) {

	  if (_underscore2.default.isEmpty(props.data.content)) {
	    return _react2.default.createElement('div', null);
	  }

	  var certifications = props.data.content.map(function (certification, i) {
	    var startDate = _dateutils.DateFormat.format(_dateutils.DateTime.fromDateObject(new Date(certification.startDate)), 'Y-m', _dateutils.DateLocale.EN);
	    return '* ' + startDate + ' ' + certification.title + '\n';
	  }).join(' ');

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    _react2.default.createElement(_reactMarkdown2.default, { source: certifications })
	  );
	}; /**
	    * Created by colus on 2016. 10. 1..
	    */


	Certification.propTypes = { data: _react2.default.PropTypes.object };
	Certification.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = Certification;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Skill = function Skill(props) {

	  if (_underscore2.default.isEmpty(props.data.content)) {
	    return _react2.default.createElement('div', null);
	  }

	  var color = ['success', 'info', 'warning', 'danger', 'primary'];

	  var skills = props.data.content.map(function (skill, i) {

	    var level = { width: skill.expertiseRating + '%' };
	    return _react2.default.createElement(
	      'div',
	      { className: 'progress hidden-print', key: i },
	      _react2.default.createElement('div', { className: 'progress-bar progress-bar-' + color[i % 5],
	        role: 'progressbar', 'aria-valuenow': '60', 'aria-valuemin': '0', 'aria-valuemax': '100',
	        style: level }),
	      _react2.default.createElement(
	        'span',
	        { className: 'progress-type' },
	        skill.skillName
	      ),
	      _react2.default.createElement(
	        'span',
	        { className: 'progress-completed' },
	        skill.expertiseRating,
	        ' %'
	      )
	    );
	  });

	  var skillsPrint = props.data.content.map(function (skill, i) {

	    var level = { width: skill.expertiseRating + '%' };
	    return _react2.default.createElement(
	      'div',
	      { className: 'progress visible-print', key: i },
	      _react2.default.createElement('div', { className: 'progress-bar progress-bar-gray',
	        role: 'progressbar', 'aria-valuenow': '60', 'aria-valuemin': '0', 'aria-valuemax': '100',
	        style: level }),
	      _react2.default.createElement(
	        'span',
	        { className: 'progress-type' },
	        skill.skillName
	      ),
	      _react2.default.createElement(
	        'span',
	        { className: 'progress-completed' },
	        skill.expertiseRating,
	        ' %'
	      )
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    skills,
	    skillsPrint
	  );
	}; /**
	    * Created by Colus on 2016. 8. 20..
	    */


	Skill.propTypes = { data: _react2.default.PropTypes.object };
	Skill.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = Skill;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactBootstrap = __webpack_require__(6);

	var _underscore = __webpack_require__(12);

	var _underscore2 = _interopRequireDefault(_underscore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Interest = function Interest(props) {

	  if (_underscore2.default.isEmpty(props.data.content)) {
	    return _react2.default.createElement('div', null);
	  }

	  var style = { 'display': 'inline-block', 'marginRight': '5px' };
	  var color = ['success', 'info', 'warning', 'danger', 'primary'];

	  var interests = props.data.content.map(function (interest, i) {
	    return _react2.default.createElement(
	      'span',
	      {
	        key: i,
	        className: 'label label-' + color[parseInt(i / 5) > 4 ? 4 : parseInt(i / 5)],
	        style: style },
	      interest.name
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _reactBootstrap.PageHeader,
	      null,
	      props.data.name
	    ),
	    _react2.default.createElement(
	      'h3',
	      null,
	      interests
	    )
	  );
	}; /**
	    * Created by Colus on 2016. 8. 22..
	    */


	Interest.propTypes = { data: _react2.default.PropTypes.object };
	Interest.defaultProps = { data: { name: '', type: '', content: [] } };

	exports.default = Interest;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<!DOCTYPE html>\n<html lang=\"ko\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My Resume</title>\n  <!-- Bootstrap -->\n  <link href=\"/resume/css/bootstrap.css\" rel=\"stylesheet\">\n  <link href=\"/resume/css/style.css\" rel=\"stylesheet\">\n</head>\n<body>\n  <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js\"></script>\n  <!-- Include all compiled plugins (below), or include individual files as needed -->\n  <!--<script src=\"js/bootstrap.min.js\"></script>-->\n  <div id=\"root\"></div>\n  <script src=\"/resume/bundle.js\"></script>\n</body>\n</html>";

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducer = reducer;
	/**
	 * Created by Colus on 2016. 8. 29..
	 */
	// Reducer
	function reducer() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var action = arguments[1];


	  // switch (action.type) {
	  //   case 'increase':
	  //     return { count: count + 1 };
	  //   default:
	  //     return state;
	  // }

	  return state;
	}

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getInitialData = getInitialData;

	var _orientjs = __webpack_require__(26);

	function getInitialData(id) {

	  var object = new Object();
	  var properties = '\n        @rid as id, \n        id as resumeId,\n        resumeUrl as resumeUrl,\n        name as resumeName,\n        user.name as name, \n        user.moto as moto, \n        user.phone as phone, \n        user.email as email,\n        user.image as image,\n        user.birthDate as birthDate, \n        user.address as address';

	  var conditions = id ? { id: id } : { defaults: true };

	  return db.select(properties).from('myResume').where(conditions).one().then(function (result) {

	    object = result;
	    return db.select('Expand(contents)').from(result.id).order('order').all();
	  }).then(function (result) {

	    object.contents = new Object();
	    return Promise.all(result.map(function (resumeContent) {
	      if (!object.contents[resumeContent.type]) {
	        object.contents[resumeContent.type] = new Object();
	      }
	      object.contents[resumeContent.type].name = resumeContent.name;
	      object.contents[resumeContent.type].type = resumeContent.type;
	      object.contents[resumeContent.type].align = resumeContent.align;

	      return db.select('Expand(content)').from(resumeContent['@rid']).order('order').all().then(function (content) {

	        object.contents[resumeContent.type].content = content;
	        return content;
	      });
	    }));
	  }).then(function () {
	    return object;
	  });
	} /**
	   * Created by Colus on 2016. 8. 26..
	   */


	var db = new _orientjs.ODatabase({
	  host: '192.168.0.28',
	  port: 2424,
	  username: 'root',
	  password: 'juno2989',
	  name: 'my-resume',
	  pool: { max: 10 }
	});

	db.open();

	exports.default = db;

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("orientjs");

/***/ }
/******/ ]);