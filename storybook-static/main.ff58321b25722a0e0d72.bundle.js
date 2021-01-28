(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./.storybook/config.js":
/*!******************************!*\
  !*** ./.storybook/config.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! storybook-addon-jsx */ "./node_modules/storybook-addon-jsx/lib/index.js");
/* harmony import */ var storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _sourceCodeUtils_storybookDecorator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sourceCodeUtils/storybookDecorator */ "./.storybook/sourceCodeUtils/storybookDecorator.js");
function loadStories(){// we read test files too to show their source code, but we'll prevent
// them from being executed in our webpack loader
var req=__webpack_require__("./src sync recursive \\.stories\\.jsx$|\\.test\\.jsx?");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_6__["withKnobs"]),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["addDecorator"])(storybook_addon_jsx__WEBPACK_IMPORTED_MODULE_7__["jsxDecorator"]),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["addDecorator"])(_sourceCodeUtils_storybookDecorator__WEBPACK_IMPORTED_MODULE_8__["default"]),req.keys().forEach(function(filename){return req(filename)})}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./.storybook/sourceCodeUtils/storybookDecorator.js":
/*!**********************************************************!*\
  !*** ./.storybook/sourceCodeUtils/storybookDecorator.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _storybook_addons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/addons */ "./node_modules/@storybook/addons/dist/public_api.js");
/* harmony import */ var _storybook_addons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (Object(_storybook_addons__WEBPACK_IMPORTED_MODULE_0__["makeDecorator"])({name:"withSourceInfo",parameterName:"sourceCode",wrapper:function wrapper(getStory,context){var channel=_storybook_addons__WEBPACK_IMPORTED_MODULE_0___default.a.getChannel();return channel.emit("sourceCode/selectedStory",context.parameters.fileName),getStory(context)}}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./.storybook/sourceCodeUtils/webpackLoader.js?!./src/apps/Memory/components/Board/Board.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./.storybook/sourceCodeUtils/webpackLoader.js??ref--10-0!./src/apps/Memory/components/Board/Board.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Board__board--3g1dH {\n  display: flex;\n  flex-wrap: wrap;\n}\n", ""]);
// Exports
exports.locals = {
	"board": "Board__board--3g1dH"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./.storybook/sourceCodeUtils/webpackLoader.js?!./src/apps/Memory/components/Tile/Tile.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./.storybook/sourceCodeUtils/webpackLoader.js??ref--10-0!./src/apps/Memory/components/Tile/Tile.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Tile__tile--ZrxBg {\n  height: 100px;\n  width: 100px;\n  border: 1px solid red;\n  display: flex;\n  margin: 3px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 8px;\n  font-size: 50px;\n  transition: background-color 0.5s ease;\n  cursor: pointer;\n  user-select: none;\n}\n\n.Tile__hidden--12fnI {\n  background-color: brown;\n}\n\n.Tile__revealed--37Gmu {\n  background-color: gold;\n}\n\n.Tile__done--2w8qN {\n  background-color: green;\n}\n", ""]);
// Exports
exports.locals = {
	"tile": "Tile__tile--ZrxBg",
	"hidden": "Tile__hidden--12fnI",
	"revealed": "Tile__revealed--37Gmu",
	"done": "Tile__done--2w8qN"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./.storybook/sourceCodeUtils/webpackLoader.js?!./src/examples/ChessPiece/ChessPiece.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./.storybook/sourceCodeUtils/webpackLoader.js??ref--10-0!./src/examples/ChessPiece/ChessPiece.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".ChessPiece__container--22mj7 {\n  font-size: 100px;\n  font-family: \"Arial Unicode MS\";\n  height: 100px;\n  width: 100px;\n  line-height: 80px;\n  display: block;\n  color: red;\n  position: relative;\n}\n\n@keyframes ChessPiece__availableAnim--q0lWE {\n  0% {\n    transform: scale(1, 1);\n  }\n  25% {\n    transform: scale(0.8, 0.8);\n  }\n  50% {\n    transform: scale(1, 1);\n  }\n  75% {\n    transform: scale(1.2, 1.2);\n  }\n  100% {\n    transform: scale(1, 1);\n  }\n}\n\n.ChessPiece__available--wePZg {\n  animation: ChessPiece__availableAnim--q0lWE 0.85s linear infinite;\n}\n\n@keyframes ChessPiece__selectedAnim--1cCC7 {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(-15deg);\n  }\n  50% {\n    transform: rotate(0);\n  }\n  75% {\n    transform: rotate(15deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n.ChessPiece__selected--7RJoT {\n  animation: ChessPiece__selectedAnim--1cCC7 0.85s linear infinite;\n}\n\n.ChessPiece__icon--31MZU {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transition: opacity 500ms ease, transform 500ms ease;\n  transform: scale(1, 1);\n  opacity: 1;\n}\n\n.ChessPiece__entering--3ISuS {\n  opacity: 0;\n  z-index: 2;\n  transform: scale(0.1, 0.1);\n}\n\n.ChessPiece__exiting--1AFOA {\n  opacity: 0;\n  z-index: 1;\n  transform: scale(0.1, 0.1);\n}\n", ""]);
// Exports
exports.locals = {
	"container": "ChessPiece__container--22mj7",
	"available": "ChessPiece__available--wePZg",
	"availableAnim": "ChessPiece__availableAnim--q0lWE",
	"selected": "ChessPiece__selected--7RJoT",
	"selectedAnim": "ChessPiece__selectedAnim--1cCC7",
	"icon": "ChessPiece__icon--31MZU",
	"entering": "ChessPiece__entering--3ISuS",
	"exiting": "ChessPiece__exiting--1AFOA"
};

/***/ }),

/***/ "./src sync recursive \\.stories\\.jsx$|\\.test\\.jsx?":
/*!***********************************************!*\
  !*** ./src sync \.stories\.jsx$|\.test\.jsx? ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./apps/Hangman/app_class/Hangman.stories.jsx": "./src/apps/Hangman/app_class/Hangman.stories.jsx",
	"./apps/Hangman/app_class/Hangman.test.jsx": "./src/apps/Hangman/app_class/Hangman.test.jsx",
	"./apps/Hangman/app_hook/Hangman.stories.jsx": "./src/apps/Hangman/app_hook/Hangman.stories.jsx",
	"./apps/Hangman/app_hook/Hangman.test.jsx": "./src/apps/Hangman/app_hook/Hangman.test.jsx",
	"./apps/Hangman/components/EnterField/EnterField.stories.jsx": "./src/apps/Hangman/components/EnterField/EnterField.stories.jsx",
	"./apps/Hangman/components/EnterField/EnterField.test.jsx": "./src/apps/Hangman/components/EnterField/EnterField.test.jsx",
	"./apps/Hangman/components/Gallow/Gallow.stories.jsx": "./src/apps/Hangman/components/Gallow/Gallow.stories.jsx",
	"./apps/Hangman/components/Gallow/Gallow.test.jsx": "./src/apps/Hangman/components/Gallow/Gallow.test.jsx",
	"./apps/Hangman/components/GuessHistory/GuessHistory.stories.jsx": "./src/apps/Hangman/components/GuessHistory/GuessHistory.stories.jsx",
	"./apps/Hangman/components/GuessHistory/GuessHistory.test.jsx": "./src/apps/Hangman/components/GuessHistory/GuessHistory.test.jsx",
	"./apps/Hangman/components/Status/Status.stories.jsx": "./src/apps/Hangman/components/Status/Status.stories.jsx",
	"./apps/Hangman/components/Status/Status.test.jsx": "./src/apps/Hangman/components/Status/Status.test.jsx",
	"./apps/Hangman/components/UI/UI.stories.jsx": "./src/apps/Hangman/components/UI/UI.stories.jsx",
	"./apps/Hangman/components/UI/UI.test.jsx": "./src/apps/Hangman/components/UI/UI.test.jsx",
	"./apps/Hangman/components/Word/Word.stories.jsx": "./src/apps/Hangman/components/Word/Word.stories.jsx",
	"./apps/Hangman/logic/getLetters.test.js": "./src/apps/Hangman/logic/getLetters.test.js",
	"./apps/Hangman/logic/getNbrOfErrors.test.js": "./src/apps/Hangman/logic/getNbrOfErrors.test.js",
	"./apps/Hangman/logic/getStatus.test.js": "./src/apps/Hangman/logic/getStatus.test.js",
	"./apps/Hangman/logic/performGuess.test.js": "./src/apps/Hangman/logic/performGuess.test.js",
	"./apps/Memory/app_hook/Memory.stories.jsx": "./src/apps/Memory/app_hook/Memory.stories.jsx",
	"./apps/Memory/components/Board/Board.stories.jsx": "./src/apps/Memory/components/Board/Board.stories.jsx",
	"./apps/Memory/components/Status/Status.stories.jsx": "./src/apps/Memory/components/Status/Status.stories.jsx",
	"./apps/Memory/components/Tile/Tile.stories.jsx": "./src/apps/Memory/components/Tile/Tile.stories.jsx",
	"./apps/Memory/components/UI/UI.stories.jsx": "./src/apps/Memory/components/UI/UI.stories.jsx",
	"./apps/Memory/logic/getMemoryGameStatus.test.js": "./src/apps/Memory/logic/getMemoryGameStatus.test.js",
	"./apps/Memory/logic/getNewMemoryGame.test.js": "./src/apps/Memory/logic/getNewMemoryGame.test.js",
	"./apps/Memory/logic/performMove.test.js": "./src/apps/Memory/logic/performMove.test.js",
	"./examples/ChessPiece/ChessPiece.stories.jsx": "./src/examples/ChessPiece/ChessPiece.stories.jsx",
	"./examples/Clicker/Clicker_class/Clicker.stories.jsx": "./src/examples/Clicker/Clicker_class/Clicker.stories.jsx",
	"./examples/Clicker/Clicker_class/Clicker.test.jsx": "./src/examples/Clicker/Clicker_class/Clicker.test.jsx",
	"./examples/Clicker/Clicker_hook_reducer/Clicker.stories.jsx": "./src/examples/Clicker/Clicker_hook_reducer/Clicker.stories.jsx",
	"./examples/Clicker/Clicker_hook_reducer/Clicker.test.jsx": "./src/examples/Clicker/Clicker_hook_reducer/Clicker.test.jsx",
	"./examples/Clicker/Clicker_hook_state/Clicker.stories.jsx": "./src/examples/Clicker/Clicker_hook_state/Clicker.stories.jsx",
	"./examples/Clicker/Clicker_hook_state/Clicker.test.jsx": "./src/examples/Clicker/Clicker_hook_state/Clicker.test.jsx",
	"./examples/Clicker/Clicker_oldClass/Clicker.stories.jsx": "./src/examples/Clicker/Clicker_oldClass/Clicker.stories.jsx",
	"./examples/Clicker/Clicker_oldClass/Clicker.test.jsx": "./src/examples/Clicker/Clicker_oldClass/Clicker.test.jsx",
	"./examples/Clicker/Clicker_recompose/Clicker.stories.jsx": "./src/examples/Clicker/Clicker_recompose/Clicker.stories.jsx",
	"./examples/Clicker/Clicker_recompose/Clicker.test.jsx": "./src/examples/Clicker/Clicker_recompose/Clicker.test.jsx",
	"./examples/Form/Form_controlled_class/Form.stories.jsx": "./src/examples/Form/Form_controlled_class/Form.stories.jsx",
	"./examples/Form/Form_controlled_class/Form.test.jsx": "./src/examples/Form/Form_controlled_class/Form.test.jsx",
	"./examples/Form/Form_controlled_hook/Form.stories.jsx": "./src/examples/Form/Form_controlled_hook/Form.stories.jsx",
	"./examples/Form/Form_controlled_hook/Form.test.jsx": "./src/examples/Form/Form_controlled_hook/Form.test.jsx",
	"./examples/Form/Form_uncontrolled_class/Form.stories.jsx": "./src/examples/Form/Form_uncontrolled_class/Form.stories.jsx",
	"./examples/Form/Form_uncontrolled_class/Form.test.jsx": "./src/examples/Form/Form_uncontrolled_class/Form.test.jsx",
	"./examples/Form/Form_uncontrolled_hook/Form.stories.jsx": "./src/examples/Form/Form_uncontrolled_hook/Form.stories.jsx",
	"./examples/Form/Form_uncontrolled_hook/Form.test.jsx": "./src/examples/Form/Form_uncontrolled_hook/Form.test.jsx",
	"./examples/Hello/Hello.stories.jsx": "./src/examples/Hello/Hello.stories.jsx",
	"./examples/Hello/Hello.test.jsx": "./src/examples/Hello/Hello.test.jsx",
	"./examples/Swedify/Swedify_callbackRef/Swedify.stories.jsx": "./src/examples/Swedify/Swedify_callbackRef/Swedify.stories.jsx",
	"./examples/Swedify/Swedify_createRef/Swedify.stories.jsx": "./src/examples/Swedify/Swedify_createRef/Swedify.stories.jsx",
	"./examples/Swedify/Swedify_stringRef/Swedify.stories.jsx": "./src/examples/Swedify/Swedify_stringRef/Swedify.stories.jsx",
	"./examples/Swedify/Swedify_useRef/Swedify.stories.jsx": "./src/examples/Swedify/Swedify_useRef/Swedify.stories.jsx",
	"./examples/User/User/User.stories.jsx": "./src/examples/User/User/User.stories.jsx",
	"./examples/User/User/User.test.jsx": "./src/examples/User/User/User.test.jsx",
	"./examples/User/User_hook/User.stories.jsx": "./src/examples/User/User_hook/User.stories.jsx",
	"./examples/User/User_hook/User.test.jsx": "./src/examples/User/User_hook/User.test.jsx",
	"./examples/User/User_old/User.stories.jsx": "./src/examples/User/User_old/User.stories.jsx",
	"./examples/User/User_old/User.test.jsx": "./src/examples/User/User_old/User.test.jsx",
	"./home/home.stories.jsx": "./src/home/home.stories.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.stories\\.jsx$|\\.test\\.jsx?";

/***/ }),

/***/ "./src/apps/Hangman/app_class/Hangman.jsx":
/*!************************************************!*\
  !*** ./src/apps/Hangman/app_class/Hangman.jsx ***!
  \************************************************/
/*! exports provided: Hangman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hangman", function() { return Hangman; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic */ "./src/apps/Hangman/logic/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/apps/Hangman/components/index.js");
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Hangman=/*#__PURE__*/function(_Component){function Hangman(props){var _this;return _classCallCheck(this,Hangman),_this=_super.call(this,props),_defineProperty(_assertThisInitialized(_this),"makeGuess",function(guess){return _this.setState({game:Object(_logic__WEBPACK_IMPORTED_MODULE_2__["performGuess"])(guess,_this.state.game)})}),_defineProperty(_assertThisInitialized(_this),"startGame",function(answer){return _this.setState({game:Object(_logic__WEBPACK_IMPORTED_MODULE_2__["getNewGame"])({answer:answer})})}),_this.state={game:null},_this}_inherits(Hangman,_Component);var _super=_createSuper(Hangman);return _createClass(Hangman,[{key:"render",value:function render(){return this.state.game?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["UI"],{state:this.state.game,makeGuess:this.makeGuess}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["EnterField"],{onSubmit:this.startGame,placeholder:"Choose the secret answer"})}}]),Hangman}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);Hangman.displayName="Hangman",Hangman.__docgenInfo={description:"",methods:[{name:"makeGuess",docblock:null,modifiers:[],params:[{name:"guess",type:null}],returns:null},{name:"startGame",docblock:null,modifiers:[],params:[{name:"answer",type:null}],returns:null}],displayName:"Hangman"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/app_class/Hangman.jsx"]={name:"Hangman",docgenInfo:Hangman.__docgenInfo,path:"src/apps/Hangman/app_class/Hangman.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/app_class/Hangman.stories.jsx":
/*!********************************************************!*\
  !*** ./src/apps/Hangman/app_class/Hangman.stories.jsx ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/apps/Hangman/app_class/index.js");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Hangman"],null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman (class version)",module).add("play the game!",function(){return _ref},{notes:{markdown:"\nThis is the full Hangman game! Note how there are also stories for the individual UI components,\ndeveloped one at at time before being put together in this main <code>Hangman</code> app component.\n\nAlso note how none of almost none of the game logic resides in the components; they are instead\nfound in separate functions (a \"logic layer\") for portability and testability.\n"}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/app_class/Hangman.test.jsx":
/*!*****************************************************!*\
  !*** ./src/apps/Hangman/app_class/Hangman.test.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/app_class/index.js":
/*!*********************************************!*\
  !*** ./src/apps/Hangman/app_class/index.js ***!
  \*********************************************/
/*! exports provided: Hangman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hangman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hangman */ "./src/apps/Hangman/app_class/Hangman.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hangman", function() { return _Hangman__WEBPACK_IMPORTED_MODULE_0__["Hangman"]; });



/***/ }),

/***/ "./src/apps/Hangman/app_hook/Hangman.jsx":
/*!***********************************************!*\
  !*** ./src/apps/Hangman/app_hook/Hangman.jsx ***!
  \***********************************************/
/*! exports provided: Hangman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hangman", function() { return Hangman; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic */ "./src/apps/Hangman/logic/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/apps/Hangman/components/index.js");
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var Hangman=function(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),_useState2=_slicedToArray(_useState,2),state=_useState2[0],setState=_useState2[1];return state?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["UI"],{state:state,makeGuess:function makeGuess(guess){return setState(Object(_logic__WEBPACK_IMPORTED_MODULE_2__["performGuess"])(guess,state))}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["EnterField"],{onSubmit:function startGame(answer){return setState(Object(_logic__WEBPACK_IMPORTED_MODULE_2__["getNewGame"])({answer:answer}))},placeholder:"Choose the secret answer"})};Hangman.displayName="Hangman",Hangman.__docgenInfo={description:"",methods:[],displayName:"Hangman"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/app_hook/Hangman.jsx"]={name:"Hangman",docgenInfo:Hangman.__docgenInfo,path:"src/apps/Hangman/app_hook/Hangman.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/app_hook/Hangman.stories.jsx":
/*!*******************************************************!*\
  !*** ./src/apps/Hangman/app_hook/Hangman.stories.jsx ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/apps/Hangman/app_hook/index.js");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Hangman"],null);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman (hook version)",module).add("play the game!",function(){return _ref},{notes:{markdown:"\nThis is the full Hangman game! Note how there are also stories for the individual UI components,\ndeveloped one at at time before being put together in this main <code>Hangman</code> app component.\n\nAlso note how none of almost none of the game logic resides in the components; they are instead\nfound in separate functions (a \"logic layer\") for portability and testability.\n"}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/app_hook/Hangman.test.jsx":
/*!****************************************************!*\
  !*** ./src/apps/Hangman/app_hook/Hangman.test.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/app_hook/index.js":
/*!********************************************!*\
  !*** ./src/apps/Hangman/app_hook/index.js ***!
  \********************************************/
/*! exports provided: Hangman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hangman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hangman */ "./src/apps/Hangman/app_hook/Hangman.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hangman", function() { return _Hangman__WEBPACK_IMPORTED_MODULE_0__["Hangman"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/EnterField/EnterField.jsx":
/*!***************************************************************!*\
  !*** ./src/apps/Hangman/components/EnterField/EnterField.jsx ***!
  \***************************************************************/
/*! exports provided: EnterField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterField", function() { return EnterField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @typedef {object} EnterFieldProps
 * @prop {bool} disabled
 * @prop {func} onSubmit
 * @prop {string} placeholder
 *
 * A component to display an input that submits on Enter press
 * @param {EnterFieldProps} props
 */var EnterField=function(props){var inputRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{margin:"5px"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{ref:inputRef,onKeyPress:function handleKeyPress(e){"Enter"===e.key&&(props.onSubmit(inputRef.current.value),inputRef.current.value="")},disabled:props.disabled,id:"guess",placeholder:props.placeholder,autoComplete:"off","data-qa":"input-field"}))};EnterField.displayName="EnterField",EnterField.__docgenInfo={description:"@typedef {object} EnterFieldProps\n@prop {bool} disabled\n@prop {func} onSubmit\n@prop {string} placeholder\n\nA component to display an input that submits on Enter press\n@param {EnterFieldProps} props",methods:[],displayName:"EnterField"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/components/EnterField/EnterField.jsx"]={name:"EnterField",docgenInfo:EnterField.__docgenInfo,path:"src/apps/Hangman/components/EnterField/EnterField.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/components/EnterField/EnterField.stories.jsx":
/*!***********************************************************************!*\
  !*** ./src/apps/Hangman/components/EnterField/EnterField.stories.jsx ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EnterField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EnterField */ "./src/apps/Hangman/components/EnterField/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman/components/EnterField",module).add("submits to console",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_EnterField__WEBPACK_IMPORTED_MODULE_2__["EnterField"],{onSubmit:function callback(value){return console.log("Received submission",value)},placeholder:"Type and hit Enter"})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/components/EnterField/EnterField.test.jsx":
/*!********************************************************************!*\
  !*** ./src/apps/Hangman/components/EnterField/EnterField.test.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/components/EnterField/index.js":
/*!*********************************************************!*\
  !*** ./src/apps/Hangman/components/EnterField/index.js ***!
  \*********************************************************/
/*! exports provided: EnterField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnterField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnterField */ "./src/apps/Hangman/components/EnterField/EnterField.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnterField", function() { return _EnterField__WEBPACK_IMPORTED_MODULE_0__["EnterField"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/Gallow/Gallow.jsx":
/*!*******************************************************!*\
  !*** ./src/apps/Hangman/components/Gallow/Gallow.jsx ***!
  \*******************************************************/
/*! exports provided: Gallow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gallow", function() { return Gallow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frames */ "./src/apps/Hangman/components/Gallow/frames.js");
/**
 * @typedef {object} GallowProps
 * @prop {number} nbrOfErrors
 *
 * A component to show the gallow, frame depends on number of errors
 * @param {GallowProps} props
 */var Gallow=function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre",{"data-qa":"gallow"},_frames__WEBPACK_IMPORTED_MODULE_1__["frames"][props.nbrOfErrors])};Gallow.displayName="Gallow",Gallow.__docgenInfo={description:"@typedef {object} GallowProps\n@prop {number} nbrOfErrors\n\nA component to show the gallow, frame depends on number of errors\n@param {GallowProps} props",methods:[],displayName:"Gallow"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/components/Gallow/Gallow.jsx"]={name:"Gallow",docgenInfo:Gallow.__docgenInfo,path:"src/apps/Hangman/components/Gallow/Gallow.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/components/Gallow/Gallow.stories.jsx":
/*!***************************************************************!*\
  !*** ./src/apps/Hangman/components/Gallow/Gallow.stories.jsx ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/apps/Hangman/components/Gallow/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman/components/Gallow",module).add("choose with knobs",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Gallow"],{nbrOfErrors:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["select"])("Frame",[0,1,2,3,4],0)})},{notes:{markdown:"The component responsible for drawing the gallow."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/components/Gallow/Gallow.test.jsx":
/*!************************************************************!*\
  !*** ./src/apps/Hangman/components/Gallow/Gallow.test.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/components/Gallow/frames.js":
/*!******************************************************!*\
  !*** ./src/apps/Hangman/components/Gallow/frames.js ***!
  \******************************************************/
/*! exports provided: frames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frames", function() { return frames; });
var frame0="\n\n\n\n\n ________\n/        \\\n''''''''''\n",frame1="\n\n    |\n    |\n    |\n ___|____\n/        \\\n''''''''''\n",frame2="\n    .________\n    |\n    |\n    |\n ___|____\n/        \\\n''''''''''\n",frame3="\n    .________\n    |        |\n    |        O\n    |\n ___|____\n/        \\\n''''''''''\n",frame4="\n    .________\n    |        |\n    |       \\O/\n    |        |\n ___|____   / \\\n/        \\\n''''''''''\n";var frames=["\n\n\n\n\n ________\n/        \\\n''''''''''\n",frame1,frame2,frame3,frame4];

/***/ }),

/***/ "./src/apps/Hangman/components/Gallow/index.js":
/*!*****************************************************!*\
  !*** ./src/apps/Hangman/components/Gallow/index.js ***!
  \*****************************************************/
/*! exports provided: Gallow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Gallow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallow */ "./src/apps/Hangman/components/Gallow/Gallow.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gallow", function() { return _Gallow__WEBPACK_IMPORTED_MODULE_0__["Gallow"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/GuessHistory/GuessHistory.jsx":
/*!*******************************************************************!*\
  !*** ./src/apps/Hangman/components/GuessHistory/GuessHistory.jsx ***!
  \*******************************************************************/
/*! exports provided: GuessHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuessHistory", function() { return GuessHistory; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @typedef {import("../../types").HangmanStatus} HangmanStatus
 *
 * @typedef {object} GuessHistoryProps
 * @prop {string[]} guesses All guesses made so far
 *
 * A component to show a text description of the current status
 * @param {GuessHistoryProps} props
 */var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4",null,"Guesses:");var GuessHistory=function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,_ref,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul",null,props.guesses.map(function(guess,n){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li",{key:n},guess)})))};GuessHistory.displayName="GuessHistory",GuessHistory.__docgenInfo={description:"@typedef {import(\"../../types\").HangmanStatus} HangmanStatus\n\n@typedef {object} GuessHistoryProps\n@prop {string[]} guesses All guesses made so far\n\nA component to show a text description of the current status\n@param {GuessHistoryProps} props",methods:[],displayName:"GuessHistory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/components/GuessHistory/GuessHistory.jsx"]={name:"GuessHistory",docgenInfo:GuessHistory.__docgenInfo,path:"src/apps/Hangman/components/GuessHistory/GuessHistory.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/components/GuessHistory/GuessHistory.stories.jsx":
/*!***************************************************************************!*\
  !*** ./src/apps/Hangman/components/GuessHistory/GuessHistory.stories.jsx ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/apps/Hangman/components/GuessHistory/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman/components/GuessHistory",module).add("basic",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["GuessHistory"],{guesses:["a","e","aeroplane"]})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/components/GuessHistory/GuessHistory.test.jsx":
/*!************************************************************************!*\
  !*** ./src/apps/Hangman/components/GuessHistory/GuessHistory.test.jsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/components/GuessHistory/index.js":
/*!***********************************************************!*\
  !*** ./src/apps/Hangman/components/GuessHistory/index.js ***!
  \***********************************************************/
/*! exports provided: GuessHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GuessHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GuessHistory */ "./src/apps/Hangman/components/GuessHistory/GuessHistory.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuessHistory", function() { return _GuessHistory__WEBPACK_IMPORTED_MODULE_0__["GuessHistory"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/Status/Status.jsx":
/*!*******************************************************!*\
  !*** ./src/apps/Hangman/components/Status/Status.jsx ***!
  \*******************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/**
 * @typedef {import("../../types").HangmanStatus} HangmanStatus
 *
 * @typedef {object} StatusProps
 * @prop {HangmanStatus} status The current status of the game
 * @prop {number} remaining Number of errors that can still be made
 *
 * A component to show a text description of the current status
 * @param {StatusProps} props
 */var Status=function(props){return"won"===props.status?"You win! :D":"lost"===props.status?"You lose :/":"Guess a letter or word! ".concat(props.remaining," remaining.")};

/***/ }),

/***/ "./src/apps/Hangman/components/Status/Status.stories.jsx":
/*!***************************************************************!*\
  !*** ./src/apps/Hangman/components/Status/Status.stories.jsx ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/apps/Hangman/components/Status/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman/components/Status",module).add("choose with knobs",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Status"],{status:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["select"])("Status",["won","lost","playing"],"playing"),remaining:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["number"])("Remaining",4)})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/components/Status/Status.test.jsx":
/*!************************************************************!*\
  !*** ./src/apps/Hangman/components/Status/Status.test.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/components/Status/index.js":
/*!*****************************************************!*\
  !*** ./src/apps/Hangman/components/Status/index.js ***!
  \*****************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Status */ "./src/apps/Hangman/components/Status/Status.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _Status__WEBPACK_IMPORTED_MODULE_0__["Status"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/UI/UI.jsx":
/*!***********************************************!*\
  !*** ./src/apps/Hangman/components/UI/UI.jsx ***!
  \***********************************************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic */ "./src/apps/Hangman/logic/index.js");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Status */ "./src/apps/Hangman/components/Status/index.js");
/* harmony import */ var _Gallow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Gallow */ "./src/apps/Hangman/components/Gallow/index.js");
/* harmony import */ var _EnterField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EnterField */ "./src/apps/Hangman/components/EnterField/index.js");
/* harmony import */ var _GuessHistory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../GuessHistory */ "./src/apps/Hangman/components/GuessHistory/index.js");
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Word */ "./src/apps/Hangman/components/Word/index.js");
/**
 * @typedef {import("../../types").Hangman} Hangman
 *
 * @typedef {object} UIProps
 * @prop {Hangman} state The current state of the game
 * @prop {function} makeGuess callback to submit a new guess
 *
 * A component render the UI for an ongoing Hangman game
 * @param {UIProps} props
 */var UI=function(props){var state=props.state,makeGuess=props.makeGuess,nbrOfErrors=Object(_logic__WEBPACK_IMPORTED_MODULE_1__["getNbrOfErrors"])(state),status=Object(_logic__WEBPACK_IMPORTED_MODULE_1__["getStatus"])(state);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Status__WEBPACK_IMPORTED_MODULE_2__["Status"],{status:status,remaining:state.maxGuesses-nbrOfErrors-1}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EnterField__WEBPACK_IMPORTED_MODULE_4__["EnterField"],{onSubmit:makeGuess,disabled:"playing"!==status,placeholder:"Guess a letter or word"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Word__WEBPACK_IMPORTED_MODULE_6__["Word"],{letters:Object(_logic__WEBPACK_IMPORTED_MODULE_1__["getLetters"])(state)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Gallow__WEBPACK_IMPORTED_MODULE_3__["Gallow"],{nbrOfErrors:nbrOfErrors}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GuessHistory__WEBPACK_IMPORTED_MODULE_5__["GuessHistory"],{guesses:state.guesses}))};UI.__docgenInfo={description:"@typedef {import(\"../../types\").Hangman} Hangman\n\n@typedef {object} UIProps\n@prop {Hangman} state The current state of the game\n@prop {function} makeGuess callback to submit a new guess\n\nA component render the UI for an ongoing Hangman game\n@param {UIProps} props",methods:[],displayName:"UI"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/components/UI/UI.jsx"]={name:"UI",docgenInfo:UI.__docgenInfo,path:"src/apps/Hangman/components/UI/UI.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/components/UI/UI.stories.jsx":
/*!*******************************************************!*\
  !*** ./src/apps/Hangman/components/UI/UI.stories.jsx ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/apps/Hangman/components/UI/index.js");
var almostDead={answer:"aeroplane",maxGuesses:4,guesses:["a","e","x","n","u"]},justBeginning={answer:"malediction",maxGuesses:4,guesses:[]},makeGuess=function(guess){return console.log("received guess",guess)},_ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["UI"],{state:almostDead,makeGuess:makeGuess}),_ref2=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["UI"],{state:justBeginning,makeGuess:makeGuess});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman/components/UI",module).add("almost dead",function(){return _ref}).add("just beginning",function(){return _ref2});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/components/UI/UI.test.jsx":
/*!****************************************************!*\
  !*** ./src/apps/Hangman/components/UI/UI.test.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/components/UI/index.js":
/*!*************************************************!*\
  !*** ./src/apps/Hangman/components/UI/index.js ***!
  \*************************************************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/apps/Hangman/components/UI/UI.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return _UI__WEBPACK_IMPORTED_MODULE_0__["UI"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/Word/Word.jsx":
/*!***************************************************!*\
  !*** ./src/apps/Hangman/components/Word/Word.jsx ***!
  \***************************************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var letterStyle={fontSize:"60px",margin:"3px",fontFamily:"monospace",backgroundColor:"#CCC"};/**
 * @typedef {object} WordProps
 * @prop {(string|null)[]} letters The letters in the current word
 *
 * A component to show a text description of the current status
 * @param {WordProps} props
 */var Word=function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,props.letters.map(function(letter,n){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{style:letterStyle,key:n},letter||"_")}))};Word.displayName="Word",Word.__docgenInfo={description:"@typedef {object} WordProps\n@prop {(string|null)[]} letters The letters in the current word\n\nA component to show a text description of the current status\n@param {WordProps} props",methods:[],displayName:"Word"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Hangman/components/Word/Word.jsx"]={name:"Word",docgenInfo:Word.__docgenInfo,path:"src/apps/Hangman/components/Word/Word.jsx"});

/***/ }),

/***/ "./src/apps/Hangman/components/Word/Word.stories.jsx":
/*!***********************************************************!*\
  !*** ./src/apps/Hangman/components/Word/Word.stories.jsx ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/apps/Hangman/components/Word/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Hangman/components/Word",module).add("_o__e",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Word"],{letters:[null,"o",null,null,"e"]})}).add("s_r__di_i_",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Word"],{letters:["s",null,"r",null,null,"d","i",null,"i",null]})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Hangman/components/Word/index.js":
/*!***************************************************!*\
  !*** ./src/apps/Hangman/components/Word/index.js ***!
  \***************************************************/
/*! exports provided: Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Word */ "./src/apps/Hangman/components/Word/Word.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return _Word__WEBPACK_IMPORTED_MODULE_0__["Word"]; });



/***/ }),

/***/ "./src/apps/Hangman/components/index.js":
/*!**********************************************!*\
  !*** ./src/apps/Hangman/components/index.js ***!
  \**********************************************/
/*! exports provided: EnterField, Gallow, GuessHistory, Status, UI, Word */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnterField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnterField */ "./src/apps/Hangman/components/EnterField/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EnterField", function() { return _EnterField__WEBPACK_IMPORTED_MODULE_0__["EnterField"]; });

/* harmony import */ var _Gallow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gallow */ "./src/apps/Hangman/components/Gallow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Gallow", function() { return _Gallow__WEBPACK_IMPORTED_MODULE_1__["Gallow"]; });

/* harmony import */ var _GuessHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GuessHistory */ "./src/apps/Hangman/components/GuessHistory/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuessHistory", function() { return _GuessHistory__WEBPACK_IMPORTED_MODULE_2__["GuessHistory"]; });

/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Status */ "./src/apps/Hangman/components/Status/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _Status__WEBPACK_IMPORTED_MODULE_3__["Status"]; });

/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ "./src/apps/Hangman/components/UI/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return _UI__WEBPACK_IMPORTED_MODULE_4__["UI"]; });

/* harmony import */ var _Word__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Word */ "./src/apps/Hangman/components/Word/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return _Word__WEBPACK_IMPORTED_MODULE_5__["Word"]; });



/***/ }),

/***/ "./src/apps/Hangman/logic/getLetters.js":
/*!**********************************************!*\
  !*** ./src/apps/Hangman/logic/getLetters.js ***!
  \**********************************************/
/*! exports provided: getLetters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLetters", function() { return getLetters; });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * Helper function that takes a Hangman state and returns an array of letters
 * in the answer, masking all non-guessed letters with `null`
 * @param {Hangman} state - A Hangman game state
 * @returns {(string|null)[]} An array of letters/null
 */function getLetters(state){return state.guesses.includes(state.answer)?state.answer.split(""):state.answer.split("").map(function(letter){return state.guesses.includes(letter)?letter:null})}

/***/ }),

/***/ "./src/apps/Hangman/logic/getLetters.test.js":
/*!***************************************************!*\
  !*** ./src/apps/Hangman/logic/getLetters.test.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/logic/getNbrOfErrors.js":
/*!**************************************************!*\
  !*** ./src/apps/Hangman/logic/getNbrOfErrors.js ***!
  \**************************************************/
/*! exports provided: getNbrOfErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNbrOfErrors", function() { return getNbrOfErrors; });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * Helper function that takes a Hangman state and returns the total number
 * of errors in the made guesses
 * @param {Hangman} state - A Hangman game state
 * @returns {number} The number of made guesses that were errors
 */function getNbrOfErrors(state){return state.guesses.filter(function(guess){return 1===guess.length?!state.answer.includes(guess):state.answer!==guess}).length}

/***/ }),

/***/ "./src/apps/Hangman/logic/getNbrOfErrors.test.js":
/*!*******************************************************!*\
  !*** ./src/apps/Hangman/logic/getNbrOfErrors.test.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/logic/getNewGame.js":
/*!**********************************************!*\
  !*** ./src/apps/Hangman/logic/getNewGame.js ***!
  \**********************************************/
/*! exports provided: getNewGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewGame", function() { return getNewGame; });
/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * @typedef {object} GetNewGameOptions
 * @prop {string} answer
 * @prop {number} [maxGuesses]
 *
 * Creates a fresh hangman session. Pass in an options object
 * with the correct `answer` and optionally the max number
 * of wrong guesses
 * @param {GetNewGameOptions} options
 * @returns {Hangman} A new Hangman app state
 */var getNewGame=function(options){return{answer:options.answer,maxGuesses:options.maxGuesses||4,guesses:[]}};

/***/ }),

/***/ "./src/apps/Hangman/logic/getStatus.js":
/*!*********************************************!*\
  !*** ./src/apps/Hangman/logic/getStatus.js ***!
  \*********************************************/
/*! exports provided: getStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return getStatus; });
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _getNbrOfErrors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getNbrOfErrors */ "./src/apps/Hangman/logic/getNbrOfErrors.js");
/**
 * @typedef {import("../types").Hangman} Hangman
 * @typedef {import("../types").HangmanStatus} HangmanStatus
 *
 * Helper function that takes a Hangman state and returns whether the
 * the current status is `won`, `lost` or `playing`
 * @param {Hangman} state
 * @return {HangmanStatus}
 */function getStatus(state){return Object(_getNbrOfErrors__WEBPACK_IMPORTED_MODULE_5__["getNbrOfErrors"])(state)>=state.maxGuesses?"lost":state.guesses.includes(state.answer)?"won":state.answer.split("").every(function(letter){return state.guesses.includes(letter)})?"won":"playing"}

/***/ }),

/***/ "./src/apps/Hangman/logic/getStatus.test.js":
/*!**************************************************!*\
  !*** ./src/apps/Hangman/logic/getStatus.test.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Hangman/logic/index.js":
/*!*****************************************!*\
  !*** ./src/apps/Hangman/logic/index.js ***!
  \*****************************************/
/*! exports provided: getLetters, getNbrOfErrors, getStatus, getNewGame, performGuess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLetters */ "./src/apps/Hangman/logic/getLetters.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLetters", function() { return _getLetters__WEBPACK_IMPORTED_MODULE_0__["getLetters"]; });

/* harmony import */ var _getNbrOfErrors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getNbrOfErrors */ "./src/apps/Hangman/logic/getNbrOfErrors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNbrOfErrors", function() { return _getNbrOfErrors__WEBPACK_IMPORTED_MODULE_1__["getNbrOfErrors"]; });

/* harmony import */ var _getStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getStatus */ "./src/apps/Hangman/logic/getStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStatus", function() { return _getStatus__WEBPACK_IMPORTED_MODULE_2__["getStatus"]; });

/* harmony import */ var _getNewGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getNewGame */ "./src/apps/Hangman/logic/getNewGame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNewGame", function() { return _getNewGame__WEBPACK_IMPORTED_MODULE_3__["getNewGame"]; });

/* harmony import */ var _performGuess__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./performGuess */ "./src/apps/Hangman/logic/performGuess.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "performGuess", function() { return _performGuess__WEBPACK_IMPORTED_MODULE_4__["performGuess"]; });



/***/ }),

/***/ "./src/apps/Hangman/logic/performGuess.js":
/*!************************************************!*\
  !*** ./src/apps/Hangman/logic/performGuess.js ***!
  \************************************************/
/*! exports provided: performGuess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performGuess", function() { return performGuess; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _getStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getStatus */ "./src/apps/Hangman/logic/getStatus.js");
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}/**
 * @typedef {import("../types").Hangman} Hangman
 *
 * The main Hangman game logic. Takes a guess (a letter or a word) and
 * the current state, and returns an updated state
 * @param {string} guess The guess that the player just made
 * @param {Hangman} currentState The state before the guess was made
 * @returns {Hangman} An updated app state
 */function performGuess(guess,currentState){return!guess||// ignore empty guesses
currentState.guesses.includes(guess)||// ignore duplicate guesses
"playing"!==Object(_getStatus__WEBPACK_IMPORTED_MODULE_4__["getStatus"])(currentState)// ignore guesses after game end
?currentState:_objectSpread(_objectSpread({},currentState),{},{guesses:currentState.guesses.concat(guess)})}

/***/ }),

/***/ "./src/apps/Hangman/logic/performGuess.test.js":
/*!*****************************************************!*\
  !*** ./src/apps/Hangman/logic/performGuess.test.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Memory/app_hook/Memory.jsx":
/*!*********************************************!*\
  !*** ./src/apps/Memory/app_hook/Memory.jsx ***!
  \*********************************************/
/*! exports provided: Memory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Memory", function() { return Memory; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_UI_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/UI/UI */ "./src/apps/Memory/components/UI/UI.jsx");
/* harmony import */ var _logic_getNewMemoryGame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logic/getNewMemoryGame */ "./src/apps/Memory/logic/getNewMemoryGame.js");
/* harmony import */ var _logic_performMove__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logic/performMove */ "./src/apps/Memory/logic/performMove.js");
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var Memory=function(props){var nbrOfTypes=props.nbrOfTypes,allowedErrors=props.allowedErrors,newGame=Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function(){return Object(_logic_getNewMemoryGame__WEBPACK_IMPORTED_MODULE_3__["getNewMemoryGame"])(nbrOfTypes,allowedErrors)},[allowedErrors,nbrOfTypes]),_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(newGame),_useState2=_slicedToArray(_useState,2),game=_useState2[0],setGame=_useState2[1];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_UI__WEBPACK_IMPORTED_MODULE_2__["UI"],{game:game,handleTileClick:function handleTileClick(id){var updatedGame=Object(_logic_performMove__WEBPACK_IMPORTED_MODULE_4__["performMove"])(game,id);setGame(updatedGame)}})};Memory.displayName="Memory",Memory.__docgenInfo={description:"",methods:[],displayName:"Memory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Memory/app_hook/Memory.jsx"]={name:"Memory",docgenInfo:Memory.__docgenInfo,path:"src/apps/Memory/app_hook/Memory.jsx"});

/***/ }),

/***/ "./src/apps/Memory/app_hook/Memory.stories.jsx":
/*!*****************************************************!*\
  !*** ./src/apps/Memory/app_hook/Memory.stories.jsx ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Memory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Memory */ "./src/apps/Memory/app_hook/Memory.jsx");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Memory__WEBPACK_IMPORTED_MODULE_2__["Memory"],{nbrOfTypes:4,allowedErrors:3});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Memory/App_hook",module).add("Play Memory!",function(){return _ref});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Memory/components/Board/Board.css":
/*!****************************************************!*\
  !*** ./src/apps/Memory/components/Board/Board.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../.storybook/sourceCodeUtils/webpackLoader.js??ref--10-0!./Board.css */ "./node_modules/css-loader/dist/cjs.js?!./.storybook/sourceCodeUtils/webpackLoader.js?!./src/apps/Memory/components/Board/Board.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/apps/Memory/components/Board/Board.jsx":
/*!****************************************************!*\
  !*** ./src/apps/Memory/components/Board/Board.jsx ***!
  \****************************************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board.css */ "./src/apps/Memory/components/Board/Board.css");
/* harmony import */ var _Board_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Board_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tile_Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Tile/Tile */ "./src/apps/Memory/components/Tile/Tile.jsx");
/**
 * @typedef {import("../../types").MemoryGame} MemoryGame
 *
 * @typedef {object} TileProps
 * @property {MemoryGame} game
 *
 * @param {TileProps} props
 */var Board=function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_Board_css__WEBPACK_IMPORTED_MODULE_2___default.a.board},props.game.cards.map(function(card,n){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Tile_Tile__WEBPACK_IMPORTED_MODULE_3__["Tile"],{key:n,cardState:card,handleClick:function handleClick(){return props.handleTileClick(n)}})}))};Board.displayName="Board",Board.__docgenInfo={description:"@typedef {import(\"../../types\").MemoryGame} MemoryGame\n\n@typedef {object} TileProps\n@property {MemoryGame} game\n\n@param {TileProps} props",methods:[],displayName:"Board"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Memory/components/Board/Board.jsx"]={name:"Board",docgenInfo:Board.__docgenInfo,path:"src/apps/Memory/components/Board/Board.jsx"});

/***/ }),

/***/ "./src/apps/Memory/components/Board/Board.stories.jsx":
/*!************************************************************!*\
  !*** ./src/apps/Memory/components/Board/Board.stories.jsx ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logic_getNewMemoryGame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/getNewMemoryGame */ "./src/apps/Memory/logic/getNewMemoryGame.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Board */ "./src/apps/Memory/components/Board/Board.jsx");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("apps/Memory/components/Board",module).add("awesome board",function(){var game=Object(_logic_getNewMemoryGame__WEBPACK_IMPORTED_MODULE_2__["getNewMemoryGame"])(3,666);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_3__["Board"],{game:game,handleTileClick:function handler(id){return console.log("Clicked card number",id)}})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Memory/components/Status/Status.jsx":
/*!******************************************************!*\
  !*** ./src/apps/Memory/components/Status/Status.jsx ***!
  \******************************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @typedef {import("../../types").MemoryGameStatus} MemoryGameStatus
 *
 * @typedef {object} StatusProps
 * @property {MemoryGameStatus} status
 *
 * @param {StatusProps} props
 */var Status=function(props){switch(props.status){case"idle":return"Click something!";case"looking":return"I wooooonder where the OTHER one is?!";case"lost":return"GAME OVER! SAD PANDA! U SUCK";case"won":return"OMG you did it! Celebraaaaation!";case"mistake":return"NOPE! Sorry (not sorry)";default:return"this should never ever ever happen";}};

/***/ }),

/***/ "./src/apps/Memory/components/Status/Status.stories.jsx":
/*!**************************************************************!*\
  !*** ./src/apps/Memory/components/Status/Status.stories.jsx ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Status */ "./src/apps/Memory/components/Status/Status.jsx");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Memory/components/Status",module).add("testing the Status",function(){var status=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["select"])("Game status",["won","lost","idle","mistake","looking"],"idle");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Status__WEBPACK_IMPORTED_MODULE_3__["Status"],{status:status})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Memory/components/Tile/Tile.css":
/*!**************************************************!*\
  !*** ./src/apps/Memory/components/Tile/Tile.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../../.storybook/sourceCodeUtils/webpackLoader.js??ref--10-0!./Tile.css */ "./node_modules/css-loader/dist/cjs.js?!./.storybook/sourceCodeUtils/webpackLoader.js?!./src/apps/Memory/components/Tile/Tile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/apps/Memory/components/Tile/Tile.jsx":
/*!**************************************************!*\
  !*** ./src/apps/Memory/components/Tile/Tile.jsx ***!
  \**************************************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile.css */ "./src/apps/Memory/components/Tile/Tile.css");
/* harmony import */ var _Tile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tile_css__WEBPACK_IMPORTED_MODULE_2__);
/**
 * @typedef {import("../../types").MemoryCard} MemoryCard
 *
 * @typedef {object} TileProps
 * @property {MemoryCard} cardState
 *
 * @param {TileProps} props
 */var Tile=function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{onClick:props.handleClick,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Tile_css__WEBPACK_IMPORTED_MODULE_2___default.a.tile,_Tile_css__WEBPACK_IMPORTED_MODULE_2___default.a[props.cardState.status])},"hidden"!==props.cardState.status&&props.cardState.type)};Tile.displayName="Tile",Tile.__docgenInfo={description:"@typedef {import(\"../../types\").MemoryCard} MemoryCard\n\n@typedef {object} TileProps\n@property {MemoryCard} cardState\n\n@param {TileProps} props",methods:[],displayName:"Tile"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Memory/components/Tile/Tile.jsx"]={name:"Tile",docgenInfo:Tile.__docgenInfo,path:"src/apps/Memory/components/Tile/Tile.jsx"});

/***/ }),

/***/ "./src/apps/Memory/components/Tile/Tile.stories.jsx":
/*!**********************************************************!*\
  !*** ./src/apps/Memory/components/Tile/Tile.stories.jsx ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tile */ "./src/apps/Memory/components/Tile/Tile.jsx");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Memory/components/Tile",module).add("a memory tile",function(){var status=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["select"])("Card status",["hidden","revealed","done"],"hidden");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_3__["Tile"],{cardState:{type:3,status:status},handleClick:function testClick(){console.log("CLICK")}})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Memory/components/UI/UI.jsx":
/*!**********************************************!*\
  !*** ./src/apps/Memory/components/UI/UI.jsx ***!
  \**********************************************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UI", function() { return UI; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Board/Board */ "./src/apps/Memory/components/Board/Board.jsx");
/* harmony import */ var _Status_Status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Status/Status */ "./src/apps/Memory/components/Status/Status.jsx");
/* harmony import */ var _logic_getMemoryGameStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/getMemoryGameStatus */ "./src/apps/Memory/logic/getMemoryGameStatus.js");
/**
 * @typedef {import("../../types").MemoryGame} MemoryGame
 *
 * @typedef {object} UIProps
 * @property {MemoryGame} game
 *
 * @param {UIProps} props
 */var UI=function(props){var status=Object(_logic_getMemoryGameStatus__WEBPACK_IMPORTED_MODULE_3__["getMemoryGameStatus"])(props.game);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Status_Status__WEBPACK_IMPORTED_MODULE_2__["Status"],{status:status}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Board_Board__WEBPACK_IMPORTED_MODULE_1__["Board"],{game:props.game,handleTileClick:props.handleTileClick}))};UI.displayName="UI",UI.__docgenInfo={description:"@typedef {import(\"../../types\").MemoryGame} MemoryGame\n\n@typedef {object} UIProps\n@property {MemoryGame} game\n\n@param {UIProps} props",methods:[],displayName:"UI"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/apps/Memory/components/UI/UI.jsx"]={name:"UI",docgenInfo:UI.__docgenInfo,path:"src/apps/Memory/components/UI/UI.jsx"});

/***/ }),

/***/ "./src/apps/Memory/components/UI/UI.stories.jsx":
/*!******************************************************!*\
  !*** ./src/apps/Memory/components/UI/UI.stories.jsx ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _logic_getNewMemoryGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/getNewMemoryGame */ "./src/apps/Memory/logic/getNewMemoryGame.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/apps/Memory/components/UI/UI.jsx");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("apps/Memory/components/UI",module).add("UI",function(){var game=Object(_logic_getNewMemoryGame__WEBPACK_IMPORTED_MODULE_1__["getNewMemoryGame"])(3,666);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_UI__WEBPACK_IMPORTED_MODULE_3__["UI"],{game:game,handleTileClick:function handler(id){return console.log("Clicked card number",id)}})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/apps/Memory/logic/getMemoryGameStatus.js":
/*!******************************************************!*\
  !*** ./src/apps/Memory/logic/getMemoryGameStatus.js ***!
  \******************************************************/
/*! exports provided: getMemoryGameStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMemoryGameStatus", function() { return getMemoryGameStatus; });
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 * @typedef {import("../types").MemoryGameStatus} MemoryGameStatus
 *
 * Helper function that takes a Memory game and returns current status
 * @param {MemoryGame} game
 * @return {MemoryGameStatus}
 */function getMemoryGameStatus(game){if(0===game.errorsLeft)return"lost";var counts=game.cards.reduce(function(memo,card){return _objectSpread(_objectSpread({},memo),{},_defineProperty({},card.status,memo[card.status]+1))},{hidden:0,done:0,revealed:0});return counts.done===game.cards.length?"won":2===counts.revealed?"mistake":1===counts.revealed?"looking":"idle"}

/***/ }),

/***/ "./src/apps/Memory/logic/getMemoryGameStatus.test.js":
/*!***********************************************************!*\
  !*** ./src/apps/Memory/logic/getMemoryGameStatus.test.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Memory/logic/getNewMemoryGame.js":
/*!***************************************************!*\
  !*** ./src/apps/Memory/logic/getNewMemoryGame.js ***!
  \***************************************************/
/*! exports provided: getNewMemoryGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewMemoryGame", function() { return getNewMemoryGame; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 *
 * Creates a new memory game with randomized card order
 * @param {number} nbrOfTypes
 * @param {number} allowedErrors
 * @return {MemoryGame}
 */function getNewMemoryGame(nbrOfTypes,allowedErrors){for(var range=Array.from(Array(nbrOfTypes)).map(function(i,n){return n}),cardTypes=range.concat(range),cards=[];cardTypes.length;){var randomIdx=Math.floor(Math.random()*cardTypes.length);cards.push({type:cardTypes.splice(randomIdx,1)[0],status:"hidden"})}return{errorsLeft:allowedErrors,cards:cards}}

/***/ }),

/***/ "./src/apps/Memory/logic/getNewMemoryGame.test.js":
/*!********************************************************!*\
  !*** ./src/apps/Memory/logic/getNewMemoryGame.test.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/apps/Memory/logic/performMove.js":
/*!**********************************************!*\
  !*** ./src/apps/Memory/logic/performMove.js ***!
  \**********************************************/
/*! exports provided: performMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "performMove", function() { return performMove; });
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getMemoryGameStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getMemoryGameStatus */ "./src/apps/Memory/logic/getMemoryGameStatus.js");
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null==arguments[i]?{}:arguments[i],i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key])}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))});return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}/**
 * @typedef {import("../types").MemoryGame} MemoryGame
 *
 * Make a move in a memory game
 * @param {MemoryGame} game
 * @param {number} cardIdx
 * @return {MemoryGame}
 */function performMove(game,cardIdx){var status=Object(_getMemoryGameStatus__WEBPACK_IMPORTED_MODULE_3__["getMemoryGameStatus"])(game),card=game.cards[cardIdx];if("lost"===status)return game;if("won"===status)return game;if("revealed"===card.status)return"looking"===status?game:_objectSpread(_objectSpread({},game),{},{cards:game.cards.map(function(card){return _objectSpread(_objectSpread({},card),{},{status:"revealed"===card.status?"hidden":card.status})})});if("hidden"===card.status){if("idle"===status)return _objectSpread(_objectSpread({},game),{},{cards:game.cards.map(function(card,n){return _objectSpread(_objectSpread({},card),{},{status:n===cardIdx?"revealed":card.status})})});if("looking"===status){var otherIdx=game.cards.findIndex(function(card){return"revealed"===card.status}),otherCard=game.cards[otherIdx];return card.type===otherCard.type?_objectSpread(_objectSpread({},game),{},{cards:game.cards.map(function(card,n){return _objectSpread(_objectSpread({},card),{},{status:n===cardIdx||n===otherIdx?"done":card.status})})}):_objectSpread(_objectSpread({},game),{},{errorsLeft:game.errorsLeft-1,cards:game.cards.map(function(card,n){return _objectSpread(_objectSpread({},card),{},{status:n===cardIdx?"revealed":card.status})})})}}return game}

/***/ }),

/***/ "./src/apps/Memory/logic/performMove.test.js":
/*!***************************************************!*\
  !*** ./src/apps/Memory/logic/performMove.test.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/ChessPiece/ChessPiece.css":
/*!************************************************!*\
  !*** ./src/examples/ChessPiece/ChessPiece.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../.storybook/sourceCodeUtils/webpackLoader.js??ref--10-0!./ChessPiece.css */ "./node_modules/css-loader/dist/cjs.js?!./.storybook/sourceCodeUtils/webpackLoader.js?!./src/examples/ChessPiece/ChessPiece.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"sourceMap":true,"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/examples/ChessPiece/ChessPiece.jsx":
/*!************************************************!*\
  !*** ./src/examples/ChessPiece/ChessPiece.jsx ***!
  \************************************************/
/*! exports provided: ChessPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPiece", function() { return ChessPiece; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-transition-group/Transition */ "./node_modules/react-transition-group/Transition.js");
/* harmony import */ var react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ChessPiece_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChessPiece.css */ "./src/examples/ChessPiece/ChessPiece.css");
/* harmony import */ var _ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ChessPiece_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ChessPiece.types */ "./src/examples/ChessPiece/ChessPiece.types.js");
function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _char={king:"\u265A",queen:"\u265B",rook:"\u265C",bishop:"\u265D",knight:"\u265E",pawn:"\u265F"};/**
 * @typedef {import("./ChessPiece.types").ChessPieceProps} ChessPieceProps
 *
 * @param {ChessPieceProps} props
 */var ChessPiece=function(props){var _classnames;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default.a.container,(_classnames={},_defineProperty(_classnames,_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default.a.available,"available"===props.mode),_defineProperty(_classnames,_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default.a.selected,"selected"===props.mode),_classnames))},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_2__["TransitionGroup"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_transition_group_Transition__WEBPACK_IMPORTED_MODULE_3___default.a,{key:props.piece,timeout:{enter:20,exit:500}},function(status){var _classnames2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_4___default()(_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default.a.icon,(_classnames2={},_defineProperty(_classnames2,_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default.a.entering,"entering"===status),_defineProperty(_classnames2,_ChessPiece_css__WEBPACK_IMPORTED_MODULE_5___default.a.exiting,"exiting"===status),_classnames2))},_char[props.piece])})))};ChessPiece.displayName="ChessPiece",ChessPiece.propTypes=_ChessPiece_types__WEBPACK_IMPORTED_MODULE_6__["ChessPieceProps"],ChessPiece.__docgenInfo={description:"@typedef {import(\"./ChessPiece.types\").ChessPieceProps} ChessPieceProps\n\n@param {ChessPieceProps} props",methods:[],displayName:"ChessPiece",composes:["./ChessPiece.types"]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/ChessPiece/ChessPiece.jsx"]={name:"ChessPiece",docgenInfo:ChessPiece.__docgenInfo,path:"src/examples/ChessPiece/ChessPiece.jsx"});

/***/ }),

/***/ "./src/examples/ChessPiece/ChessPiece.stories.jsx":
/*!********************************************************!*\
  !*** ./src/examples/ChessPiece/ChessPiece.stories.jsx ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/ChessPiece/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/ChessPiece (transition, CSS modules)",module).add("select with knob",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["ChessPiece"],{piece:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["select"])("Piece",["pawn","king","queen","rook","bishop","knight"],"pawn"),mode:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["select"])("Mode",["normal","available","selected"],"normal")})},{notes:"A chess piece using [CSS modules](https://github.com/css-modules/css-modules) and [React Transition Group](https://github.com/reactjs/react-transition-group) (and also the [classnames](https://github.com/JedWatson/classnames#readme) helper) "});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/ChessPiece/ChessPiece.types.js":
/*!*****************************************************!*\
  !*** ./src/examples/ChessPiece/ChessPiece.types.js ***!
  \*****************************************************/
/*! exports provided: ChessPieceType, ChessPieceMode, ChessPieceProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPieceType", function() { return ChessPieceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPieceMode", function() { return ChessPieceMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChessPieceProps", function() { return ChessPieceProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @typedef {'king'|'queen'|'rook'|'bishop'|'knight'|'pawn'} Piece
 * @typedef {'normal'|'available'|'selected'} Mode
 * 
 * @typedef {object} ChessPieceProps
 * @prop {Mode} mode
 * @prop {Piece} piece
 */var ChessPieceType=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([0]);var ChessPieceMode=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf([0]);var ChessPieceProps=prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({mode:ChessPieceMode,piece:ChessPieceType});

/***/ }),

/***/ "./src/examples/ChessPiece/index.js":
/*!******************************************!*\
  !*** ./src/examples/ChessPiece/index.js ***!
  \******************************************/
/*! exports provided: ChessPiece */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChessPiece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChessPiece */ "./src/examples/ChessPiece/ChessPiece.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChessPiece", function() { return _ChessPiece__WEBPACK_IMPORTED_MODULE_0__["ChessPiece"]; });



/***/ }),

/***/ "./src/examples/Clicker/Clicker_class/Clicker.jsx":
/*!********************************************************!*\
  !*** ./src/examples/Clicker/Clicker_class/Clicker.jsx ***!
  \********************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return Clicker; });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}// @ts-check
/**
 * @typedef {import("../types").ClickerProps} ClickerProps
 *
 * @typedef {object} ClickerState
 * @prop {number} count
 *
 * @extends {Component<ClickerProps, ClickerState>}
 */var Clicker=/*#__PURE__*/function(_Component){/**
   * @param {ClickerProps} props
   */function Clicker(props){var _this;return _classCallCheck(this,Clicker),_this=_super.call(this,props),_defineProperty(_assertThisInitialized(_this),"increase",function(){return _this.setState({count:_this.state.count+1})}),_defineProperty(_assertThisInitialized(_this),"decrease",function(){return _this.setState({count:_this.state.count-1})}),_this.state={count:props.start||0},_this}// note that we assign arrow functions here to make sure `this`
// points to the right thing when passed as a reference
_inherits(Clicker,_Component);var _super=_createSuper(Clicker);return _createClass(Clicker,[{key:"render",value:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Current count: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{"data-qa":"count"},this.state.count),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"increase",onClick:this.increase},"Increase"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"decrease",onClick:this.decrease},"Decrease"))}}]),Clicker}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);Clicker.displayName="Clicker",Clicker.__docgenInfo={description:"@typedef {import(\"../types\").ClickerProps} ClickerProps\n\n@typedef {object} ClickerState\n@prop {number} count\n\n@extends {Component<ClickerProps, ClickerState>}",methods:[{name:"increase",docblock:null,modifiers:[],params:[],returns:null},{name:"decrease",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Clicker"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Clicker/Clicker_class/Clicker.jsx"]={name:"Clicker",docgenInfo:Clicker.__docgenInfo,path:"src/examples/Clicker/Clicker_class/Clicker.jsx"});

/***/ }),

/***/ "./src/examples/Clicker/Clicker_class/Clicker.stories.jsx":
/*!****************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_class/Clicker.stories.jsx ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/Clicker/Clicker_class/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Clicker (state handling)/Clicker (class)",module).add("dynamic",function(){var start=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["number"])("Initial count",0);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Clicker"],{start:start,key:start})},{notes:"A basic stateful component using a [class component](https://reactjs.org/docs/state-and-lifecycle.html)."});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Clicker/Clicker_class/Clicker.test.jsx":
/*!*************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_class/Clicker.test.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Clicker/Clicker_class/index.js":
/*!*****************************************************!*\
  !*** ./src/examples/Clicker/Clicker_class/index.js ***!
  \*****************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clicker */ "./src/examples/Clicker/Clicker_class/Clicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return _Clicker__WEBPACK_IMPORTED_MODULE_0__["Clicker"]; });



/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_reducer/Clicker.jsx":
/*!***************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_reducer/Clicker.jsx ***!
  \***************************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return Clicker; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}/**
 * @typedef {import("../types").ClickerProps} ClickerProps
 *
 * @param {ClickerProps} props
 */var Clicker=function(props){var _useReducer=Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function(state,action){return state+action},props.start||0),_useReducer2=_slicedToArray(_useReducer,2),count=_useReducer2[0],dispatch=_useReducer2[1];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Current count: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{"data-qa":"count"},count),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"increase",onClick:function onClick(){return dispatch(1)}},"Increase"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"decrease",onClick:function onClick(){return dispatch(-1)}},"Decrease"))};Clicker.displayName="Clicker",Clicker.__docgenInfo={description:"@typedef {import(\"../types\").ClickerProps} ClickerProps\n\n@param {ClickerProps} props",methods:[],displayName:"Clicker"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Clicker/Clicker_hook_reducer/Clicker.jsx"]={name:"Clicker",docgenInfo:Clicker.__docgenInfo,path:"src/examples/Clicker/Clicker_hook_reducer/Clicker.jsx"});

/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_reducer/Clicker.stories.jsx":
/*!***********************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_reducer/Clicker.stories.jsx ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/Clicker/Clicker_hook_reducer/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Clicker (state handling)/Clicker (hook reducer)",module).add("dynamic",function(){var start=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["number"])("Initial count",0);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Clicker"],{start:start,key:start})},{notes:"A basic stateful component using the [<code>useReducer</code> hook](https://reactjs.org/docs/hooks-reference.html#usereducer)."});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_reducer/Clicker.test.jsx":
/*!********************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_reducer/Clicker.test.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_reducer/index.js":
/*!************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_reducer/index.js ***!
  \************************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clicker */ "./src/examples/Clicker/Clicker_hook_reducer/Clicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return _Clicker__WEBPACK_IMPORTED_MODULE_0__["Clicker"]; });



/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_state/Clicker.jsx":
/*!*************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_state/Clicker.jsx ***!
  \*************************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return Clicker; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}/**
 * @typedef {import("../types").ClickerProps} ClickerProps
 *
 * @param {ClickerProps} props
 */var Clicker=function(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.start||0),_useState2=_slicedToArray(_useState,2),count=_useState2[0],setCount=_useState2[1];return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Current count: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{"data-qa":"count"},count),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"increase",onClick:function onClick(){return setCount(count+1)}},"Increase"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"decrease",onClick:function onClick(){return setCount(count-1)}},"Decrease"))};Clicker.displayName="Clicker",Clicker.__docgenInfo={description:"@typedef {import(\"../types\").ClickerProps} ClickerProps\n\n@param {ClickerProps} props",methods:[],displayName:"Clicker"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Clicker/Clicker_hook_state/Clicker.jsx"]={name:"Clicker",docgenInfo:Clicker.__docgenInfo,path:"src/examples/Clicker/Clicker_hook_state/Clicker.jsx"});

/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_state/Clicker.stories.jsx":
/*!*********************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_state/Clicker.stories.jsx ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/Clicker/Clicker_hook_state/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Clicker (state handling)/Clicker (hook state)",module).add("dynamic",function(){var start=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["number"])("Initial count",0);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Clicker"],{start:start,key:start})},{notes:"A basic stateful component using the [<code>useState</code> hook](https://reactjs.org/docs/hooks-state.html)."});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_state/Clicker.test.jsx":
/*!******************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_state/Clicker.test.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Clicker/Clicker_hook_state/index.js":
/*!**********************************************************!*\
  !*** ./src/examples/Clicker/Clicker_hook_state/index.js ***!
  \**********************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clicker */ "./src/examples/Clicker/Clicker_hook_state/Clicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return _Clicker__WEBPACK_IMPORTED_MODULE_0__["Clicker"]; });



/***/ }),

/***/ "./src/examples/Clicker/Clicker_oldClass/Clicker.jsx":
/*!***********************************************************!*\
  !*** ./src/examples/Clicker/Clicker_oldClass/Clicker.jsx ***!
  \***********************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return Clicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! create-react-class */ "./node_modules/create-react-class/index.js");
/* harmony import */ var create_react_class__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(create_react_class__WEBPACK_IMPORTED_MODULE_1__);
var Clicker=create_react_class__WEBPACK_IMPORTED_MODULE_1___default()({displayName:"Clicker",getInitialState:function getInitialState(){return{count:this.props.start||0}},increase:function increase(){this.setState({count:this.state.count+1})},decrease:function decrease(){this.setState({count:this.state.count-1})},render:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Current count: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"data-qa":"count"},this.state.count),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{"data-qa":"increase",onClick:this.increase},"Increase"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{"data-qa":"decrease",onClick:this.decrease},"Decrease"))}});Clicker.__docgenInfo={description:"",methods:[{name:"increase",docblock:null,modifiers:[],params:[],returns:null},{name:"decrease",docblock:null,modifiers:[],params:[],returns:null}]},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Clicker/Clicker_oldClass/Clicker.jsx"]={name:"Clicker",docgenInfo:Clicker.__docgenInfo,path:"src/examples/Clicker/Clicker_oldClass/Clicker.jsx"});

/***/ }),

/***/ "./src/examples/Clicker/Clicker_oldClass/Clicker.stories.jsx":
/*!*******************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_oldClass/Clicker.stories.jsx ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/Clicker/Clicker_oldClass/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Clicker (state handling)/Clicker (old createClass)",module).add("dynamic",function(){var start=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["number"])("Initial count",0),ClickerFactory=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createFactory(___WEBPACK_IMPORTED_MODULE_3__["Clicker"]);// detour because old legacy component
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ClickerFactory,{start:start,key:start})},{notes:"A basic stateful component using the deprecated [<code>createReactClass</code>](https://reactjs.org/docs/react-without-es6.html)."});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Clicker/Clicker_oldClass/Clicker.test.jsx":
/*!****************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_oldClass/Clicker.test.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Clicker/Clicker_oldClass/index.js":
/*!********************************************************!*\
  !*** ./src/examples/Clicker/Clicker_oldClass/index.js ***!
  \********************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clicker */ "./src/examples/Clicker/Clicker_oldClass/Clicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return _Clicker__WEBPACK_IMPORTED_MODULE_0__["Clicker"]; });



/***/ }),

/***/ "./src/examples/Clicker/Clicker_recompose/Clicker.jsx":
/*!************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_recompose/Clicker.jsx ***!
  \************************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return Clicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose */ "./node_modules/recompose/dist/Recompose.esm.js");
var Clicker=function(props){var start=props.start||0,withCountState=Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withState"])("count","setCount",start),InnerClicker=withCountState(function(_ref){var count=_ref.count,setCount=_ref.setCount;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Current count: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{"data-qa":"count"},count),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{"data-qa":"increase",onClick:function onClick(){return setCount(count+1)}},"Increase"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{"data-qa":"decrease",onClick:function onClick(){return setCount(count-1)}},"Decrease"))});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerClicker,null)};Clicker.displayName="Clicker",Clicker.__docgenInfo={description:"",methods:[],displayName:"Clicker"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Clicker/Clicker_recompose/Clicker.jsx"]={name:"Clicker",docgenInfo:Clicker.__docgenInfo,path:"src/examples/Clicker/Clicker_recompose/Clicker.jsx"});

/***/ }),

/***/ "./src/examples/Clicker/Clicker_recompose/Clicker.stories.jsx":
/*!********************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_recompose/Clicker.stories.jsx ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/Clicker/Clicker_recompose/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Clicker (state handling)/Clicker (recompose)",module).add("dynamic",function(){var start=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["number"])("Initial count",0);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Clicker"],{start:start,key:start})},{notes:"A basic stateful component using the [<code>Recompose</code> library](https://github.com/acdlite/recompose), which can be seen as a precursor to the new [hooks API](https://reactjs.org/docs/hooks-intro.html)."});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Clicker/Clicker_recompose/Clicker.test.jsx":
/*!*****************************************************************!*\
  !*** ./src/examples/Clicker/Clicker_recompose/Clicker.test.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Clicker/Clicker_recompose/index.js":
/*!*********************************************************!*\
  !*** ./src/examples/Clicker/Clicker_recompose/index.js ***!
  \*********************************************************/
/*! exports provided: Clicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clicker */ "./src/examples/Clicker/Clicker_recompose/Clicker.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clicker", function() { return _Clicker__WEBPACK_IMPORTED_MODULE_0__["Clicker"]; });



/***/ }),

/***/ "./src/examples/Form/Form_controlled_class/Form.jsx":
/*!**********************************************************!*\
  !*** ./src/examples/Form/Form_controlled_class/Form.jsx ***!
  \**********************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend",null,"Enter your name");var Form=/*#__PURE__*/function(_React$Component){function Form(){var _this;_classCallCheck(this,Form);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_defineProperty(_assertThisInitialized(_this),"state",{field:"John Doe"}),_defineProperty(_assertThisInitialized(_this),"handleType",function(e){return _this.setState({field:e.target.value})}),_defineProperty(_assertThisInitialized(_this),"handleKeyPress",function(e){"Enter"===e.key&&_this.submitName()}),_defineProperty(_assertThisInitialized(_this),"submitName",function(){_this.props.onSubmit(_this.state.field),_this.setState({field:""})}),_this}_inherits(Form,_React$Component);var _super=_createSuper(Form);return _createClass(Form,[{key:"render",value:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset",null,_ref,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{"data-qa":"name-field",type:"text",onChange:this.handleType,onKeyPress:this.handleKeyPress,value:this.state.field}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{"data-qa":"submit-btn",onClick:this.submitName},"Submit!"))}}]),Form}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);Form.displayName="Form",Form.__docgenInfo={description:"",methods:[{name:"handleType",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"handleKeyPress",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"submitName",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Form"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Form/Form_controlled_class/Form.jsx"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src/examples/Form/Form_controlled_class/Form.jsx"});

/***/ }),

/***/ "./src/examples/Form/Form_controlled_class/Form.stories.jsx":
/*!******************************************************************!*\
  !*** ./src/examples/Form/Form_controlled_class/Form.stories.jsx ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/examples/Form/Form_controlled_class/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Form (controlled vs uncontrolled)/Form (controlled, class)",module).add("output in console",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Form"],{onSubmit:function onSubmit(name){return console.log("Submitted",name)}})},{notes:"A form using the [controlled pattern](https://reactjs.org/docs/forms.html#controlled-components)"});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Form/Form_controlled_class/Form.test.jsx":
/*!***************************************************************!*\
  !*** ./src/examples/Form/Form_controlled_class/Form.test.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Form/Form_controlled_class/index.js":
/*!**********************************************************!*\
  !*** ./src/examples/Form/Form_controlled_class/index.js ***!
  \**********************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/examples/Form/Form_controlled_class/Form.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["Form"]; });



/***/ }),

/***/ "./src/examples/Form/Form_controlled_hook/Form.jsx":
/*!*********************************************************!*\
  !*** ./src/examples/Form/Form_controlled_hook/Form.jsx ***!
  \*********************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!(i&&_arr.length===i));_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i["return"]||_i["return"]()}finally{if(_d)throw _e}}return _arr}}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("legend",null,"Enter your name");var Form=function(props){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("John Doe"),_useState2=_slicedToArray(_useState,2),field=_useState2[0],setField=_useState2[1],handleSubmit=function(){props.onSubmit(field),setField("")};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset",null,_ref,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{"data-qa":"name-field",type:"text",onChange:function handleType(e){setField(e.target.value)},onKeyPress:function handleKeyPress(e){"Enter"===e.key&&handleSubmit()},value:field}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button",{"data-qa":"submit-btn",onClick:handleSubmit},"Submit!"))};Form.displayName="Form",Form.__docgenInfo={description:"",methods:[],displayName:"Form"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Form/Form_controlled_hook/Form.jsx"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src/examples/Form/Form_controlled_hook/Form.jsx"});

/***/ }),

/***/ "./src/examples/Form/Form_controlled_hook/Form.stories.jsx":
/*!*****************************************************************!*\
  !*** ./src/examples/Form/Form_controlled_hook/Form.stories.jsx ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/examples/Form/Form_controlled_hook/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Form (controlled vs uncontrolled)/Form (controlled, hook)",module).add("output in console",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Form"],{onSubmit:function onSubmit(name){return console.log("Submitted",name)}})},{notes:"A form using the [controlled pattern](https://reactjs.org/docs/forms.html#controlled-components)"});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Form/Form_controlled_hook/Form.test.jsx":
/*!**************************************************************!*\
  !*** ./src/examples/Form/Form_controlled_hook/Form.test.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Form/Form_controlled_hook/index.js":
/*!*********************************************************!*\
  !*** ./src/examples/Form/Form_controlled_hook/index.js ***!
  \*********************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/examples/Form/Form_controlled_hook/Form.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["Form"]; });



/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_class/Form.jsx":
/*!************************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_class/Form.jsx ***!
  \************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend",null,"Enter your name");var Form=/*#__PURE__*/function(_React$Component){function Form(){var _this;_classCallCheck(this,Form);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_defineProperty(_assertThisInitialized(_this),"input",/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])()),_defineProperty(_assertThisInitialized(_this),"handleKeyPress",function(e){"Enter"===e.key&&_this.submitName()}),_defineProperty(_assertThisInitialized(_this),"submitName",function(){_this.props.onSubmit(_this.input.current.value),_this.input.current.value=""}),_this}_inherits(Form,_React$Component);var _super=_createSuper(Form);return _createClass(Form,[{key:"render",value:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset",null,_ref,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{"data-qa":"name-field",type:"text",onKeyPress:this.handleKeyPress,ref:this.input,defaultValue:"John Doe"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{"data-qa":"submit-btn",onClick:this.submitName},"Submit!"))}}]),Form}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);Form.displayName="Form",Form.__docgenInfo={description:"",methods:[{name:"handleKeyPress",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"submitName",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Form"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Form/Form_uncontrolled_class/Form.jsx"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src/examples/Form/Form_uncontrolled_class/Form.jsx"});

/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_class/Form.stories.jsx":
/*!********************************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_class/Form.stories.jsx ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/examples/Form/Form_uncontrolled_class/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Form (controlled vs uncontrolled)/Form (uncontrolled, class)",module).add("output in console",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Form"],{onSubmit:function onSubmit(name){return console.log("Submitted",name)}})},{notes:"A form using the [uncontrolled pattern](https://reactjs.org/docs/uncontrolled-components.html)"});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_class/Form.test.jsx":
/*!*****************************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_class/Form.test.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_class/index.js":
/*!************************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_class/index.js ***!
  \************************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/examples/Form/Form_uncontrolled_class/Form.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["Form"]; });



/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_hook/Form.jsx":
/*!***********************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_hook/Form.jsx ***!
  \***********************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("legend",null,"Enter your name");var Form=function(props){var inputRef=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null),handleSubmit=function(){props.onSubmit(inputRef.current.value),inputRef.current.value=""};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset",null,_ref,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{ref:inputRef,"data-qa":"name-field",type:"text",onKeyPress:function handleKeyPress(e){"Enter"===e.key&&handleSubmit()},defaultValue:"John Doe"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{"data-qa":"submit-btn",onClick:handleSubmit},"Submit!"))};Form.displayName="Form",Form.__docgenInfo={description:"",methods:[],displayName:"Form"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Form/Form_uncontrolled_hook/Form.jsx"]={name:"Form",docgenInfo:Form.__docgenInfo,path:"src/examples/Form/Form_uncontrolled_hook/Form.jsx"});

/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_hook/Form.stories.jsx":
/*!*******************************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_hook/Form.stories.jsx ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/examples/Form/Form_uncontrolled_hook/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Form (controlled vs uncontrolled)/Form (uncontrolled, hook)",module).add("output in console",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["Form"],{onSubmit:function onSubmit(name){return console.log("Submitted",name)}})},{notes:"A form using the [uncontrolled pattern](https://reactjs.org/docs/uncontrolled-components.html)"});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_hook/Form.test.jsx":
/*!****************************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_hook/Form.test.jsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Form/Form_uncontrolled_hook/index.js":
/*!***********************************************************!*\
  !*** ./src/examples/Form/Form_uncontrolled_hook/index.js ***!
  \***********************************************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./src/examples/Form/Form_uncontrolled_hook/Form.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return _Form__WEBPACK_IMPORTED_MODULE_0__["Form"]; });



/***/ }),

/***/ "./src/examples/Hello/Hello.jsx":
/*!**************************************!*\
  !*** ./src/examples/Hello/Hello.jsx ***!
  \**************************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return Hello; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var Hello=function(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,"Hello ",props.name,"!")};Hello.displayName="Hello",Hello.__docgenInfo={description:"",methods:[],displayName:"Hello"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Hello/Hello.jsx"]={name:"Hello",docgenInfo:Hello.__docgenInfo,path:"src/examples/Hello/Hello.jsx"});

/***/ }),

/***/ "./src/examples/Hello/Hello.stories.jsx":
/*!**********************************************!*\
  !*** ./src/examples/Hello/Hello.stories.jsx ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/Hello/index.js");
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Hello (basic rendering)",module).add("change input in the Knobs tab",function(){var name=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("Name","John Doe");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Hello"],{name:name})},{notes:"A super-simple component that just takes a prop and renders it."});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Hello/Hello.test.jsx":
/*!*******************************************!*\
  !*** ./src/examples/Hello/Hello.test.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/Hello/index.js":
/*!*************************************!*\
  !*** ./src/examples/Hello/index.js ***!
  \*************************************/
/*! exports provided: Hello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Hello__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hello */ "./src/examples/Hello/Hello.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hello", function() { return _Hello__WEBPACK_IMPORTED_MODULE_0__["Hello"]; });



/***/ }),

/***/ "./src/examples/Swedify/Swedify_callbackRef/Swedify.jsx":
/*!**************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_callbackRef/Swedify.jsx ***!
  \**************************************************************/
/*! exports provided: Swedify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swedify", function() { return Swedify; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swedifyPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../swedifyPlugin */ "./src/examples/Swedify/swedifyPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
Object(_swedifyPlugin__WEBPACK_IMPORTED_MODULE_1__["registerSwedify"])();// slight cheating since ref will be called after every render
var Swedify=function(_ref){var children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:function ref(el){return jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).swedify()}},children)};Swedify.displayName="Swedify",Swedify.__docgenInfo={description:"",methods:[],displayName:"Swedify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Swedify/Swedify_callbackRef/Swedify.jsx"]={name:"Swedify",docgenInfo:Swedify.__docgenInfo,path:"src/examples/Swedify/Swedify_callbackRef/Swedify.jsx"});

/***/ }),

/***/ "./src/examples/Swedify/Swedify_callbackRef/Swedify.stories.jsx":
/*!**********************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_callbackRef/Swedify.stories.jsx ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Swedify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swedify */ "./src/examples/Swedify/Swedify_callbackRef/Swedify.jsx");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Swedify__WEBPACK_IMPORTED_MODULE_2__["Swedify"],null,"Swedified via callback ref!");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Swedify (DOM manip)/Swedify (callback ref)",module).add("dynamic",function(){return _ref},{notes:{markdown:"DOM manipulation via [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs)."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Swedify/Swedify_createRef/Swedify.jsx":
/*!************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_createRef/Swedify.jsx ***!
  \************************************************************/
/*! exports provided: Swedify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swedify", function() { return Swedify; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swedifyPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swedifyPlugin */ "./src/examples/Swedify/swedifyPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(_swedifyPlugin__WEBPACK_IMPORTED_MODULE_3__["registerSwedify"])();var Swedify=/*#__PURE__*/function(_React$Component){function Swedify(){var _this;_classCallCheck(this,Swedify);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_defineProperty(_assertThisInitialized(_this),"ref",/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])()),_this}_inherits(Swedify,_React$Component);var _super=_createSuper(Swedify);return _createClass(Swedify,[{key:"componentDidMount",value:function componentDidMount(){jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.ref.current).swedify()}},{key:"render",value:function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{ref:this.ref},this.props.children)}}]),Swedify}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);Swedify.displayName="Swedify",Swedify.__docgenInfo={description:"",methods:[],displayName:"Swedify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Swedify/Swedify_createRef/Swedify.jsx"]={name:"Swedify",docgenInfo:Swedify.__docgenInfo,path:"src/examples/Swedify/Swedify_createRef/Swedify.jsx"});

/***/ }),

/***/ "./src/examples/Swedify/Swedify_createRef/Swedify.stories.jsx":
/*!********************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_createRef/Swedify.stories.jsx ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Swedify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swedify */ "./src/examples/Swedify/Swedify_createRef/Swedify.jsx");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Swedify__WEBPACK_IMPORTED_MODULE_2__["Swedify"],null,"Swedified via class and createRef!");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Swedify (DOM manip)/Swedify (createRef, class)",module).add("dynamic",function(){return _ref},{notes:{markdown:"DOM manipulation via [createRef](https://reactjs.org/docs/refs-and-the-dom.html)."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Swedify/Swedify_stringRef/Swedify.jsx":
/*!************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_stringRef/Swedify.jsx ***!
  \************************************************************/
/*! exports provided: Swedify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swedify", function() { return Swedify; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _swedifyPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../swedifyPlugin */ "./src/examples/Swedify/swedifyPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object(_swedifyPlugin__WEBPACK_IMPORTED_MODULE_3__["registerSwedify"])();var Swedify=/*#__PURE__*/function(_React$Component){function Swedify(){var _this;_classCallCheck(this,Swedify);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_defineProperty(_assertThisInitialized(_this),"ref",/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])()),_this}_inherits(Swedify,_React$Component);var _super=_createSuper(Swedify);return _createClass(Swedify,[{key:"componentDidMount",value:function componentDidMount(){jquery__WEBPACK_IMPORTED_MODULE_4___default()(this.refs.toBeSwedified).swedify()}},{key:"render",value:function render(){// eslint-disable-next-line react/no-string-refs
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{ref:"toBeSwedified"},this.props.children)}}]),Swedify}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);Swedify.displayName="Swedify",Swedify.__docgenInfo={description:"",methods:[],displayName:"Swedify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Swedify/Swedify_stringRef/Swedify.jsx"]={name:"Swedify",docgenInfo:Swedify.__docgenInfo,path:"src/examples/Swedify/Swedify_stringRef/Swedify.jsx"});

/***/ }),

/***/ "./src/examples/Swedify/Swedify_stringRef/Swedify.stories.jsx":
/*!********************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_stringRef/Swedify.stories.jsx ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Swedify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swedify */ "./src/examples/Swedify/Swedify_stringRef/Swedify.jsx");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Swedify__WEBPACK_IMPORTED_MODULE_2__["Swedify"],null,"Swedified via string ref (deprecated)");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Swedify (DOM manip)/Swedify (createRef, class)",module).add("dynamic",function(){return _ref},{notes:{markdown:"DOM manipulation via [createRef](https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs)."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Swedify/Swedify_useRef/Swedify.jsx":
/*!*********************************************************!*\
  !*** ./src/examples/Swedify/Swedify_useRef/Swedify.jsx ***!
  \*********************************************************/
/*! exports provided: Swedify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swedify", function() { return Swedify; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swedifyPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../swedifyPlugin */ "./src/examples/Swedify/swedifyPlugin.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
Object(_swedifyPlugin__WEBPACK_IMPORTED_MODULE_1__["registerSwedify"])();var Swedify=function(_ref){var children=_ref.children,ref=Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function(){jquery__WEBPACK_IMPORTED_MODULE_2___default()(ref.current).swedify(),[ref.current]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{ref:ref},children)};Swedify.displayName="Swedify",Swedify.__docgenInfo={description:"",methods:[],displayName:"Swedify"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/Swedify/Swedify_useRef/Swedify.jsx"]={name:"Swedify",docgenInfo:Swedify.__docgenInfo,path:"src/examples/Swedify/Swedify_useRef/Swedify.jsx"});

/***/ }),

/***/ "./src/examples/Swedify/Swedify_useRef/Swedify.stories.jsx":
/*!*****************************************************************!*\
  !*** ./src/examples/Swedify/Swedify_useRef/Swedify.stories.jsx ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Swedify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Swedify */ "./src/examples/Swedify/Swedify_useRef/Swedify.jsx");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Swedify__WEBPACK_IMPORTED_MODULE_2__["Swedify"],null,"Swedified via useRef!");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/Swedify (DOM manip)/Swedify (useRef)",module).add("dynamic",function(){return _ref},{notes:{markdown:"DOM manipulation via [useRef hook](https://reactjs.org/docs/hooks-reference.html#useref)."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/Swedify/swedifyPlugin.js":
/*!***********************************************!*\
  !*** ./src/examples/Swedify/swedifyPlugin.js ***!
  \***********************************************/
/*! exports provided: registerSwedify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSwedify", function() { return registerSwedify; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
// Pretend that this is a RIDICULOUSLY complex jQuery plugin! :D
function registerSwedify(){jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.swedify=function(){return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).css({border:"5px solid blue",backgroundColor:"yellow",padding:5})}}

/***/ }),

/***/ "./src/examples/User/User/User.jsx":
/*!*****************************************!*\
  !*** ./src/examples/User/User/User.jsx ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_UserContext */ "./src/examples/User/User/_UserContext.js");
var User=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"].Consumer,null,function(value){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,value.name||"Anonymous"," ",value.loggedIn&&"(authenticated)")})};User.displayName="User",User.__docgenInfo={description:"",methods:[],displayName:"User"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/User/User/User.jsx"]={name:"User",docgenInfo:User.__docgenInfo,path:"src/examples/User/User/User.jsx"});

/***/ }),

/***/ "./src/examples/User/User/User.stories.jsx":
/*!*************************************************!*\
  !*** ./src/examples/User/User/User.stories.jsx ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/User/User/index.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_UserContext */ "./src/examples/User/User/_UserContext.js");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["User"],null))));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/User (data from context)/User (context)",module).add("dynamic",function(){var userData={name:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("Name","Johan Hegg"),loggedIn:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["boolean"])("Logged in",!0)};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"].Provider,{value:userData},_ref)},{notes:{markdown:"A component fetching data from the [React context API](https://reactjs.org/docs/context.html)."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/User/User/User.test.jsx":
/*!**********************************************!*\
  !*** ./src/examples/User/User/User.test.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/User/User/_UserContext.js":
/*!************************************************!*\
  !*** ./src/examples/User/User/_UserContext.js ***!
  \************************************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// normally this file would be elsewhere in the app
var UserContext=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({name:"anonymous",loggedIn:!1});

/***/ }),

/***/ "./src/examples/User/User/index.js":
/*!*****************************************!*\
  !*** ./src/examples/User/User/index.js ***!
  \*****************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/examples/User/User/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });



/***/ }),

/***/ "./src/examples/User/User_hook/User.jsx":
/*!**********************************************!*\
  !*** ./src/examples/User/User_hook/User.jsx ***!
  \**********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_UserContext */ "./src/examples/User/User_hook/_UserContext.js");
var User=function(){var user=Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_UserContext__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,user.name||"Anonymous"," ",user.loggedIn&&"(authenticated)")};User.displayName="User",User.__docgenInfo={description:"",methods:[],displayName:"User"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/User/User_hook/User.jsx"]={name:"User",docgenInfo:User.__docgenInfo,path:"src/examples/User/User_hook/User.jsx"});

/***/ }),

/***/ "./src/examples/User/User_hook/User.stories.jsx":
/*!******************************************************!*\
  !*** ./src/examples/User/User_hook/User.stories.jsx ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/User/User_hook/index.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_UserContext */ "./src/examples/User/User_hook/_UserContext.js");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["User"],null))));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/User (data from context)/User (hook)",module).add("dynamic",function(){var userData={name:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("Name","Johan Hegg"),loggedIn:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["boolean"])("Logged in",!0)};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"].Provider,{value:userData},_ref)},{notes:{markdown:"A version of <code>User</code> that accesses data from [React context API](https://reactjs.org/docs/context.html) through the [<code>useContext</code> hook](https://reactjs.org/docs/hooks-reference.html#usecontext)."}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/User/User_hook/User.test.jsx":
/*!***************************************************!*\
  !*** ./src/examples/User/User_hook/User.test.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/User/User_hook/_UserContext.js":
/*!*****************************************************!*\
  !*** ./src/examples/User/User_hook/_UserContext.js ***!
  \*****************************************************/
/*! exports provided: UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// normally this file would be elsewhere in the app
var UserContext=/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({name:"anonymous",loggedIn:!1});

/***/ }),

/***/ "./src/examples/User/User_hook/index.js":
/*!**********************************************!*\
  !*** ./src/examples/User/User_hook/index.js ***!
  \**********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/examples/User/User_hook/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });



/***/ }),

/***/ "./src/examples/User/User_old/User.jsx":
/*!*********************************************!*\
  !*** ./src/examples/User/User_old/User.jsx ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_UserContext */ "./src/examples/User/User_old/_UserContext.jsx");
var User=function(props,context){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,context.user.name||"Anonymous"," ",context.user.loggedIn&&"(authenticated)")};User.displayName="User",User.contextTypes={user:_UserContext__WEBPACK_IMPORTED_MODULE_2__["user"]},User.__docgenInfo={description:"",methods:[],displayName:"User",context:{user:{type:{name:"custom",raw:"user"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/User/User_old/User.jsx"]={name:"User",docgenInfo:User.__docgenInfo,path:"src/examples/User/User_old/User.jsx"});

/***/ }),

/***/ "./src/examples/User/User_old/User.stories.jsx":
/*!*****************************************************!*\
  !*** ./src/examples/User/User_old/User.stories.jsx ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-knobs */ "./node_modules/@storybook/addon-knobs/dist/index.js");
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/examples/User/User_old/index.js");
/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_UserContext */ "./src/examples/User/User_old/_UserContext.jsx");
var _ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["User"],null))));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["storiesOf"])("examples/User (data from context)/User (old context)",module).add("dynamic",function(){var userData={name:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["text"])("Name","Johan Hegg"),loggedIn:Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_2__["boolean"])("Logged in",!0)};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserContext__WEBPACK_IMPORTED_MODULE_4__["UserContext"],{key:JSON.stringify(userData),user:userData},_ref)},{notes:{markdown:"\nA version of <code>User</code> that reads data from the [old deprecated context API](https://reactjs.org/docs/legacy-context.html).\n"}});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/examples/User/User_old/User.test.jsx":
/*!**************************************************!*\
  !*** ./src/examples/User/User_old/User.test.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/examples/User/User_old/_UserContext.jsx":
/*!*****************************************************!*\
  !*** ./src/examples/User/User_old/_UserContext.jsx ***!
  \*****************************************************/
/*! exports provided: user, UserContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj){"@babel/helpers - typeof";return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return call&&("object"===_typeof(call)||"function"==typeof call)?call:_assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var user=prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({name:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,loggedIn:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool});var UserContext=/*#__PURE__*/function(_React$Component){function UserContext(props){var _this;return _classCallCheck(this,UserContext),_this=_super.call(this,props),_this.state={user:props.user},_this}_inherits(UserContext,_React$Component);var _super=_createSuper(UserContext);return _createClass(UserContext,[{key:"getChildContext",value:function getChildContext(){return{user:this.state.user}}},{key:"render",value:function render(){return this.props.children}}]),UserContext}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);UserContext.displayName="UserContext",UserContext.childContextTypes={user:user},UserContext.__docgenInfo={description:"",methods:[],displayName:"UserContext",childContext:{user:{type:{name:"custom",raw:"user"},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/examples/User/User_old/_UserContext.jsx"]={name:"UserContext",docgenInfo:UserContext.__docgenInfo,path:"src/examples/User/User_old/_UserContext.jsx"});

/***/ }),

/***/ "./src/examples/User/User_old/index.js":
/*!*********************************************!*\
  !*** ./src/examples/User/User_old/index.js ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/examples/User/User_old/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_0__["User"]; });



/***/ }),

/***/ "./src/home/frontpage.jpg":
/*!********************************!*\
  !*** ./src/home/frontpage.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/frontpage.279e9058.jpg";

/***/ }),

/***/ "./src/home/home.stories.jsx":
/*!***********************************!*\
  !*** ./src/home/home.stories.jsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/react */ "./node_modules/@storybook/react/dist/client/index.js");
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-links */ "./node_modules/@storybook/addon-links/dist/index.js");
/* harmony import */ var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _frontpage_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frontpage.jpg */ "./src/home/frontpage.jpg");
/* harmony import */ var _frontpage_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_frontpage_jpg__WEBPACK_IMPORTED_MODULE_3__);
var image={src:_frontpage_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"my image"},_ref=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Welcome to (some of) the training materials for"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"http://edument.se",target:"_blank",rel:"noopener noreferrer"},"Edument"),"'s course in"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://edument.se/en/education/categories/web-development-courses/advanced-react",target:"_blank",rel:"noopener noreferrer"},"Advanced React"),"!"),_ref2=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"There'll be more thorough instructions here eventually; for now, see the README file in the"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/edumentab/react-examples-storybook",target:"_blank",rel:"noopener noreferrer"},"Github repo"),".");Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("home",module).add("welcome!",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button",{href:"#",style:{maxWidth:"85%",maxHeight:"85%",display:"block",textDecoration:"none",cursor:"pointer",border:"none"},onClick:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__["linkTo"])("home","instructions")},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{style:{maxWidth:"100%"},src:image.src,alt:image.alt}))}).add("instructions",function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",alignItems:"center",justifyContent:"center",textAlign:"center"}},_ref,_ref2)});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/@storybook/core/dist/server/common/polyfills.js ./node_modules/@storybook/core/dist/server/preview/globals.js ./.storybook/config.js ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/justin/repos/react-examples-storybook/node_modules/@storybook/core/dist/server/common/polyfills.js */"./node_modules/@storybook/core/dist/server/common/polyfills.js");
__webpack_require__(/*! /Users/justin/repos/react-examples-storybook/node_modules/@storybook/core/dist/server/preview/globals.js */"./node_modules/@storybook/core/dist/server/preview/globals.js");
module.exports = __webpack_require__(/*! /Users/justin/repos/react-examples-storybook/.storybook/config.js */"./.storybook/config.js");


/***/ }),

/***/ 1:
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime~main","vendors~main"]]]);
//# sourceMappingURL=main.ff58321b25722a0e0d72.bundle.js.map