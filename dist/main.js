/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UI": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _defaultLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLoad */ "./src/defaultLoad.js");

var UI = {
  MENUBAR: document.querySelector(".menuBar"),
  TASKS: document.querySelector(".tasks"),
  ADDPROJECT: document.querySelector(".addNewProject")
};

/***/ }),

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTaskHandler": () => (/* binding */ addTaskHandler)
/* harmony export */ });
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _defaultLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultLoad */ "./src/defaultLoad.js");



function addTaskHandler() {
  _UI__WEBPACK_IMPORTED_MODULE_1__.UI.ADDTASK.addEventListener("click", function () {
    if (_UI__WEBPACK_IMPORTED_MODULE_1__.UI.TASKTEXT.value === "") {} else {
      _UI__WEBPACK_IMPORTED_MODULE_1__.UI.POPUP.classList.add("active");
      _UI__WEBPACK_IMPORTED_MODULE_1__.UI.OVERLAY.classList.add("active");
      console.log(_UI__WEBPACK_IMPORTED_MODULE_1__.UI.TASKTEXT.value);
      var task = (0,_factories__WEBPACK_IMPORTED_MODULE_0__.toDoFactory)("".concat(_UI__WEBPACK_IMPORTED_MODULE_1__.UI.TASKTEXT.value), "", "&#128176", false);
      _defaultLoad__WEBPACK_IMPORTED_MODULE_2__.defaultLoad.firstProject.todos.push(task);
      console.log(_defaultLoad__WEBPACK_IMPORTED_MODULE_2__.defaultLoad.firstProject.todos[0].description);
    }
  });
}

/***/ }),

/***/ "./src/createElem.js":
/*!***************************!*\
  !*** ./src/createElem.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
var createElement = function createElement(_ref) {
  var element = _ref.element,
    insertionMethod = _ref.insertionMethod,
    domLocation = _ref.domLocation,
    whatClass = _ref.whatClass,
    text = _ref.text,
    id = _ref.id,
    value = _ref.value;
  var el = document.createElement(element);
  domLocation[insertionMethod](el);
  el.classList.add(whatClass);
  el.textContent = text;
  el.id = id;
  return el;
};

/***/ }),

/***/ "./src/defaultLoad.js":
/*!****************************!*\
  !*** ./src/defaultLoad.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLoad": () => (/* binding */ defaultLoad)
/* harmony export */ });
/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ "./src/createElem.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _plus2_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plus2.svg */ "./src/plus2.svg");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup */ "./src/popup.js");





var defaultLoad = function () {
  console.log("Page loading...");
  var firstProject = (0,_factories__WEBPACK_IMPORTED_MODULE_1__.projectFactory)("Default Project", "This is your first project! Try adding some tasks below.");
  var projectLoad = function projectLoad() {
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.PROJECTMENU = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      element: "li",
      insertionMethod: "prepend",
      domLocation: _UI__WEBPACK_IMPORTED_MODULE_2__.UI.MENUBAR,
      whatClass: "project",
      text: firstProject.title
    });
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.PROJECTTITLE = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      element: "h2",
      insertionMethod: "append",
      domLocation: _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKS,
      whatClass: "projectTitle",
      text: firstProject.title
    });
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.PROJECTDESCRIPTION = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      element: "span",
      insertionMethod: "append",
      domLocation: _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKS,
      whatClass: "projectDescription",
      text: firstProject.description
    });
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.BORDERLINE = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      element: "div",
      insertionMethod: "append",
      domLocation: _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKS,
      whatClass: "border"
    });
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKTEXT = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      element: "textarea",
      insertionMethod: "append",
      domLocation: _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKS,
      whatClass: "taskAddText"
    });
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKTEXT.setAttribute("placeholder", "Write your task here and press the plus button below...");
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKTEXT.setAttribute("rows", "2");
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKTEXT.setAttribute("cols", "40");
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.ADDTASK = (0,_createElem__WEBPACK_IMPORTED_MODULE_0__.createElement)({
      element: "img",
      insertionMethod: "append",
      domLocation: _UI__WEBPACK_IMPORTED_MODULE_2__.UI.TASKS,
      whatClass: "addTaskBtn"
    });
    _UI__WEBPACK_IMPORTED_MODULE_2__.UI.ADDTASK.src = _plus2_svg__WEBPACK_IMPORTED_MODULE_3__;
  };
  return {
    projectLoad: projectLoad,
    firstProject: firstProject
  };
}();

/***/ }),

/***/ "./src/factories.js":
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "toDoFactory": () => (/* binding */ toDoFactory)
/* harmony export */ });
var projectFactory = function projectFactory(title, description) {
  var todos = [];
  return {
    title: title,
    description: description,
    todos: todos
  };
};
var toDoFactory = function toDoFactory(description, dateToRemind, type, checkList) {
  return {
    description: description,
    dateToRemind: dateToRemind,
    type: type,
    checkList: checkList
  };
};

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popUp": () => (/* binding */ popUp)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createElem */ "./src/createElem.js");


function popUp() {
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.POPUP = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "div",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TASKS,
    whatClass: "popup",
    text: "",
    id: "popup"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.OVERLAY = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "div",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TASKS,
    whatClass: "overlay",
    text: "",
    id: "overlay"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.REMINDER = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "div",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.POPUP,
    whatClass: "reminder"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.REMINDERTEXT = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "span",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.REMINDER,
    whatClass: "reminderText",
    text: "Choose reminder date"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.REMINDERDATE = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "input",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.REMINDER,
    whatClass: "reminderDate"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.REMINDERDATE.setAttribute("type", "date");
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TYPE = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "div",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.POPUP,
    whatClass: "type"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TYPETEXT = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "span",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TYPE,
    whatClass: "typeText",
    text: "Choose task type"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TYPESELECT = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "select",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TYPE,
    whatClass: "typeSelect",
    id: "typeSelect"
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.OPTIONONE = (0,_createElem__WEBPACK_IMPORTED_MODULE_1__.createElement)({
    element: "option",
    insertionMethod: "append",
    domLocation: _UI__WEBPACK_IMPORTED_MODULE_0__.UI.TYPESELECT
  });
  _UI__WEBPACK_IMPORTED_MODULE_0__.UI.OPTIONONE.setAttribute("value", "Work");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n/*\n    3. Allow percentage-based heights in the application\n  */\nhtml,\nbody {\n  height: 100%;\n}\n/*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n    6. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n    7. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n    8. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n    9. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\nol,\nul {\n  list-style: none;\n}\n", "",{"version":3,"sources":["webpack://./src/reset.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;;;EAGE,sBAAsB;AACxB;AACA;;GAEG;AACH;EACE,SAAS;AACX;AACA;;GAEG;AACH;;EAEE,YAAY;AACd;AACA;;;;GAIG;AACH;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;GAEG;AACH;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;GAEG;AACH;;;;EAIE,aAAa;AACf;AACA;;GAEG;AACH;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;GAEG;AACH;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,gBAAgB;AAClB","sourcesContent":["/*\n  1. Use a more-intuitive box-sizing model.\n*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n/*\n    2. Remove default margin\n  */\n* {\n  margin: 0;\n}\n/*\n    3. Allow percentage-based heights in the application\n  */\nhtml,\nbody {\n  height: 100%;\n}\n/*\n    Typographic tweaks!\n    4. Add accessible line-height\n    5. Improve text rendering\n  */\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n/*\n    6. Improve media defaults\n  */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\n/*\n    7. Remove built-in form typography styles\n  */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n/*\n    8. Avoid text overflows\n  */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n/*\n    9. Create a root stacking context\n  */\n#root,\n#__next {\n  isolation: isolate;\n}\n\nol,\nul {\n  list-style: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgba(142, 142, 142, 0.11);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.appWindow {\n  background-color: rgba(255, 255, 255, 0.549);\n  height: 100%;\n  width: 60%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 1.5rem;\n}\n\nheader {\n  width: 100%;\n  height: 5%;\n  border-bottom: 1px solid rgba(172, 172, 172, 0.437);\n}\n\n.content {\n  width: 100%;\n  height: 91%;\n  display: flex;\n}\n\n.menuBar {\n  width: 30%;\n  height: 100%;\n  background-color: rgba(88, 88, 88, 0.096);\n  border-right: 1px solid rgba(172, 172, 172, 0.161);\n  padding: 10px 0px 0px 0px;\n  display: flex;\n  flex-direction: column;\n}\n\n.addNewProject {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 20px;\n}\n.addNewProject:hover {\n  background-color: aliceblue;\n}\n\n#plusIcon {\n  width: 20px;\n  height: 20px;\n  fill: gray;\n}\n\n.addProjectText {\n  padding-top: 3px;\n  font-size: 0.94rem;\n}\n\nli {\n  padding: 5px 10px 5px 10px;\n  cursor: pointer;\n}\nli:hover {\n  background-color: aliceblue;\n}\n\n.tasks {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  width: 100%;\n  height: 4%;\n  border-top: 1px solid rgba(172, 172, 172, 0.437);\n}\n\n.projectTitle {\n  width: 100%;\n  padding-bottom: 5px;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.projectDescription {\n  width: 100%;\n  padding-bottom: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.border {\n  width: 80%;\n  border-bottom: 1px solid rgba(130, 130, 130, 0.241);\n  align-self: center;\n}\n\n.addTaskBtn {\n  height: 25px;\n  width: 25px;\n  align-self: center;\n  margin-top: 20px;\n}\n\n.addTaskBtn:hover {\n  border-radius: 1rem;\n  background-color: rgba(175, 175, 176, 0.339);\n}\n\n.popup {\n  position: fixed;\n  transition: 200ms ease-in-out;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border: 5px double rgb(99, 99, 99);\n  background-color: rgb(232, 232, 232);\n  border-radius: 5px;\n  z-index: 10;\n  width: 300px;\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n}\n.popup.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.overlay {\n  position: fixed;\n  transition: 200ms ease-in-out;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.447);\n  pointer-events: none;\n}\n.overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.taskAddText {\n  all: unset;\n  align-self: center;\n  margin-top: 10px;\n  width: 300px;\n  height: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,2CAA2C;EAC3C,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,4CAA4C;EAC5C,YAAY;EACZ,UAAU;EACV,4CAA4C;EAC5C,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,mDAAmD;AACrD;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;AACf;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,yCAAyC;EACzC,kDAAkD;EAClD,yBAAyB;EACzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;AACjB;AACA;EACE,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,gDAAgD;AAClD;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,mDAAmD;EACnD,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,QAAQ;EACR,SAAS;EACT,yCAAyC;EACzC,kCAAkC;EAClC,oCAAoC;EACpC,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,yCAAyC;AAC3C;;AAEA;EACE,eAAe;EACf,6BAA6B;EAC7B,UAAU;EACV,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,sCAAsC;EACtC,oBAAoB;AACtB;AACA;EACE,UAAU;EACV,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,YAAY;AACd","sourcesContent":["body {\n  background-color: rgba(142, 142, 142, 0.11);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.appWindow {\n  background-color: rgba(255, 255, 255, 0.549);\n  height: 100%;\n  width: 60%;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  border-radius: 1.5rem;\n}\n\nheader {\n  width: 100%;\n  height: 5%;\n  border-bottom: 1px solid rgba(172, 172, 172, 0.437);\n}\n\n.content {\n  width: 100%;\n  height: 91%;\n  display: flex;\n}\n\n.menuBar {\n  width: 30%;\n  height: 100%;\n  background-color: rgba(88, 88, 88, 0.096);\n  border-right: 1px solid rgba(172, 172, 172, 0.161);\n  padding: 10px 0px 0px 0px;\n  display: flex;\n  flex-direction: column;\n}\n\n.addNewProject {\n  all: unset;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-top: 20px;\n}\n.addNewProject:hover {\n  background-color: aliceblue;\n}\n\n#plusIcon {\n  width: 20px;\n  height: 20px;\n  fill: gray;\n}\n\n.addProjectText {\n  padding-top: 3px;\n  font-size: 0.94rem;\n}\n\nli {\n  padding: 5px 10px 5px 10px;\n  cursor: pointer;\n}\nli:hover {\n  background-color: aliceblue;\n}\n\n.tasks {\n  width: 80%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\nfooter {\n  width: 100%;\n  height: 4%;\n  border-top: 1px solid rgba(172, 172, 172, 0.437);\n}\n\n.projectTitle {\n  width: 100%;\n  padding-bottom: 5px;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.projectDescription {\n  width: 100%;\n  padding-bottom: 15px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.border {\n  width: 80%;\n  border-bottom: 1px solid rgba(130, 130, 130, 0.241);\n  align-self: center;\n}\n\n.addTaskBtn {\n  height: 25px;\n  width: 25px;\n  align-self: center;\n  margin-top: 20px;\n}\n\n.addTaskBtn:hover {\n  border-radius: 1rem;\n  background-color: rgba(175, 175, 176, 0.339);\n}\n\n.popup {\n  position: fixed;\n  transition: 200ms ease-in-out;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  border: 5px double rgb(99, 99, 99);\n  background-color: rgb(232, 232, 232);\n  border-radius: 5px;\n  z-index: 10;\n  width: 300px;\n  height: 350px;\n  display: flex;\n  flex-direction: column;\n}\n.popup.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.overlay {\n  position: fixed;\n  transition: 200ms ease-in-out;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.447);\n  pointer-events: none;\n}\n.overlay.active {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.taskAddText {\n  all: unset;\n  align-self: center;\n  margin-top: 10px;\n  width: 300px;\n  height: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/plus2.svg":
/*!***********************!*\
  !*** ./src/plus2.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "654d51ab7dd175ff551b.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLoad */ "./src/defaultLoad.js");
/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ "./src/factories.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset.css */ "./src/reset.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







_defaultLoad__WEBPACK_IMPORTED_MODULE_0__.defaultLoad.projectLoad();
(0,_addTask__WEBPACK_IMPORTED_MODULE_3__.addTaskHandler)();
(0,_popup__WEBPACK_IMPORTED_MODULE_4__.popUp)();
console.log(_defaultLoad__WEBPACK_IMPORTED_MODULE_0__.defaultLoad.firstProject);
_UI__WEBPACK_IMPORTED_MODULE_2__.UI.ADDPROJECT.addEventListener("click", function () {});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map