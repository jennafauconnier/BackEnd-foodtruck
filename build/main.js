require('source-map-support/register')
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dotenv_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dotenv_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_volleyball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_volleyball__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes_trucks__ = __webpack_require__(6);

const app = __WEBPACK_IMPORTED_MODULE_0_express___default()();


const { SERV_PORT, DB_url } = process.env;



// import path from 'path'

__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(DB_url);
const db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`[MongoDB] connected`);
});

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_3_volleyball___default.a);
app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.urlencoded({ extended: false }));

app.use('/trucks', __WEBPACK_IMPORTED_MODULE_4__routes_trucks__["a" /* truckRouter */]);

app.use('/', (req, res) => {
  res.send('Just forgot and work !');
});

app.use('/', (req, res) => {
  res.send("j'ai faim sa mère");
});

app.listen(SERV_PORT, () => {
  console.log(`[APP working on port : ${SERV_PORT}]`);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("volleyball");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return truckRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_truck__ = __webpack_require__(7);


const truckRouter = __WEBPACK_IMPORTED_MODULE_0_express___default.a.Router();

truckRouter.get('/', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].find({}, (err, trucks) => {
    if (err) res.send(err);
    res.json(trucks);
  });
});

truckRouter.post('/add', (req, res) => {
  const newTruck = new __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */](req.body);
  newTruck.save((err, product) => {
    if (err) res.send(err);
    res.json(product);
    res.redirect('/trucks/');
  });
});

truckRouter.get('/:id', (req, res) => {
  let _id = req.params.id;
  __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].findById({ _id }, (err, truck) => {
    if (err) res.send(err);
    res.json(truck);
  });
});

truckRouter.put('/:id', (req, res) => {
  __WEBPACK_IMPORTED_MODULE_1__models_truck__["a" /* Truck */].findById(req.params.id, (err, truck) => {
    if (err) res.send(err);
    truck.name = req.body.name;
    truck.description = req.body.description;
    truck.speciality = req.body.speciality;
    truck.save(err => {
      if (err) res.send(err);
      res.json({ message: "foodtruck uploaded" });
    });
  });
});



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Truck; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mongoose__);

const Schema = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.Schema;

const truckSchema = new Schema({
  name: { type: String },
  description: { type: String },
  speciality: { type: String }

});

const Truck = __WEBPACK_IMPORTED_MODULE_0_mongoose___default.a.model('Truck', truckSchema);



/***/ })
/******/ ]);
//# sourceMappingURL=main.map