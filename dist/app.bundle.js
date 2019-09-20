/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: channelColours, config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "channelColours", function() { return channelColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/dist/js/uikit-icons.min */ "./node_modules/uikit/dist/js/uikit-icons.min.js");
/* harmony import */ var uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uikit/dist/css/uikit.min.css */ "./node_modules/uikit/dist/css/uikit.min.css");
/* harmony import */ var uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _datamodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datamodel */ "./src/datamodel.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_topmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/topmenu */ "./src/components/topmenu.js");
/* harmony import */ var _components_topvideos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topvideos */ "./src/components/topvideos.js");
/* harmony import */ var _components_topchannels__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/topchannels */ "./src/components/topchannels.js");
/* harmony import */ var _components_rankflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rankflow */ "./src/components/rankflow.js");
/* harmony import */ var _components_details__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/details */ "./src/components/details.js");
/* harmony import */ var _components_methodology__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/methodology */ "./src/components/methodology.js");
/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules




















// variables
const channelColours = [
	'#9badf9',
	'#f6a072',
	'#3be6ea',
	'#dd9fe9',
	'#ebae64',
	'#fa928f',
	'#5abef6',
	'#d0d875',
	'#e565a4',
	'#8fdc8c',
];

let config;

let terms = [];
let period = {};
let selectedTerm = {};
let showTableAll = false;

// add functionality to D3 Selection
d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["selection"].prototype.show = function() {  
	this.style('display', 'initial');
	return this;
};

d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["selection"].prototype.hide = function() {  
	this.style('display', 'none');
	return this;
};

uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1___default()(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a);



const init = async () => {

	// load config
	const res = await fetch('./config/config.json');
	config = await res.json();

	//defining properties
	terms = config.terms;
	period = config.period;

	selectedTerm = terms[0];

	
	//load components
	_components_header__WEBPACK_IMPORTED_MODULE_6__["default"].init();
	_components_sidebar__WEBPACK_IMPORTED_MODULE_7__["default"].init();

	// this.topMenu = new Topmenu(this);
	// this.topMenu.init();
	// this.topVideos = new Topvideos(this);
	// this.topVideos.init();
	// this.topChannels = new Topchannels(this);
	// this.topChannels .init();
	// this.rankflow = new Rankflow(this);
	// this.rankflow.init();
	// this.details = new Details(this);
	// this.details.init();
	// this.methodology = new Methodology(this);
	// this.methodology.init();

	//load data
	_datamodel__WEBPACK_IMPORTED_MODULE_5__["default"].init(config);
	const data = await _datamodel__WEBPACK_IMPORTED_MODULE_5__["default"].loadData(selectedTerm);
	console.log(data);


	// this.datamodel = new datamodel(this);
	// this.datamodel = datamodel;
	// this.datamodel.init(config);

	// this.datamodel.on('load', app.datamodelOnLoad);
	// this.datamodel.on('update', {data: Object}, function (e, data) {
	// 	app.datamodelOnLoad(data);
	// });
		

	// this.datamodel.loadData(this.selectedTerm)
	// 	.then(function (r) {
	// 		// console.log(r);
	// 		app.topVideos.load(r);
	// 		app.topChannels.load(r);
	// 		app.rankflow.load(r);
	// 	});

	
};

const selectTerm = term => {
	
	selectedTerm = terms.find(t => t.slug === term);

	// Dispatch the event.
	const event = new Event('selectTerm', selectedTerm);
	undefined.dispatchEvent(event);


	// topMenu.updateTerm(selectedTerm);

	// this.datamodelOnLoad();

	// this.datamodel.loadData(this.selectedTerm)
	// 	.then(function (r) {
	// 		// console.log(r);
	// 		app.topVideos.load(r);
	// 		app.topChannels.load(r);
	// 		app.rankflow.load(r);
	// 	});
	
};

// this.datamodelOnLoad = function () {
// 	this.topVideos.loading();
// 	this.topChannels.loading();
// 	this.rankflow.loading();
// };

const getTermByName = termName => terms.find(c => c.name == termName);

const getChannelByName = channelName => _datamodel__WEBPACK_IMPORTED_MODULE_5__["default"].collection.channels.find(c => c.name == channelName);

const itemMouseOver = (data,source) => {
	if(source == 'video') {
		undefined.topVideos.highlightOn(data.youtubeID, source);
		undefined.topChannels.highlightOn(data.channel);
		undefined.rankflow.highlightOn(data,source);
	} else if(source == 'channel') {
		undefined.topVideos.highlightOn(data.name, source);
		undefined.topChannels.highlightOn(data.name);
		undefined.rankflow.highlightOn(data,source);
	} else if(source == 'rank') {
		undefined.topVideos.highlightOn(data.data.youtubeID,'video');
		undefined.topChannels.highlightOn(data.channel,source);
		undefined.rankflow.highlightOn(data,source);
	}
};

const itemMouseOut = (data,source) => {
	if(source == 'video') {
		undefined.topVideos.highlightOff(data.youtubeID);
		undefined.topChannels.highlightOff(data.channel);
		undefined.rankflow.highlightOff(data);
	} else if(source == 'channel') {
		undefined.topVideos.highlightOff(data.name);
		undefined.topChannels.highlightOff(data.name);
		undefined.rankflow.highlightOff(data);
	} else if(source == 'rank') {
		undefined.topVideos.highlightOff(data.name);
		undefined.topChannels.highlightOff(data.name);
		undefined.rankflow.highlightOff(data);
	}
};

const showDetails = (d,source) => {
	undefined.details.addModal(d,source);
};


init();

/* harmony default export */ __webpack_exports__["default"] = ({
	selectTerm,
	getTermByName,
	getChannelByName,
	itemMouseOver,
	itemMouseOut,
	showDetails
});


/***/ }),

/***/ "./src/components/RankflowVis.js":
/*!***************************************!*\
  !*** ./src/components/RankflowVis.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RankFlowVis; });
/* harmony import */ var d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array/dist/d3-array.min */ "./node_modules/d3-array/dist/d3-array.min.js");
/* harmony import */ var d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-axis/dist/d3-axis.min */ "./node_modules/d3-axis/dist/d3-axis.min.js");
/* harmony import */ var d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_collection_dist_d3_collection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-collection/dist/d3-collection.min */ "./node_modules/d3-collection/dist/d3-collection.min.js");
/* harmony import */ var d3_collection_dist_d3_collection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_collection_dist_d3_collection_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale/dist/d3-scale.min */ "./node_modules/d3-scale/dist/d3-scale.min.js");
/* harmony import */ var d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-scale-chromatic/dist/d3-scale-chromatic.min */ "./node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.min.js");
/* harmony import */ var d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var d3_shape_dist_d3_shape_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-shape/dist/d3-shape.min */ "./node_modules/d3-shape/dist/d3-shape.min.js");
/* harmony import */ var d3_shape_dist_d3_shape_min__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(d3_shape_dist_d3_shape_min__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3_time_format_dist_d3_time_format_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-time-format/dist/d3-time-format.min */ "./node_modules/d3-time-format/dist/d3-time-format.min.js");
/* harmony import */ var d3_time_format_dist_d3_time_format_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(d3_time_format_dist_d3_time_format_min__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var d3_voronoi_dist_d3_voronoi_min__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-voronoi/dist/d3-voronoi.min */ "./node_modules/d3-voronoi/dist/d3-voronoi.min.js");
/* harmony import */ var d3_voronoi_dist_d3_voronoi_min__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(d3_voronoi_dist_d3_voronoi_min__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
//modules









__webpack_require__(/*! d3-transition/dist/d3-transition.min */ "./node_modules/d3-transition/dist/d3-transition.min.js");






function RankFlowVis(app) {

	this.app = app;

	this.windowWidth = 900;
	this.resizeTimer = null;

	this.margin = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0
	};
	this.width = 800;
	this.height = 500;

	this.visDataset = [];
	this.allVideosIDs = [];
	this.namesByID = [];

	this.flatData = [];

	this.topN = 5;

	this.strokeWidth = [8, 6, 5, 5, 4, 4, 3, 3, 2, 2]; //Stroke width per max position

	this.color = null;
	this.xScale = null;
	this.yScale = null;
	this.xAxis = null;
	this.yAxis = null;

	this.line = null;

	this.focus = null;
	this.focusData = null;
	this.voronoi = null;
	this.voronoiGroup = null;

	this.popUpName = null;

	this.parseTime = null;

	this.minDateWidth = 35;


	//----- CONSTRUCTOR
	this.init = function () {

		const _this = this;

		this.windowWidth = document.body.clientWidth;

		//set the context in the DOM
		this.margin = {
			top: 20,
			right: 30,
			bottom: 30,
			left: 50
		};

		this.height = 500 - this.margin.top - this.margin.bottom;

		window.addEventListener('resize', function() {
			_this.resize();
		});

	};

	//---- RESIZE
	this.resize = function () {

		const _this = this;

		//width only
		if (this.windowWidth != document.body.clientWidth) {

			//delay... end resizing
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(function () {

				_this.windowWidth = document.body.clientWidth;
				_this.update(_this.visDataset, 'resize');

			}, 250);

		}

	};

	this._setWidth = function () {

		const minVizWidth = (this.app.datamodel.numberDays * this.minDateWidth) + this.margin.left + this.margin.right - 240; //240 is the width of side bar. Better to get this by code

		const scrollHint = uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_9___default.a.toggle(Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])('#horizontal-scroll-hint').node());

		if (this.windowWidth < minVizWidth) {
			this.width = minVizWidth - this.margin.left - this.margin.right - 120;
			if (!scrollHint.isToggled()) scrollHint.toggle();
		} else {
			this.width = (this.windowWidth - 140) - this.margin.left - this.margin.right - 120;
			if (scrollHint.isToggled()) scrollHint.toggle();
		}

	};

	//---- SETUP VIS
	this.setupvis = function () {
		//width
		this._setWidth();

		this.parseTime = Object(d3_time_format_dist_d3_time_format_min__WEBPACK_IMPORTED_MODULE_7__["timeParse"])('%Y-%m-%d');

		///////////////////// COLOR ////////////////////////// 

		this.color = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"])(d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__["schemePaired"]);

		///////////////////// SCALE & AXES ////////////////////////// 

		let parsedDates = [];
		let dayIterac = moment__WEBPACK_IMPORTED_MODULE_10___default()(this.app.period.start);

		for (dayIterac; dayIterac.isBefore(this.app.period.end); dayIterac.add(1, 'days')) {
			parsedDates.push(this.parseTime(dayIterac.format('YYYY-MM-DD')));
		}

		// this.xScale = scaleTime().domain([startDay, endDay]).range([40, width-40]);
		// this.xScale = scaleTime().range([40, this.width - 40]);
		this.xScale = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleTime"])().range([40, this.width - 40 - 240]);
		this.xScale.domain(Object(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_0__["extent"])(parsedDates, function (d) {
			return d;
		}));



		var ticksNumber;
		if (parsedDates.length < 10) {
			ticksNumber = parsedDates.length;
		} else {
			ticksNumber = null;
		}

		this.yScale = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])().domain([0.5, 10.5]).range([0, this.height]);

		// this.xAxis = axisBottom().scale(xScale).tickFormat(timeFormat('%b %d')).tickSize(0);
		// this.xAxis = axisBottom(this.xScale).scale(this.xScale).tickFormat(timeFormat('%m/%d')).tickSize(0)//.ticks(20);
		this.xAxis = Object(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_1__["axisBottom"])(this.xScale).tickFormat(Object(d3_time_format_dist_d3_time_format_min__WEBPACK_IMPORTED_MODULE_7__["timeFormat"])('%d/%m')).tickSize(0).ticks(ticksNumber);
		// this.xAxis = axisBottom(xScale).scale(xScale).tickFormat(timeFormat('%a %d')).tickSize(0);
		this.yAxis = Object(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_1__["axisLeft"])().scale(this.yScale).tickSize(0);



		///////////////////// LINE TYPE  //////////////////////////
		this.line = Object(d3_shape_dist_d3_shape_min__WEBPACK_IMPORTED_MODULE_6__["line"])()
			// .curve(curveMonotoneX) //Slight rounding without too much deviation
			.curve(d3_shape_dist_d3_shape_min__WEBPACK_IMPORTED_MODULE_6__["curveStep"]); //Slight rounding without too much deviation

	};

	// this.updateDates = function () {

	//     let parsedDates = [];
	//     let dayIterac = moment(this.app.datamodel.period.startDate);

	//     while (dayIterac <= this.app.datamodel.period.endDate) {
	//         parsedDates.push(this.parseTime(dayIterac.format('YYYY-MM-DD')));
	//         dayIterac.add(1, 'days');
	//     }

	// };

	//////////////////////// Create CHART //////////////////////// 
	this.update = function (data,resize) {

		this.dataset = data;

		this.setupvis();

		//clear
		Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])('#visualization').html('');

		////////////////////////  Create focus SVG
		this.focus = Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])('#visualization').append('svg')
			.style('width', this.width + this.margin.left + this.margin.right - 240) //240 is the width of side bar. Better to get this by code
			.style('height', this.height + this.margin.top + this.margin.bottom)
			.style('max-width','none')
			.append('g')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

		//Append clippath to focus chart
		let defs = this.focus.append('defs');

		defs.append('clipPath')
			.attr('id', 'clip')
			.append('rect')
			.attr('width', this.width)
			.attr('height', this.height);

		//Append x axis to focus chart	
		this.focus.append('g')
			.attr('class', 'x axis')
			.style('font-size', 13)
			.attr('transform', 'translate(0,' + (this.height + 9) + ')')
			// .call(axisBottom(xScale));
			.call(this.xAxis);



		//Append y axis to focus chart	
		this.focus.append('g')
			.attr('class', 'y axis')
			.attr('transform', 'translate(-10,0)')
			.call(this.yAxis)
			.append('text')
			.attr('class', 'titles')
			.attr('transform', 'rotate(-90)')
			.attr('x', -(this.height / 2))
			.attr('y', -35)
			.attr('dy', '.71em')
			.style('font-size', 14)
			.style('text-anchor', 'middle')
			.text('Posição no ranking');


		//////////////////////// Initiate the voronoi function ///////////////////////////// 
		this.voronoi = Object(d3_voronoi_dist_d3_voronoi_min__WEBPACK_IMPORTED_MODULE_8__["voronoi"])()
			.extent([
				[-this.margin.left, -this.margin.top],
				[this.width + this.margin.right, this.height + this.margin.bottom]
			]);

		//Initiate the voronoi group element	
		this.voronoiGroup = this.focus.append('g')
			.attr('class', 'voronoi');


		//////////////////////// Tooltip ///////////////////////////// 
		this.popUpName = this.focus.append('g')
			.attr('transform', 'translate(-100,-100)')
			.attr('class', 'popUpName')
			.style('pointer-events', 'none');

		this.popUpName.append('circle')
			.attr('class', 'tooltipCircle')
			.attr('r', 30.5);

		this.popUpName.append('text')
			.style('font-size', 12)
			.attr('class', 'titles')
			.attr('y', -15);
			
		this.vis(this.dataset,resize);

	};

	//////////////////////// Reduce dataset to TOP N
	this._reduceToTopN = function (data) {

		let _topN = this.topN;
		let array = [];

		// reduce: find top 10
		data.forEach(function (v) {

			let isTopN = false;

			v.dates.forEach(function (d) {
				if (d.recRank <= _topN) {
					isTopN = true;
					return;
				}
			});

			if (isTopN) array.push(v);

		});

		return array;

	};

	//////////////////////// UPDATE VIS
	this.vis = function (data, resize) {

		const _this = this;

		if (resize != 'resize') {

			//reset
			this.visDataset = [];
			this.allVideosIDs = [];
			this.namesByID = [];

			//reduce and load dataset
			this.visDataset = this._reduceToTopN(data.videos, 1);
		}

		let channels = [];


		/////////////////////  gather data
		for (let d of this.visDataset) {

			let i = this.visDataset.indexOf(d);

			this.allVideosIDs[i] = d.id;
			this.namesByID[d.id] = i;
			saveChannel(d.channel);
		}


		// SAVE a list of Channels
		function saveChannel(channel) {
			let hasChannel = false;
			channels.forEach(function (c) {
				if (c == channel) hasChannel = true;
			});

			if (!hasChannel) {
				channels.push(channel);
			}
		}


		///////////////////// redefine color
		// this.color.domain(this.allVideosIDs);
		this.color.domain(channels);

		///////////////////// Line type: Change data ////////////////////////// 
		this.line.x(function (d) {
			return _this.xScale(_this.parseTime(d.date));
		})
			.y(function (d) {
				return _this.yScale(d.recRank);
			});


		///////////////////////// Voronoi //////////////////////////// 

		//Create a flat data version for the Voronoi
		/*************************************************************/
		this.flatData = [];
		for (let k in this.visDataset) {
			let k_data = this.visDataset[k];
			for (let d of k_data.dates) {
				// k_data.dates.forEach(function (d) {
				if (d.recRank <= 10) this.flatData.push({
					id: k_data.id,
					title: k_data.title,
					date: d.date,
					moment: d.moment,
					channel: k_data.channel,
					nb_recommendations: d.nb_recommendations,
					sumRec: k_data.sumRec,
					recRank: d.recRank,
					data: k_data
				});
			}
		}


		//Max position
		let maxPosition = Object(d3_collection_dist_d3_collection_min__WEBPACK_IMPORTED_MODULE_2__["nest"])()
			.key(function (d) {
				return d.id;
			})
			.rollup(function (d) {
				return Object(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_0__["min"])(d, function (g) {
					return g.recRank;
				});
			})
			// .rollup(function(d) {return max(d, function(g) {return g.sumRec;});})
			.entries(this.flatData);

		// let nestedFlatData = nest().key(function (d) {
		// 	return d.id;
		// }).entries(this.flatData);
		// /*************************************************************/


		// ///////////////////////// Reinitiate the voronoi function

		this.voronoi.x(function (d) {
			return _this.xScale(_this.parseTime(d.date));
		})
			.y(function (d) {
				return _this.yScale(d.recRank);
			});


		// DRAW VORONOI
		let voronoiGrid = this.voronoiGroup.selectAll('path')
			.data(this.voronoi.polygons(this.flatData.filter(function (d) {
				return _this.parseTime(d.date) >= _this.xScale.domain()[0] & _this.parseTime(d.date) <= _this.xScale.domain()[1];
			})));

		voronoiGrid.exit().remove();

		//new data
		voronoiGrid.enter().append('path')
			.attr('d', function (d) {
				return 'M' + d.join('L') + 'Z';
			})
			.datum(function (d) {
				return d.data;
			})
			.attr('class', 'voronoiCells')
			// .on('mouseover', this._mouseover)
			.on('mouseover', function (d) {
				_this._mouseOverSelection(d);
			})
			// .on('mouseout', this._mouseout)
			.on('mouseout', function (d) {
				_this._mouseOutSelection(d.id);
				// _this.highlightOff(d.id);
			})
			.on('click', function (d) {
				_this._mouseClick(d);
			});


		//update existing data
		voronoiGrid
			.attr('d', function (d) {
				return 'M' + d.join('L') + 'Z';
			})
			.datum(function (d) {
				return d.data;
			});
		// .on('mouseover', function(d) {
		// 	_this._mouseOverSelection(d);
		// })
		// .on('mouseout', function(d) {
		// _this.highlightOff(d.id);
		// })
		// .on('click', this._mouseClick);


		//Move selected element to the front
		d3_selection__WEBPACK_IMPORTED_MODULE_3__["selection"].prototype.moveToFront = function () {
			return this.each(function () {
				this.parentNode.appendChild(this);
			});
		};


		//////////////////////// Create PLOT //////////////////////// 
		//data
		this.focusData = this.focus.selectAll('.focus')
			.data(this.visDataset);

		//remove previous
		this.focusData.exit().remove();

		//add news
		let newDataPoints = this.focusData.enter().append('g')
			.attr('class', function (d) {
				return 'focus ' + d.id;
			});

		Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["selectAll"])('.focus')
			.attr('class', function (d) {
				return 'focus ' + d.id;
			});

		// LINES
		let pathLine = newDataPoints.append('path')
			.attr('class', 'line')
			.attr('clip-path', 'url(#clip)')
			.style('pointer-events', 'none')
			.style('stroke-linejoin', 'round')
			.style('opacity', 0)
			.attr('d', function (d) {
				return _this.line(d.dates);
			})
			// .style('stroke-width', function(d) {return 4;})
			.style('stroke-width', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			// .style('stroke-width', function(d) {return maxPosition[_this.namesByID[d.id]].value/10;})
			.style('stroke', function (d) {
				// return _this.color(d.channel);
				return _this.app.getChannelByName(d.channel).colour;
			})
			// .style('stroke', function(d,i) {return '#000'; })
			// .transition().duration(750).delay(500)
			.transition().duration(750).delay(function (d, i) {
				return i * 100;
			})
			.style('opacity', 0.6);

		pathLine = this.focusData.select('path');

		pathLine.transition()
			.duration(2000).delay(1500)
			.attr('d', function (d) {
				return _this.line(d.dates);
			})
			// .style('stroke-width', function(d) {return 4;})
			.style('stroke-width', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			// .style('stroke-width', function(d) {return maxPosition[this.namesByID[d.id]].value/10;})
			.style('stroke', function (d) {
				return this.app.datamodel.getChannelByName(d.channel).colour;
			});


		//CIRCLE
		let circles = newDataPoints.append('circle')
			.attr('class', 'circle')
			.attr('clip-path', 'url(#clip)')
			.attr('cx', function (d) {
				return _this.xScale(_this.parseTime(d.dates[0].date));
			})
			.attr('cy', function (d) {
				return _this.yScale(d.dates[0].recRank);
			})
			.style('opacity', 0)
			.style('stroke', function (d) {
				return _this.app.getChannelByName(d.channel).colour;
			})
			.style('fill', function (d) {
				if (d.dates[0].views == -1) {
					return 'white';
				} else {
					return _this.app.getChannelByName(d.channel).colour;
				}
			})
			.style('stroke-width', 4)
			// .attr('r', 10)
			.attr('r', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			.transition().duration(750).delay(function (d, i) {
				return i * 100;
			})
			.style('opacity', 1);

		circles = this.focusData.select('circle');

		circles.transition()
			.duration(2000).delay(1500)
			.attr('cx', function (d) {
				return _this.xScale(_this.parseTime(d.dates[0].date));
			})
			.attr('cy', function (d) {
				return _this.yScale(d.dates[0].recRank);
			})
			.attr('r', function (d) {
				return _this.strokeWidth[maxPosition[_this.namesByID[d.id]].value - 1];
			})
			.style('stroke', function (d) {
				return this.app.datamodel.getChannelByName(d.channel).colour;
			})
			.style('fill', function (d) {
				if (d.dates[0].views == -1) {
					return 'white';
				} else {
					return this.app.datamodel.getChannelByName(d.channel).colour;
				}
			});

	};

	this.getFlatDataById = function (id) {

		for (var i = 0; i < this.flatData.length; i++) {
			if (this.flatData[i].id == id) return this.flatData[i];
		}

		return null;
	};

	///////////////////////// Voronoi mouseover and mouseout functions	
	this._mouseOverSelection = function (d) {
		// this.showpopup(d);
		this.app.itemMouseOver(d,'rank');
	};

	this._mouseOutSelection = function(d) {
		// this.highlightOff(d);
		this.app.itemMouseOut(d,'rank');
	};

	this.highlightOn = function (data,sourceType) {

		this.focus.selectAll('.focus')
			.style('opacity', function(d) {
				if(sourceType == 'rank') {
					return (d.youtubeID === data.data.youtubeID) ? 1 : 0.07;
				} else if (sourceType == 'channel') {
					return (d.channel === data.name) ? 1 : 0.07;
				} else if (sourceType == 'video') {
					return (d.youtubeID === data.youtubeID) ? 1 : 0.07;
				}
			});

		//popup
		if(sourceType == 'rank') this.showpopup(data);
	};

	this.showpopup = function(d) {
		Object(d3_selection__WEBPACK_IMPORTED_MODULE_3__["select"])('.popUpName').moveToFront(); //Move the tooltip to the front

		this.popUpName.attr('transform', 'translate(' + this.xScale(this.parseTime(d.date)) + ',' + this.yScale(d.recRank) + ')'); //Change position, size of circle and text of tooltip

		let circleSize = 10;

		this.popUpName.select('.tooltipCircle')
			// .style('fill', this.color(d.channel))
			.style('fill', this.app.getChannelByName(d.channel).colour)
			.attr('r', circleSize);

		this.popUpName.select('text').text(d.moment.format('MMM D') + ': ' + d.title + ' (Rank: ' + d.recRank + ')');

		//fix popuop position if text is out of boundaries to tlef or ti the right
		if ((this.popUpName.node().getCTM().e - this.margin.left) - (this.popUpName.node().getBBox().width / 2) < 0) {
			this.popUpName.select('text').style('text-anchor', 'start');
		} else if ((this.popUpName.node().getCTM().e - this.margin.left) + (this.popUpName.node().getBBox().width / 2) > this.width - 120) {
			this.popUpName.select('text').style('text-anchor', 'end');
		}
	};

	this.highlightOff = function () {
		this.focus.selectAll('.focus').style('opacity', 1);
		this.popUpName.attr('transform', 'translate(-100,-100)');
		this.popUpName.select('text').style('text-anchor', 'middle');
	};

	///////////////////////// VORONOI CLICK - ADD MODAL
	this._mouseClick = function (d) {
		this.app.showDetails(d,'rank');
	};

	this.exit = function() {
		const duration = 500;

		// this.focusData
		this.focus.selectAll('.focus')
			.transition()
			.duration(duration/2)
			.style('opacity', 0);
	};

}

/***/ }),

/***/ "./src/components/TopChannelsVis.js":
/*!******************************************!*\
  !*** ./src/components/TopChannelsVis.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopVideosVis; });
/* harmony import */ var chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js/chroma.min */ "./node_modules/chroma-js/chroma.min.js");
/* harmony import */ var chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array/dist/d3-array.min */ "./node_modules/d3-array/dist/d3-array.min.js");
/* harmony import */ var d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-axis/dist/d3-axis.min */ "./node_modules/d3-axis/dist/d3-axis.min.js");
/* harmony import */ var d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale/dist/d3-scale.min */ "./node_modules/d3-scale/dist/d3-scale.min.js");
/* harmony import */ var d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-scale-chromatic/dist/d3-scale-chromatic.min */ "./node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.min.js");
/* harmony import */ var d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__);
//modules







__webpack_require__(/*! d3-transition/dist/d3-transition.min */ "./node_modules/d3-transition/dist/d3-transition.min.js");

function TopVideosVis(app) {

	this.app = app;

	// this.context = context;
	this.topTenData = [];
	this.visContainer = '';

	this.windowWidth = 0;
	this.height = 0;
	this.width = 0;

	this.margin = {
		top: 30,
		right: 250,
		bottom: 30,
		left: 10
	};

	this.svg = '';
	this.vis = '';

	this.xScale ='';
	this.yScale ='';

	this.xAxis;
	this.yAxis;

	this.colourScale = [];

	this.init = function () {

		const _this = this;

		this.visContainer = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])('#top-channels');

		// this.colour = scaleOrdinal(schemePaired);
		this.colour = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"])(d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__["schemeSet3"]);

		this._setDimensions();
		this.setupVis();

		window.addEventListener('resize', function() {
			_this.resize();
		});
		
	};

	this._setDimensions = function () {
		//size
		this.windowWidth = this.visContainer.node().getBoundingClientRect().width;
		this.width = this.windowWidth - this.margin.left - this.margin.right;
		this.height = 300 - this.margin.top - this.margin.bottom;
	};

	this.setupVis = function() {

		this.visContainer.html('');


		this.svg = this.visContainer.append('svg')
			.attr('width', this.width + this.margin.left + this.margin.right)
			.attr('height', this.height + this.margin.top + this.margin.bottom);


		//scale
		this.xScale = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])()
			.range([0, this.width]);
		this.yScale = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleBand"])()
			.range([this.height, 0]);


		// AXIS
		this.xAxis = this.visContainer.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + this.height + ')');

		this.yAxis = this.visContainer.append('g')
			.attr('class', 'y axis')
			.call(Object(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__["axisLeft"])(this.yScale).tickSize(0).tickFormat(''));

		//VIS
		this.vis = this.svg.append('g')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
	};

	//---- RESIZE
	this.resize = function () {

		const _this = this;
		//width only
		if (this.windowWidth != document.body.clientWidth) {
			//delay... end resizing
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(function () {
				_this._setDimensions();
				_this.setupVis();
				_this.update(_this.topTenData,'resize');
			}, 250);
		}
	};

	this.update = function(data,resize) {

		if (!resize) {

			this.topTenData = data.channels.slice(0, 10);

			//inverse order
			this.topTenData.sort(function (a, b) {
				return a.numberRecommendations - b.numberRecommendations;
			});
		}

		this.updateScale();
		this.updateAxis();
		this.updateVis();
	};

	this.updateScale = function() {
		this.xScale.domain([0, Object(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2__["max"])(this.topTenData, function (d) {
			return d.numberRecommendations;
		})]);

		this.yScale.domain(this.topTenData.map(function (d) {
			return d.name;
		})).padding(0.2);
	};

	this.updateAxis = function() {

		this.yAxis.call(Object(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__["axisBottom"])(this.xScale).ticks(0).tickFormat(''));

		// x-Axis labels
		// .call(axisBottom(this.xScale).ticks(5).tickFormat(function (d) {
		// 	return d;
		// }));

	};

	this.updateVis = function() {

		const _this = this;

		//remove it all
		let nodes = this.vis.selectAll('.node')
			.remove();

		//new data
		nodes = this.vis.selectAll('.node')
			.data(this.topTenData);

		//add elments
		let newNodes = nodes.enter()
			.append('g')
			.attr('class', 'node');
		
		newNodes.append('rect')
			.attr('class', 'bar');

		newNodes.append('text')
			.attr('class', 'bar-title');

		newNodes.append('text')
			.attr('class', 'bar-value');


		//update elements
		nodes = this.vis.selectAll('.node');

		nodes.selectAll('.bar')
			.attr('fill', function (d) {
				// return _this.colour(d.name);
				return d.colour;
			})
			.attr('x', 0)
			.attr('height', _this.yScale.bandwidth())
			.attr('y', function (d) {
				return _this.yScale(d.name);
			})
			// .style('cursor','pointer')
			.on('mousemove', function (d) {
				//change color
				_this._mouseOverSelection(d);
			})
			.on('mouseout', function (d) {
				//back to normal
				_this._mouseOutSelection(d);
			})
			.on('click', function (d) {
				//open popup
				_this._click(d);
				// rankFlowVis.showDetails(d);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return i * 100;
			}).attr('width', function (d) {
				return _this.xScale(d.numberRecommendations);
			});

		nodes.selectAll('.bar-title')
			.attr('x', function (d) {
				return _this.xScale(d.numberRecommendations);
			})
			.attr('y', function (d) {
				return _this.yScale(d.name);
			})
			.attr('dx', '.35em') //this.margin right
			.attr('dy', '1.35em') //vertical align middle
			.style('font', '10px sans-serif')
			.style('opacity', 0)
			.text(function (d) {
				return (d.name);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

		nodes.selectAll('.bar-value')
			.attr('x', function (d) {
				return _this.xScale(d.numberRecommendations);
			})
			.attr('y', function (d) {
				return _this.yScale(d.name);
			})
			.attr('dx', '-.35em') //this.margin right
			.attr('dy', '1.15em') //vertical align middle
			.attr('text-anchor', 'end')
			.style('font', '12px sans-serif')
			.style('font-weight', 'bold')
			.style('fill', function (d) {
				let textColour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default()(0, 0, 0, 0.9).hex();
				const contrast = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default.a.contrast(d.colour, textColour);
				if (contrast < 4.5) textColour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default()(255, 255, 255, 0.85).hex();
				return textColour;
			})
			.style('opacity', 0)
			.text(function (d) {
				return (d.numberRecommendations);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

	};

	this.exit = function() {
		const duration = 500;
		let bar = this.vis.selectAll('.bar');
		bar.transition()
			.duration(duration)
			.attr('width', 0);

		this.vis.selectAll('.bar-title')
			.transition()
			.duration(duration/2)
			// .attr('x', 0)
			.style('opacity', 0);

		this.vis.selectAll('.bar-value')
			.transition()
			.duration(duration)
			.attr('x', 0)
			.style('opacity', 0);

	};

	this._mouseOverSelection = function(d) {
		// console.log(d);
		app.itemMouseOver(d, 'channel');
	};

	this._mouseOutSelection = function(d) {
		app.itemMouseOut(d, 'channel');
	};

	this._click = function(d) {
		console.log(d);
		// this.app.showDetails(d,'video');
	};

	this.highlightOn = function (channelName) {

		this.vis.selectAll('.node')
			.style('opacity', function(d) {
				if(d.name === channelName) {
					return 1;
				} else {
					return 0.5;
				}
			});

		this.vis.selectAll('.bar-title')
			.style('font-weight', function(d) {
				if(d.name === channelName) {
					return 'bold';
				}
			});
	};

	this.highlightOff = function () {
		this.vis.selectAll('.node').style('opacity', 1);
		this.vis.selectAll('.bar-title').style('font-weight', 'normal');
	};

}

/***/ }),

/***/ "./src/components/TopVideosVis.js":
/*!****************************************!*\
  !*** ./src/components/TopVideosVis.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TopVideosVis; });
/* harmony import */ var chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js/chroma.min */ "./node_modules/chroma-js/chroma.min.js");
/* harmony import */ var chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection */ "./node_modules/d3-selection/src/index.js");
/* harmony import */ var d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array/dist/d3-array.min */ "./node_modules/d3-array/dist/d3-array.min.js");
/* harmony import */ var d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-axis/dist/d3-axis.min */ "./node_modules/d3-axis/dist/d3-axis.min.js");
/* harmony import */ var d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale/dist/d3-scale.min */ "./node_modules/d3-scale/dist/d3-scale.min.js");
/* harmony import */ var d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-scale-chromatic/dist/d3-scale-chromatic.min */ "./node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.min.js");
/* harmony import */ var d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__);
//modules







__webpack_require__(/*! d3-transition/dist/d3-transition.min */ "./node_modules/d3-transition/dist/d3-transition.min.js");


function TopVideosVis(app) {

	this.app = app;

	// this.context = context;
	this.topTenData = [];
	this.visContainer = '';

	this.windowWidth = 0;
	this.height = 0;
	this.width = 0;

	this.margin = {
		top: 30,
		right: 250,
		bottom: 30,
		left: 10
	};

	this.svg = '';
	this.vis = '';

	this.xScale ='';
	this.yScale ='';

	this.xAxis;
	this.yAxis;

	this.colourScale = [];

	this.init = function () {

		const _this = this;

		this.visContainer = Object(d3_selection__WEBPACK_IMPORTED_MODULE_1__["select"])('#top-videos');

		// this.colour = scaleOrdinal(schemePaired);
		this.colour = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleOrdinal"])(d3_scale_chromatic_dist_d3_scale_chromatic_min__WEBPACK_IMPORTED_MODULE_5__["schemeSet3"]);

		this._setDimensions();
		this.setupVis();

		window.addEventListener('resize', function() {
			_this.resize();
		});

	};

	this._setDimensions = function () {
		this.windowWidth = this.visContainer.node().getBoundingClientRect().width;
		this.width = this.windowWidth - this.margin.left - this.margin.right;
		this.height = 300 - this.margin.top - this.margin.bottom;
	};

	this.setupVis = function() {
		//clear
		this.visContainer.html('');

		this.svg = this.visContainer.append('svg')
			.attr('width', this.width + this.margin.left + this.margin.right)
			.attr('height', this.height + this.margin.top + this.margin.bottom);


		//scale
		this.xScale = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleLinear"])()
			.range([0, this.width]);
		this.yScale = Object(d3_scale_dist_d3_scale_min__WEBPACK_IMPORTED_MODULE_4__["scaleBand"])()
			.range([this.height, 0]);


		// AXIS
		this.xAxis = this.visContainer.append('g')
			.attr('class', 'x axis')
			.attr('transform', 'translate(0,' + this.height + ')');

		this.yAxis = this.visContainer.append('g')
			.attr('class', 'y axis')
			.call(Object(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__["axisLeft"])(this.yScale).tickSize(0).tickFormat(''));

		//VIS
		this.vis = this.svg.append('g')
			.attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

	};

	//---- RESIZE
	this.resize = function () {

		const _this = this;
		//width only
		if (this.windowWidth != document.body.clientWidth) {
			//delay... end resizing
			clearTimeout(this.resizeTimer);
			this.resizeTimer = setTimeout(function () {
				_this._setDimensions();
				_this.setupVis();
				_this.update(_this.topTenData,'resize');
			}, 250);
		}
	};

	this.update = function(data,resize) {

		if (!resize) {
			this.topTenData = data.videos.slice(0, 10);
			//inverse order
			this.topTenData.sort(function (a, b) {
				return a.sumRec - b.sumRec;
			});
		}

		this.updateScale();
		this.updateAxis();
		this.updateVis();
	};
	

	this.updateScale = function() {
		this.xScale.domain([0, Object(d3_array_dist_d3_array_min__WEBPACK_IMPORTED_MODULE_2__["max"])(this.topTenData, function (d) {
			return d.sumRec;
		})]);

		this.yScale.domain(this.topTenData.map(function (d) {
			return d.title;
		})).padding(0.2);
	};

	this.updateAxis = function() {

		this.yAxis.call(Object(d3_axis_dist_d3_axis_min__WEBPACK_IMPORTED_MODULE_3__["axisBottom"])(this.xScale).ticks(0).tickFormat(''));

		// x-Axis labels
		// .call(axisBottom(this.xScale).ticks(5).tickFormat(function (d) {
		// 	return d;
		// }));

	};

	this.updateVis = function() {

		const _this = this;

		//remove it all
		let nodes = this.vis.selectAll('.node')
			.remove();

		//new data
		nodes = this.vis.selectAll('.node')
			.data(this.topTenData);

		//add elments
		let newNodes = nodes.enter()
			.append('g')
			.attr('class', 'node');
		
		newNodes.append('rect')
			.attr('class', 'bar');

		newNodes.append('text')
			.attr('class', 'bar-title');

		newNodes.append('text')
			.attr('class', 'bar-value');


		//update elements
		nodes = this.vis.selectAll('.node');

		nodes.selectAll('.bar')
			.attr('fill', function (d) {
				// return _this.colour(d.channel);
				const channel = _this.app.getChannelByName(d.channel);
				return channel.colour;
			})
			.attr('x', 0)
			.attr('height', _this.yScale.bandwidth())
			.attr('y', function (d) {
				return _this.yScale(d.title);
			})
			.style('cursor','pointer')
			.on('mousemove', function (d) {
				_this._mouseOverSelection(d);
			})
			.on('mouseout', function (d) {
				_this._mouseOutSelection(d);
			})
			.on('click', function (d) {
				_this._mouseClick(d);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return i * 100;
			}).attr('width', function (d) {
				return _this.xScale(d.sumRec);
			});

		nodes.selectAll('.bar-title')
			.attr('x', function (d) {
				return _this.xScale(d.sumRec);
			})
			.attr('y', function (d) {
				return _this.yScale(d.title);
			})
			.attr('dx', '.35em') //this.margin right
			.attr('dy', '1.35em') //vertical align middle
			.style('font', '10px sans-serif')
			.style('opacity', 0)
			.text(function (d) {
				return (d.title);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

		nodes.selectAll('.bar-value')
			.attr('x', function (d) {
				return _this.xScale(d.sumRec);
			})
			.attr('y', function (d) {
				return _this.yScale(d.title);
			})
			.attr('dx', '-.35em') //this.margin right
			.attr('dy', '1.15em') //vertical align middle
			.attr('text-anchor', 'end')
			.style('font', '12px sans-serif')
			.style('font-weight', 'bold')
			.style('fill', function (d) {
				let textColour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default()(0, 0, 0, 0.9).hex();
				const channel = _this.app.getChannelByName(d.channel);
				const contrast = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default.a.contrast(channel.colour, textColour);
				if (contrast < 4.5) textColour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_0___default()(255, 255, 255, 0.85).hex();
				return textColour;
			})
			.style('opacity', 0)
			.text(function (d) {
				return (d.sumRec);
			})
			.transition()
			.duration(750)
			.delay(function (d, i) {
				return 750 + (i * 100);
			})
			.style('opacity', 1);

	};

	this.exit = function() {
		const duration = 500;
		let bar = this.vis.selectAll('.bar');
		bar.transition()
			.duration(duration)
			.attr('width', 0);

		this.vis.selectAll('.bar-title')
			.transition()
			.duration(duration/2)
			// .attr('x', 0)
			.style('opacity', 0);

		this.vis.selectAll('.bar-value')
			.transition()
			.duration(duration)
			.attr('x', 0)
			.style('opacity', 0);

	};

	this._mouseOverSelection = function(d) {
		// console.log(d);
		// this.highlightOn(d);
		this.app.itemMouseOver(d,'video');
	};

	this._mouseOutSelection = function(d) {
		// this.highlightOff(d);
		this.app.itemMouseOut(d,'video');
	};

	this.highlightOn = function (id, sourceType) {
		this.vis.selectAll('.node')
			.style('opacity', function(d) {
				if (sourceType == 'video') {
					return (d.youtubeID === id) ? 1 : 0.5;
				} else if (sourceType == 'channel') {
					return (d.channel === id) ? 1 : 0.5;
				}
			});

		this.vis.selectAll('.bar-title')
			.style('font-weight', function(d) {
				if (sourceType == 'video') {
					if(d.youtubeID === id) return 'bold';
				} else if (sourceType == 'channel') {
					if(d.channel === id) return 'bold';
				}
			});
	};

	this.highlightOff = function () {
		this.vis.selectAll('.node').style('opacity', 1);
		this.vis.selectAll('.bar-title').style('font-weight', 'normal');
	};

	this._mouseClick = function (d) {
		this.app.showDetails(d,'video');
	};

}

/***/ }),

/***/ "./src/components/details.html":
/*!*************************************!*\
  !*** ./src/components/details.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"uk-modal-dialog\">");t.b("\n" + i);t.b("    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>");t.b("\n" + i);t.b("    <div class=\"uk-modal-header uk-background-muted\">");t.b("\n" + i);t.b("        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>");t.b("\n" + i);t.b("            <div class=\"uk-width-expand\">");t.b("\n" + i);t.b("                <h3 class=\"uk-card-title uk-margin-remove-bottom\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h3>");t.b("\n" + i);t.b("                <p class=\"uk-text-meta uk-margin-remove-top\">");t.b(t.v(t.f("channel",c,p,0)));t.b("</p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"uk-modal-body uk-text-center\">");t.b("\n" + i);t.b("        <iframe width=\"540\"");t.b("\n" + i);t.b("                height=\"310\"");t.b("\n" + i);t.b("                src=\"https://www.youtube.com/embed/");t.b(t.v(t.f("youtubeID",c,p,0)));t.b("\"");t.b("\n" + i);t.b("                frameborder=\"0\"");t.b("\n" + i);t.b("                allow=\"autoplay; encrypted-media\"");t.b("\n" + i);t.b("                allowfullscreen></iframe>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <div class=\"uk-modal-footer\" uk-overflow-auto>");t.b("\n" + i);t.b("        <table id=\"video-dates-details\"");t.b("\n" + i);t.b("                class=\"uk-table uk-table-small uk-table-hover uk-table-divider\">");t.b("\n" + i);t.b("            <thead>");t.b("\n" + i);t.b("                <tr>");t.b("\n" + i);t.b("                    <th class=\"\">&nbsp;</th>");t.b("\n" + i);t.b("                    <th class=\"uk-text-right\">Visualizações</th>");t.b("\n" + i);t.b("                    <th class=\"uk-text-right\">Gostei</th>");t.b("\n" + i);t.b("                    <th class=\"uk-text-right\">Não Gostei</th>");t.b("\n" + i);t.b("                    <th class=\"uk-text-right\">Recomendações</th>");t.b("\n" + i);t.b("                    <th class=\"uk-text-right\"><span class=\"uk-text-small\">Posição no Ranking de Recomendações</span></th>");t.b("\n" + i);t.b("                </tr>");t.b("\n" + i);t.b("            </thead>");t.b("\n" + i);t.b("            <tbody>");t.b("\n" + i);if(t.s(t.f("dates",c,p,1),c,p,0,1488,1909,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("                <tr>");t.b("\n" + i);t.b("                    <td>");t.b(t.v(t.f("date",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("                    <td class=\"uk-text-right\">");t.b(t.v(t.f("views",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("                    <td class=\"uk-text-right\">");t.b(t.v(t.f("likes",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("                    <td class=\"uk-text-right\">");t.b(t.v(t.f("dislikes",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("                    <td class=\"uk-text-right\">");t.b(t.v(t.f("nb_recommendations",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("                    <td class=\"uk-text-right\">");t.b(t.v(t.f("recRank",c,p,0)));t.b("</td>");t.b("\n" + i);t.b("                </tr>");t.b("\n" + i);});c.pop();}t.b("            </tbody>");t.b("\n" + i);t.b("        </table>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"uk-modal-dialog\">\n    <button class=\"uk-modal-close-default\" type=\"button\" uk-close></button>\n    <div class=\"uk-modal-header uk-background-muted\">\n        <div class=\"uk-grid-small uk-flex-middle\" uk-grid>\n            <div class=\"uk-width-expand\">\n                <h3 class=\"uk-card-title uk-margin-remove-bottom\">{{title}}</h3>\n                <p class=\"uk-text-meta uk-margin-remove-top\">{{channel}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"uk-modal-body uk-text-center\">\n        <iframe width=\"540\"\n                height=\"310\"\n                src=\"https://www.youtube.com/embed/{{youtubeID}}\"\n                frameborder=\"0\"\n                allow=\"autoplay; encrypted-media\"\n                allowfullscreen></iframe>\n    </div>\n    <div class=\"uk-modal-footer\" uk-overflow-auto>\n        <table id=\"video-dates-details\"\n                class=\"uk-table uk-table-small uk-table-hover uk-table-divider\">\n            <thead>\n                <tr>\n                    <th class=\"\">&nbsp;</th>\n                    <th class=\"uk-text-right\">Visualizações</th>\n                    <th class=\"uk-text-right\">Gostei</th>\n                    <th class=\"uk-text-right\">Não Gostei</th>\n                    <th class=\"uk-text-right\">Recomendações</th>\n                    <th class=\"uk-text-right\"><span class=\"uk-text-small\">Posição no Ranking de Recomendações</span></th>\n                </tr>\n            </thead>\n            <tbody>\n                {{#dates}}\n                <tr>\n                    <td>{{date}}</td>\n                    <td class=\"uk-text-right\">{{views}}</td>\n                    <td class=\"uk-text-right\">{{likes}}</td>\n                    <td class=\"uk-text-right\">{{dislikes}}</td>\n                    <td class=\"uk-text-right\">{{nb_recommendations}}</td>\n                    <td class=\"uk-text-right\">{{recRank}}</td>\n                </tr>\n                {{/dates}}\n            </tbody>\n        </table>\n    </div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/details.js":
/*!***********************************!*\
  !*** ./src/components/details.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Details; });
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _details_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.html */ "./src/components/details.html");
/* harmony import */ var _details_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_details_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__);
//modules




function Details(app) {
	this.app = app;

	this.pageData = {};
	this.modal;

	this.init = function init() {

		this.modal = Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#app').append('div')
			.attr('id','modal-video-details')
			.attr('class', 'uk-modal-container')
			.attr('uk-modal','true');
	};

	this.addModal = function (d,source) { 

		let youtubeID = '';
		let dates = [];

		if (source == 'video') {
			youtubeID = d.youtubeID;
			dates = d.dates;
		} else if (source == 'rank') {
			youtubeID = d.data.youtubeID;
			dates = d.data.dates;
		}

		// data
		this.pageData = {
			title: d.title,
			channel: d.channel,
			youtubeID: youtubeID,
			dates: dates.reverse(),
		};

		// buid page
		const html = _details_html__WEBPACK_IMPORTED_MODULE_1___default()(this.pageData);
		this.modal.html(html);

		uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a.modal(this.modal.node()).show();

	};
	
}

/***/ }),

/***/ "./src/components/header.html":
/*!************************************!*\
  !*** ./src/components/header.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"uk-section uk-padding-small tm-main\">");t.b("\n" + i);t.b("	<div class=\"uk-container uk-container-small uk-text-center\">");t.b("\n" + i);t.b("		<h1 class=\"uk-heading-primary\">");t.b(t.v(t.f("title",c,p,0)));t.b("\n" + i);t.b("		<br/><span class=\"uk-h2\">");t.b(t.v(t.f("subtitle",c,p,0)));t.b("</span></h1>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"uk-section uk-padding-small tm-main\">\n\t<div class=\"uk-container uk-container-small uk-text-center\">\n\t\t<h1 class=\"uk-heading-primary\">{{title}}\n\t\t<br/><span class=\"uk-h2\">{{subtitle}}</span></h1>\n\t</div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.html */ "./src/components/header.html");
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.js");






const init = () => {

	const pageData = {
		title: _app__WEBPACK_IMPORTED_MODULE_2__["config"].meta.title,
		subtitle: _app__WEBPACK_IMPORTED_MODULE_2__["config"].meta.subtitle,
	};

	// buid page
	const html = _header_html__WEBPACK_IMPORTED_MODULE_0___default()(pageData);
	Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#app').append('div').attr('id','header-section');
	Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#header-section').html(html);
};


/* harmony default export */ __webpack_exports__["default"] = ({
	init
});

/***/ }),

/***/ "./src/components/methodology.html":
/*!*****************************************!*\
  !*** ./src/components/methodology.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"uk-section uk-section-xsmall uk-section-muted tm-main\">");t.b("\n" + i);t.b("    <div class=\"uk-container uk-text-small uk-text-muted\">");t.b("\n" + i);t.b("        <h3 class=\"uk-h3 uk-text-center uk-margin-small-top\"><span>");t.b(t.v(t.f("title",c,p,0)));t.b(" <a id=\"methodology-toggle-icon\" class=\"uk-icon-link\" uk-icon=\"plus-circle\" uk-toggle=\"target: #methodology\"></a></span></h3>");t.b("\n" + i);t.b("        <div id=\"methodology\" class=\"uk-grid-divider uk-margin-large-top uk-margin-medium-bottom\" uk-grid hidden>");t.b("\n" + i);t.b("            <div class=\"uk-width-3-5@m\">");t.b("\n" + i);t.b("                <h5 class=\"uk-h5 uk-text-uppercase\">Coleta de dados</h5>");t.b("\n" + i);t.b("                <p>Os dados de desse projeto foram coletados foram coletados usando um script em Python desenvolvido por <a href=\"https://github.com/pnbt/YouTube-explore\" target=\"_blank\">Guillaume Chaslot</a> como parte to projeto Algo Transparency. O algorithm em questão faz uma busca no Youtube usando uma palavra-chave definida pelo usuário para coletar e armazenar informações dos videos relacionados à palavra-chave. Mais especificamente nós usamos script para A) identificar os quatro primeiros resultados encontrados na pesquisa no Youtube pela palavra-chave, B) obter os primeiros quatro videos relacionados ao resultados da pesquisa, C) repetir a etapa (B) quatro vezes sucessivamente com cada video obtido para coletar videos relacionados, e D) guardar o resultado em arquivo JSON. Esse operação é análoga a uma pessoa fazer uma busca por uma palavra-chave no Youtube, abrir os primeiros quatro videos, e na sequencia clicar nos quatro primeiros videos recomendados, repetindo esse processo quatro vezes para cada video que for aberto.</p>");t.b("\n" + i);t.b("                <p>Esse algoritmo não usa a API publica do Youtube. Ao invés disse, ele simula o ambiente do navegador web para coletar os elementos (HTML)que são desenhados nas páginas de busca e do visualização de video do Youtube — um processo conhecido como \"scraping\". Esse processo faz com que a coleta de dados fique mais neutra, evitando preferencias pessoais e preconceitos sociais definidas inscritas no perfil do usuário. Ou seja, não leve em consideração as preferencias do perfil do usuário no Youtube, o histórico do navegador, cookies, e outros elementos que podem interferir no rankeamento gerado pelo Youtube. No entanto, isso não remove outras variáveis que possam distorcer ou formatar o ranking, como a localização e sistema do computador em que a coleta foi feita, a lingua em que o sistema esta configurado, ou qualquer outra variável que faça parte do processo de ranqueamento não revelada pelo Youtube.</p>");t.b("\n" + i);t.b("                <p>Para esta pesquisa nós coletados termos relevantes às eleições no Brasil, mais especificamente os nomes dos candidatos e uma variação do nome do candidato acrescentado da palavra \"presidente\". Coletados as informações dos videos dos principais candidatos, a saber: Lula, Fernando Haddad, Geraldo Alckmin, Jair Bolsonaro, Guilherme Boulos, Ciro Gomes, Marina Silva, Henrique Meireles, e João Amoêdo (acrescentado à lista no dia 5 de setembro de 2018). Coletamos ainda informações do videos relacionados as palavras-chaves \"Eleições 2018\" e \"Brazil Elections\". A coleta dos dados foi feita usando uma vez ao dia, apenas por um computador (Apple) localizado em Montreal, Canada, entre os dia 23 de agosto de 2018 e 10 de outubro de 2018, entre 19 e 20 horas (horário de Brasília).</p>");t.b("\n" + i);t.b("                <p>Cada coleta diária produziu um arquivo para cada termo pesquisado. Os arquivos de cada termo foram combinados e reestruturados em um único dataset para gerar informações como o numero total de vezes que um video for recomendado no período afim de ser usados na produção da visualização proposta neste projeto.</p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"uk-width-2-5@m\">");t.b("\n" + i);t.b("                <h5 class=\"uk-h5 uk-text-uppercase\">Rankflow</h5>");t.b("\n" + i);t.b("				<p>Inspirado no trabalho de <a href=\"http://labs.polsys.net/tools/rankflow/\" target=\"_blank\">Bernhard Rieder</a>, nós desenvolvemos uma visualização que mostra o ranking dos videos mais recomendados por dia em um certo período de tempo (Rankflow). A visualização foi desenvolvida usando <a href=\"https://d3js.org/\" target=\"_blank\">D3.js</a> e mostra todos os videos que alcançaram pelo menos a quinta posição no ranking para cada termo pesquisado em qualquer dia do período observado. A cor de cada linha é mapeada para representar o canal de origem do video. A largura funciona como o reforço visual para para indicar a melhor posição alcançada pelo video no período, medido tampem no eixo vertical do gráfico. Passe mouse por cima de cada linha para que ela se acenda e as outras se apaguem. Clique em cada uma das linhas para abriar um janela com informações sobre o video, incluindo um video play para assistir o video no context, assim como as métricas básicas do video a cada dia (numero de visualização, \"gostei\", \"não gostei\", recomendações e posição no ranking).</p>");t.b("\n" + i);t.b("				<p>Acompanhando essa visualização há dois outros gráficos indicando os dez videos mais vistos e os dez canais com mais visualizações. Passe o mouse por cima das barras em um dos gráficos para acender barras correspondentes nas ouras visualizações. Clique em um das barras dos dez videos mais vistos para obter mais informações.</p>");t.b("\n" + i);t.b("				<p>O rankflow permite analizar a evoluções de video no ranking the recomendações, identificar tendencias e padrões, e observar o que tem sido recomendado pelo algoritmo do Youtube. Esse projeto permite observar não apenas quais foram os videos mais recomendados, vistos e curtidos para cada termo pesquisado, mas também ajuda a identificar os produtores desses videos e a rede de conexões entre videos, produtores, e espectadores nas redes sociais. Isso também pode nos dar algumas pistas sobre o funcionamento do sistema de ranqueamento usado no Youtube, assim como quais os videos mais proeminentes em um tópico especifico, e qual a narrativa esse ranking produz no debate político no Brasil em particular, e nas redes sociais de forma mais geral.</p>");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"uk-section uk-section-xsmall uk-section-muted tm-main\">\n    <div class=\"uk-container uk-text-small uk-text-muted\">\n        <h3 class=\"uk-h3 uk-text-center uk-margin-small-top\"><span>{{title}} <a id=\"methodology-toggle-icon\" class=\"uk-icon-link\" uk-icon=\"plus-circle\" uk-toggle=\"target: #methodology\"></a></span></h3>\n        <div id=\"methodology\" class=\"uk-grid-divider uk-margin-large-top uk-margin-medium-bottom\" uk-grid hidden>\n            <div class=\"uk-width-3-5@m\">\n                <h5 class=\"uk-h5 uk-text-uppercase\">Coleta de dados</h5>\n                <p>Os dados de desse projeto foram coletados foram coletados usando um script em Python desenvolvido por <a href=\"https://github.com/pnbt/YouTube-explore\" target=\"_blank\">Guillaume Chaslot</a> como parte to projeto Algo Transparency. O algorithm em questão faz uma busca no Youtube usando uma palavra-chave definida pelo usuário para coletar e armazenar informações dos videos relacionados à palavra-chave. Mais especificamente nós usamos script para A) identificar os quatro primeiros resultados encontrados na pesquisa no Youtube pela palavra-chave, B) obter os primeiros quatro videos relacionados ao resultados da pesquisa, C) repetir a etapa (B) quatro vezes sucessivamente com cada video obtido para coletar videos relacionados, e D) guardar o resultado em arquivo JSON. Esse operação é análoga a uma pessoa fazer uma busca por uma palavra-chave no Youtube, abrir os primeiros quatro videos, e na sequencia clicar nos quatro primeiros videos recomendados, repetindo esse processo quatro vezes para cada video que for aberto.</p>\n                <p>Esse algoritmo não usa a API publica do Youtube. Ao invés disse, ele simula o ambiente do navegador web para coletar os elementos (HTML)que são desenhados nas páginas de busca e do visualização de video do Youtube — um processo conhecido como \"scraping\". Esse processo faz com que a coleta de dados fique mais neutra, evitando preferencias pessoais e preconceitos sociais definidas inscritas no perfil do usuário. Ou seja, não leve em consideração as preferencias do perfil do usuário no Youtube, o histórico do navegador, cookies, e outros elementos que podem interferir no rankeamento gerado pelo Youtube. No entanto, isso não remove outras variáveis que possam distorcer ou formatar o ranking, como a localização e sistema do computador em que a coleta foi feita, a lingua em que o sistema esta configurado, ou qualquer outra variável que faça parte do processo de ranqueamento não revelada pelo Youtube.</p>\n                <p>Para esta pesquisa nós coletados termos relevantes às eleições no Brasil, mais especificamente os nomes dos candidatos e uma variação do nome do candidato acrescentado da palavra \"presidente\". Coletados as informações dos videos dos principais candidatos, a saber: Lula, Fernando Haddad, Geraldo Alckmin, Jair Bolsonaro, Guilherme Boulos, Ciro Gomes, Marina Silva, Henrique Meireles, e João Amoêdo (acrescentado à lista no dia 5 de setembro de 2018). Coletamos ainda informações do videos relacionados as palavras-chaves \"Eleições 2018\" e \"Brazil Elections\". A coleta dos dados foi feita usando uma vez ao dia, apenas por um computador (Apple) localizado em Montreal, Canada, entre os dia 23 de agosto de 2018 e 10 de outubro de 2018, entre 19 e 20 horas (horário de Brasília).</p>\n                <p>Cada coleta diária produziu um arquivo para cada termo pesquisado. Os arquivos de cada termo foram combinados e reestruturados em um único dataset para gerar informações como o numero total de vezes que um video for recomendado no período afim de ser usados na produção da visualização proposta neste projeto.</p>\n            </div>\n            <div class=\"uk-width-2-5@m\">\n                <h5 class=\"uk-h5 uk-text-uppercase\">Rankflow</h5>\n\t\t\t\t<p>Inspirado no trabalho de <a href=\"http://labs.polsys.net/tools/rankflow/\" target=\"_blank\">Bernhard Rieder</a>, nós desenvolvemos uma visualização que mostra o ranking dos videos mais recomendados por dia em um certo período de tempo (Rankflow). A visualização foi desenvolvida usando <a href=\"https://d3js.org/\" target=\"_blank\">D3.js</a> e mostra todos os videos que alcançaram pelo menos a quinta posição no ranking para cada termo pesquisado em qualquer dia do período observado. A cor de cada linha é mapeada para representar o canal de origem do video. A largura funciona como o reforço visual para para indicar a melhor posição alcançada pelo video no período, medido tampem no eixo vertical do gráfico. Passe mouse por cima de cada linha para que ela se acenda e as outras se apaguem. Clique em cada uma das linhas para abriar um janela com informações sobre o video, incluindo um video play para assistir o video no context, assim como as métricas básicas do video a cada dia (numero de visualização, \"gostei\", \"não gostei\", recomendações e posição no ranking).</p>\n\t\t\t\t<p>Acompanhando essa visualização há dois outros gráficos indicando os dez videos mais vistos e os dez canais com mais visualizações. Passe o mouse por cima das barras em um dos gráficos para acender barras correspondentes nas ouras visualizações. Clique em um das barras dos dez videos mais vistos para obter mais informações.</p>\n\t\t\t\t<p>O rankflow permite analizar a evoluções de video no ranking the recomendações, identificar tendencias e padrões, e observar o que tem sido recomendado pelo algoritmo do Youtube. Esse projeto permite observar não apenas quais foram os videos mais recomendados, vistos e curtidos para cada termo pesquisado, mas também ajuda a identificar os produtores desses videos e a rede de conexões entre videos, produtores, e espectadores nas redes sociais. Isso também pode nos dar algumas pistas sobre o funcionamento do sistema de ranqueamento usado no Youtube, assim como quais os videos mais proeminentes em um tópico especifico, e qual a narrativa esse ranking produz no debate político no Brasil em particular, e nas redes sociais de forma mais geral.</p>\n            </div>\n        </div>\n    </div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/methodology.js":
/*!***************************************!*\
  !*** ./src/components/methodology.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Methodology; });
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _methodology_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methodology.html */ "./src/components/methodology.html");
/* harmony import */ var _methodology_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_methodology_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__);




function Methodology(app) {
	this.app = app;
	this.showMethodology = false;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Metodologia',
			data: 'Data Collection',
		};

		// buid page
		const html = _methodology_html__WEBPACK_IMPORTED_MODULE_1___default()(pageData);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#app').append('div').attr('id','methodology-section');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#methodology-section').html(html);

		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#methodology-section').on('click', this.toggleMethodology);

	};

	this.toggleMethodology = function toggleMethodology() {
		this.showMethodology = !this.showMethodology;

		let icon;

		if (this.showMethodology) {
			icon = 'minus-circle';
		} else {
			icon = 'plus-circle';
		}

		uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a.icon('#methodology-toggle-icon', {
			icon: `${icon}`,
		});
	};
}

/***/ }),

/***/ "./src/components/rankflow.html":
/*!**************************************!*\
  !*** ./src/components/rankflow.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"uk-section uk-section-xsmall tm-main\">");t.b("\n" + i);t.b("    <div class=\"uk-container uk-container-expand\">");t.b("\n" + i);t.b("        <h2 class=\"uk-h2 uk-text-center\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        <div class=\"uk-text-center\" uk-grid>");t.b("\n" + i);t.b("            <div class=\"uk-width-auto\"></div>");t.b("\n" + i);t.b("            <div class=\"uk-width-expand\">");t.b("\n" + i);t.b("                <div class=\"spiner\" uk-spinner=\"ratio: 1\"></div>");t.b("\n" + i);t.b("                <div id=\"rankflow-panel\" class=\"uk-panel uk-overflow-auto\">");t.b("\n" + i);t.b("                    <div id=\"visualization\"></div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div id=\"horizontal-scroll-hint\" class=\"uk-text-meta uk-margin-medium-top\" hidden>");t.b("\n" + i);t.b("                    <p><span uk-icon=\"chevron-left\"></span> ");t.b(t.v(t.f("scrollText",c,p,0)));t.b(" <span uk-icon=\"chevron-right\"></span></p>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("                <div id=\"modal-video-details\" uk-modal></div>");t.b("\n");t.b("\n" + i);t.b("            </div>");t.b("\n" + i);t.b("            <div class=\"uk-width-auto\"></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"uk-section uk-section-xsmall tm-main\">\n    <div class=\"uk-container uk-container-expand\">\n        <h2 class=\"uk-h2 uk-text-center\">{{title}}</h2>\n        <div class=\"uk-text-center\" uk-grid>\n            <div class=\"uk-width-auto\"></div>\n            <div class=\"uk-width-expand\">\n                <div class=\"spiner\" uk-spinner=\"ratio: 1\"></div>\n                <div id=\"rankflow-panel\" class=\"uk-panel uk-overflow-auto\">\n                    <div id=\"visualization\"></div>\n                </div>\n                <div id=\"horizontal-scroll-hint\" class=\"uk-text-meta uk-margin-medium-top\" hidden>\n                    <p><span uk-icon=\"chevron-left\"></span> {{scrollText}} <span uk-icon=\"chevron-right\"></span></p>\n                </div>\n                <div id=\"modal-video-details\" uk-modal></div>\n\n            </div>\n            <div class=\"uk-width-auto\"></div>\n        </div>\n    </div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/rankflow.js":
/*!************************************!*\
  !*** ./src/components/rankflow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rankflow; });
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rankflow_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rankflow.html */ "./src/components/rankflow.html");
/* harmony import */ var _rankflow_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_rankflow_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RankflowVis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RankflowVis */ "./src/components/RankflowVis.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__);





function Rankflow(app) {
	this.app = app;
	this.vis;

	this.init = function init() {
		// data
		this.pageData = {
			title: 'Videos mais recomendados no período',
			showScrollHint: false,
			scrollText: 'Role'
		};

		// buid page
		const html = _rankflow_html__WEBPACK_IMPORTED_MODULE_1___default()(this.pageData);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__["select"])('#app').append('div').attr('id','rankflow-section');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__["select"])('#rankflow-section').html(html);

		uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__["select"])('#horizontal-scroll-hint'), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade'
		});
		
		this.vis = new _RankflowVis__WEBPACK_IMPORTED_MODULE_2__["default"](this.app);
		this.vis.init();
	};

	this.load = function(data) {
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__["select"])('#rankflow-section').select('.spiner').hide();
		this.vis.update(data);
	};

	this.loading = function() {
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_3__["select"])('#rankflow-section').select('.spiner').show();
		this.vis.exit();
	};

	this.highlightOn = function (id, sourceType) {
		this.vis.highlightOn(id, sourceType);
	};

	this.highlightOff = function (youtubeID) {
		this.vis.highlightOff(youtubeID);
	};

}

/***/ }),

/***/ "./src/components/sidebar.html":
/*!*************************************!*\
  !*** ./src/components/sidebar.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"tm-sidebar-left\">");t.b("\n" + i);t.b("	<div id=\"main-menu\">");t.b("\n" + i);t.b("		<ul class=\"uk-nav uk-nav-default\" uk-switcher>");t.b("\n" + i);t.b("            <p class=\"uk-text-lead\">");t.b(t.v(t.f("termsTitle",c,p,0)));t.b("</p>");t.b("\n" + i);if(t.s(t.f("terms",c,p,1),c,p,0,178,252,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			<li><a onclick=\"selectTerm('");t.b(t.v(t.f("slug",c,p,0)));t.b("')\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("		</ul>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("	");t.b("\n" + i);t.b("	<div id=\"footer-section\" class=\"uk-section uk-section-xsmall\">");t.b("\n" + i);t.b("		<div class=\"uk-container uk-container-small uk-text-small uk-text-center\">");t.b("\n" + i);t.b("			<hr class=\"uk-divider-small\">");t.b("\n" + i);t.b("			<p class=\"uk-text-muted\">Developed by<br/><a href=\"https://luciano.fluxo.art.br\" target=\"_blank\" class=\"uk-link-text\">Luciano Frizzera</a></p>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"tm-sidebar-left\">\n\t<div id=\"main-menu\">\n\t\t<ul class=\"uk-nav uk-nav-default\" uk-switcher>\n            <p class=\"uk-text-lead\">{{termsTitle}}</p>\n            {{#terms}}\n\t\t\t<li><a onclick=\"selectTerm('{{slug}}')\">{{name}}</a></li>\n            {{/terms}}\n\t\t</ul>\n\t</div>\n\t\n\t<div id=\"footer-section\" class=\"uk-section uk-section-xsmall\">\n\t\t<div class=\"uk-container uk-container-small uk-text-small uk-text-center\">\n\t\t\t<hr class=\"uk-divider-small\">\n\t\t\t<p class=\"uk-text-muted\">Developed by<br/><a href=\"https://luciano.fluxo.art.br\" target=\"_blank\" class=\"uk-link-text\">Luciano Frizzera</a></p>\n\t\t</div>\n\t</div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/*! exports provided: selectTerm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTerm", function() { return selectTerm; });
/* harmony import */ var _sidebar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.html */ "./src/components/sidebar.html");
/* harmony import */ var _sidebar_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app */ "./src/app.js");





const init = () => {

	const pageData = {
		termsTitle: _app__WEBPACK_IMPORTED_MODULE_2__["config"].meta.termsTitle,
		terms: _app__WEBPACK_IMPORTED_MODULE_2__["config"].terms
	};

	// buid page
	const html = _sidebar_html__WEBPACK_IMPORTED_MODULE_0___default()(pageData);
	Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#app').append('div').attr('id','tm-sidebar-left');
	Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#tm-sidebar-left').html(html);
};

const selectTerm = term => {

	console.log('oi');
	
	// const selectedTerm = config.terms.find(t => t.slug === term);

	// // Dispatch the event.
	// const event = new Event('selectTerm', selectedTerm);
	// this.dispatchEvent(event);
};


/* harmony default export */ __webpack_exports__["default"] = ({
	init,
	selectTerm
});

/***/ }),

/***/ "./src/components/topchannels.html":
/*!*****************************************!*\
  !*** ./src/components/topchannels.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<!-- <div class=\"uk-section tm-main\">");t.b("\n" + i);t.b("    <div class=\"uk-container\"> -->");t.b("\n" + i);t.b("        <h2 class=\"uk-h2 uk-text-center\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("        <div class=\"uk-text-small\">");t.b("\n" + i);t.b("            <div class=\"spiner uk-position-absolute uk-transform-center uk-margin-large-bottom\" uk-spinner=\"ratio: 1\"></div>");t.b("\n" + i);t.b("            <div id=\"top-channels\"></div>");t.b("\n" + i);t.b("        </div>");t.b("\n" + i);t.b("    <!-- </div>");t.b("\n" + i);t.b("    <hr>");t.b("\n" + i);t.b("</div> -->");return t.fl(); },partials: {}, subs: {  }}, "<!-- <div class=\"uk-section tm-main\">\n    <div class=\"uk-container\"> -->\n        <h2 class=\"uk-h2 uk-text-center\">{{title}}</h2>\n        <div class=\"uk-text-small\">\n            <div class=\"spiner uk-position-absolute uk-transform-center uk-margin-large-bottom\" uk-spinner=\"ratio: 1\"></div>\n            <div id=\"top-channels\"></div>\n        </div>\n    <!-- </div>\n    <hr>\n</div> -->", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/topchannels.js":
/*!***************************************!*\
  !*** ./src/components/topchannels.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Topvideos; });
/* harmony import */ var _topchannels_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topchannels.html */ "./src/components/topchannels.html");
/* harmony import */ var _topchannels_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_topchannels_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopChannelsVis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopChannelsVis */ "./src/components/TopChannelsVis.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__);





function Topvideos(app) {
	this.app = app;
	this.vis;

	this.init = function init() {
		// data
		const pageData = {
			title: 'Canais mais recomendados',
		};

		// buid page
		const html = _topchannels_html__WEBPACK_IMPORTED_MODULE_0___default()(pageData);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#channels').append('div').attr('id','topchannels-section');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#topchannels-section').html(html);

		this.vis = new _TopChannelsVis__WEBPACK_IMPORTED_MODULE_1__["default"](this.app);
		this.vis.init();
	};

	this.load = function(data) {
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#topchannels-section').select('.spiner').hide();
		this.vis.update(data);
	};

	this.loading = function() {
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#topchannels-section').select('.spiner').show();
		this.vis.exit();
	};

	this.highlightOn = function (channelName) {
		this.vis.highlightOn(channelName);
	};

	this.highlightOff = function (channelName) {
		this.vis.highlightOff(channelName);
	};
}

/***/ }),

/***/ "./src/components/topmenu.html":
/*!*************************************!*\
  !*** ./src/components/topmenu.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"uk-section uk-section-xsmall uk-background-muted uk-padding-remove-top uk-padding-remove-bottom uk-box-shadow-small tm-main\" uk-sticky=\"media:640\">");t.b("\n" + i);t.b("	<div class=\"uk-container uk-container-expand uk-text-center\">");t.b("\n");t.b("\n" + i);t.b("		<div id=\"small-title\" class=\"uk-clear-fix uk-margin-top\" hidden>");t.b("\n" + i);t.b("			<h4 class=\"uk-h4 uk-margin-remove-bottom\">");t.b(t.v(t.f("title",c,p,0)));t.b(": ");t.b(t.v(t.f("subtitle",c,p,0)));t.b("</h4>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	");t.b("\n" + i);t.b("		<div id=\"current-view\">");t.b("\n" + i);t.b("			<p class=\"uk-margin-top uk-text-lead\">");t.b("\n" + i);t.b("                    ");t.b(t.v(t.f("currentTerm",c,p,0)));t.b(" | ");t.b(t.v(t.f("currentPeriod",c,p,0)));t.b("\n" + i);t.b("			</p>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"uk-section uk-section-xsmall uk-background-muted uk-padding-remove-top uk-padding-remove-bottom uk-box-shadow-small tm-main\" uk-sticky=\"media:640\">\n\t<div class=\"uk-container uk-container-expand uk-text-center\">\n\n\t\t<div id=\"small-title\" class=\"uk-clear-fix uk-margin-top\" hidden>\n\t\t\t<h4 class=\"uk-h4 uk-margin-remove-bottom\">{{title}}: {{subtitle}}</h4>\n\t\t</div>\n\t\n\t\t<div id=\"current-view\">\n\t\t\t<p class=\"uk-margin-top uk-text-lead\">\n                    {{currentTerm}} | {{currentPeriod}}\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/topmenu.js":
/*!***********************************!*\
  !*** ./src/components/topmenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Topmenu; });
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_en_ca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/en-ca */ "./node_modules/moment/locale/en-ca.js");
/* harmony import */ var moment_locale_en_ca__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_ca__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _topmenu_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topmenu.html */ "./src/components/topmenu.html");
/* harmony import */ var _topmenu_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_topmenu_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__);
//modules







function Topmenu(app) {
	this.app = app;

	this.init = function init() {

		moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('pt-br');
		
		const startDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.app.period.start).locale('pt').format('DD [de] MMMM');
		const endDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.app.period.end).locale('pt').format('DD [de] MMMM');

		// const startDateLocale = this.app.period.start.locale('pt').format('DD MMMM');
		// const endDateLocale = this.app.period.end.locale('pt').format('DD MMMM');

		// data
		this.pageData = {
			title: 'Eleições Brasil 2018',
			subtitle: 'RankFlow das Recomendações do YouTube',
			currentTerm: this.app.selectedTerm.name,
			currentPeriod: `${startDate} a ${endDate}`,
		};

		// buid page
		const html = _topmenu_html__WEBPACK_IMPORTED_MODULE_4___default()(this.pageData);

		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#app').append('div').attr('id','top-menu');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#top-menu').html(html);

		uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#small-title').node(), {
			mode: 'media',
			animation: 'uk-animation-fade,uk-animation-fade',
		});

		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#menu-section').on('active', this.toggleSmallTittle);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#menu-section').on('inactive', this.toggleSmallTittle);

		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#menu-section').on('active', this.toggleSmallTittle);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#menu-section').on('inactive', this.toggleSmallTittle);
	};

	this.toggleSmallTittle = function toggleSmallTittle() {
		uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a.toggle(Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#small-title').node()).toggle();
	};

	this.updateTerm = function(term) {
		this.pageData.currentTerm = term.name;
		const html = _topmenu_html__WEBPACK_IMPORTED_MODULE_4___default()(this.pageData);

		const topMenu = Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_5__["select"])('#top-menu');
		topMenu.html(html);
	};

}

/***/ }),

/***/ "./src/components/topvideos.html":
/*!***************************************!*\
  !*** ./src/components/topvideos.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var H = __webpack_require__(/*! hogan.js */ "./node_modules/hogan.js/lib/hogan.js");
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"uk-section tm-main\">");t.b("\n" + i);t.b("    <div class=\"uk-container\">");t.b("\n");t.b("\n" + i);t.b("         <div uk-grid>");t.b("\n");t.b("\n" + i);t.b("            <div id='videos' class='uk-width-1-2'>");t.b("\n" + i);t.b("                <h2 class=\"uk-h2 uk-text-center\">");t.b(t.v(t.f("title",c,p,0)));t.b("</h2>");t.b("\n" + i);t.b("                <div class=\"uk-text-small\">");t.b("\n" + i);t.b("                    <div class=\"spiner uk-position-absolute uk-transform-center uk-margin-large-bottom\" uk-spinner=\"ratio: 1\"></div>");t.b("\n" + i);t.b("                    <div id=\"top-videos\"></div>");t.b("\n" + i);t.b("                </div>");t.b("\n" + i);t.b("            </div>");t.b("\n");t.b("\n" + i);t.b("            <div id='channels' class='uk-width-1-2'></div>");t.b("\n");t.b("\n" + i);t.b("        </div>");t.b("\n");t.b("\n" + i);t.b("    </div>");t.b("\n" + i);t.b("    <hr>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"uk-section tm-main\">\n    <div class=\"uk-container\">\n\n         <div uk-grid>\n\n            <div id='videos' class='uk-width-1-2'>\n                <h2 class=\"uk-h2 uk-text-center\">{{title}}</h2>\n                <div class=\"uk-text-small\">\n                    <div class=\"spiner uk-position-absolute uk-transform-center uk-margin-large-bottom\" uk-spinner=\"ratio: 1\"></div>\n                    <div id=\"top-videos\"></div>\n                </div>\n            </div>\n\n            <div id='channels' class='uk-width-1-2'></div>\n\n        </div>\n\n    </div>\n    <hr>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/topvideos.js":
/*!*************************************!*\
  !*** ./src/components/topvideos.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Topvideos; });
/* harmony import */ var _topvideos_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topvideos.html */ "./src/components/topvideos.html");
/* harmony import */ var _topvideos_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_topvideos_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TopVideosVis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopVideosVis */ "./src/components/TopVideosVis.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__);






function Topvideos(app) {
	this.app = app;
	this.vis;

	this.init = function init() {

		// data
		const pageData = {
			title: 'Videos mais recomendados',
		};

		// buid page
		const html = _topvideos_html__WEBPACK_IMPORTED_MODULE_0___default()(pageData);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#app').append('div').attr('id','topvideos-section');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#topvideos-section').html(html);

		this.vis = new _TopVideosVis__WEBPACK_IMPORTED_MODULE_1__["default"](this.app);
		this.vis.init();
	};

	this.load = function(data) {
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#topvideos-section').select('.spiner').hide();
		this.vis.update(data);
	};

	this.loading = function() {
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["select"])('#topvideos-section').select('.spiner').show();
		this.vis.exit();
	};

	this.highlightOn = function (id, sourceType) {
		this.vis.highlightOn(id, sourceType);
	};

	this.highlightOff = function (youtubeID) {
		this.vis.highlightOff(youtubeID);
	};
}

/***/ }),

/***/ "./src/datamodel.js":
/*!**************************!*\
  !*** ./src/datamodel.js ***!
  \**************************/
/*! exports provided: loadData, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadData", function() { return loadData; });
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js");
/* harmony import */ var event_emitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(event_emitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment_locale_en_ca__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment/locale/en-ca */ "./node_modules/moment/locale/en-ca.js");
/* harmony import */ var moment_locale_en_ca__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_locale_en_ca__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-fetch/dist/d3-fetch.min */ "./node_modules/d3-fetch/dist/d3-fetch.min.js");
/* harmony import */ var d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chroma-js/chroma.min */ "./node_modules/chroma-js/chroma.min.js");
/* harmony import */ var chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5__);
// modules









//emitter
event_emitter__WEBPACK_IMPORTED_MODULE_0___default()(undefined);
moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('pt-br');
const PATH = './dataset'; // Define files paths

const collection = {
	videos: [],
	channels: [],
	topChannels: []
};

const period = {
	start: undefined,
	end: undefined,
	duration: undefined
};

// this.temp;
let selectedTerm;
const maxRankIndex = 10;


const init = config => {
	selectedTerm = config.terms[0].slug;
	period.start = moment__WEBPACK_IMPORTED_MODULE_1___default()(config.period.start);
	period.end = moment__WEBPACK_IMPORTED_MODULE_1___default()(config.period.end);
	period.duration =  period.end.diff(period.start, 'days') + 1;
};

const loadData = async term => {

	selectedTerm = term;

	collection.videos = [];
	collection.channels = [];

	let dayIterator = moment__WEBPACK_IMPORTED_MODULE_1___default()(period.start);

	//
	while (dayIterator <= period.end) {
		const file = `${PATH}/video-infos-${selectedTerm.slug}-${dayIterator.format('YYYYMMDD')}.json`; // get file name
		dayIterator.add(1, 'days');

		try {

			const res = await fetch(file);
			if (res.status !== 200) continue;
			
			const data = await res.json();
			if (data === undefined) continue;

			addDataToCollection(data, dayIterator);

		} catch (err) {
			console.log('oi');
			continue;
		}
		
	}

	parseData();
	getRankedChannels();

	return collection;

};


const addDataToCollection = (data, date) => {

	const arrayData = Object.values(data);

	//sort by reccomedation
	arrayData.sort((b, a) => a.nb_recommendations - b.nb_recommendations);
	let rankIndex = 1; //

	// loop through videos - manipulate and add information
	for (const video of arrayData) {

		video.youtubeID = video.id;
		video.date = date;
		video.recRank = rankIndex;
		video.day = date.format('DD');
		video.id = '_' + video.id;

		delete video.key;

		collection.videos.push(video);

		rankIndex++;
	}


	return collection;

};


const parseData = () => {

	//video collection for this term
	let newCollection = [];

	for (const v of collection.videos) {

		//get video in the collection
		let video = newCollection.find(vid => vid.youtubeID === v.youtubeID);

		if (video === undefined) {
			video = {
				id: v.id,
				youtubeID: v.youtubeID,
				title: v.title,
				channel: v.channel,
				sumRec: 0,
				dates: []
			};

			newCollection.push(video);
		}

		const day = {
			date: v.date,
			day: v.day,
			moment: v.moment,
			title: v.title,
			depth: v.depth,
			dislikes: v.dislikes,
			likes: v.likes,
			mult: v.mult,
			nb_recommendations: v.nb_recommendations,
			recommendations: v.recommendations,
			views: v.views,
			recRank: v.recRank
		};

		video.sumRec += v.nb_recommendations;

		//fix empty title
		if (video.title === '') video.title = v.title;

		video.dates.push(day);
	}

	collection.videos = newCollection;

	//Rorder
	collection.videos.sort((b, a) => a.sumRec - b.sumRec);

	return collection;

};

const getRankedChannels = () => {

	const channels = []; // collection

	//loop
	for (const video of collection.videos) {

		//channel name
		let channelName = video.channel;

		//total video recommendation
		let videoTotalRecommendation = 0;
		for (const date of video.dates) {
			videoTotalRecommendation += date.nb_recommendations;
		}

		//get channel in the collection
		let channel = channels.find(channel => channel.name === channelName);

		//if not there yet, push it // if it is update it
		if(channel === undefined) {
			channel = {
				name: channelName,
				numberVideos: 1,
				numberRecommendations: videoTotalRecommendation
			};
			channels.push(channel);
		} else {
			//update
			channel.numberVideos++;
			channel.numberRecommendations += videoTotalRecommendation;
		}
	}

	//sort by numbner of recommendation
	channels.sort((b, a) =>  a.numberRecommendations - b.numberRecommendations);

	//add colour based on pallete 
	// if (this.app.channelColours) this._setChannelColour(channels);
	

	//save;
	collection.channels = channels;
	return collection.channels;
};

const setChannelColour = channels => {

	channels.forEach( function(c,i) {

		//top ten color /// more on gray
		if (i < 10) {
			// c.colour = app.channelColours[i];
			let colour = checkChannelColour(c.name);
			if (colour) {
				c.colour = colour;
			} else {

				colour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5___default()(_this.app.channelColours[i]).hex();
				let testDuplication = true;
				let multiplier = 1;
				while (testDuplication) {
					testDuplication = checkColourDuplicationTopTen(colour);
					if (testDuplication) {
						colour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5___default()(colour).saturate(multiplier).hex();
						multiplier++;
					}
				}
				
				c.colour = colour;


				collection.topChannels.push(c); 
			}

		} else {
			// c.colour = '#ccc';
			c.colour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5___default()('lightgray').hex();
		}

	});

	const checkChannelColour = channelName => {
		const channel = collection.topChannels.find(c => c.name == channelName);
		if (channel) return channel.colour;
		return null;
	};

	const checkColourDuplicationTopTen = colour => collection.topChannels.find(c => c.colour == colour);

};

const changePeriod = (term, start, end) => {

	let startDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(start);
	let endDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(end);

	// inverse order if the dates are switched
	if (startDate.isAfter(endDate)) {
		let t = startDate;
		startDate = endDate;
		endDate = t;
	}

	//date limits
	if (startDate.isBefore(period.start)) startDate = period.start;
	if (endDate.isAfter(period.end)) endDate = period.end;

	//update period
	period.start = startDate;
	period.end = endDate;

	//update numbr of days
	period.duration = period.end.diff(period.start, 'days')+1;

	//test
	filterVidesByPeriod(term,start,end);

};

const filterVidesByPeriod = () => {
	
	// const termSelected = this.terms.find(term => term.slug == tSlug);

	// const filteredData = termSelected;
	

	//filter data
	const selectedPeriod = {
		start: period.start,
		end: period.end,
		videos: []
	};
	
	for (const video of selectedPeriod.videos) {
		const filteredDates = video.dates.filter(isBetweenDates);
		
		//if any, add to the list
		if (filteredDates.length === 0) continue;

		const filteredVideo = {
			channel: video.channel,
			id: video.id,
			title: video.title,
			youtubeID: video.youtubeID
		};
		filteredVideo.dates = filteredDates;
		selectedPeriod.videos.push(filteredVideo);

		//check the sum of recommendation for the period
		filteredVideo.sumRec = 0;
		for (const day of filteredDates) {
			filteredVideo.sumRec  += day.nb_recommendations;
		}
		
	}

	const isBetweenDates = element => element.moment.isBetween(period.start, period.endD, 'day','[]');

	//Rorder
	selectedPeriod.videos.sort((b, a) => a.sumRec - b.sumRec);

	undefined.updateData();
	undefined.emit('update',[selectedPeriod]);

	return selectedPeriod;

};

// this.selectTerm = function(term) {
// 	this.selectedTerm = term; //new term
// 	const termSelected = this.terms.find(term => term.slug == this.selectedTerm);

// 	$('#current-view').find('#current-tern').html(termSelected.name);

// 	if(termSelected.videos.length == 0) {
// 		datamodel.emit('load',term);
// 		// $(rankflowData).trigger('load');
// 		this.loadData();
// 	} else {
// 		this.updateData();
// 	}
	
// };

// const updateData = () => {

// 	const selectedDataset = this.terms.find(term => term.slug == this.selectedTerm);
// 	datamodel.emit('update',[selectedDataset]);

// 	// $(rankflowData).trigger('update',[selectedDataset]);

// };

const displayPeriodStartDate = () => period.start.locale('pt').format('DD MMMM');
const displayPeriodEndDate = () => period.endD.locale('pt').format('DD MMMM');


// const datamodel = new Datamodel();
// export default datamodel;

/* harmony default export */ __webpack_exports__["default"] = ({
	init,
	loadData,
	changePeriod
});


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5rZmxvd1Zpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub3BDaGFubmVsc1Zpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub3BWaWRlb3NWaXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21ldGhvZG9sb2d5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWV0aG9kb2xvZ3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFua2Zsb3cuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yYW5rZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BjaGFubmVscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcGNoYW5uZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcG1lbnUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcHZpZGVvcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcHZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxn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QUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0EsRUFBRSxzREFBUztBQUNYO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLEVBQUUsOERBQVM7QUFDWDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBLElBQUk7QUFDSiwwQ0FBMEMsb0RBQW9EO0FBQzlGO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixzQ0FBc0MsY0FBYyxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBDQUEwQyxtREFBbUQ7QUFDN0Y7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFF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YSwyREFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwyREFBTTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLG1DO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0EsY0FBYywyREFBTTtBQUNwQjs7QUFFQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWlCLDZDQUFNO0FBQ3ZCLGVBQWUsNkNBQU07O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxDQUFDLFNBQUk7QUFDTCxDQUFDLFNBQUk7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7Ozs7OztBQ2hYRix1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9hcHAuanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIi8qXG5AYXV0aG9yOiBMdWNpYW5vIEZyaXp6ZXJhIDxsdWNhanVAZ21haWwuY29tPlxuKi9cblxuLy8gbW9kdWxlc1xuaW1wb3J0IFVJa2l0IGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQubWluJztcbmltcG9ydCB1aWtpdGljb25zIGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQtaWNvbnMubWluJztcblxuaW1wb3J0IHtzZWxlY3Rpb259IGZyb20gJ2QzLXNlbGVjdGlvbi9kaXN0L2QzLXNlbGVjdGlvbi5taW4nO1xuXG5pbXBvcnQgJ3Vpa2l0L2Rpc3QvY3NzL3Vpa2l0Lm1pbi5jc3MnO1xuaW1wb3J0ICcuL21haW4uY3NzJztcblxuaW1wb3J0IGRhdGFtb2RlbCBmcm9tICcuL2RhdGFtb2RlbCc7XG5pbXBvcnQgaGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IHNpZGViYXIgZnJvbSAnLi9jb21wb25lbnRzL3NpZGViYXInO1xuaW1wb3J0IFRvcG1lbnUgZnJvbSAnLi9jb21wb25lbnRzL3RvcG1lbnUnO1xuaW1wb3J0IFRvcHZpZGVvcyBmcm9tICcuL2NvbXBvbmVudHMvdG9wdmlkZW9zJztcbmltcG9ydCBUb3BjaGFubmVscyBmcm9tICcuL2NvbXBvbmVudHMvdG9wY2hhbm5lbHMnO1xuaW1wb3J0IFJhbmtmbG93IGZyb20gJy4vY29tcG9uZW50cy9yYW5rZmxvdyc7XG5pbXBvcnQgRGV0YWlscyBmcm9tICcuL2NvbXBvbmVudHMvZGV0YWlscyc7XG5pbXBvcnQgTWV0aG9kb2xvZ3kgZnJvbSAnLi9jb21wb25lbnRzL21ldGhvZG9sb2d5JztcblxuXG5cbi8vIHZhcmlhYmxlc1xuZXhwb3J0IGNvbnN0IGNoYW5uZWxDb2xvdXJzID0gW1xuXHQnIzliYWRmOScsXG5cdCcjZjZhMDcyJyxcblx0JyMzYmU2ZWEnLFxuXHQnI2RkOWZlOScsXG5cdCcjZWJhZTY0Jyxcblx0JyNmYTkyOGYnLFxuXHQnIzVhYmVmNicsXG5cdCcjZDBkODc1Jyxcblx0JyNlNTY1YTQnLFxuXHQnIzhmZGM4YycsXG5dO1xuXG5leHBvcnQgbGV0IGNvbmZpZztcblxubGV0IHRlcm1zID0gW107XG5sZXQgcGVyaW9kID0ge307XG5sZXQgc2VsZWN0ZWRUZXJtID0ge307XG5sZXQgc2hvd1RhYmxlQWxsID0gZmFsc2U7XG5cbi8vIGFkZCBmdW5jdGlvbmFsaXR5IHRvIEQzIFNlbGVjdGlvblxuc2VsZWN0aW9uLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7ICBcblx0dGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuc2VsZWN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7ICBcblx0dGhpcy5zdHlsZSgnZGlzcGxheScsICdub25lJyk7XG5cdHJldHVybiB0aGlzO1xufTtcblxudWlraXRpY29ucyhVSWtpdCk7XG5cblxuXG5jb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuXG5cdC8vIGxvYWQgY29uZmlnXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcuL2NvbmZpZy9jb25maWcuanNvbicpO1xuXHRjb25maWcgPSBhd2FpdCByZXMuanNvbigpO1xuXG5cdC8vZGVmaW5pbmcgcHJvcGVydGllc1xuXHR0ZXJtcyA9IGNvbmZpZy50ZXJtcztcblx0cGVyaW9kID0gY29uZmlnLnBlcmlvZDtcblxuXHRzZWxlY3RlZFRlcm0gPSB0ZXJtc1swXTtcblxuXHRcblx0Ly9sb2FkIGNvbXBvbmVudHNcblx0aGVhZGVyLmluaXQoKTtcblx0c2lkZWJhci5pbml0KCk7XG5cblx0Ly8gdGhpcy50b3BNZW51ID0gbmV3IFRvcG1lbnUodGhpcyk7XG5cdC8vIHRoaXMudG9wTWVudS5pbml0KCk7XG5cdC8vIHRoaXMudG9wVmlkZW9zID0gbmV3IFRvcHZpZGVvcyh0aGlzKTtcblx0Ly8gdGhpcy50b3BWaWRlb3MuaW5pdCgpO1xuXHQvLyB0aGlzLnRvcENoYW5uZWxzID0gbmV3IFRvcGNoYW5uZWxzKHRoaXMpO1xuXHQvLyB0aGlzLnRvcENoYW5uZWxzIC5pbml0KCk7XG5cdC8vIHRoaXMucmFua2Zsb3cgPSBuZXcgUmFua2Zsb3codGhpcyk7XG5cdC8vIHRoaXMucmFua2Zsb3cuaW5pdCgpO1xuXHQvLyB0aGlzLmRldGFpbHMgPSBuZXcgRGV0YWlscyh0aGlzKTtcblx0Ly8gdGhpcy5kZXRhaWxzLmluaXQoKTtcblx0Ly8gdGhpcy5tZXRob2RvbG9neSA9IG5ldyBNZXRob2RvbG9neSh0aGlzKTtcblx0Ly8gdGhpcy5tZXRob2RvbG9neS5pbml0KCk7XG5cblx0Ly9sb2FkIGRhdGFcblx0ZGF0YW1vZGVsLmluaXQoY29uZmlnKTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IGRhdGFtb2RlbC5sb2FkRGF0YShzZWxlY3RlZFRlcm0pO1xuXHRjb25zb2xlLmxvZyhkYXRhKTtcblxuXG5cdC8vIHRoaXMuZGF0YW1vZGVsID0gbmV3IGRhdGFtb2RlbCh0aGlzKTtcblx0Ly8gdGhpcy5kYXRhbW9kZWwgPSBkYXRhbW9kZWw7XG5cdC8vIHRoaXMuZGF0YW1vZGVsLmluaXQoY29uZmlnKTtcblxuXHQvLyB0aGlzLmRhdGFtb2RlbC5vbignbG9hZCcsIGFwcC5kYXRhbW9kZWxPbkxvYWQpO1xuXHQvLyB0aGlzLmRhdGFtb2RlbC5vbigndXBkYXRlJywge2RhdGE6IE9iamVjdH0sIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG5cdC8vIFx0YXBwLmRhdGFtb2RlbE9uTG9hZChkYXRhKTtcblx0Ly8gfSk7XG5cdFx0XG5cblx0Ly8gdGhpcy5kYXRhbW9kZWwubG9hZERhdGEodGhpcy5zZWxlY3RlZFRlcm0pXG5cdC8vIFx0LnRoZW4oZnVuY3Rpb24gKHIpIHtcblx0Ly8gXHRcdC8vIGNvbnNvbGUubG9nKHIpO1xuXHQvLyBcdFx0YXBwLnRvcFZpZGVvcy5sb2FkKHIpO1xuXHQvLyBcdFx0YXBwLnRvcENoYW5uZWxzLmxvYWQocik7XG5cdC8vIFx0XHRhcHAucmFua2Zsb3cubG9hZChyKTtcblx0Ly8gXHR9KTtcblxuXHRcbn07XG5cbmNvbnN0IHNlbGVjdFRlcm0gPSB0ZXJtID0+IHtcblx0XG5cdHNlbGVjdGVkVGVybSA9IHRlcm1zLmZpbmQodCA9PiB0LnNsdWcgPT09IHRlcm0pO1xuXG5cdC8vIERpc3BhdGNoIHRoZSBldmVudC5cblx0Y29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ3NlbGVjdFRlcm0nLCBzZWxlY3RlZFRlcm0pO1xuXHR0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG5cblx0Ly8gdG9wTWVudS51cGRhdGVUZXJtKHNlbGVjdGVkVGVybSk7XG5cblx0Ly8gdGhpcy5kYXRhbW9kZWxPbkxvYWQoKTtcblxuXHQvLyB0aGlzLmRhdGFtb2RlbC5sb2FkRGF0YSh0aGlzLnNlbGVjdGVkVGVybSlcblx0Ly8gXHQudGhlbihmdW5jdGlvbiAocikge1xuXHQvLyBcdFx0Ly8gY29uc29sZS5sb2cocik7XG5cdC8vIFx0XHRhcHAudG9wVmlkZW9zLmxvYWQocik7XG5cdC8vIFx0XHRhcHAudG9wQ2hhbm5lbHMubG9hZChyKTtcblx0Ly8gXHRcdGFwcC5yYW5rZmxvdy5sb2FkKHIpO1xuXHQvLyBcdH0pO1xuXHRcbn07XG5cbi8vIHRoaXMuZGF0YW1vZGVsT25Mb2FkID0gZnVuY3Rpb24gKCkge1xuLy8gXHR0aGlzLnRvcFZpZGVvcy5sb2FkaW5nKCk7XG4vLyBcdHRoaXMudG9wQ2hhbm5lbHMubG9hZGluZygpO1xuLy8gXHR0aGlzLnJhbmtmbG93LmxvYWRpbmcoKTtcbi8vIH07XG5cbmNvbnN0IGdldFRlcm1CeU5hbWUgPSB0ZXJtTmFtZSA9PiB0ZXJtcy5maW5kKGMgPT4gYy5uYW1lID09IHRlcm1OYW1lKTtcblxuY29uc3QgZ2V0Q2hhbm5lbEJ5TmFtZSA9IGNoYW5uZWxOYW1lID0+IGRhdGFtb2RlbC5jb2xsZWN0aW9uLmNoYW5uZWxzLmZpbmQoYyA9PiBjLm5hbWUgPT0gY2hhbm5lbE5hbWUpO1xuXG5jb25zdCBpdGVtTW91c2VPdmVyID0gKGRhdGEsc291cmNlKSA9PiB7XG5cdGlmKHNvdXJjZSA9PSAndmlkZW8nKSB7XG5cdFx0dGhpcy50b3BWaWRlb3MuaGlnaGxpZ2h0T24oZGF0YS55b3V0dWJlSUQsIHNvdXJjZSk7XG5cdFx0dGhpcy50b3BDaGFubmVscy5oaWdobGlnaHRPbihkYXRhLmNoYW5uZWwpO1xuXHRcdHRoaXMucmFua2Zsb3cuaGlnaGxpZ2h0T24oZGF0YSxzb3VyY2UpO1xuXHR9IGVsc2UgaWYoc291cmNlID09ICdjaGFubmVsJykge1xuXHRcdHRoaXMudG9wVmlkZW9zLmhpZ2hsaWdodE9uKGRhdGEubmFtZSwgc291cmNlKTtcblx0XHR0aGlzLnRvcENoYW5uZWxzLmhpZ2hsaWdodE9uKGRhdGEubmFtZSk7XG5cdFx0dGhpcy5yYW5rZmxvdy5oaWdobGlnaHRPbihkYXRhLHNvdXJjZSk7XG5cdH0gZWxzZSBpZihzb3VyY2UgPT0gJ3JhbmsnKSB7XG5cdFx0dGhpcy50b3BWaWRlb3MuaGlnaGxpZ2h0T24oZGF0YS5kYXRhLnlvdXR1YmVJRCwndmlkZW8nKTtcblx0XHR0aGlzLnRvcENoYW5uZWxzLmhpZ2hsaWdodE9uKGRhdGEuY2hhbm5lbCxzb3VyY2UpO1xuXHRcdHRoaXMucmFua2Zsb3cuaGlnaGxpZ2h0T24oZGF0YSxzb3VyY2UpO1xuXHR9XG59O1xuXG5jb25zdCBpdGVtTW91c2VPdXQgPSAoZGF0YSxzb3VyY2UpID0+IHtcblx0aWYoc291cmNlID09ICd2aWRlbycpIHtcblx0XHR0aGlzLnRvcFZpZGVvcy5oaWdobGlnaHRPZmYoZGF0YS55b3V0dWJlSUQpO1xuXHRcdHRoaXMudG9wQ2hhbm5lbHMuaGlnaGxpZ2h0T2ZmKGRhdGEuY2hhbm5lbCk7XG5cdFx0dGhpcy5yYW5rZmxvdy5oaWdobGlnaHRPZmYoZGF0YSk7XG5cdH0gZWxzZSBpZihzb3VyY2UgPT0gJ2NoYW5uZWwnKSB7XG5cdFx0dGhpcy50b3BWaWRlb3MuaGlnaGxpZ2h0T2ZmKGRhdGEubmFtZSk7XG5cdFx0dGhpcy50b3BDaGFubmVscy5oaWdobGlnaHRPZmYoZGF0YS5uYW1lKTtcblx0XHR0aGlzLnJhbmtmbG93LmhpZ2hsaWdodE9mZihkYXRhKTtcblx0fSBlbHNlIGlmKHNvdXJjZSA9PSAncmFuaycpIHtcblx0XHR0aGlzLnRvcFZpZGVvcy5oaWdobGlnaHRPZmYoZGF0YS5uYW1lKTtcblx0XHR0aGlzLnRvcENoYW5uZWxzLmhpZ2hsaWdodE9mZihkYXRhLm5hbWUpO1xuXHRcdHRoaXMucmFua2Zsb3cuaGlnaGxpZ2h0T2ZmKGRhdGEpO1xuXHR9XG59O1xuXG5jb25zdCBzaG93RGV0YWlscyA9IChkLHNvdXJjZSkgPT4ge1xuXHR0aGlzLmRldGFpbHMuYWRkTW9kYWwoZCxzb3VyY2UpO1xufTtcblxuXG5pbml0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0c2VsZWN0VGVybSxcblx0Z2V0VGVybUJ5TmFtZSxcblx0Z2V0Q2hhbm5lbEJ5TmFtZSxcblx0aXRlbU1vdXNlT3Zlcixcblx0aXRlbU1vdXNlT3V0LFxuXHRzaG93RGV0YWlsc1xufTtcbiIsIi8vbW9kdWxlc1xuaW1wb3J0IHtleHRlbnQsbWlufSBmcm9tICdkMy1hcnJheS9kaXN0L2QzLWFycmF5Lm1pbic7XG5pbXBvcnQge2F4aXNCb3R0b20sYXhpc0xlZnR9IGZyb20gJ2QzLWF4aXMvZGlzdC9kMy1heGlzLm1pbic7XG5pbXBvcnQge25lc3R9IGZyb20gJ2QzLWNvbGxlY3Rpb24vZGlzdC9kMy1jb2xsZWN0aW9uLm1pbic7XG5pbXBvcnQge3NlbGVjdGlvbixzZWxlY3Qsc2VsZWN0QWxsfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtzY2FsZU9yZGluYWwsc2NhbGVUaW1lLHNjYWxlTGluZWFyfSBmcm9tICdkMy1zY2FsZS9kaXN0L2QzLXNjYWxlLm1pbic7XG5pbXBvcnQge3NjaGVtZVBhaXJlZH0gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljL2Rpc3QvZDMtc2NhbGUtY2hyb21hdGljLm1pbic7XG5pbXBvcnQge2xpbmUsY3VydmVTdGVwfSBmcm9tICdkMy1zaGFwZS9kaXN0L2QzLXNoYXBlLm1pbic7XG5pbXBvcnQge3RpbWVGb3JtYXQsdGltZVBhcnNlfSBmcm9tICdkMy10aW1lLWZvcm1hdC9kaXN0L2QzLXRpbWUtZm9ybWF0Lm1pbic7XG5pbXBvcnQge3Zvcm9ub2l9IGZyb20gJ2QzLXZvcm9ub2kvZGlzdC9kMy12b3Jvbm9pLm1pbic7XG5yZXF1aXJlKCdkMy10cmFuc2l0aW9uL2Rpc3QvZDMtdHJhbnNpdGlvbi5taW4nKTtcblxuaW1wb3J0IFVJa2l0IGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQubWluJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtGbG93VmlzKGFwcCkge1xuXG5cdHRoaXMuYXBwID0gYXBwO1xuXG5cdHRoaXMud2luZG93V2lkdGggPSA5MDA7XG5cdHRoaXMucmVzaXplVGltZXIgPSBudWxsO1xuXG5cdHRoaXMubWFyZ2luID0ge1xuXHRcdHRvcDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMFxuXHR9O1xuXHR0aGlzLndpZHRoID0gODAwO1xuXHR0aGlzLmhlaWdodCA9IDUwMDtcblxuXHR0aGlzLnZpc0RhdGFzZXQgPSBbXTtcblx0dGhpcy5hbGxWaWRlb3NJRHMgPSBbXTtcblx0dGhpcy5uYW1lc0J5SUQgPSBbXTtcblxuXHR0aGlzLmZsYXREYXRhID0gW107XG5cblx0dGhpcy50b3BOID0gNTtcblxuXHR0aGlzLnN0cm9rZVdpZHRoID0gWzgsIDYsIDUsIDUsIDQsIDQsIDMsIDMsIDIsIDJdOyAvL1N0cm9rZSB3aWR0aCBwZXIgbWF4IHBvc2l0aW9uXG5cblx0dGhpcy5jb2xvciA9IG51bGw7XG5cdHRoaXMueFNjYWxlID0gbnVsbDtcblx0dGhpcy55U2NhbGUgPSBudWxsO1xuXHR0aGlzLnhBeGlzID0gbnVsbDtcblx0dGhpcy55QXhpcyA9IG51bGw7XG5cblx0dGhpcy5saW5lID0gbnVsbDtcblxuXHR0aGlzLmZvY3VzID0gbnVsbDtcblx0dGhpcy5mb2N1c0RhdGEgPSBudWxsO1xuXHR0aGlzLnZvcm9ub2kgPSBudWxsO1xuXHR0aGlzLnZvcm9ub2lHcm91cCA9IG51bGw7XG5cblx0dGhpcy5wb3BVcE5hbWUgPSBudWxsO1xuXG5cdHRoaXMucGFyc2VUaW1lID0gbnVsbDtcblxuXHR0aGlzLm1pbkRhdGVXaWR0aCA9IDM1O1xuXG5cblx0Ly8tLS0tLSBDT05TVFJVQ1RPUlxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLndpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuXHRcdC8vc2V0IHRoZSBjb250ZXh0IGluIHRoZSBET01cblx0XHR0aGlzLm1hcmdpbiA9IHtcblx0XHRcdHRvcDogMjAsXG5cdFx0XHRyaWdodDogMzAsXG5cdFx0XHRib3R0b206IDMwLFxuXHRcdFx0bGVmdDogNTBcblx0XHR9O1xuXG5cdFx0dGhpcy5oZWlnaHQgPSA1MDAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5yZXNpemUoKTtcblx0XHR9KTtcblxuXHR9O1xuXG5cdC8vLS0tLSBSRVNJWkVcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHQvL3dpZHRoIG9ubHlcblx0XHRpZiAodGhpcy53aW5kb3dXaWR0aCAhPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSB7XG5cblx0XHRcdC8vZGVsYXkuLi4gZW5kIHJlc2l6aW5nXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0X3RoaXMud2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXHRcdFx0XHRfdGhpcy51cGRhdGUoX3RoaXMudmlzRGF0YXNldCwgJ3Jlc2l6ZScpO1xuXG5cdFx0XHR9LCAyNTApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0dGhpcy5fc2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zdCBtaW5WaXpXaWR0aCA9ICh0aGlzLmFwcC5kYXRhbW9kZWwubnVtYmVyRGF5cyAqIHRoaXMubWluRGF0ZVdpZHRoKSArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodCAtIDI0MDsgLy8yNDAgaXMgdGhlIHdpZHRoIG9mIHNpZGUgYmFyLiBCZXR0ZXIgdG8gZ2V0IHRoaXMgYnkgY29kZVxuXG5cdFx0Y29uc3Qgc2Nyb2xsSGludCA9IFVJa2l0LnRvZ2dsZShzZWxlY3QoJyNob3Jpem9udGFsLXNjcm9sbC1oaW50Jykubm9kZSgpKTtcblxuXHRcdGlmICh0aGlzLndpbmRvd1dpZHRoIDwgbWluVml6V2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSBtaW5WaXpXaWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIDEyMDtcblx0XHRcdGlmICghc2Nyb2xsSGludC5pc1RvZ2dsZWQoKSkgc2Nyb2xsSGludC50b2dnbGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy53aWR0aCA9ICh0aGlzLndpbmRvd1dpZHRoIC0gMTQwKSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIDEyMDtcblx0XHRcdGlmIChzY3JvbGxIaW50LmlzVG9nZ2xlZCgpKSBzY3JvbGxIaW50LnRvZ2dsZSgpO1xuXHRcdH1cblxuXHR9O1xuXG5cdC8vLS0tLSBTRVRVUCBWSVNcblx0dGhpcy5zZXR1cHZpcyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvL3dpZHRoXG5cdFx0dGhpcy5fc2V0V2lkdGgoKTtcblxuXHRcdHRoaXMucGFyc2VUaW1lID0gdGltZVBhcnNlKCclWS0lbS0lZCcpO1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vIENPTE9SIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxuXG5cdFx0dGhpcy5jb2xvciA9IHNjYWxlT3JkaW5hbChzY2hlbWVQYWlyZWQpO1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vIFNDQUxFICYgQVhFUyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblxuXHRcdGxldCBwYXJzZWREYXRlcyA9IFtdO1xuXHRcdGxldCBkYXlJdGVyYWMgPSBtb21lbnQodGhpcy5hcHAucGVyaW9kLnN0YXJ0KTtcblxuXHRcdGZvciAoZGF5SXRlcmFjOyBkYXlJdGVyYWMuaXNCZWZvcmUodGhpcy5hcHAucGVyaW9kLmVuZCk7IGRheUl0ZXJhYy5hZGQoMSwgJ2RheXMnKSkge1xuXHRcdFx0cGFyc2VkRGF0ZXMucHVzaCh0aGlzLnBhcnNlVGltZShkYXlJdGVyYWMuZm9ybWF0KCdZWVlZLU1NLUREJykpKTtcblx0XHR9XG5cblx0XHQvLyB0aGlzLnhTY2FsZSA9IHNjYWxlVGltZSgpLmRvbWFpbihbc3RhcnREYXksIGVuZERheV0pLnJhbmdlKFs0MCwgd2lkdGgtNDBdKTtcblx0XHQvLyB0aGlzLnhTY2FsZSA9IHNjYWxlVGltZSgpLnJhbmdlKFs0MCwgdGhpcy53aWR0aCAtIDQwXSk7XG5cdFx0dGhpcy54U2NhbGUgPSBzY2FsZVRpbWUoKS5yYW5nZShbNDAsIHRoaXMud2lkdGggLSA0MCAtIDI0MF0pO1xuXHRcdHRoaXMueFNjYWxlLmRvbWFpbihleHRlbnQocGFyc2VkRGF0ZXMsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9KSk7XG5cblxuXG5cdFx0dmFyIHRpY2tzTnVtYmVyO1xuXHRcdGlmIChwYXJzZWREYXRlcy5sZW5ndGggPCAxMCkge1xuXHRcdFx0dGlja3NOdW1iZXIgPSBwYXJzZWREYXRlcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tzTnVtYmVyID0gbnVsbDtcblx0XHR9XG5cblx0XHR0aGlzLnlTY2FsZSA9IHNjYWxlTGluZWFyKCkuZG9tYWluKFswLjUsIDEwLjVdKS5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKTtcblxuXHRcdC8vIHRoaXMueEF4aXMgPSBheGlzQm90dG9tKCkuc2NhbGUoeFNjYWxlKS50aWNrRm9ybWF0KHRpbWVGb3JtYXQoJyViICVkJykpLnRpY2tTaXplKDApO1xuXHRcdC8vIHRoaXMueEF4aXMgPSBheGlzQm90dG9tKHRoaXMueFNjYWxlKS5zY2FsZSh0aGlzLnhTY2FsZSkudGlja0Zvcm1hdCh0aW1lRm9ybWF0KCclbS8lZCcpKS50aWNrU2l6ZSgwKS8vLnRpY2tzKDIwKTtcblx0XHR0aGlzLnhBeGlzID0gYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkudGlja0Zvcm1hdCh0aW1lRm9ybWF0KCclZC8lbScpKS50aWNrU2l6ZSgwKS50aWNrcyh0aWNrc051bWJlcik7XG5cdFx0Ly8gdGhpcy54QXhpcyA9IGF4aXNCb3R0b20oeFNjYWxlKS5zY2FsZSh4U2NhbGUpLnRpY2tGb3JtYXQodGltZUZvcm1hdCgnJWEgJWQnKSkudGlja1NpemUoMCk7XG5cdFx0dGhpcy55QXhpcyA9IGF4aXNMZWZ0KCkuc2NhbGUodGhpcy55U2NhbGUpLnRpY2tTaXplKDApO1xuXG5cblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLyBMSU5FIFRZUEUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0dGhpcy5saW5lID0gbGluZSgpXG5cdFx0XHQvLyAuY3VydmUoY3VydmVNb25vdG9uZVgpIC8vU2xpZ2h0IHJvdW5kaW5nIHdpdGhvdXQgdG9vIG11Y2ggZGV2aWF0aW9uXG5cdFx0XHQuY3VydmUoY3VydmVTdGVwKTsgLy9TbGlnaHQgcm91bmRpbmcgd2l0aG91dCB0b28gbXVjaCBkZXZpYXRpb25cblxuXHR9O1xuXG5cdC8vIHRoaXMudXBkYXRlRGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0Ly8gICAgIGxldCBwYXJzZWREYXRlcyA9IFtdO1xuXHQvLyAgICAgbGV0IGRheUl0ZXJhYyA9IG1vbWVudCh0aGlzLmFwcC5kYXRhbW9kZWwucGVyaW9kLnN0YXJ0RGF0ZSk7XG5cblx0Ly8gICAgIHdoaWxlIChkYXlJdGVyYWMgPD0gdGhpcy5hcHAuZGF0YW1vZGVsLnBlcmlvZC5lbmREYXRlKSB7XG5cdC8vICAgICAgICAgcGFyc2VkRGF0ZXMucHVzaCh0aGlzLnBhcnNlVGltZShkYXlJdGVyYWMuZm9ybWF0KCdZWVlZLU1NLUREJykpKTtcblx0Ly8gICAgICAgICBkYXlJdGVyYWMuYWRkKDEsICdkYXlzJyk7XG5cdC8vICAgICB9XG5cblx0Ly8gfTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQ3JlYXRlIENIQVJUIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSxyZXNpemUpIHtcblxuXHRcdHRoaXMuZGF0YXNldCA9IGRhdGE7XG5cblx0XHR0aGlzLnNldHVwdmlzKCk7XG5cblx0XHQvL2NsZWFyXG5cdFx0c2VsZWN0KCcjdmlzdWFsaXphdGlvbicpLmh0bWwoJycpO1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBDcmVhdGUgZm9jdXMgU1ZHXG5cdFx0dGhpcy5mb2N1cyA9IHNlbGVjdCgnI3Zpc3VhbGl6YXRpb24nKS5hcHBlbmQoJ3N2ZycpXG5cdFx0XHQuc3R5bGUoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodCAtIDI0MCkgLy8yNDAgaXMgdGhlIHdpZHRoIG9mIHNpZGUgYmFyLiBCZXR0ZXIgdG8gZ2V0IHRoaXMgYnkgY29kZVxuXHRcdFx0LnN0eWxlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcblx0XHRcdC5zdHlsZSgnbWF4LXdpZHRoJywnbm9uZScpXG5cdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcblxuXHRcdC8vQXBwZW5kIGNsaXBwYXRoIHRvIGZvY3VzIGNoYXJ0XG5cdFx0bGV0IGRlZnMgPSB0aGlzLmZvY3VzLmFwcGVuZCgnZGVmcycpO1xuXG5cdFx0ZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcblx0XHRcdC5hdHRyKCdpZCcsICdjbGlwJylcblx0XHRcdC5hcHBlbmQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aClcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG5cblx0XHQvL0FwcGVuZCB4IGF4aXMgdG8gZm9jdXMgY2hhcnRcdFxuXHRcdHRoaXMuZm9jdXMuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICd4IGF4aXMnKVxuXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCAxMylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJyArICh0aGlzLmhlaWdodCArIDkpICsgJyknKVxuXHRcdFx0Ly8gLmNhbGwoYXhpc0JvdHRvbSh4U2NhbGUpKTtcblx0XHRcdC5jYWxsKHRoaXMueEF4aXMpO1xuXG5cblxuXHRcdC8vQXBwZW5kIHkgYXhpcyB0byBmb2N1cyBjaGFydFx0XG5cdFx0dGhpcy5mb2N1cy5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtMTAsMCknKVxuXHRcdFx0LmNhbGwodGhpcy55QXhpcylcblx0XHRcdC5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3RpdGxlcycpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtOTApJylcblx0XHRcdC5hdHRyKCd4JywgLSh0aGlzLmhlaWdodCAvIDIpKVxuXHRcdFx0LmF0dHIoJ3knLCAtMzUpXG5cdFx0XHQuYXR0cignZHknLCAnLjcxZW0nKVxuXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCAxNClcblx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcblx0XHRcdC50ZXh0KCdQb3Npw6fDo28gbm8gcmFua2luZycpO1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSW5pdGlhdGUgdGhlIHZvcm9ub2kgZnVuY3Rpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gXG5cdFx0dGhpcy52b3Jvbm9pID0gdm9yb25vaSgpXG5cdFx0XHQuZXh0ZW50KFtcblx0XHRcdFx0Wy10aGlzLm1hcmdpbi5sZWZ0LCAtdGhpcy5tYXJnaW4udG9wXSxcblx0XHRcdFx0W3RoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi5ib3R0b21dXG5cdFx0XHRdKTtcblxuXHRcdC8vSW5pdGlhdGUgdGhlIHZvcm9ub2kgZ3JvdXAgZWxlbWVudFx0XG5cdFx0dGhpcy52b3Jvbm9pR3JvdXAgPSB0aGlzLmZvY3VzLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAndm9yb25vaScpO1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVG9vbHRpcCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblx0XHR0aGlzLnBvcFVwTmFtZSA9IHRoaXMuZm9jdXMuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC0xMDAsLTEwMCknKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3BvcFVwTmFtZScpXG5cdFx0XHQuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcblxuXHRcdHRoaXMucG9wVXBOYW1lLmFwcGVuZCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICd0b29sdGlwQ2lyY2xlJylcblx0XHRcdC5hdHRyKCdyJywgMzAuNSk7XG5cblx0XHR0aGlzLnBvcFVwTmFtZS5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCAxMilcblx0XHRcdC5hdHRyKCdjbGFzcycsICd0aXRsZXMnKVxuXHRcdFx0LmF0dHIoJ3knLCAtMTUpO1xuXHRcdFx0XG5cdFx0dGhpcy52aXModGhpcy5kYXRhc2V0LHJlc2l6ZSk7XG5cblx0fTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUmVkdWNlIGRhdGFzZXQgdG8gVE9QIE5cblx0dGhpcy5fcmVkdWNlVG9Ub3BOID0gZnVuY3Rpb24gKGRhdGEpIHtcblxuXHRcdGxldCBfdG9wTiA9IHRoaXMudG9wTjtcblx0XHRsZXQgYXJyYXkgPSBbXTtcblxuXHRcdC8vIHJlZHVjZTogZmluZCB0b3AgMTBcblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcblxuXHRcdFx0bGV0IGlzVG9wTiA9IGZhbHNlO1xuXG5cdFx0XHR2LmRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQucmVjUmFuayA8PSBfdG9wTikge1xuXHRcdFx0XHRcdGlzVG9wTiA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGlzVG9wTikgYXJyYXkucHVzaCh2KTtcblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFycmF5O1xuXG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFVQREFURSBWSVNcblx0dGhpcy52aXMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzaXplKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHRpZiAocmVzaXplICE9ICdyZXNpemUnKSB7XG5cblx0XHRcdC8vcmVzZXRcblx0XHRcdHRoaXMudmlzRGF0YXNldCA9IFtdO1xuXHRcdFx0dGhpcy5hbGxWaWRlb3NJRHMgPSBbXTtcblx0XHRcdHRoaXMubmFtZXNCeUlEID0gW107XG5cblx0XHRcdC8vcmVkdWNlIGFuZCBsb2FkIGRhdGFzZXRcblx0XHRcdHRoaXMudmlzRGF0YXNldCA9IHRoaXMuX3JlZHVjZVRvVG9wTihkYXRhLnZpZGVvcywgMSk7XG5cdFx0fVxuXG5cdFx0bGV0IGNoYW5uZWxzID0gW107XG5cblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgZ2F0aGVyIGRhdGFcblx0XHRmb3IgKGxldCBkIG9mIHRoaXMudmlzRGF0YXNldCkge1xuXG5cdFx0XHRsZXQgaSA9IHRoaXMudmlzRGF0YXNldC5pbmRleE9mKGQpO1xuXG5cdFx0XHR0aGlzLmFsbFZpZGVvc0lEc1tpXSA9IGQuaWQ7XG5cdFx0XHR0aGlzLm5hbWVzQnlJRFtkLmlkXSA9IGk7XG5cdFx0XHRzYXZlQ2hhbm5lbChkLmNoYW5uZWwpO1xuXHRcdH1cblxuXG5cdFx0Ly8gU0FWRSBhIGxpc3Qgb2YgQ2hhbm5lbHNcblx0XHRmdW5jdGlvbiBzYXZlQ2hhbm5lbChjaGFubmVsKSB7XG5cdFx0XHRsZXQgaGFzQ2hhbm5lbCA9IGZhbHNlO1xuXHRcdFx0Y2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXHRcdFx0XHRpZiAoYyA9PSBjaGFubmVsKSBoYXNDaGFubmVsID0gdHJ1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIWhhc0NoYW5uZWwpIHtcblx0XHRcdFx0Y2hhbm5lbHMucHVzaChjaGFubmVsKTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLyByZWRlZmluZSBjb2xvclxuXHRcdC8vIHRoaXMuY29sb3IuZG9tYWluKHRoaXMuYWxsVmlkZW9zSURzKTtcblx0XHR0aGlzLmNvbG9yLmRvbWFpbihjaGFubmVscyk7XG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8gTGluZSB0eXBlOiBDaGFuZ2UgZGF0YSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblx0XHR0aGlzLmxpbmUueChmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShfdGhpcy5wYXJzZVRpbWUoZC5kYXRlKSk7XG5cdFx0fSlcblx0XHRcdC55KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5yZWNSYW5rKTtcblx0XHRcdH0pO1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFZvcm9ub2kgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblxuXHRcdC8vQ3JlYXRlIGEgZmxhdCBkYXRhIHZlcnNpb24gZm9yIHRoZSBWb3Jvbm9pXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0dGhpcy5mbGF0RGF0YSA9IFtdO1xuXHRcdGZvciAobGV0IGsgaW4gdGhpcy52aXNEYXRhc2V0KSB7XG5cdFx0XHRsZXQga19kYXRhID0gdGhpcy52aXNEYXRhc2V0W2tdO1xuXHRcdFx0Zm9yIChsZXQgZCBvZiBrX2RhdGEuZGF0ZXMpIHtcblx0XHRcdFx0Ly8ga19kYXRhLmRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQucmVjUmFuayA8PSAxMCkgdGhpcy5mbGF0RGF0YS5wdXNoKHtcblx0XHRcdFx0XHRpZDoga19kYXRhLmlkLFxuXHRcdFx0XHRcdHRpdGxlOiBrX2RhdGEudGl0bGUsXG5cdFx0XHRcdFx0ZGF0ZTogZC5kYXRlLFxuXHRcdFx0XHRcdG1vbWVudDogZC5tb21lbnQsXG5cdFx0XHRcdFx0Y2hhbm5lbDoga19kYXRhLmNoYW5uZWwsXG5cdFx0XHRcdFx0bmJfcmVjb21tZW5kYXRpb25zOiBkLm5iX3JlY29tbWVuZGF0aW9ucyxcblx0XHRcdFx0XHRzdW1SZWM6IGtfZGF0YS5zdW1SZWMsXG5cdFx0XHRcdFx0cmVjUmFuazogZC5yZWNSYW5rLFxuXHRcdFx0XHRcdGRhdGE6IGtfZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdC8vTWF4IHBvc2l0aW9uXG5cdFx0bGV0IG1heFBvc2l0aW9uID0gbmVzdCgpXG5cdFx0XHQua2V5KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBkLmlkO1xuXHRcdFx0fSlcblx0XHRcdC5yb2xsdXAoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIG1pbihkLCBmdW5jdGlvbiAoZykge1xuXHRcdFx0XHRcdHJldHVybiBnLnJlY1Jhbms7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHRcdC8vIC5yb2xsdXAoZnVuY3Rpb24oZCkge3JldHVybiBtYXgoZCwgZnVuY3Rpb24oZykge3JldHVybiBnLnN1bVJlYzt9KTt9KVxuXHRcdFx0LmVudHJpZXModGhpcy5mbGF0RGF0YSk7XG5cblx0XHQvLyBsZXQgbmVzdGVkRmxhdERhdGEgPSBuZXN0KCkua2V5KGZ1bmN0aW9uIChkKSB7XG5cdFx0Ly8gXHRyZXR1cm4gZC5pZDtcblx0XHQvLyB9KS5lbnRyaWVzKHRoaXMuZmxhdERhdGEpO1xuXHRcdC8vIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblx0XHQvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFJlaW5pdGlhdGUgdGhlIHZvcm9ub2kgZnVuY3Rpb25cblxuXHRcdHRoaXMudm9yb25vaS54KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gX3RoaXMueFNjYWxlKF90aGlzLnBhcnNlVGltZShkLmRhdGUpKTtcblx0XHR9KVxuXHRcdFx0LnkoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnlTY2FsZShkLnJlY1JhbmspO1xuXHRcdFx0fSk7XG5cblxuXHRcdC8vIERSQVcgVk9ST05PSVxuXHRcdGxldCB2b3Jvbm9pR3JpZCA9IHRoaXMudm9yb25vaUdyb3VwLnNlbGVjdEFsbCgncGF0aCcpXG5cdFx0XHQuZGF0YSh0aGlzLnZvcm9ub2kucG9seWdvbnModGhpcy5mbGF0RGF0YS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnBhcnNlVGltZShkLmRhdGUpID49IF90aGlzLnhTY2FsZS5kb21haW4oKVswXSAmIF90aGlzLnBhcnNlVGltZShkLmRhdGUpIDw9IF90aGlzLnhTY2FsZS5kb21haW4oKVsxXTtcblx0XHRcdH0pKSk7XG5cblx0XHR2b3Jvbm9pR3JpZC5leGl0KCkucmVtb3ZlKCk7XG5cblx0XHQvL25ldyBkYXRhXG5cdFx0dm9yb25vaUdyaWQuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuXHRcdFx0LmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ00nICsgZC5qb2luKCdMJykgKyAnWic7XG5cdFx0XHR9KVxuXHRcdFx0LmRhdHVtKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBkLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3Zvcm9ub2lDZWxscycpXG5cdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIHRoaXMuX21vdXNlb3Zlcilcblx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0X3RoaXMuX21vdXNlT3ZlclNlbGVjdGlvbihkKTtcblx0XHRcdH0pXG5cdFx0XHQvLyAub24oJ21vdXNlb3V0JywgdGhpcy5fbW91c2VvdXQpXG5cdFx0XHQub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0X3RoaXMuX21vdXNlT3V0U2VsZWN0aW9uKGQuaWQpO1xuXHRcdFx0XHQvLyBfdGhpcy5oaWdobGlnaHRPZmYoZC5pZCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdF90aGlzLl9tb3VzZUNsaWNrKGQpO1xuXHRcdFx0fSk7XG5cblxuXHRcdC8vdXBkYXRlIGV4aXN0aW5nIGRhdGFcblx0XHR2b3Jvbm9pR3JpZFxuXHRcdFx0LmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ00nICsgZC5qb2luKCdMJykgKyAnWic7XG5cdFx0XHR9KVxuXHRcdFx0LmRhdHVtKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBkLmRhdGE7XG5cdFx0XHR9KTtcblx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHQvLyBcdF90aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24oZCk7XG5cdFx0Ly8gfSlcblx0XHQvLyAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZCkge1xuXHRcdC8vIF90aGlzLmhpZ2hsaWdodE9mZihkLmlkKTtcblx0XHQvLyB9KVxuXHRcdC8vIC5vbignY2xpY2snLCB0aGlzLl9tb3VzZUNsaWNrKTtcblxuXG5cdFx0Ly9Nb3ZlIHNlbGVjdGVkIGVsZW1lbnQgdG8gdGhlIGZyb250XG5cdFx0c2VsZWN0aW9uLnByb3RvdHlwZS5tb3ZlVG9Gcm9udCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQ3JlYXRlIFBMT1QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxuXHRcdC8vZGF0YVxuXHRcdHRoaXMuZm9jdXNEYXRhID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoJy5mb2N1cycpXG5cdFx0XHQuZGF0YSh0aGlzLnZpc0RhdGFzZXQpO1xuXG5cdFx0Ly9yZW1vdmUgcHJldmlvdXNcblx0XHR0aGlzLmZvY3VzRGF0YS5leGl0KCkucmVtb3ZlKCk7XG5cblx0XHQvL2FkZCBuZXdzXG5cdFx0bGV0IG5ld0RhdGFQb2ludHMgPSB0aGlzLmZvY3VzRGF0YS5lbnRlcigpLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ2ZvY3VzICcgKyBkLmlkO1xuXHRcdFx0fSk7XG5cblx0XHRzZWxlY3RBbGwoJy5mb2N1cycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ2ZvY3VzICcgKyBkLmlkO1xuXHRcdFx0fSk7XG5cblx0XHQvLyBMSU5FU1xuXHRcdGxldCBwYXRoTGluZSA9IG5ld0RhdGFQb2ludHMuYXBwZW5kKCdwYXRoJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdsaW5lJylcblx0XHRcdC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCNjbGlwKScpXG5cdFx0XHQuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuXHRcdFx0LnN0eWxlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5hdHRyKCdkJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLmxpbmUoZC5kYXRlcyk7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbihkKSB7cmV0dXJuIDQ7fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnN0cm9rZVdpZHRoW21heFBvc2l0aW9uW190aGlzLm5hbWVzQnlJRFtkLmlkXV0udmFsdWUgLSAxXTtcblx0XHRcdH0pXG5cdFx0XHQvLyAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gbWF4UG9zaXRpb25bX3RoaXMubmFtZXNCeUlEW2QuaWRdXS52YWx1ZS8xMDt9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHQvLyByZXR1cm4gX3RoaXMuY29sb3IoZC5jaGFubmVsKTtcblx0XHRcdFx0cmV0dXJuIF90aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCkuY29sb3VyO1xuXHRcdFx0fSlcblx0XHRcdC8vIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24oZCxpKSB7cmV0dXJuICcjMDAwJzsgfSlcblx0XHRcdC8vIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5kZWxheSg1MDApXG5cdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MCkuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKiAxMDA7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMC42KTtcblxuXHRcdHBhdGhMaW5lID0gdGhpcy5mb2N1c0RhdGEuc2VsZWN0KCdwYXRoJyk7XG5cblx0XHRwYXRoTGluZS50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigyMDAwKS5kZWxheSgxNTAwKVxuXHRcdFx0LmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMubGluZShkLmRhdGVzKTtcblx0XHRcdH0pXG5cdFx0XHQvLyAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gNDt9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMuc3Ryb2tlV2lkdGhbbWF4UG9zaXRpb25bX3RoaXMubmFtZXNCeUlEW2QuaWRdXS52YWx1ZSAtIDFdO1xuXHRcdFx0fSlcblx0XHRcdC8vIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24oZCkge3JldHVybiBtYXhQb3NpdGlvblt0aGlzLm5hbWVzQnlJRFtkLmlkXV0udmFsdWUvMTA7fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYXBwLmRhdGFtb2RlbC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCkuY29sb3VyO1xuXHRcdFx0fSk7XG5cblxuXHRcdC8vQ0lSQ0xFXG5cdFx0bGV0IGNpcmNsZXMgPSBuZXdEYXRhUG9pbnRzLmFwcGVuZCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdjaXJjbGUnKVxuXHRcdFx0LmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoI2NsaXApJylcblx0XHRcdC5hdHRyKCdjeCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy54U2NhbGUoX3RoaXMucGFyc2VUaW1lKGQuZGF0ZXNbMF0uZGF0ZSkpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdjeScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5kYXRlc1swXS5yZWNSYW5rKTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMuYXBwLmdldENoYW5uZWxCeU5hbWUoZC5jaGFubmVsKS5jb2xvdXI7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQuZGF0ZXNbMF0udmlld3MgPT0gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ3doaXRlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXMuYXBwLmdldENoYW5uZWxCeU5hbWUoZC5jaGFubmVsKS5jb2xvdXI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDQpXG5cdFx0XHQvLyAuYXR0cigncicsIDEwKVxuXHRcdFx0LmF0dHIoJ3InLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMuc3Ryb2tlV2lkdGhbbWF4UG9zaXRpb25bX3RoaXMubmFtZXNCeUlEW2QuaWRdXS52YWx1ZSAtIDFdO1xuXHRcdFx0fSlcblx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gaSAqIDEwMDtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHRcdGNpcmNsZXMgPSB0aGlzLmZvY3VzRGF0YS5zZWxlY3QoJ2NpcmNsZScpO1xuXG5cdFx0Y2lyY2xlcy50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigyMDAwKS5kZWxheSgxNTAwKVxuXHRcdFx0LmF0dHIoJ2N4JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShfdGhpcy5wYXJzZVRpbWUoZC5kYXRlc1swXS5kYXRlKSk7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2N5JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnlTY2FsZShkLmRhdGVzWzBdLnJlY1JhbmspO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnN0cm9rZVdpZHRoW21heFBvc2l0aW9uW190aGlzLm5hbWVzQnlJRFtkLmlkXV0udmFsdWUgLSAxXTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFwcC5kYXRhbW9kZWwuZ2V0Q2hhbm5lbEJ5TmFtZShkLmNoYW5uZWwpLmNvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZC5kYXRlc1swXS52aWV3cyA9PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybiAnd2hpdGUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwcC5kYXRhbW9kZWwuZ2V0Q2hhbm5lbEJ5TmFtZShkLmNoYW5uZWwpLmNvbG91cjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0fTtcblxuXHR0aGlzLmdldEZsYXREYXRhQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZsYXREYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5mbGF0RGF0YVtpXS5pZCA9PSBpZCkgcmV0dXJuIHRoaXMuZmxhdERhdGFbaV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBWb3Jvbm9pIG1vdXNlb3ZlciBhbmQgbW91c2VvdXQgZnVuY3Rpb25zXHRcblx0dGhpcy5fbW91c2VPdmVyU2VsZWN0aW9uID0gZnVuY3Rpb24gKGQpIHtcblx0XHQvLyB0aGlzLnNob3dwb3B1cChkKTtcblx0XHR0aGlzLmFwcC5pdGVtTW91c2VPdmVyKGQsJ3JhbmsnKTtcblx0fTtcblxuXHR0aGlzLl9tb3VzZU91dFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGQpIHtcblx0XHQvLyB0aGlzLmhpZ2hsaWdodE9mZihkKTtcblx0XHR0aGlzLmFwcC5pdGVtTW91c2VPdXQoZCwncmFuaycpO1xuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0T24gPSBmdW5jdGlvbiAoZGF0YSxzb3VyY2VUeXBlKSB7XG5cblx0XHR0aGlzLmZvY3VzLnNlbGVjdEFsbCgnLmZvY3VzJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0aWYoc291cmNlVHlwZSA9PSAncmFuaycpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGQueW91dHViZUlEID09PSBkYXRhLmRhdGEueW91dHViZUlEKSA/IDEgOiAwLjA3O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNvdXJjZVR5cGUgPT0gJ2NoYW5uZWwnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChkLmNoYW5uZWwgPT09IGRhdGEubmFtZSkgPyAxIDogMC4wNztcblx0XHRcdFx0fSBlbHNlIGlmIChzb3VyY2VUeXBlID09ICd2aWRlbycpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGQueW91dHViZUlEID09PSBkYXRhLnlvdXR1YmVJRCkgPyAxIDogMC4wNztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQvL3BvcHVwXG5cdFx0aWYoc291cmNlVHlwZSA9PSAncmFuaycpIHRoaXMuc2hvd3BvcHVwKGRhdGEpO1xuXHR9O1xuXG5cdHRoaXMuc2hvd3BvcHVwID0gZnVuY3Rpb24oZCkge1xuXHRcdHNlbGVjdCgnLnBvcFVwTmFtZScpLm1vdmVUb0Zyb250KCk7IC8vTW92ZSB0aGUgdG9vbHRpcCB0byB0aGUgZnJvbnRcblxuXHRcdHRoaXMucG9wVXBOYW1lLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMueFNjYWxlKHRoaXMucGFyc2VUaW1lKGQuZGF0ZSkpICsgJywnICsgdGhpcy55U2NhbGUoZC5yZWNSYW5rKSArICcpJyk7IC8vQ2hhbmdlIHBvc2l0aW9uLCBzaXplIG9mIGNpcmNsZSBhbmQgdGV4dCBvZiB0b29sdGlwXG5cblx0XHRsZXQgY2lyY2xlU2l6ZSA9IDEwO1xuXG5cdFx0dGhpcy5wb3BVcE5hbWUuc2VsZWN0KCcudG9vbHRpcENpcmNsZScpXG5cdFx0XHQvLyAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yKGQuY2hhbm5lbCkpXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCB0aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCkuY29sb3VyKVxuXHRcdFx0LmF0dHIoJ3InLCBjaXJjbGVTaXplKTtcblxuXHRcdHRoaXMucG9wVXBOYW1lLnNlbGVjdCgndGV4dCcpLnRleHQoZC5tb21lbnQuZm9ybWF0KCdNTU0gRCcpICsgJzogJyArIGQudGl0bGUgKyAnIChSYW5rOiAnICsgZC5yZWNSYW5rICsgJyknKTtcblxuXHRcdC8vZml4IHBvcHVvcCBwb3NpdGlvbiBpZiB0ZXh0IGlzIG91dCBvZiBib3VuZGFyaWVzIHRvIHRsZWYgb3IgdGkgdGhlIHJpZ2h0XG5cdFx0aWYgKCh0aGlzLnBvcFVwTmFtZS5ub2RlKCkuZ2V0Q1RNKCkuZSAtIHRoaXMubWFyZ2luLmxlZnQpIC0gKHRoaXMucG9wVXBOYW1lLm5vZGUoKS5nZXRCQm94KCkud2lkdGggLyAyKSA8IDApIHtcblx0XHRcdHRoaXMucG9wVXBOYW1lLnNlbGVjdCgndGV4dCcpLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xuXHRcdH0gZWxzZSBpZiAoKHRoaXMucG9wVXBOYW1lLm5vZGUoKS5nZXRDVE0oKS5lIC0gdGhpcy5tYXJnaW4ubGVmdCkgKyAodGhpcy5wb3BVcE5hbWUubm9kZSgpLmdldEJCb3goKS53aWR0aCAvIDIpID4gdGhpcy53aWR0aCAtIDEyMCkge1xuXHRcdFx0dGhpcy5wb3BVcE5hbWUuc2VsZWN0KCd0ZXh0Jykuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmZvY3VzLnNlbGVjdEFsbCgnLmZvY3VzJykuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0XHR0aGlzLnBvcFVwTmFtZS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC0xMDAsLTEwMCknKTtcblx0XHR0aGlzLnBvcFVwTmFtZS5zZWxlY3QoJ3RleHQnKS5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBWT1JPTk9JIENMSUNLIC0gQUREIE1PREFMXG5cdHRoaXMuX21vdXNlQ2xpY2sgPSBmdW5jdGlvbiAoZCkge1xuXHRcdHRoaXMuYXBwLnNob3dEZXRhaWxzKGQsJ3JhbmsnKTtcblx0fTtcblxuXHR0aGlzLmV4aXQgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IDUwMDtcblxuXHRcdC8vIHRoaXMuZm9jdXNEYXRhXG5cdFx0dGhpcy5mb2N1cy5zZWxlY3RBbGwoJy5mb2N1cycpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oZHVyYXRpb24vMilcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApO1xuXHR9O1xuXG59IiwiLy9tb2R1bGVzXG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcy9jaHJvbWEubWluJztcblxuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge21heH0gZnJvbSAnZDMtYXJyYXkvZGlzdC9kMy1hcnJheS5taW4nO1xuaW1wb3J0IHtheGlzQm90dG9tLGF4aXNMZWZ0fSBmcm9tICdkMy1heGlzL2Rpc3QvZDMtYXhpcy5taW4nO1xuaW1wb3J0IHtzY2FsZU9yZGluYWwsc2NhbGVMaW5lYXIsc2NhbGVCYW5kfSBmcm9tICdkMy1zY2FsZS9kaXN0L2QzLXNjYWxlLm1pbic7XG5pbXBvcnQge3NjaGVtZVNldDN9IGZyb20gJ2QzLXNjYWxlLWNocm9tYXRpYy9kaXN0L2QzLXNjYWxlLWNocm9tYXRpYy5taW4nO1xucmVxdWlyZSgnZDMtdHJhbnNpdGlvbi9kaXN0L2QzLXRyYW5zaXRpb24ubWluJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcFZpZGVvc1ZpcyhhcHApIHtcblxuXHR0aGlzLmFwcCA9IGFwcDtcblxuXHQvLyB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLnRvcFRlbkRhdGEgPSBbXTtcblx0dGhpcy52aXNDb250YWluZXIgPSAnJztcblxuXHR0aGlzLndpbmRvd1dpZHRoID0gMDtcblx0dGhpcy5oZWlnaHQgPSAwO1xuXHR0aGlzLndpZHRoID0gMDtcblxuXHR0aGlzLm1hcmdpbiA9IHtcblx0XHR0b3A6IDMwLFxuXHRcdHJpZ2h0OiAyNTAsXG5cdFx0Ym90dG9tOiAzMCxcblx0XHRsZWZ0OiAxMFxuXHR9O1xuXG5cdHRoaXMuc3ZnID0gJyc7XG5cdHRoaXMudmlzID0gJyc7XG5cblx0dGhpcy54U2NhbGUgPScnO1xuXHR0aGlzLnlTY2FsZSA9Jyc7XG5cblx0dGhpcy54QXhpcztcblx0dGhpcy55QXhpcztcblxuXHR0aGlzLmNvbG91clNjYWxlID0gW107XG5cblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0dGhpcy52aXNDb250YWluZXIgPSBzZWxlY3QoJyN0b3AtY2hhbm5lbHMnKTtcblxuXHRcdC8vIHRoaXMuY29sb3VyID0gc2NhbGVPcmRpbmFsKHNjaGVtZVBhaXJlZCk7XG5cdFx0dGhpcy5jb2xvdXIgPSBzY2FsZU9yZGluYWwoc2NoZW1lU2V0Myk7XG5cblx0XHR0aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cdFx0dGhpcy5zZXR1cFZpcygpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMucmVzaXplKCk7XG5cdFx0fSk7XG5cdFx0XG5cdH07XG5cblx0dGhpcy5fc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvL3NpemVcblx0XHR0aGlzLndpbmRvd1dpZHRoID0gdGhpcy52aXNDb250YWluZXIubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRcdHRoaXMuaGVpZ2h0ID0gMzAwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHR9O1xuXG5cdHRoaXMuc2V0dXBWaXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMudmlzQ29udGFpbmVyLmh0bWwoJycpO1xuXG5cblx0XHR0aGlzLnN2ZyA9IHRoaXMudmlzQ29udGFpbmVyLmFwcGVuZCgnc3ZnJylcblx0XHRcdC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG5cblx0XHQvL3NjYWxlXG5cdFx0dGhpcy54U2NhbGUgPSBzY2FsZUxpbmVhcigpXG5cdFx0XHQucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcblx0XHR0aGlzLnlTY2FsZSA9IHNjYWxlQmFuZCgpXG5cdFx0XHQucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cblxuXHRcdC8vIEFYSVNcblx0XHR0aGlzLnhBeGlzID0gdGhpcy52aXNDb250YWluZXIuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICd4IGF4aXMnKVxuXHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwnICsgdGhpcy5oZWlnaHQgKyAnKScpO1xuXG5cdFx0dGhpcy55QXhpcyA9IHRoaXMudmlzQ29udGFpbmVyLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAneSBheGlzJylcblx0XHRcdC5jYWxsKGF4aXNMZWZ0KHRoaXMueVNjYWxlKS50aWNrU2l6ZSgwKS50aWNrRm9ybWF0KCcnKSk7XG5cblx0XHQvL1ZJU1xuXHRcdHRoaXMudmlzID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcblx0fTtcblxuXHQvLy0tLS0gUkVTSVpFXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdC8vd2lkdGggb25seVxuXHRcdGlmICh0aGlzLndpbmRvd1dpZHRoICE9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIHtcblx0XHRcdC8vZGVsYXkuLi4gZW5kIHJlc2l6aW5nXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF90aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwVmlzKCk7XG5cdFx0XHRcdF90aGlzLnVwZGF0ZShfdGhpcy50b3BUZW5EYXRhLCdyZXNpemUnKTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oZGF0YSxyZXNpemUpIHtcblxuXHRcdGlmICghcmVzaXplKSB7XG5cblx0XHRcdHRoaXMudG9wVGVuRGF0YSA9IGRhdGEuY2hhbm5lbHMuc2xpY2UoMCwgMTApO1xuXG5cdFx0XHQvL2ludmVyc2Ugb3JkZXJcblx0XHRcdHRoaXMudG9wVGVuRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBhLm51bWJlclJlY29tbWVuZGF0aW9ucyAtIGIubnVtYmVyUmVjb21tZW5kYXRpb25zO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpO1xuXHRcdHRoaXMudXBkYXRlQXhpcygpO1xuXHRcdHRoaXMudXBkYXRlVmlzKCk7XG5cdH07XG5cblx0dGhpcy51cGRhdGVTY2FsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMueFNjYWxlLmRvbWFpbihbMCwgbWF4KHRoaXMudG9wVGVuRGF0YSwgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBkLm51bWJlclJlY29tbWVuZGF0aW9ucztcblx0XHR9KV0pO1xuXG5cdFx0dGhpcy55U2NhbGUuZG9tYWluKHRoaXMudG9wVGVuRGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBkLm5hbWU7XG5cdFx0fSkpLnBhZGRpbmcoMC4yKTtcblx0fTtcblxuXHR0aGlzLnVwZGF0ZUF4aXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMueUF4aXMuY2FsbChheGlzQm90dG9tKHRoaXMueFNjYWxlKS50aWNrcygwKS50aWNrRm9ybWF0KCcnKSk7XG5cblx0XHQvLyB4LUF4aXMgbGFiZWxzXG5cdFx0Ly8gLmNhbGwoYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkudGlja3MoNSkudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuXHRcdC8vIFx0cmV0dXJuIGQ7XG5cdFx0Ly8gfSkpO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGVWaXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdC8vcmVtb3ZlIGl0IGFsbFxuXHRcdGxldCBub2RlcyA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLm5vZGUnKVxuXHRcdFx0LnJlbW92ZSgpO1xuXG5cdFx0Ly9uZXcgZGF0YVxuXHRcdG5vZGVzID0gdGhpcy52aXMuc2VsZWN0QWxsKCcubm9kZScpXG5cdFx0XHQuZGF0YSh0aGlzLnRvcFRlbkRhdGEpO1xuXG5cdFx0Ly9hZGQgZWxtZW50c1xuXHRcdGxldCBuZXdOb2RlcyA9IG5vZGVzLmVudGVyKClcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ25vZGUnKTtcblx0XHRcblx0XHRuZXdOb2Rlcy5hcHBlbmQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2JhcicpO1xuXG5cdFx0bmV3Tm9kZXMuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdiYXItdGl0bGUnKTtcblxuXHRcdG5ld05vZGVzLmFwcGVuZCgndGV4dCcpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYmFyLXZhbHVlJyk7XG5cblxuXHRcdC8vdXBkYXRlIGVsZW1lbnRzXG5cdFx0bm9kZXMgPSB0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJyk7XG5cblx0XHRub2Rlcy5zZWxlY3RBbGwoJy5iYXInKVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHQvLyByZXR1cm4gX3RoaXMuY29sb3VyKGQubmFtZSk7XG5cdFx0XHRcdHJldHVybiBkLmNvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneCcsIDApXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgX3RoaXMueVNjYWxlLmJhbmR3aWR0aCgpKVxuXHRcdFx0LmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueVNjYWxlKGQubmFtZSk7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcblx0XHRcdC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0Ly9jaGFuZ2UgY29sb3Jcblx0XHRcdFx0X3RoaXMuX21vdXNlT3ZlclNlbGVjdGlvbihkKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0Ly9iYWNrIHRvIG5vcm1hbFxuXHRcdFx0XHRfdGhpcy5fbW91c2VPdXRTZWxlY3Rpb24oZCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdC8vb3BlbiBwb3B1cFxuXHRcdFx0XHRfdGhpcy5fY2xpY2soZCk7XG5cdFx0XHRcdC8vIHJhbmtGbG93VmlzLnNob3dEZXRhaWxzKGQpO1xuXHRcdFx0fSlcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbig3NTApXG5cdFx0XHQuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKiAxMDA7XG5cdFx0XHR9KS5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy54U2NhbGUoZC5udW1iZXJSZWNvbW1lbmRhdGlvbnMpO1xuXHRcdFx0fSk7XG5cblx0XHRub2Rlcy5zZWxlY3RBbGwoJy5iYXItdGl0bGUnKVxuXHRcdFx0LmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueFNjYWxlKGQubnVtYmVyUmVjb21tZW5kYXRpb25zKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5uYW1lKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZHgnLCAnLjM1ZW0nKSAvL3RoaXMubWFyZ2luIHJpZ2h0XG5cdFx0XHQuYXR0cignZHknLCAnMS4zNWVtJykgLy92ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMHB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC50ZXh0KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiAoZC5uYW1lKTtcblx0XHRcdH0pXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oNzUwKVxuXHRcdFx0LmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG5cdFx0XHRcdHJldHVybiA3NTAgKyAoaSAqIDEwMCk7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cblx0XHRub2Rlcy5zZWxlY3RBbGwoJy5iYXItdmFsdWUnKVxuXHRcdFx0LmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueFNjYWxlKGQubnVtYmVyUmVjb21tZW5kYXRpb25zKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5uYW1lKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZHgnLCAnLS4zNWVtJykgLy90aGlzLm1hcmdpbiByaWdodFxuXHRcdFx0LmF0dHIoJ2R5JywgJzEuMTVlbScpIC8vdmVydGljYWwgYWxpZ24gbWlkZGxlXG5cdFx0XHQuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMnB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnN0eWxlKCdmb250LXdlaWdodCcsICdib2xkJylcblx0XHRcdC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGxldCB0ZXh0Q29sb3VyID0gY2hyb21hKDAsIDAsIDAsIDAuOSkuaGV4KCk7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYXN0ID0gY2hyb21hLmNvbnRyYXN0KGQuY29sb3VyLCB0ZXh0Q29sb3VyKTtcblx0XHRcdFx0aWYgKGNvbnRyYXN0IDwgNC41KSB0ZXh0Q29sb3VyID0gY2hyb21hKDI1NSwgMjU1LCAyNTUsIDAuODUpLmhleCgpO1xuXHRcdFx0XHRyZXR1cm4gdGV4dENvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnRleHQoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIChkLm51bWJlclJlY29tbWVuZGF0aW9ucyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gNzUwICsgKGkgKiAxMDApO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdH07XG5cblx0dGhpcy5leGl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSA1MDA7XG5cdFx0bGV0IGJhciA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLmJhcicpO1xuXHRcdGJhci50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbilcblx0XHRcdC5hdHRyKCd3aWR0aCcsIDApO1xuXG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbi8yKVxuXHRcdFx0Ly8gLmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5iYXItdmFsdWUnKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKGR1cmF0aW9uKVxuXHRcdFx0LmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0fTtcblxuXHR0aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0YXBwLml0ZW1Nb3VzZU92ZXIoZCwgJ2NoYW5uZWwnKTtcblx0fTtcblxuXHR0aGlzLl9tb3VzZU91dFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGQpIHtcblx0XHRhcHAuaXRlbU1vdXNlT3V0KGQsICdjaGFubmVsJyk7XG5cdH07XG5cblx0dGhpcy5fY2xpY2sgPSBmdW5jdGlvbihkKSB7XG5cdFx0Y29uc29sZS5sb2coZCk7XG5cdFx0Ly8gdGhpcy5hcHAuc2hvd0RldGFpbHMoZCwndmlkZW8nKTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9uID0gZnVuY3Rpb24gKGNoYW5uZWxOYW1lKSB7XG5cblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0aWYoZC5uYW1lID09PSBjaGFubmVsTmFtZSkge1xuXHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAwLjU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJylcblx0XHRcdC5zdHlsZSgnZm9udC13ZWlnaHQnLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGlmKGQubmFtZSA9PT0gY2hhbm5lbE5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ2JvbGQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJykuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5iYXItdGl0bGUnKS5zdHlsZSgnZm9udC13ZWlnaHQnLCAnbm9ybWFsJyk7XG5cdH07XG5cbn0iLCIvL21vZHVsZXNcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzL2Nocm9tYS5taW4nO1xuXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7bWF4fSBmcm9tICdkMy1hcnJheS9kaXN0L2QzLWFycmF5Lm1pbic7XG5pbXBvcnQge2F4aXNCb3R0b20sYXhpc0xlZnR9IGZyb20gJ2QzLWF4aXMvZGlzdC9kMy1heGlzLm1pbic7XG5pbXBvcnQge3NjYWxlT3JkaW5hbCxzY2FsZUxpbmVhcixzY2FsZUJhbmR9IGZyb20gJ2QzLXNjYWxlL2Rpc3QvZDMtc2NhbGUubWluJztcbmltcG9ydCB7c2NoZW1lU2V0M30gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljL2Rpc3QvZDMtc2NhbGUtY2hyb21hdGljLm1pbic7XG5yZXF1aXJlKCdkMy10cmFuc2l0aW9uL2Rpc3QvZDMtdHJhbnNpdGlvbi5taW4nKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BWaWRlb3NWaXMoYXBwKSB7XG5cblx0dGhpcy5hcHAgPSBhcHA7XG5cblx0Ly8gdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy50b3BUZW5EYXRhID0gW107XG5cdHRoaXMudmlzQ29udGFpbmVyID0gJyc7XG5cblx0dGhpcy53aW5kb3dXaWR0aCA9IDA7XG5cdHRoaXMuaGVpZ2h0ID0gMDtcblx0dGhpcy53aWR0aCA9IDA7XG5cblx0dGhpcy5tYXJnaW4gPSB7XG5cdFx0dG9wOiAzMCxcblx0XHRyaWdodDogMjUwLFxuXHRcdGJvdHRvbTogMzAsXG5cdFx0bGVmdDogMTBcblx0fTtcblxuXHR0aGlzLnN2ZyA9ICcnO1xuXHR0aGlzLnZpcyA9ICcnO1xuXG5cdHRoaXMueFNjYWxlID0nJztcblx0dGhpcy55U2NhbGUgPScnO1xuXG5cdHRoaXMueEF4aXM7XG5cdHRoaXMueUF4aXM7XG5cblx0dGhpcy5jb2xvdXJTY2FsZSA9IFtdO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdHRoaXMudmlzQ29udGFpbmVyID0gc2VsZWN0KCcjdG9wLXZpZGVvcycpO1xuXG5cdFx0Ly8gdGhpcy5jb2xvdXIgPSBzY2FsZU9yZGluYWwoc2NoZW1lUGFpcmVkKTtcblx0XHR0aGlzLmNvbG91ciA9IHNjYWxlT3JkaW5hbChzY2hlbWVTZXQzKTtcblxuXHRcdHRoaXMuX3NldERpbWVuc2lvbnMoKTtcblx0XHR0aGlzLnNldHVwVmlzKCk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5yZXNpemUoKTtcblx0XHR9KTtcblxuXHR9O1xuXG5cdHRoaXMuX3NldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy53aW5kb3dXaWR0aCA9IHRoaXMudmlzQ29udGFpbmVyLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHR0aGlzLndpZHRoID0gdGhpcy53aW5kb3dXaWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0XHR0aGlzLmhlaWdodCA9IDMwMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0fTtcblxuXHR0aGlzLnNldHVwVmlzID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly9jbGVhclxuXHRcdHRoaXMudmlzQ29udGFpbmVyLmh0bWwoJycpO1xuXG5cdFx0dGhpcy5zdmcgPSB0aGlzLnZpc0NvbnRhaW5lci5hcHBlbmQoJ3N2ZycpXG5cdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuXG5cdFx0Ly9zY2FsZVxuXHRcdHRoaXMueFNjYWxlID0gc2NhbGVMaW5lYXIoKVxuXHRcdFx0LnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG5cdFx0dGhpcy55U2NhbGUgPSBzY2FsZUJhbmQoKVxuXHRcdFx0LnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG5cblx0XHQvLyBBWElTXG5cdFx0dGhpcy54QXhpcyA9IHRoaXMudmlzQ29udGFpbmVyLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAneCBheGlzJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJyArIHRoaXMuaGVpZ2h0ICsgJyknKTtcblxuXHRcdHRoaXMueUF4aXMgPSB0aGlzLnZpc0NvbnRhaW5lci5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG5cdFx0XHQuY2FsbChheGlzTGVmdCh0aGlzLnlTY2FsZSkudGlja1NpemUoMCkudGlja0Zvcm1hdCgnJykpO1xuXG5cdFx0Ly9WSVNcblx0XHR0aGlzLnZpcyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XG5cblx0fTtcblxuXHQvLy0tLS0gUkVTSVpFXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdC8vd2lkdGggb25seVxuXHRcdGlmICh0aGlzLndpbmRvd1dpZHRoICE9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIHtcblx0XHRcdC8vZGVsYXkuLi4gZW5kIHJlc2l6aW5nXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF90aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwVmlzKCk7XG5cdFx0XHRcdF90aGlzLnVwZGF0ZShfdGhpcy50b3BUZW5EYXRhLCdyZXNpemUnKTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oZGF0YSxyZXNpemUpIHtcblxuXHRcdGlmICghcmVzaXplKSB7XG5cdFx0XHR0aGlzLnRvcFRlbkRhdGEgPSBkYXRhLnZpZGVvcy5zbGljZSgwLCAxMCk7XG5cdFx0XHQvL2ludmVyc2Ugb3JkZXJcblx0XHRcdHRoaXMudG9wVGVuRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBhLnN1bVJlYyAtIGIuc3VtUmVjO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpO1xuXHRcdHRoaXMudXBkYXRlQXhpcygpO1xuXHRcdHRoaXMudXBkYXRlVmlzKCk7XG5cdH07XG5cdFxuXG5cdHRoaXMudXBkYXRlU2NhbGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnhTY2FsZS5kb21haW4oWzAsIG1heCh0aGlzLnRvcFRlbkRhdGEsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5zdW1SZWM7XG5cdFx0fSldKTtcblxuXHRcdHRoaXMueVNjYWxlLmRvbWFpbih0aGlzLnRvcFRlbkRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC50aXRsZTtcblx0XHR9KSkucGFkZGluZygwLjIpO1xuXHR9O1xuXG5cdHRoaXMudXBkYXRlQXhpcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dGhpcy55QXhpcy5jYWxsKGF4aXNCb3R0b20odGhpcy54U2NhbGUpLnRpY2tzKDApLnRpY2tGb3JtYXQoJycpKTtcblxuXHRcdC8vIHgtQXhpcyBsYWJlbHNcblx0XHQvLyAuY2FsbChheGlzQm90dG9tKHRoaXMueFNjYWxlKS50aWNrcyg1KS50aWNrRm9ybWF0KGZ1bmN0aW9uIChkKSB7XG5cdFx0Ly8gXHRyZXR1cm4gZDtcblx0XHQvLyB9KSk7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZVZpcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0Ly9yZW1vdmUgaXQgYWxsXG5cdFx0bGV0IG5vZGVzID0gdGhpcy52aXMuc2VsZWN0QWxsKCcubm9kZScpXG5cdFx0XHQucmVtb3ZlKCk7XG5cblx0XHQvL25ldyBkYXRhXG5cdFx0bm9kZXMgPSB0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJylcblx0XHRcdC5kYXRhKHRoaXMudG9wVGVuRGF0YSk7XG5cblx0XHQvL2FkZCBlbG1lbnRzXG5cdFx0bGV0IG5ld05vZGVzID0gbm9kZXMuZW50ZXIoKVxuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbm9kZScpO1xuXHRcdFxuXHRcdG5ld05vZGVzLmFwcGVuZCgncmVjdCcpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYmFyJyk7XG5cblx0XHRuZXdOb2Rlcy5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2Jhci10aXRsZScpO1xuXG5cdFx0bmV3Tm9kZXMuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdiYXItdmFsdWUnKTtcblxuXG5cdFx0Ly91cGRhdGUgZWxlbWVudHNcblx0XHRub2RlcyA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLm5vZGUnKTtcblxuXHRcdG5vZGVzLnNlbGVjdEFsbCgnLmJhcicpXG5cdFx0XHQuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdC8vIHJldHVybiBfdGhpcy5jb2xvdXIoZC5jaGFubmVsKTtcblx0XHRcdFx0Y29uc3QgY2hhbm5lbCA9IF90aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCk7XG5cdFx0XHRcdHJldHVybiBjaGFubmVsLmNvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneCcsIDApXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgX3RoaXMueVNjYWxlLmJhbmR3aWR0aCgpKVxuXHRcdFx0LmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueVNjYWxlKGQudGl0bGUpO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXG5cdFx0XHQub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdF90aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24oZCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdF90aGlzLl9tb3VzZU91dFNlbGVjdGlvbihkKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0X3RoaXMuX21vdXNlQ2xpY2soZCk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gaSAqIDEwMDtcblx0XHRcdH0pLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShkLnN1bVJlYyk7XG5cdFx0XHR9KTtcblxuXHRcdG5vZGVzLnNlbGVjdEFsbCgnLmJhci10aXRsZScpXG5cdFx0XHQuYXR0cigneCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy54U2NhbGUoZC5zdW1SZWMpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnlTY2FsZShkLnRpdGxlKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZHgnLCAnLjM1ZW0nKSAvL3RoaXMubWFyZ2luIHJpZ2h0XG5cdFx0XHQuYXR0cignZHknLCAnMS4zNWVtJykgLy92ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMHB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC50ZXh0KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiAoZC50aXRsZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gNzUwICsgKGkgKiAxMDApO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdFx0bm9kZXMuc2VsZWN0QWxsKCcuYmFyLXZhbHVlJylcblx0XHRcdC5hdHRyKCd4JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShkLnN1bVJlYyk7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueVNjYWxlKGQudGl0bGUpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdkeCcsICctLjM1ZW0nKSAvL3RoaXMubWFyZ2luIHJpZ2h0XG5cdFx0XHQuYXR0cignZHknLCAnMS4xNWVtJykgLy92ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcblx0XHRcdC5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuXHRcdFx0LnN0eWxlKCdmb250JywgJzEycHggc2Fucy1zZXJpZicpXG5cdFx0XHQuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKVxuXHRcdFx0LnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0bGV0IHRleHRDb2xvdXIgPSBjaHJvbWEoMCwgMCwgMCwgMC45KS5oZXgoKTtcblx0XHRcdFx0Y29uc3QgY2hhbm5lbCA9IF90aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCk7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYXN0ID0gY2hyb21hLmNvbnRyYXN0KGNoYW5uZWwuY29sb3VyLCB0ZXh0Q29sb3VyKTtcblx0XHRcdFx0aWYgKGNvbnRyYXN0IDwgNC41KSB0ZXh0Q29sb3VyID0gY2hyb21hKDI1NSwgMjU1LCAyNTUsIDAuODUpLmhleCgpO1xuXHRcdFx0XHRyZXR1cm4gdGV4dENvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnRleHQoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIChkLnN1bVJlYyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gNzUwICsgKGkgKiAxMDApO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdH07XG5cblx0dGhpcy5leGl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSA1MDA7XG5cdFx0bGV0IGJhciA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLmJhcicpO1xuXHRcdGJhci50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbilcblx0XHRcdC5hdHRyKCd3aWR0aCcsIDApO1xuXG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbi8yKVxuXHRcdFx0Ly8gLmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5iYXItdmFsdWUnKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKGR1cmF0aW9uKVxuXHRcdFx0LmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0fTtcblxuXHR0aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0Ly8gdGhpcy5oaWdobGlnaHRPbihkKTtcblx0XHR0aGlzLmFwcC5pdGVtTW91c2VPdmVyKGQsJ3ZpZGVvJyk7XG5cdH07XG5cblx0dGhpcy5fbW91c2VPdXRTZWxlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gdGhpcy5oaWdobGlnaHRPZmYoZCk7XG5cdFx0dGhpcy5hcHAuaXRlbU1vdXNlT3V0KGQsJ3ZpZGVvJyk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPbiA9IGZ1bmN0aW9uIChpZCwgc291cmNlVHlwZSkge1xuXHRcdHRoaXMudmlzLnNlbGVjdEFsbCgnLm5vZGUnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoc291cmNlVHlwZSA9PSAndmlkZW8nKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChkLnlvdXR1YmVJRCA9PT0gaWQpID8gMSA6IDAuNTtcblx0XHRcdFx0fSBlbHNlIGlmIChzb3VyY2VUeXBlID09ICdjaGFubmVsJykge1xuXHRcdFx0XHRcdHJldHVybiAoZC5jaGFubmVsID09PSBpZCkgPyAxIDogMC41O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMudmlzLnNlbGVjdEFsbCgnLmJhci10aXRsZScpXG5cdFx0XHQuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoc291cmNlVHlwZSA9PSAndmlkZW8nKSB7XG5cdFx0XHRcdFx0aWYoZC55b3V0dWJlSUQgPT09IGlkKSByZXR1cm4gJ2JvbGQnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNvdXJjZVR5cGUgPT0gJ2NoYW5uZWwnKSB7XG5cdFx0XHRcdFx0aWYoZC5jaGFubmVsID09PSBpZCkgcmV0dXJuICdib2xkJztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPZmYgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcubm9kZScpLnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJykuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJ25vcm1hbCcpO1xuXHR9O1xuXG5cdHRoaXMuX21vdXNlQ2xpY2sgPSBmdW5jdGlvbiAoZCkge1xuXHRcdHRoaXMuYXBwLnNob3dEZXRhaWxzKGQsJ3ZpZGVvJyk7XG5cdH07XG5cbn0iLCJ2YXIgSCA9IHJlcXVpcmUoXCJob2dhbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHZhciBUID0gbmV3IEguVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIjxkaXYgY2xhc3M9XFxcInVrLW1vZGFsLWRpYWxvZ1xcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxidXR0b24gY2xhc3M9XFxcInVrLW1vZGFsLWNsb3NlLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdWstY2xvc2U+PC9idXR0b24+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLW1vZGFsLWhlYWRlciB1ay1iYWNrZ3JvdW5kLW11dGVkXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLWdyaWQtc21hbGwgdWstZmxleC1taWRkbGVcXFwiIHVrLWdyaWQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtZXhwYW5kXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJ1ay1jYXJkLXRpdGxlIHVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXFxcIj5cIik7dC5iKHQudih0LmYoXCJ0aXRsZVwiLGMscCwwKSkpO3QuYihcIjwvaDM+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcXFwiPlwiKTt0LmIodC52KHQuZihcImNoYW5uZWxcIixjLHAsMCkpKTt0LmIoXCI8L3A+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLW1vZGFsLWJvZHkgdWstdGV4dC1jZW50ZXJcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGlmcmFtZSB3aWR0aD1cXFwiNTQwXFxcIlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjMxMFxcXCJcIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIik7dC5iKHQudih0LmYoXCJ5b3V0dWJlSURcIixjLHAsMCkpKTt0LmIoXCJcXFwiXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVxcXCIwXFxcIlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICBhbGxvdz1cXFwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVxcXCJcIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwidWstbW9kYWwtZm9vdGVyXFxcIiB1ay1vdmVyZmxvdy1hdXRvPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPHRhYmxlIGlkPVxcXCJ2aWRlby1kYXRlcy1kZXRhaWxzXFxcIlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICBjbGFzcz1cXFwidWstdGFibGUgdWstdGFibGUtc21hbGwgdWstdGFibGUtaG92ZXIgdWstdGFibGUtZGl2aWRlclxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPHRoZWFkPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8dHI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcIlxcXCI+Jm5ic3A7PC90aD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+VmlzdWFsaXphw6fDtWVzPC90aD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+R29zdGVpPC90aD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+TsOjbyBHb3N0ZWk8L3RoPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5SZWNvbWVuZGHDp8O1ZXM8L3RoPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj48c3BhbiBjbGFzcz1cXFwidWstdGV4dC1zbWFsbFxcXCI+UG9zacOnw6NvIG5vIFJhbmtpbmcgZGUgUmVjb21lbmRhw6fDtWVzPC9zcGFuPjwvdGg+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvdHI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPC90aGVhZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8dGJvZHk+XCIpO3QuYihcIlxcblwiICsgaSk7aWYodC5zKHQuZihcImRhdGVzXCIsYyxwLDEpLGMscCwwLDE0ODgsMTkwOSxcInt7IH19XCIpKXt0LnJzKGMscCxmdW5jdGlvbihjLHAsdCl7dC5iKFwiICAgICAgICAgICAgICAgIDx0cj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZD5cIik7dC5iKHQudih0LmYoXCJkYXRlXCIsYyxwLDApKSk7dC5iKFwiPC90ZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+XCIpO3QuYih0LnYodC5mKFwidmlld3NcIixjLHAsMCkpKTt0LmIoXCI8L3RkPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5cIik7dC5iKHQudih0LmYoXCJsaWtlc1wiLGMscCwwKSkpO3QuYihcIjwvdGQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInVrLXRleHQtcmlnaHRcXFwiPlwiKTt0LmIodC52KHQuZihcImRpc2xpa2VzXCIsYyxwLDApKSk7dC5iKFwiPC90ZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+XCIpO3QuYih0LnYodC5mKFwibmJfcmVjb21tZW5kYXRpb25zXCIsYyxwLDApKSk7dC5iKFwiPC90ZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+XCIpO3QuYih0LnYodC5mKFwicmVjUmFua1wiLGMscCwwKSkpO3QuYihcIjwvdGQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvdHI+XCIpO3QuYihcIlxcblwiICsgaSk7fSk7Yy5wb3AoKTt9dC5iKFwiICAgICAgICAgICAgPC90Ym9keT5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDwvdGFibGU+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidWstbW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwidWstbW9kYWwtY2xvc2UtZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB1ay1jbG9zZT48L2J1dHRvbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWstbW9kYWwtaGVhZGVyIHVrLWJhY2tncm91bmQtbXV0ZWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstZ3JpZC1zbWFsbCB1ay1mbGV4LW1pZGRsZVxcXCIgdWstZ3JpZD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay13aWR0aC1leHBhbmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInVrLWNhcmQtdGl0bGUgdWstbWFyZ2luLXJlbW92ZS1ib3R0b21cXFwiPnt7dGl0bGV9fTwvaDM+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcXFwiPnt7Y2hhbm5lbH19PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1tb2RhbC1ib2R5IHVrLXRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgIDxpZnJhbWUgd2lkdGg9XFxcIjU0MFxcXCJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIzMTBcXFwiXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQve3t5b3V0dWJlSUR9fVxcXCJcXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgIGFsbG93PVxcXCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXFxcIlxcbiAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1tb2RhbC1mb290ZXJcXFwiIHVrLW92ZXJmbG93LWF1dG8+XFxuICAgICAgICA8dGFibGUgaWQ9XFxcInZpZGVvLWRhdGVzLWRldGFpbHNcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ1ay10YWJsZSB1ay10YWJsZS1zbWFsbCB1ay10YWJsZS1ob3ZlciB1ay10YWJsZS1kaXZpZGVyXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiXFxcIj4mbmJzcDs8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5WaXN1YWxpemHDp8O1ZXM8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5Hb3N0ZWk8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5Ow6NvIEdvc3RlaTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInVrLXRleHQtcmlnaHRcXFwiPlJlY29tZW5kYcOnw7VlczwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInVrLXRleHQtcmlnaHRcXFwiPjxzcGFuIGNsYXNzPVxcXCJ1ay10ZXh0LXNtYWxsXFxcIj5Qb3Npw6fDo28gbm8gUmFua2luZyBkZSBSZWNvbWVuZGHDp8O1ZXM8L3NwYW4+PC90aD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAge3sjZGF0ZXN9fVxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkYXRlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e3ZpZXdzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e2xpa2VzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e2Rpc2xpa2VzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e25iX3JlY29tbWVuZGF0aW9uc319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+e3tyZWNSYW5rfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICB7ey9kYXRlc319XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCIvL21vZHVsZXNcbmltcG9ydCBVSWtpdCBmcm9tICd1aWtpdC9kaXN0L2pzL3Vpa2l0Lm1pbic7XG5pbXBvcnQgZGV0YWlsc011c3RhY2hlIGZyb20gJy4vZGV0YWlscy5odG1sJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24vZGlzdC9kMy1zZWxlY3Rpb24ubWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyhhcHApIHtcblx0dGhpcy5hcHAgPSBhcHA7XG5cblx0dGhpcy5wYWdlRGF0YSA9IHt9O1xuXHR0aGlzLm1vZGFsO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG5cblx0XHR0aGlzLm1vZGFsID0gc2VsZWN0KCcjYXBwJykuYXBwZW5kKCdkaXYnKVxuXHRcdFx0LmF0dHIoJ2lkJywnbW9kYWwtdmlkZW8tZGV0YWlscycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAndWstbW9kYWwtY29udGFpbmVyJylcblx0XHRcdC5hdHRyKCd1ay1tb2RhbCcsJ3RydWUnKTtcblx0fTtcblxuXHR0aGlzLmFkZE1vZGFsID0gZnVuY3Rpb24gKGQsc291cmNlKSB7IFxuXG5cdFx0bGV0IHlvdXR1YmVJRCA9ICcnO1xuXHRcdGxldCBkYXRlcyA9IFtdO1xuXG5cdFx0aWYgKHNvdXJjZSA9PSAndmlkZW8nKSB7XG5cdFx0XHR5b3V0dWJlSUQgPSBkLnlvdXR1YmVJRDtcblx0XHRcdGRhdGVzID0gZC5kYXRlcztcblx0XHR9IGVsc2UgaWYgKHNvdXJjZSA9PSAncmFuaycpIHtcblx0XHRcdHlvdXR1YmVJRCA9IGQuZGF0YS55b3V0dWJlSUQ7XG5cdFx0XHRkYXRlcyA9IGQuZGF0YS5kYXRlcztcblx0XHR9XG5cblx0XHQvLyBkYXRhXG5cdFx0dGhpcy5wYWdlRGF0YSA9IHtcblx0XHRcdHRpdGxlOiBkLnRpdGxlLFxuXHRcdFx0Y2hhbm5lbDogZC5jaGFubmVsLFxuXHRcdFx0eW91dHViZUlEOiB5b3V0dWJlSUQsXG5cdFx0XHRkYXRlczogZGF0ZXMucmV2ZXJzZSgpLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gZGV0YWlsc011c3RhY2hlKHRoaXMucGFnZURhdGEpO1xuXHRcdHRoaXMubW9kYWwuaHRtbChodG1sKTtcblxuXHRcdFVJa2l0Lm1vZGFsKHRoaXMubW9kYWwubm9kZSgpKS5zaG93KCk7XG5cblx0fTtcblx0XG59IiwidmFyIEggPSByZXF1aXJlKFwiaG9nYW4uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB2YXIgVCA9IG5ldyBILlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHVrLXBhZGRpbmctc21hbGwgdG0tbWFpblxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtY2VudGVyXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGgxIGNsYXNzPVxcXCJ1ay1oZWFkaW5nLXByaW1hcnlcXFwiPlwiKTt0LmIodC52KHQuZihcInRpdGxlXCIsYyxwLDApKSk7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGJyLz48c3BhbiBjbGFzcz1cXFwidWstaDJcXFwiPlwiKTt0LmIodC52KHQuZihcInN1YnRpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9zcGFuPjwvaDE+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8L2Rpdj5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstcGFkZGluZy1zbWFsbCB0bS1tYWluXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtY2VudGVyXFxcIj5cXG5cXHRcXHQ8aDEgY2xhc3M9XFxcInVrLWhlYWRpbmctcHJpbWFyeVxcXCI+e3t0aXRsZX19XFxuXFx0XFx0PGJyLz48c3BhbiBjbGFzcz1cXFwidWstaDJcXFwiPnt7c3VidGl0bGV9fTwvc3Bhbj48L2gxPlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCJpbXBvcnQgaGVhZGVyTXVzdGFjaGUgZnJvbSAnLi9oZWFkZXIuaHRtbCc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5cbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi9hcHAnO1xuXG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cblx0Y29uc3QgcGFnZURhdGEgPSB7XG5cdFx0dGl0bGU6IGNvbmZpZy5tZXRhLnRpdGxlLFxuXHRcdHN1YnRpdGxlOiBjb25maWcubWV0YS5zdWJ0aXRsZSxcblx0fTtcblxuXHQvLyBidWlkIHBhZ2Vcblx0Y29uc3QgaHRtbCA9IGhlYWRlck11c3RhY2hlKHBhZ2VEYXRhKTtcblx0c2VsZWN0KCcjYXBwJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ2hlYWRlci1zZWN0aW9uJyk7XG5cdHNlbGVjdCgnI2hlYWRlci1zZWN0aW9uJykuaHRtbChodG1sKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXHRpbml0XG59OyIsInZhciBIID0gcmVxdWlyZShcImhvZ2FuLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdmFyIFQgPSBuZXcgSC5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB1ay1zZWN0aW9uLXhzbWFsbCB1ay1zZWN0aW9uLW11dGVkIHRtLW1haW5cXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstdGV4dC1zbWFsbCB1ay10ZXh0LW11dGVkXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDxoMyBjbGFzcz1cXFwidWstaDMgdWstdGV4dC1jZW50ZXIgdWstbWFyZ2luLXNtYWxsLXRvcFxcXCI+PHNwYW4+XCIpO3QuYih0LnYodC5mKFwidGl0bGVcIixjLHAsMCkpKTt0LmIoXCIgPGEgaWQ9XFxcIm1ldGhvZG9sb2d5LXRvZ2dsZS1pY29uXFxcIiBjbGFzcz1cXFwidWstaWNvbi1saW5rXFxcIiB1ay1pY29uPVxcXCJwbHVzLWNpcmNsZVxcXCIgdWstdG9nZ2xlPVxcXCJ0YXJnZXQ6ICNtZXRob2RvbG9neVxcXCI+PC9hPjwvc3Bhbj48L2gzPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGRpdiBpZD1cXFwibWV0aG9kb2xvZ3lcXFwiIGNsYXNzPVxcXCJ1ay1ncmlkLWRpdmlkZXIgdWstbWFyZ2luLWxhcmdlLXRvcCB1ay1tYXJnaW4tbWVkaXVtLWJvdHRvbVxcXCIgdWstZ3JpZCBoaWRkZW4+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtMy01QG1cXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcInVrLWg1IHVrLXRleHQtdXBwZXJjYXNlXFxcIj5Db2xldGEgZGUgZGFkb3M8L2g1PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8cD5PcyBkYWRvcyBkZSBkZXNzZSBwcm9qZXRvIGZvcmFtIGNvbGV0YWRvcyBmb3JhbSBjb2xldGFkb3MgdXNhbmRvIHVtIHNjcmlwdCBlbSBQeXRob24gZGVzZW52b2x2aWRvIHBvcsKgPGEgaHJlZj1cXFwiaHR0cHM6Ly9naXRodWIuY29tL3BuYnQvWW91VHViZS1leHBsb3JlXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+R3VpbGxhdW1lIENoYXNsb3Q8L2E+wqBjb21vIHBhcnRlIHRvIHByb2pldG8gQWxnbyBUcmFuc3BhcmVuY3kuIE8gYWxnb3JpdGhtIGVtIHF1ZXN0w6NvIGZheiB1bWEgYnVzY2Egbm8gWW91dHViZSB1c2FuZG8gdW1hIHBhbGF2cmEtY2hhdmUgZGVmaW5pZGEgcGVsbyB1c3XDoXJpbyBwYXJhIGNvbGV0YXIgZSBhcm1hemVuYXIgaW5mb3JtYcOnw7VlcyBkb3MgdmlkZW9zIHJlbGFjaW9uYWRvcyDDoCBwYWxhdnJhLWNoYXZlLiBNYWlzIGVzcGVjaWZpY2FtZW50ZSBuw7NzIHVzYW1vcyBzY3JpcHQgcGFyYSBBKSBpZGVudGlmaWNhciBvcyBxdWF0cm8gcHJpbWVpcm9zIHJlc3VsdGFkb3MgZW5jb250cmFkb3MgbmEgcGVzcXVpc2Egbm8gWW91dHViZSBwZWxhIHBhbGF2cmEtY2hhdmUsIEIpIG9idGVyIG9zIHByaW1laXJvcyBxdWF0cm8gdmlkZW9zIHJlbGFjaW9uYWRvcyBhbyByZXN1bHRhZG9zIGRhIHBlc3F1aXNhLCBDKSByZXBldGlyIGEgZXRhcGEgKEIpIHF1YXRybyB2ZXplcyBzdWNlc3NpdmFtZW50ZSBjb20gY2FkYSB2aWRlbyBvYnRpZG8gcGFyYSBjb2xldGFyIHZpZGVvcyByZWxhY2lvbmFkb3MsIGUgRCkgZ3VhcmRhciBvIHJlc3VsdGFkbyBlbSBhcnF1aXZvIEpTT04uIEVzc2Ugb3BlcmHDp8OjbyDDqSBhbsOhbG9nYSBhIHVtYSBwZXNzb2EgZmF6ZXIgdW1hIGJ1c2NhIHBvciB1bWEgcGFsYXZyYS1jaGF2ZSBubyBZb3V0dWJlLCBhYnJpciBvcyBwcmltZWlyb3MgcXVhdHJvIHZpZGVvcywgZSBuYSBzZXF1ZW5jaWEgY2xpY2FyIG5vcyBxdWF0cm8gcHJpbWVpcm9zIHZpZGVvcyByZWNvbWVuZGFkb3MsIHJlcGV0aW5kbyBlc3NlIHByb2Nlc3NvIHF1YXRybyB2ZXplcyBwYXJhIGNhZGEgdmlkZW8gcXVlIGZvciBhYmVydG8uPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8cD5Fc3NlIGFsZ29yaXRtbyBuw6NvIHVzYSBhIEFQSSBwdWJsaWNhIGRvIFlvdXR1YmUuIEFvIGludsOpcyBkaXNzZSwgZWxlIHNpbXVsYSBvIGFtYmllbnRlIGRvIG5hdmVnYWRvciB3ZWIgcGFyYSBjb2xldGFyIG9zIGVsZW1lbnRvcyAoSFRNTClxdWUgc8OjbyBkZXNlbmhhZG9zIG5hcyBww6FnaW5hcyBkZSBidXNjYSBlIGRvIHZpc3VhbGl6YcOnw6NvIGRlIHZpZGVvIGRvIFlvdXR1YmUg4oCUIHVtIHByb2Nlc3NvIGNvbmhlY2lkbyBjb21vIFxcXCJzY3JhcGluZ1xcXCIuIEVzc2UgcHJvY2Vzc28gZmF6IGNvbSBxdWUgYSBjb2xldGEgZGUgZGFkb3MgZmlxdWUgbWFpcyBuZXV0cmEsIGV2aXRhbmRvIHByZWZlcmVuY2lhcyBwZXNzb2FpcyBlIHByZWNvbmNlaXRvcyBzb2NpYWlzIGRlZmluaWRhcyBpbnNjcml0YXMgbm8gcGVyZmlsIGRvIHVzdcOhcmlvLiBPdSBzZWphLCBuw6NvIGxldmUgZW0gY29uc2lkZXJhw6fDo28gYXMgcHJlZmVyZW5jaWFzIGRvIHBlcmZpbCBkbyB1c3XDoXJpbyBubyBZb3V0dWJlLCBvIGhpc3TDs3JpY28gZG8gbmF2ZWdhZG9yLCBjb29raWVzLCBlIG91dHJvcyBlbGVtZW50b3MgcXVlIHBvZGVtIGludGVyZmVyaXIgbm8gcmFua2VhbWVudG8gZ2VyYWRvIHBlbG8gWW91dHViZS4gTm8gZW50YW50bywgaXNzbyBuw6NvIHJlbW92ZSBvdXRyYXMgdmFyacOhdmVpcyBxdWUgcG9zc2FtIGRpc3RvcmNlciBvdSBmb3JtYXRhciBvIHJhbmtpbmcsIGNvbW8gYSBsb2NhbGl6YcOnw6NvIGUgc2lzdGVtYSBkbyBjb21wdXRhZG9yIGVtIHF1ZSBhIGNvbGV0YSBmb2kgZmVpdGEsIGEgbGluZ3VhIGVtIHF1ZSBvIHNpc3RlbWEgZXN0YSBjb25maWd1cmFkbywgb3UgcXVhbHF1ZXIgb3V0cmEgdmFyacOhdmVsIHF1ZSBmYcOnYSBwYXJ0ZSBkbyBwcm9jZXNzbyBkZSByYW5xdWVhbWVudG8gbsOjbyByZXZlbGFkYSBwZWxvIFlvdXR1YmUuPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8cD5QYXJhIGVzdGEgcGVzcXVpc2EgbsOzcyBjb2xldGFkb3MgdGVybW9zIHJlbGV2YW50ZXMgw6BzIGVsZWnDp8O1ZXMgbm8gQnJhc2lsLCBtYWlzIGVzcGVjaWZpY2FtZW50ZSBvcyBub21lcyBkb3MgY2FuZGlkYXRvcyBlIHVtYSB2YXJpYcOnw6NvIGRvIG5vbWUgZG8gY2FuZGlkYXRvIGFjcmVzY2VudGFkbyBkYSBwYWxhdnJhIFxcXCJwcmVzaWRlbnRlXFxcIi4gQ29sZXRhZG9zIGFzIGluZm9ybWHDp8O1ZXMgZG9zIHZpZGVvcyBkb3MgcHJpbmNpcGFpcyBjYW5kaWRhdG9zLCBhIHNhYmVyOiBMdWxhLCBGZXJuYW5kbyBIYWRkYWQsIEdlcmFsZG8gQWxja21pbiwgSmFpciBCb2xzb25hcm8sIEd1aWxoZXJtZSBCb3Vsb3MsIENpcm8gR29tZXMsIE1hcmluYSBTaWx2YSwgSGVucmlxdWUgTWVpcmVsZXMsIGUgSm/Do28gQW1vw6pkbyAoYWNyZXNjZW50YWRvIMOgIGxpc3RhIG5vIGRpYSA1IGRlIHNldGVtYnJvIGRlIDIwMTgpLiBDb2xldGFtb3MgYWluZGEgaW5mb3JtYcOnw7VlcyBkbyB2aWRlb3MgcmVsYWNpb25hZG9zIGFzIHBhbGF2cmFzLWNoYXZlcyBcXFwiRWxlacOnw7VlcyAyMDE4XFxcIiBlIFxcXCJCcmF6aWwgRWxlY3Rpb25zXFxcIi4gQSBjb2xldGEgZG9zIGRhZG9zIGZvaSBmZWl0YSB1c2FuZG8gdW1hIHZleiBhbyBkaWEsIGFwZW5hcyBwb3IgdW0gY29tcHV0YWRvciAoQXBwbGUpIGxvY2FsaXphZG8gZW0gTW9udHJlYWwsIENhbmFkYSwgZW50cmUgb3MgZGlhIDIzIGRlIGFnb3N0byBkZSAyMDE4IGUgMTAgZGUgb3V0dWJybyBkZSAyMDE4LCBlbnRyZSAxOSBlIDIwIGhvcmFzIChob3LDoXJpbyBkZSBCcmFzw61saWEpLjwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPHA+Q2FkYSBjb2xldGEgZGnDoXJpYSBwcm9kdXppdSB1bSBhcnF1aXZvIHBhcmEgY2FkYSB0ZXJtbyBwZXNxdWlzYWRvLiBPcyBhcnF1aXZvcyBkZSBjYWRhIHRlcm1vIGZvcmFtIGNvbWJpbmFkb3MgZSByZWVzdHJ1dHVyYWRvcyBlbSB1bSDDum5pY28gZGF0YXNldCBwYXJhIGdlcmFyIGluZm9ybWHDp8O1ZXMgY29tbyBvIG51bWVybyB0b3RhbCBkZSB2ZXplcyBxdWUgdW0gdmlkZW8gZm9yIHJlY29tZW5kYWRvIG5vIHBlcsOtb2RvIGFmaW0gZGUgc2VyIHVzYWRvcyBuYSBwcm9kdcOnw6NvIGRhIHZpc3VhbGl6YcOnw6NvIHByb3Bvc3RhIG5lc3RlIHByb2pldG8uPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLTItNUBtXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJ1ay1oNSB1ay10ZXh0LXVwcGVyY2FzZVxcXCI+UmFua2Zsb3c8L2g1PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdFx0PHA+SW5zcGlyYWRvIG5vIHRyYWJhbGhvIGRlwqA8YSBocmVmPVxcXCJodHRwOi8vbGFicy5wb2xzeXMubmV0L3Rvb2xzL3JhbmtmbG93L1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkJlcm5oYXJkIFJpZWRlcjwvYT4sIG7Ds3MgZGVzZW52b2x2ZW1vcyB1bWEgdmlzdWFsaXphw6fDo28gcXVlIG1vc3RyYSBvIHJhbmtpbmcgZG9zIHZpZGVvcyBtYWlzIHJlY29tZW5kYWRvcyBwb3IgZGlhIGVtIHVtIGNlcnRvIHBlcsOtb2RvIGRlIHRlbXBvIChSYW5rZmxvdykuIEEgdmlzdWFsaXphw6fDo28gZm9pIGRlc2Vudm9sdmlkYSB1c2FuZG8gPGEgaHJlZj1cXFwiaHR0cHM6Ly9kM2pzLm9yZy9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5EMy5qczwvYT7CoGUgbW9zdHJhIHRvZG9zIG9zIHZpZGVvcyBxdWUgYWxjYW7Dp2FyYW0gcGVsbyBtZW5vcyBhIHF1aW50YSBwb3Npw6fDo28gbm8gcmFua2luZyBwYXJhIGNhZGEgdGVybW8gcGVzcXVpc2FkbyBlbSBxdWFscXVlciBkaWEgZG8gcGVyw61vZG8gb2JzZXJ2YWRvLiBBIGNvciBkZSBjYWRhIGxpbmhhIMOpIG1hcGVhZGEgcGFyYSByZXByZXNlbnRhciBvIGNhbmFsIGRlIG9yaWdlbSBkbyB2aWRlby4gQSBsYXJndXJhIGZ1bmNpb25hIGNvbW8gbyByZWZvcsOnbyB2aXN1YWwgcGFyYSBwYXJhIGluZGljYXIgYSBtZWxob3IgcG9zacOnw6NvIGFsY2Fuw6dhZGEgcGVsbyB2aWRlbyBubyBwZXLDrW9kbywgbWVkaWRvIHRhbXBlbSBubyBlaXhvIHZlcnRpY2FsIGRvIGdyw6FmaWNvLiBQYXNzZSBtb3VzZSBwb3IgY2ltYSBkZSBjYWRhIGxpbmhhIHBhcmEgcXVlIGVsYSBzZSBhY2VuZGEgZSBhcyBvdXRyYXMgc2UgYXBhZ3VlbS4gQ2xpcXVlIGVtIGNhZGEgdW1hIGRhcyBsaW5oYXMgcGFyYSBhYnJpYXIgdW0gamFuZWxhIGNvbSBpbmZvcm1hw6fDtWVzIHNvYnJlIG8gdmlkZW8sIGluY2x1aW5kbyB1bSB2aWRlbyBwbGF5IHBhcmEgYXNzaXN0aXIgbyB2aWRlbyBubyBjb250ZXh0LCBhc3NpbSBjb21vIGFzIG3DqXRyaWNhcyBiw6FzaWNhcyBkbyB2aWRlbyBhIGNhZGEgZGlhIChudW1lcm8gZGUgdmlzdWFsaXphw6fDo28sIFxcXCJnb3N0ZWlcXFwiLCBcXFwibsOjbyBnb3N0ZWlcXFwiLCByZWNvbWVuZGHDp8O1ZXMgZSBwb3Npw6fDo28gbm8gcmFua2luZykuPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdFx0PHA+QWNvbXBhbmhhbmRvIGVzc2EgdmlzdWFsaXphw6fDo28gaMOhIGRvaXMgb3V0cm9zIGdyw6FmaWNvcyBpbmRpY2FuZG8gb3MgZGV6IHZpZGVvcyBtYWlzIHZpc3RvcyBlIG9zIGRleiBjYW5haXMgY29tIG1haXMgdmlzdWFsaXphw6fDtWVzLiBQYXNzZSBvIG1vdXNlIHBvciBjaW1hIGRhcyBiYXJyYXMgZW0gdW0gZG9zIGdyw6FmaWNvcyBwYXJhIGFjZW5kZXIgYmFycmFzIGNvcnJlc3BvbmRlbnRlcyBuYXMgb3VyYXMgdmlzdWFsaXphw6fDtWVzLiBDbGlxdWUgZW0gdW0gZGFzIGJhcnJhcyBkb3MgZGV6IHZpZGVvcyBtYWlzIHZpc3RvcyBwYXJhIG9idGVyIG1haXMgaW5mb3JtYcOnw7Vlcy48L3A+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdFx0XHQ8cD5PIHJhbmtmbG93IHBlcm1pdGUgYW5hbGl6YXIgYSBldm9sdcOnw7VlcyBkZSB2aWRlbyBubyByYW5raW5nIHRoZSByZWNvbWVuZGHDp8O1ZXMsIGlkZW50aWZpY2FyIHRlbmRlbmNpYXMgZSBwYWRyw7VlcywgZSBvYnNlcnZhciBvIHF1ZSB0ZW0gc2lkbyByZWNvbWVuZGFkbyBwZWxvIGFsZ29yaXRtbyBkbyBZb3V0dWJlLiBFc3NlIHByb2pldG8gcGVybWl0ZSBvYnNlcnZhciBuw6NvIGFwZW5hcyBxdWFpcyBmb3JhbSBvcyB2aWRlb3MgbWFpcyByZWNvbWVuZGFkb3MsIHZpc3RvcyBlIGN1cnRpZG9zIHBhcmEgY2FkYSB0ZXJtbyBwZXNxdWlzYWRvLCBtYXMgdGFtYsOpbSBhanVkYSBhIGlkZW50aWZpY2FyIG9zIHByb2R1dG9yZXMgZGVzc2VzIHZpZGVvcyBlIGEgcmVkZSBkZSBjb25leMO1ZXMgZW50cmUgdmlkZW9zLCBwcm9kdXRvcmVzLCBlIGVzcGVjdGFkb3JlcyBuYXMgcmVkZXMgc29jaWFpcy4gSXNzbyB0YW1iw6ltIHBvZGUgbm9zIGRhciBhbGd1bWFzIHBpc3RhcyBzb2JyZSBvIGZ1bmNpb25hbWVudG8gZG8gc2lzdGVtYSBkZSByYW5xdWVhbWVudG8gdXNhZG8gbm8gWW91dHViZSwgYXNzaW0gY29tbyBxdWFpcyBvcyB2aWRlb3MgbWFpcyBwcm9lbWluZW50ZXMgZW0gdW0gdMOzcGljbyBlc3BlY2lmaWNvLCBlIHF1YWwgYSBuYXJyYXRpdmEgZXNzZSByYW5raW5nIHByb2R1eiBubyBkZWJhdGUgcG9sw610aWNvIG5vIEJyYXNpbCBlbSBwYXJ0aWN1bGFyLCBlIG5hcyByZWRlcyBzb2NpYWlzIGRlIGZvcm1hIG1haXMgZ2VyYWwuPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB1ay1zZWN0aW9uLXhzbWFsbCB1ay1zZWN0aW9uLW11dGVkIHRtLW1haW5cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstdGV4dC1zbWFsbCB1ay10ZXh0LW11dGVkXFxcIj5cXG4gICAgICAgIDxoMyBjbGFzcz1cXFwidWstaDMgdWstdGV4dC1jZW50ZXIgdWstbWFyZ2luLXNtYWxsLXRvcFxcXCI+PHNwYW4+e3t0aXRsZX19IDxhIGlkPVxcXCJtZXRob2RvbG9neS10b2dnbGUtaWNvblxcXCIgY2xhc3M9XFxcInVrLWljb24tbGlua1xcXCIgdWstaWNvbj1cXFwicGx1cy1jaXJjbGVcXFwiIHVrLXRvZ2dsZT1cXFwidGFyZ2V0OiAjbWV0aG9kb2xvZ3lcXFwiPjwvYT48L3NwYW4+PC9oMz5cXG4gICAgICAgIDxkaXYgaWQ9XFxcIm1ldGhvZG9sb2d5XFxcIiBjbGFzcz1cXFwidWstZ3JpZC1kaXZpZGVyIHVrLW1hcmdpbi1sYXJnZS10b3AgdWstbWFyZ2luLW1lZGl1bS1ib3R0b21cXFwiIHVrLWdyaWQgaGlkZGVuPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLTMtNUBtXFxcIj5cXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJ1ay1oNSB1ay10ZXh0LXVwcGVyY2FzZVxcXCI+Q29sZXRhIGRlIGRhZG9zPC9oNT5cXG4gICAgICAgICAgICAgICAgPHA+T3MgZGFkb3MgZGUgZGVzc2UgcHJvamV0byBmb3JhbSBjb2xldGFkb3MgZm9yYW0gY29sZXRhZG9zIHVzYW5kbyB1bSBzY3JpcHQgZW0gUHl0aG9uIGRlc2Vudm9sdmlkbyBwb3LCoDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9wbmJ0L1lvdVR1YmUtZXhwbG9yZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkd1aWxsYXVtZSBDaGFzbG90PC9hPsKgY29tbyBwYXJ0ZSB0byBwcm9qZXRvIEFsZ28gVHJhbnNwYXJlbmN5LiBPIGFsZ29yaXRobSBlbSBxdWVzdMOjbyBmYXogdW1hIGJ1c2NhIG5vIFlvdXR1YmUgdXNhbmRvIHVtYSBwYWxhdnJhLWNoYXZlIGRlZmluaWRhIHBlbG8gdXN1w6FyaW8gcGFyYSBjb2xldGFyIGUgYXJtYXplbmFyIGluZm9ybWHDp8O1ZXMgZG9zIHZpZGVvcyByZWxhY2lvbmFkb3Mgw6AgcGFsYXZyYS1jaGF2ZS4gTWFpcyBlc3BlY2lmaWNhbWVudGUgbsOzcyB1c2Ftb3Mgc2NyaXB0IHBhcmEgQSkgaWRlbnRpZmljYXIgb3MgcXVhdHJvIHByaW1laXJvcyByZXN1bHRhZG9zIGVuY29udHJhZG9zIG5hIHBlc3F1aXNhIG5vIFlvdXR1YmUgcGVsYSBwYWxhdnJhLWNoYXZlLCBCKSBvYnRlciBvcyBwcmltZWlyb3MgcXVhdHJvIHZpZGVvcyByZWxhY2lvbmFkb3MgYW8gcmVzdWx0YWRvcyBkYSBwZXNxdWlzYSwgQykgcmVwZXRpciBhIGV0YXBhIChCKSBxdWF0cm8gdmV6ZXMgc3VjZXNzaXZhbWVudGUgY29tIGNhZGEgdmlkZW8gb2J0aWRvIHBhcmEgY29sZXRhciB2aWRlb3MgcmVsYWNpb25hZG9zLCBlIEQpIGd1YXJkYXIgbyByZXN1bHRhZG8gZW0gYXJxdWl2byBKU09OLiBFc3NlIG9wZXJhw6fDo28gw6kgYW7DoWxvZ2EgYSB1bWEgcGVzc29hIGZhemVyIHVtYSBidXNjYSBwb3IgdW1hIHBhbGF2cmEtY2hhdmUgbm8gWW91dHViZSwgYWJyaXIgb3MgcHJpbWVpcm9zIHF1YXRybyB2aWRlb3MsIGUgbmEgc2VxdWVuY2lhIGNsaWNhciBub3MgcXVhdHJvIHByaW1laXJvcyB2aWRlb3MgcmVjb21lbmRhZG9zLCByZXBldGluZG8gZXNzZSBwcm9jZXNzbyBxdWF0cm8gdmV6ZXMgcGFyYSBjYWRhIHZpZGVvIHF1ZSBmb3IgYWJlcnRvLjwvcD5cXG4gICAgICAgICAgICAgICAgPHA+RXNzZSBhbGdvcml0bW8gbsOjbyB1c2EgYSBBUEkgcHVibGljYSBkbyBZb3V0dWJlLiBBbyBpbnbDqXMgZGlzc2UsIGVsZSBzaW11bGEgbyBhbWJpZW50ZSBkbyBuYXZlZ2Fkb3Igd2ViIHBhcmEgY29sZXRhciBvcyBlbGVtZW50b3MgKEhUTUwpcXVlIHPDo28gZGVzZW5oYWRvcyBuYXMgcMOhZ2luYXMgZGUgYnVzY2EgZSBkbyB2aXN1YWxpemHDp8OjbyBkZSB2aWRlbyBkbyBZb3V0dWJlIOKAlCB1bSBwcm9jZXNzbyBjb25oZWNpZG8gY29tbyBcXFwic2NyYXBpbmdcXFwiLiBFc3NlIHByb2Nlc3NvIGZheiBjb20gcXVlIGEgY29sZXRhIGRlIGRhZG9zIGZpcXVlIG1haXMgbmV1dHJhLCBldml0YW5kbyBwcmVmZXJlbmNpYXMgcGVzc29haXMgZSBwcmVjb25jZWl0b3Mgc29jaWFpcyBkZWZpbmlkYXMgaW5zY3JpdGFzIG5vIHBlcmZpbCBkbyB1c3XDoXJpby4gT3Ugc2VqYSwgbsOjbyBsZXZlIGVtIGNvbnNpZGVyYcOnw6NvIGFzIHByZWZlcmVuY2lhcyBkbyBwZXJmaWwgZG8gdXN1w6FyaW8gbm8gWW91dHViZSwgbyBoaXN0w7NyaWNvIGRvIG5hdmVnYWRvciwgY29va2llcywgZSBvdXRyb3MgZWxlbWVudG9zIHF1ZSBwb2RlbSBpbnRlcmZlcmlyIG5vIHJhbmtlYW1lbnRvIGdlcmFkbyBwZWxvIFlvdXR1YmUuIE5vIGVudGFudG8sIGlzc28gbsOjbyByZW1vdmUgb3V0cmFzIHZhcmnDoXZlaXMgcXVlIHBvc3NhbSBkaXN0b3JjZXIgb3UgZm9ybWF0YXIgbyByYW5raW5nLCBjb21vIGEgbG9jYWxpemHDp8OjbyBlIHNpc3RlbWEgZG8gY29tcHV0YWRvciBlbSBxdWUgYSBjb2xldGEgZm9pIGZlaXRhLCBhIGxpbmd1YSBlbSBxdWUgbyBzaXN0ZW1hIGVzdGEgY29uZmlndXJhZG8sIG91IHF1YWxxdWVyIG91dHJhIHZhcmnDoXZlbCBxdWUgZmHDp2EgcGFydGUgZG8gcHJvY2Vzc28gZGUgcmFucXVlYW1lbnRvIG7Do28gcmV2ZWxhZGEgcGVsbyBZb3V0dWJlLjwvcD5cXG4gICAgICAgICAgICAgICAgPHA+UGFyYSBlc3RhIHBlc3F1aXNhIG7Ds3MgY29sZXRhZG9zIHRlcm1vcyByZWxldmFudGVzIMOgcyBlbGVpw6fDtWVzIG5vIEJyYXNpbCwgbWFpcyBlc3BlY2lmaWNhbWVudGUgb3Mgbm9tZXMgZG9zIGNhbmRpZGF0b3MgZSB1bWEgdmFyaWHDp8OjbyBkbyBub21lIGRvIGNhbmRpZGF0byBhY3Jlc2NlbnRhZG8gZGEgcGFsYXZyYSBcXFwicHJlc2lkZW50ZVxcXCIuIENvbGV0YWRvcyBhcyBpbmZvcm1hw6fDtWVzIGRvcyB2aWRlb3MgZG9zIHByaW5jaXBhaXMgY2FuZGlkYXRvcywgYSBzYWJlcjogTHVsYSwgRmVybmFuZG8gSGFkZGFkLCBHZXJhbGRvIEFsY2ttaW4sIEphaXIgQm9sc29uYXJvLCBHdWlsaGVybWUgQm91bG9zLCBDaXJvIEdvbWVzLCBNYXJpbmEgU2lsdmEsIEhlbnJpcXVlIE1laXJlbGVzLCBlIEpvw6NvIEFtb8OqZG8gKGFjcmVzY2VudGFkbyDDoCBsaXN0YSBubyBkaWEgNSBkZSBzZXRlbWJybyBkZSAyMDE4KS4gQ29sZXRhbW9zIGFpbmRhIGluZm9ybWHDp8O1ZXMgZG8gdmlkZW9zIHJlbGFjaW9uYWRvcyBhcyBwYWxhdnJhcy1jaGF2ZXMgXFxcIkVsZWnDp8O1ZXMgMjAxOFxcXCIgZSBcXFwiQnJhemlsIEVsZWN0aW9uc1xcXCIuIEEgY29sZXRhIGRvcyBkYWRvcyBmb2kgZmVpdGEgdXNhbmRvIHVtYSB2ZXogYW8gZGlhLCBhcGVuYXMgcG9yIHVtIGNvbXB1dGFkb3IgKEFwcGxlKSBsb2NhbGl6YWRvIGVtIE1vbnRyZWFsLCBDYW5hZGEsIGVudHJlIG9zIGRpYSAyMyBkZSBhZ29zdG8gZGUgMjAxOCBlIDEwIGRlIG91dHVicm8gZGUgMjAxOCwgZW50cmUgMTkgZSAyMCBob3JhcyAoaG9yw6FyaW8gZGUgQnJhc8OtbGlhKS48L3A+XFxuICAgICAgICAgICAgICAgIDxwPkNhZGEgY29sZXRhIGRpw6FyaWEgcHJvZHV6aXUgdW0gYXJxdWl2byBwYXJhIGNhZGEgdGVybW8gcGVzcXVpc2Fkby4gT3MgYXJxdWl2b3MgZGUgY2FkYSB0ZXJtbyBmb3JhbSBjb21iaW5hZG9zIGUgcmVlc3RydXR1cmFkb3MgZW0gdW0gw7puaWNvIGRhdGFzZXQgcGFyYSBnZXJhciBpbmZvcm1hw6fDtWVzIGNvbW8gbyBudW1lcm8gdG90YWwgZGUgdmV6ZXMgcXVlIHVtIHZpZGVvIGZvciByZWNvbWVuZGFkbyBubyBwZXLDrW9kbyBhZmltIGRlIHNlciB1c2Fkb3MgbmEgcHJvZHXDp8OjbyBkYSB2aXN1YWxpemHDp8OjbyBwcm9wb3N0YSBuZXN0ZSBwcm9qZXRvLjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay13aWR0aC0yLTVAbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwidWstaDUgdWstdGV4dC11cHBlcmNhc2VcXFwiPlJhbmtmbG93PC9oNT5cXG5cXHRcXHRcXHRcXHQ8cD5JbnNwaXJhZG8gbm8gdHJhYmFsaG8gZGXCoDxhIGhyZWY9XFxcImh0dHA6Ly9sYWJzLnBvbHN5cy5uZXQvdG9vbHMvcmFua2Zsb3cvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+QmVybmhhcmQgUmllZGVyPC9hPiwgbsOzcyBkZXNlbnZvbHZlbW9zIHVtYSB2aXN1YWxpemHDp8OjbyBxdWUgbW9zdHJhIG8gcmFua2luZyBkb3MgdmlkZW9zIG1haXMgcmVjb21lbmRhZG9zIHBvciBkaWEgZW0gdW0gY2VydG8gcGVyw61vZG8gZGUgdGVtcG8gKFJhbmtmbG93KS4gQSB2aXN1YWxpemHDp8OjbyBmb2kgZGVzZW52b2x2aWRhIHVzYW5kbyA8YSBocmVmPVxcXCJodHRwczovL2QzanMub3JnL1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkQzLmpzPC9hPsKgZSBtb3N0cmEgdG9kb3Mgb3MgdmlkZW9zIHF1ZSBhbGNhbsOnYXJhbSBwZWxvIG1lbm9zIGEgcXVpbnRhIHBvc2nDp8OjbyBubyByYW5raW5nIHBhcmEgY2FkYSB0ZXJtbyBwZXNxdWlzYWRvIGVtIHF1YWxxdWVyIGRpYSBkbyBwZXLDrW9kbyBvYnNlcnZhZG8uIEEgY29yIGRlIGNhZGEgbGluaGEgw6kgbWFwZWFkYSBwYXJhIHJlcHJlc2VudGFyIG8gY2FuYWwgZGUgb3JpZ2VtIGRvIHZpZGVvLiBBIGxhcmd1cmEgZnVuY2lvbmEgY29tbyBvIHJlZm9yw6dvIHZpc3VhbCBwYXJhIHBhcmEgaW5kaWNhciBhIG1lbGhvciBwb3Npw6fDo28gYWxjYW7Dp2FkYSBwZWxvIHZpZGVvIG5vIHBlcsOtb2RvLCBtZWRpZG8gdGFtcGVtIG5vIGVpeG8gdmVydGljYWwgZG8gZ3LDoWZpY28uIFBhc3NlIG1vdXNlIHBvciBjaW1hIGRlIGNhZGEgbGluaGEgcGFyYSBxdWUgZWxhIHNlIGFjZW5kYSBlIGFzIG91dHJhcyBzZSBhcGFndWVtLiBDbGlxdWUgZW0gY2FkYSB1bWEgZGFzIGxpbmhhcyBwYXJhIGFicmlhciB1bSBqYW5lbGEgY29tIGluZm9ybWHDp8O1ZXMgc29icmUgbyB2aWRlbywgaW5jbHVpbmRvIHVtIHZpZGVvIHBsYXkgcGFyYSBhc3Npc3RpciBvIHZpZGVvIG5vIGNvbnRleHQsIGFzc2ltIGNvbW8gYXMgbcOpdHJpY2FzIGLDoXNpY2FzIGRvIHZpZGVvIGEgY2FkYSBkaWEgKG51bWVybyBkZSB2aXN1YWxpemHDp8OjbywgXFxcImdvc3RlaVxcXCIsIFxcXCJuw6NvIGdvc3RlaVxcXCIsIHJlY29tZW5kYcOnw7VlcyBlIHBvc2nDp8OjbyBubyByYW5raW5nKS48L3A+XFxuXFx0XFx0XFx0XFx0PHA+QWNvbXBhbmhhbmRvIGVzc2EgdmlzdWFsaXphw6fDo28gaMOhIGRvaXMgb3V0cm9zIGdyw6FmaWNvcyBpbmRpY2FuZG8gb3MgZGV6IHZpZGVvcyBtYWlzIHZpc3RvcyBlIG9zIGRleiBjYW5haXMgY29tIG1haXMgdmlzdWFsaXphw6fDtWVzLiBQYXNzZSBvIG1vdXNlIHBvciBjaW1hIGRhcyBiYXJyYXMgZW0gdW0gZG9zIGdyw6FmaWNvcyBwYXJhIGFjZW5kZXIgYmFycmFzIGNvcnJlc3BvbmRlbnRlcyBuYXMgb3VyYXMgdmlzdWFsaXphw6fDtWVzLiBDbGlxdWUgZW0gdW0gZGFzIGJhcnJhcyBkb3MgZGV6IHZpZGVvcyBtYWlzIHZpc3RvcyBwYXJhIG9idGVyIG1haXMgaW5mb3JtYcOnw7Vlcy48L3A+XFxuXFx0XFx0XFx0XFx0PHA+TyByYW5rZmxvdyBwZXJtaXRlIGFuYWxpemFyIGEgZXZvbHXDp8O1ZXMgZGUgdmlkZW8gbm8gcmFua2luZyB0aGUgcmVjb21lbmRhw6fDtWVzLCBpZGVudGlmaWNhciB0ZW5kZW5jaWFzIGUgcGFkcsO1ZXMsIGUgb2JzZXJ2YXIgbyBxdWUgdGVtIHNpZG8gcmVjb21lbmRhZG8gcGVsbyBhbGdvcml0bW8gZG8gWW91dHViZS4gRXNzZSBwcm9qZXRvIHBlcm1pdGUgb2JzZXJ2YXIgbsOjbyBhcGVuYXMgcXVhaXMgZm9yYW0gb3MgdmlkZW9zIG1haXMgcmVjb21lbmRhZG9zLCB2aXN0b3MgZSBjdXJ0aWRvcyBwYXJhIGNhZGEgdGVybW8gcGVzcXVpc2FkbywgbWFzIHRhbWLDqW0gYWp1ZGEgYSBpZGVudGlmaWNhciBvcyBwcm9kdXRvcmVzIGRlc3NlcyB2aWRlb3MgZSBhIHJlZGUgZGUgY29uZXjDtWVzIGVudHJlIHZpZGVvcywgcHJvZHV0b3JlcywgZSBlc3BlY3RhZG9yZXMgbmFzIHJlZGVzIHNvY2lhaXMuIElzc28gdGFtYsOpbSBwb2RlIG5vcyBkYXIgYWxndW1hcyBwaXN0YXMgc29icmUgbyBmdW5jaW9uYW1lbnRvIGRvIHNpc3RlbWEgZGUgcmFucXVlYW1lbnRvIHVzYWRvIG5vIFlvdXR1YmUsIGFzc2ltIGNvbW8gcXVhaXMgb3MgdmlkZW9zIG1haXMgcHJvZW1pbmVudGVzIGVtIHVtIHTDs3BpY28gZXNwZWNpZmljbywgZSBxdWFsIGEgbmFycmF0aXZhIGVzc2UgcmFua2luZyBwcm9kdXogbm8gZGViYXRlIHBvbMOtdGljbyBubyBCcmFzaWwgZW0gcGFydGljdWxhciwgZSBuYXMgcmVkZXMgc29jaWFpcyBkZSBmb3JtYSBtYWlzIGdlcmFsLjwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIiwgSCk7cmV0dXJuIFQucmVuZGVyLmFwcGx5KFQsIGFyZ3VtZW50cyk7IH07IiwiaW1wb3J0IFVJa2l0IGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQubWluJztcbmltcG9ydCBtZXRob2RvbG9neU11c3RhY2hlIGZyb20gJy4vbWV0aG9kb2xvZ3kuaHRtbCc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1ldGhvZG9sb2d5KGFwcCkge1xuXHR0aGlzLmFwcCA9IGFwcDtcblx0dGhpcy5zaG93TWV0aG9kb2xvZ3kgPSBmYWxzZTtcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXHRcdC8vIGRhdGFcblx0XHRjb25zdCBwYWdlRGF0YSA9IHtcblx0XHRcdHRpdGxlOiAnTWV0b2RvbG9naWEnLFxuXHRcdFx0ZGF0YTogJ0RhdGEgQ29sbGVjdGlvbicsXG5cdFx0fTtcblxuXHRcdC8vIGJ1aWQgcGFnZVxuXHRcdGNvbnN0IGh0bWwgPSBtZXRob2RvbG9neU11c3RhY2hlKHBhZ2VEYXRhKTtcblx0XHRzZWxlY3QoJyNhcHAnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywnbWV0aG9kb2xvZ3ktc2VjdGlvbicpO1xuXHRcdHNlbGVjdCgnI21ldGhvZG9sb2d5LXNlY3Rpb24nKS5odG1sKGh0bWwpO1xuXG5cdFx0c2VsZWN0KCcjbWV0aG9kb2xvZ3ktc2VjdGlvbicpLm9uKCdjbGljaycsIHRoaXMudG9nZ2xlTWV0aG9kb2xvZ3kpO1xuXG5cdH07XG5cblx0dGhpcy50b2dnbGVNZXRob2RvbG9neSA9IGZ1bmN0aW9uIHRvZ2dsZU1ldGhvZG9sb2d5KCkge1xuXHRcdHRoaXMuc2hvd01ldGhvZG9sb2d5ID0gIXRoaXMuc2hvd01ldGhvZG9sb2d5O1xuXG5cdFx0bGV0IGljb247XG5cblx0XHRpZiAodGhpcy5zaG93TWV0aG9kb2xvZ3kpIHtcblx0XHRcdGljb24gPSAnbWludXMtY2lyY2xlJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWNvbiA9ICdwbHVzLWNpcmNsZSc7XG5cdFx0fVxuXG5cdFx0VUlraXQuaWNvbignI21ldGhvZG9sb2d5LXRvZ2dsZS1pY29uJywge1xuXHRcdFx0aWNvbjogYCR7aWNvbn1gLFxuXHRcdH0pO1xuXHR9O1xufSIsInZhciBIID0gcmVxdWlyZShcImhvZ2FuLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdmFyIFQgPSBuZXcgSC5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB1ay1zZWN0aW9uLXhzbWFsbCB0bS1tYWluXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1leHBhbmRcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGgyIGNsYXNzPVxcXCJ1ay1oMiB1ay10ZXh0LWNlbnRlclxcXCI+XCIpO3QuYih0LnYodC5mKFwidGl0bGVcIixjLHAsMCkpKTt0LmIoXCI8L2gyPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstdGV4dC1jZW50ZXJcXFwiIHVrLWdyaWQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtYXV0b1xcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtZXhwYW5kXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BpbmVyXFxcIiB1ay1zcGlubmVyPVxcXCJyYXRpbzogMVxcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInJhbmtmbG93LXBhbmVsXFxcIiBjbGFzcz1cXFwidWstcGFuZWwgdWstb3ZlcmZsb3ctYXV0b1xcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJ2aXN1YWxpemF0aW9uXFxcIj48L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImhvcml6b250YWwtc2Nyb2xsLWhpbnRcXFwiIGNsYXNzPVxcXCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLW1lZGl1bS10b3BcXFwiIGhpZGRlbj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHVrLWljb249XFxcImNoZXZyb24tbGVmdFxcXCI+PC9zcGFuPiBcIik7dC5iKHQudih0LmYoXCJzY3JvbGxUZXh0XCIsYyxwLDApKSk7dC5iKFwiIDxzcGFuIHVrLWljb249XFxcImNoZXZyb24tcmlnaHRcXFwiPjwvc3Bhbj48L3A+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJtb2RhbC12aWRlby1kZXRhaWxzXFxcIiB1ay1tb2RhbD48L2Rpdj5cIik7dC5iKFwiXFxuXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtYXV0b1xcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiPC9kaXY+XCIpO3JldHVybiB0LmZsKCk7IH0scGFydGlhbHM6IHt9LCBzdWJzOiB7ICB9fSwgXCI8ZGl2IGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHVrLXNlY3Rpb24teHNtYWxsIHRtLW1haW5cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLWV4cGFuZFxcXCI+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcInVrLWgyIHVrLXRleHQtY2VudGVyXFxcIj57e3RpdGxlfX08L2gyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstdGV4dC1jZW50ZXJcXFwiIHVrLWdyaWQ+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtYXV0b1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtZXhwYW5kXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BpbmVyXFxcIiB1ay1zcGlubmVyPVxcXCJyYXRpbzogMVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInJhbmtmbG93LXBhbmVsXFxcIiBjbGFzcz1cXFwidWstcGFuZWwgdWstb3ZlcmZsb3ctYXV0b1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJ2aXN1YWxpemF0aW9uXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImhvcml6b250YWwtc2Nyb2xsLWhpbnRcXFwiIGNsYXNzPVxcXCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLW1lZGl1bS10b3BcXFwiIGhpZGRlbj5cXG4gICAgICAgICAgICAgICAgICAgIDxwPjxzcGFuIHVrLWljb249XFxcImNoZXZyb24tbGVmdFxcXCI+PC9zcGFuPiB7e3Njcm9sbFRleHR9fSA8c3BhbiB1ay1pY29uPVxcXCJjaGV2cm9uLXJpZ2h0XFxcIj48L3NwYW4+PC9wPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwibW9kYWwtdmlkZW8tZGV0YWlsc1xcXCIgdWstbW9kYWw+PC9kaXY+XFxuXFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtYXV0b1xcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIsIEgpO3JldHVybiBULnJlbmRlci5hcHBseShULCBhcmd1bWVudHMpOyB9OyIsImltcG9ydCBVSWtpdCBmcm9tICd1aWtpdC9kaXN0L2pzL3Vpa2l0Lm1pbic7XG5pbXBvcnQgcmFua2Zsb3dNdXN0YWNoZSBmcm9tICcuL3JhbmtmbG93Lmh0bWwnO1xuaW1wb3J0IHJhbmtmbG93VmlzIGZyb20gJy4vUmFua2Zsb3dWaXMnO1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbi9kaXN0L2QzLXNlbGVjdGlvbi5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSYW5rZmxvdyhhcHApIHtcblx0dGhpcy5hcHAgPSBhcHA7XG5cdHRoaXMudmlzO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0Ly8gZGF0YVxuXHRcdHRoaXMucGFnZURhdGEgPSB7XG5cdFx0XHR0aXRsZTogJ1ZpZGVvcyBtYWlzIHJlY29tZW5kYWRvcyBubyBwZXLDrW9kbycsXG5cdFx0XHRzaG93U2Nyb2xsSGludDogZmFsc2UsXG5cdFx0XHRzY3JvbGxUZXh0OiAnUm9sZSdcblx0XHR9O1xuXG5cdFx0Ly8gYnVpZCBwYWdlXG5cdFx0Y29uc3QgaHRtbCA9IHJhbmtmbG93TXVzdGFjaGUodGhpcy5wYWdlRGF0YSk7XG5cdFx0c2VsZWN0KCcjYXBwJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3JhbmtmbG93LXNlY3Rpb24nKTtcblx0XHRzZWxlY3QoJyNyYW5rZmxvdy1zZWN0aW9uJykuaHRtbChodG1sKTtcblxuXHRcdFVJa2l0LnRvZ2dsZShzZWxlY3QoJyNob3Jpem9udGFsLXNjcm9sbC1oaW50JyksIHtcblx0XHRcdG1vZGU6ICdtZWRpYScsXG5cdFx0XHRhbmltYXRpb246ICd1ay1hbmltYXRpb24tZmFkZSx1ay1hbmltYXRpb24tZmFkZSdcblx0XHR9KTtcblx0XHRcblx0XHR0aGlzLnZpcyA9IG5ldyByYW5rZmxvd1Zpcyh0aGlzLmFwcCk7XG5cdFx0dGhpcy52aXMuaW5pdCgpO1xuXHR9O1xuXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRzZWxlY3QoJyNyYW5rZmxvdy1zZWN0aW9uJykuc2VsZWN0KCcuc3BpbmVyJykuaGlkZSgpO1xuXHRcdHRoaXMudmlzLnVwZGF0ZShkYXRhKTtcblx0fTtcblxuXHR0aGlzLmxvYWRpbmcgPSBmdW5jdGlvbigpIHtcblx0XHRzZWxlY3QoJyNyYW5rZmxvdy1zZWN0aW9uJykuc2VsZWN0KCcuc3BpbmVyJykuc2hvdygpO1xuXHRcdHRoaXMudmlzLmV4aXQoKTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9uID0gZnVuY3Rpb24gKGlkLCBzb3VyY2VUeXBlKSB7XG5cdFx0dGhpcy52aXMuaGlnaGxpZ2h0T24oaWQsIHNvdXJjZVR5cGUpO1xuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0T2ZmID0gZnVuY3Rpb24gKHlvdXR1YmVJRCkge1xuXHRcdHRoaXMudmlzLmhpZ2hsaWdodE9mZih5b3V0dWJlSUQpO1xuXHR9O1xuXG59IiwidmFyIEggPSByZXF1aXJlKFwiaG9nYW4uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB2YXIgVCA9IG5ldyBILlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJ0bS1zaWRlYmFyLWxlZnRcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0PGRpdiBpZD1cXFwibWFpbi1tZW51XFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PHVsIGNsYXNzPVxcXCJ1ay1uYXYgdWstbmF2LWRlZmF1bHRcXFwiIHVrLXN3aXRjaGVyPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ1ay10ZXh0LWxlYWRcXFwiPlwiKTt0LmIodC52KHQuZihcInRlcm1zVGl0bGVcIixjLHAsMCkpKTt0LmIoXCI8L3A+XCIpO3QuYihcIlxcblwiICsgaSk7aWYodC5zKHQuZihcInRlcm1zXCIsYyxwLDEpLGMscCwwLDE3OCwyNTIsXCJ7eyB9fVwiKSl7dC5ycyhjLHAsZnVuY3Rpb24oYyxwLHQpe3QuYihcIlx0XHRcdDxsaT48YSBvbmNsaWNrPVxcXCJzZWxlY3RUZXJtKCdcIik7dC5iKHQudih0LmYoXCJzbHVnXCIsYyxwLDApKSk7dC5iKFwiJylcXFwiPlwiKTt0LmIodC52KHQuZihcIm5hbWVcIixjLHAsMCkpKTt0LmIoXCI8L2E+PC9saT5cIik7dC5iKFwiXFxuXCIgKyBpKTt9KTtjLnBvcCgpO310LmIoXCJcdFx0PC91bD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8ZGl2IGlkPVxcXCJmb290ZXItc2VjdGlvblxcXCIgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstc2VjdGlvbi14c21hbGxcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtc21hbGwgdWstdGV4dC1jZW50ZXJcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdDxociBjbGFzcz1cXFwidWstZGl2aWRlci1zbWFsbFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdFx0PHAgY2xhc3M9XFxcInVrLXRleHQtbXV0ZWRcXFwiPkRldmVsb3BlZCBieTxici8+PGEgaHJlZj1cXFwiaHR0cHM6Ly9sdWNpYW5vLmZsdXhvLmFydC5iclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJ1ay1saW5rLXRleHRcXFwiPkx1Y2lhbm8gRnJpenplcmE8L2E+PC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidG0tc2lkZWJhci1sZWZ0XFxcIj5cXG5cXHQ8ZGl2IGlkPVxcXCJtYWluLW1lbnVcXFwiPlxcblxcdFxcdDx1bCBjbGFzcz1cXFwidWstbmF2IHVrLW5hdi1kZWZhdWx0XFxcIiB1ay1zd2l0Y2hlcj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidWstdGV4dC1sZWFkXFxcIj57e3Rlcm1zVGl0bGV9fTwvcD5cXG4gICAgICAgICAgICB7eyN0ZXJtc319XFxuXFx0XFx0XFx0PGxpPjxhIG9uY2xpY2s9XFxcInNlbGVjdFRlcm0oJ3t7c2x1Z319JylcXFwiPnt7bmFtZX19PC9hPjwvbGk+XFxuICAgICAgICAgICAge3svdGVybXN9fVxcblxcdFxcdDwvdWw+XFxuXFx0PC9kaXY+XFxuXFx0XFxuXFx0PGRpdiBpZD1cXFwiZm9vdGVyLXNlY3Rpb25cXFwiIGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHVrLXNlY3Rpb24teHNtYWxsXFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtc21hbGwgdWstdGV4dC1jZW50ZXJcXFwiPlxcblxcdFxcdFxcdDxociBjbGFzcz1cXFwidWstZGl2aWRlci1zbWFsbFxcXCI+XFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcInVrLXRleHQtbXV0ZWRcXFwiPkRldmVsb3BlZCBieTxici8+PGEgaHJlZj1cXFwiaHR0cHM6Ly9sdWNpYW5vLmZsdXhvLmFydC5iclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJ1ay1saW5rLXRleHRcXFwiPkx1Y2lhbm8gRnJpenplcmE8L2E+PC9wPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCJpbXBvcnQgc2lkZWJhck11c3RhY2hlIGZyb20gJy4vc2lkZWJhci5odG1sJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24vZGlzdC9kMy1zZWxlY3Rpb24ubWluJztcblxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2FwcCc7XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG5cblx0Y29uc3QgcGFnZURhdGEgPSB7XG5cdFx0dGVybXNUaXRsZTogY29uZmlnLm1ldGEudGVybXNUaXRsZSxcblx0XHR0ZXJtczogY29uZmlnLnRlcm1zXG5cdH07XG5cblx0Ly8gYnVpZCBwYWdlXG5cdGNvbnN0IGh0bWwgPSBzaWRlYmFyTXVzdGFjaGUocGFnZURhdGEpO1xuXHRzZWxlY3QoJyNhcHAnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywndG0tc2lkZWJhci1sZWZ0Jyk7XG5cdHNlbGVjdCgnI3RtLXNpZGViYXItbGVmdCcpLmh0bWwoaHRtbCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0VGVybSA9IHRlcm0gPT4ge1xuXG5cdGNvbnNvbGUubG9nKCdvaScpO1xuXHRcblx0Ly8gY29uc3Qgc2VsZWN0ZWRUZXJtID0gY29uZmlnLnRlcm1zLmZpbmQodCA9PiB0LnNsdWcgPT09IHRlcm0pO1xuXG5cdC8vIC8vIERpc3BhdGNoIHRoZSBldmVudC5cblx0Ly8gY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ3NlbGVjdFRlcm0nLCBzZWxlY3RlZFRlcm0pO1xuXHQvLyB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGluaXQsXG5cdHNlbGVjdFRlcm1cbn07IiwidmFyIEggPSByZXF1aXJlKFwiaG9nYW4uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB2YXIgVCA9IG5ldyBILlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8IS0tIDxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdG0tbWFpblxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLWNvbnRhaW5lclxcXCI+IC0tPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGgyIGNsYXNzPVxcXCJ1ay1oMiB1ay10ZXh0LWNlbnRlclxcXCI+XCIpO3QuYih0LnYodC5mKFwidGl0bGVcIixjLHAsMCkpKTt0LmIoXCI8L2gyPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstdGV4dC1zbWFsbFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BpbmVyIHVrLXBvc2l0aW9uLWFic29sdXRlIHVrLXRyYW5zZm9ybS1jZW50ZXIgdWstbWFyZ2luLWxhcmdlLWJvdHRvbVxcXCIgdWstc3Bpbm5lcj1cXFwicmF0aW86IDFcXFwiPjwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInRvcC1jaGFubmVsc1xcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPCEtLSA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGhyPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PiAtLT5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjwhLS0gPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB0bS1tYWluXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyXFxcIj4gLS0+XFxuICAgICAgICA8aDIgY2xhc3M9XFxcInVrLWgyIHVrLXRleHQtY2VudGVyXFxcIj57e3RpdGxlfX08L2gyPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstdGV4dC1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BpbmVyIHVrLXBvc2l0aW9uLWFic29sdXRlIHVrLXRyYW5zZm9ybS1jZW50ZXIgdWstbWFyZ2luLWxhcmdlLWJvdHRvbVxcXCIgdWstc3Bpbm5lcj1cXFwicmF0aW86IDFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgaWQ9XFxcInRvcC1jaGFubmVsc1xcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPCEtLSA8L2Rpdj5cXG4gICAgPGhyPlxcbjwvZGl2PiAtLT5cIiwgSCk7cmV0dXJuIFQucmVuZGVyLmFwcGx5KFQsIGFyZ3VtZW50cyk7IH07IiwiaW1wb3J0IHRvcGNoYW5uZWxzTXVzdGFjaGUgZnJvbSAnLi90b3BjaGFubmVscy5odG1sJztcbmltcG9ydCB0b3BDaGFubmVsc1ZpcyBmcm9tICcuL1RvcENoYW5uZWxzVmlzJztcblxuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbi9kaXN0L2QzLXNlbGVjdGlvbi5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3B2aWRlb3MoYXBwKSB7XG5cdHRoaXMuYXBwID0gYXBwO1xuXHR0aGlzLnZpcztcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXHRcdC8vIGRhdGFcblx0XHRjb25zdCBwYWdlRGF0YSA9IHtcblx0XHRcdHRpdGxlOiAnQ2FuYWlzIG1haXMgcmVjb21lbmRhZG9zJyxcblx0XHR9O1xuXG5cdFx0Ly8gYnVpZCBwYWdlXG5cdFx0Y29uc3QgaHRtbCA9IHRvcGNoYW5uZWxzTXVzdGFjaGUocGFnZURhdGEpO1xuXHRcdHNlbGVjdCgnI2NoYW5uZWxzJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3RvcGNoYW5uZWxzLXNlY3Rpb24nKTtcblx0XHRzZWxlY3QoJyN0b3BjaGFubmVscy1zZWN0aW9uJykuaHRtbChodG1sKTtcblxuXHRcdHRoaXMudmlzID0gbmV3IHRvcENoYW5uZWxzVmlzKHRoaXMuYXBwKTtcblx0XHR0aGlzLnZpcy5pbml0KCk7XG5cdH07XG5cblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdHNlbGVjdCgnI3RvcGNoYW5uZWxzLXNlY3Rpb24nKS5zZWxlY3QoJy5zcGluZXInKS5oaWRlKCk7XG5cdFx0dGhpcy52aXMudXBkYXRlKGRhdGEpO1xuXHR9O1xuXG5cdHRoaXMubG9hZGluZyA9IGZ1bmN0aW9uKCkge1xuXHRcdHNlbGVjdCgnI3RvcGNoYW5uZWxzLXNlY3Rpb24nKS5zZWxlY3QoJy5zcGluZXInKS5zaG93KCk7XG5cdFx0dGhpcy52aXMuZXhpdCgpO1xuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0T24gPSBmdW5jdGlvbiAoY2hhbm5lbE5hbWUpIHtcblx0XHR0aGlzLnZpcy5oaWdobGlnaHRPbihjaGFubmVsTmFtZSk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPZmYgPSBmdW5jdGlvbiAoY2hhbm5lbE5hbWUpIHtcblx0XHR0aGlzLnZpcy5oaWdobGlnaHRPZmYoY2hhbm5lbE5hbWUpO1xuXHR9O1xufSIsInZhciBIID0gcmVxdWlyZShcImhvZ2FuLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdmFyIFQgPSBuZXcgSC5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB1ay1zZWN0aW9uLXhzbWFsbCB1ay1iYWNrZ3JvdW5kLW11dGVkIHVrLXBhZGRpbmctcmVtb3ZlLXRvcCB1ay1wYWRkaW5nLXJlbW92ZS1ib3R0b20gdWstYm94LXNoYWRvdy1zbWFsbCB0bS1tYWluXFxcIiB1ay1zdGlja3k9XFxcIm1lZGlhOjY0MFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLWV4cGFuZCB1ay10ZXh0LWNlbnRlclxcXCI+XCIpO3QuYihcIlxcblwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8ZGl2IGlkPVxcXCJzbWFsbC10aXRsZVxcXCIgY2xhc3M9XFxcInVrLWNsZWFyLWZpeCB1ay1tYXJnaW4tdG9wXFxcIiBoaWRkZW4+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdFx0PGg0IGNsYXNzPVxcXCJ1ay1oNCB1ay1tYXJnaW4tcmVtb3ZlLWJvdHRvbVxcXCI+XCIpO3QuYih0LnYodC5mKFwidGl0bGVcIixjLHAsMCkpKTt0LmIoXCI6IFwiKTt0LmIodC52KHQuZihcInN1YnRpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9oND5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGRpdiBpZD1cXFwiY3VycmVudC12aWV3XFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHQ8cCBjbGFzcz1cXFwidWstbWFyZ2luLXRvcCB1ay10ZXh0LWxlYWRcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgXCIpO3QuYih0LnYodC5mKFwiY3VycmVudFRlcm1cIixjLHAsMCkpKTt0LmIoXCIgfCBcIik7dC5iKHQudih0LmYoXCJjdXJyZW50UGVyaW9kXCIsYyxwLDApKSk7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHQ8L3A+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiPC9kaXY+XCIpO3JldHVybiB0LmZsKCk7IH0scGFydGlhbHM6IHt9LCBzdWJzOiB7ICB9fSwgXCI8ZGl2IGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHVrLXNlY3Rpb24teHNtYWxsIHVrLWJhY2tncm91bmQtbXV0ZWQgdWstcGFkZGluZy1yZW1vdmUtdG9wIHVrLXBhZGRpbmctcmVtb3ZlLWJvdHRvbSB1ay1ib3gtc2hhZG93LXNtYWxsIHRtLW1haW5cXFwiIHVrLXN0aWNreT1cXFwibWVkaWE6NjQwXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLWV4cGFuZCB1ay10ZXh0LWNlbnRlclxcXCI+XFxuXFxuXFx0XFx0PGRpdiBpZD1cXFwic21hbGwtdGl0bGVcXFwiIGNsYXNzPVxcXCJ1ay1jbGVhci1maXggdWstbWFyZ2luLXRvcFxcXCIgaGlkZGVuPlxcblxcdFxcdFxcdDxoNCBjbGFzcz1cXFwidWstaDQgdWstbWFyZ2luLXJlbW92ZS1ib3R0b21cXFwiPnt7dGl0bGV9fToge3tzdWJ0aXRsZX19PC9oND5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHRcXG5cXHRcXHQ8ZGl2IGlkPVxcXCJjdXJyZW50LXZpZXdcXFwiPlxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJ1ay1tYXJnaW4tdG9wIHVrLXRleHQtbGVhZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7e2N1cnJlbnRUZXJtfX0gfCB7e2N1cnJlbnRQZXJpb2R9fVxcblxcdFxcdFxcdDwvcD5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cIiwgSCk7cmV0dXJuIFQucmVuZGVyLmFwcGx5KFQsIGFyZ3VtZW50cyk7IH07IiwiLy9tb2R1bGVzXG5pbXBvcnQgVUlraXQgZnJvbSAndWlraXQvZGlzdC9qcy91aWtpdC5taW4nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL3B0LWJyJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1jYSc7XG5pbXBvcnQgdG9wbWVudU11c3RhY2hlIGZyb20gJy4vdG9wbWVudS5odG1sJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24vZGlzdC9kMy1zZWxlY3Rpb24ubWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wbWVudShhcHApIHtcblx0dGhpcy5hcHAgPSBhcHA7XG5cblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcblxuXHRcdG1vbWVudC5sb2NhbGUoJ3B0LWJyJyk7XG5cdFx0XG5cdFx0Y29uc3Qgc3RhcnREYXRlID0gbW9tZW50KHRoaXMuYXBwLnBlcmlvZC5zdGFydCkubG9jYWxlKCdwdCcpLmZvcm1hdCgnREQgW2RlXSBNTU1NJyk7XG5cdFx0Y29uc3QgZW5kRGF0ZSA9IG1vbWVudCh0aGlzLmFwcC5wZXJpb2QuZW5kKS5sb2NhbGUoJ3B0JykuZm9ybWF0KCdERCBbZGVdIE1NTU0nKTtcblxuXHRcdC8vIGNvbnN0IHN0YXJ0RGF0ZUxvY2FsZSA9IHRoaXMuYXBwLnBlcmlvZC5zdGFydC5sb2NhbGUoJ3B0JykuZm9ybWF0KCdERCBNTU1NJyk7XG5cdFx0Ly8gY29uc3QgZW5kRGF0ZUxvY2FsZSA9IHRoaXMuYXBwLnBlcmlvZC5lbmQubG9jYWxlKCdwdCcpLmZvcm1hdCgnREQgTU1NTScpO1xuXG5cdFx0Ly8gZGF0YVxuXHRcdHRoaXMucGFnZURhdGEgPSB7XG5cdFx0XHR0aXRsZTogJ0VsZWnDp8O1ZXMgQnJhc2lsIDIwMTgnLFxuXHRcdFx0c3VidGl0bGU6ICdSYW5rRmxvdyBkYXMgUmVjb21lbmRhw6fDtWVzIGRvIFlvdVR1YmUnLFxuXHRcdFx0Y3VycmVudFRlcm06IHRoaXMuYXBwLnNlbGVjdGVkVGVybS5uYW1lLFxuXHRcdFx0Y3VycmVudFBlcmlvZDogYCR7c3RhcnREYXRlfSBhICR7ZW5kRGF0ZX1gLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gdG9wbWVudU11c3RhY2hlKHRoaXMucGFnZURhdGEpO1xuXG5cdFx0c2VsZWN0KCcjYXBwJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ3RvcC1tZW51Jyk7XG5cdFx0c2VsZWN0KCcjdG9wLW1lbnUnKS5odG1sKGh0bWwpO1xuXG5cdFx0VUlraXQudG9nZ2xlKHNlbGVjdCgnI3NtYWxsLXRpdGxlJykubm9kZSgpLCB7XG5cdFx0XHRtb2RlOiAnbWVkaWEnLFxuXHRcdFx0YW5pbWF0aW9uOiAndWstYW5pbWF0aW9uLWZhZGUsdWstYW5pbWF0aW9uLWZhZGUnLFxuXHRcdH0pO1xuXG5cdFx0c2VsZWN0KCcjbWVudS1zZWN0aW9uJykub24oJ2FjdGl2ZScsIHRoaXMudG9nZ2xlU21hbGxUaXR0bGUpO1xuXHRcdHNlbGVjdCgnI21lbnUtc2VjdGlvbicpLm9uKCdpbmFjdGl2ZScsIHRoaXMudG9nZ2xlU21hbGxUaXR0bGUpO1xuXG5cdFx0c2VsZWN0KCcjbWVudS1zZWN0aW9uJykub24oJ2FjdGl2ZScsIHRoaXMudG9nZ2xlU21hbGxUaXR0bGUpO1xuXHRcdHNlbGVjdCgnI21lbnUtc2VjdGlvbicpLm9uKCdpbmFjdGl2ZScsIHRoaXMudG9nZ2xlU21hbGxUaXR0bGUpO1xuXHR9O1xuXG5cdHRoaXMudG9nZ2xlU21hbGxUaXR0bGUgPSBmdW5jdGlvbiB0b2dnbGVTbWFsbFRpdHRsZSgpIHtcblx0XHRVSWtpdC50b2dnbGUoc2VsZWN0KCcjc21hbGwtdGl0bGUnKS5ub2RlKCkpLnRvZ2dsZSgpO1xuXHR9O1xuXG5cdHRoaXMudXBkYXRlVGVybSA9IGZ1bmN0aW9uKHRlcm0pIHtcblx0XHR0aGlzLnBhZ2VEYXRhLmN1cnJlbnRUZXJtID0gdGVybS5uYW1lO1xuXHRcdGNvbnN0IGh0bWwgPSB0b3BtZW51TXVzdGFjaGUodGhpcy5wYWdlRGF0YSk7XG5cblx0XHRjb25zdCB0b3BNZW51ID0gc2VsZWN0KCcjdG9wLW1lbnUnKTtcblx0XHR0b3BNZW51Lmh0bWwoaHRtbCk7XG5cdH07XG5cbn0iLCJ2YXIgSCA9IHJlcXVpcmUoXCJob2dhbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHZhciBUID0gbmV3IEguVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdG0tbWFpblxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLWNvbnRhaW5lclxcXCI+XCIpO3QuYihcIlxcblwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgIDxkaXYgdWstZ3JpZD5cIik7dC5iKFwiXFxuXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBpZD0ndmlkZW9zJyBjbGFzcz0ndWstd2lkdGgtMS0yJz5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ1ay1oMiB1ay10ZXh0LWNlbnRlclxcXCI+XCIpO3QuYih0LnYodC5mKFwidGl0bGVcIixjLHAsMCkpKTt0LmIoXCI8L2gyPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay10ZXh0LXNtYWxsXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5lciB1ay1wb3NpdGlvbi1hYnNvbHV0ZSB1ay10cmFuc2Zvcm0tY2VudGVyIHVrLW1hcmdpbi1sYXJnZS1ib3R0b21cXFwiIHVrLXNwaW5uZXI9XFxcInJhdGlvOiAxXFxcIj48L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcInRvcC12aWRlb3NcXFwiPjwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBpZD0nY2hhbm5lbHMnIGNsYXNzPSd1ay13aWR0aC0xLTInPjwvZGl2PlwiKTt0LmIoXCJcXG5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxocj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8L2Rpdj5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdG0tbWFpblxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInVrLWNvbnRhaW5lclxcXCI+XFxuXFxuICAgICAgICAgPGRpdiB1ay1ncmlkPlxcblxcbiAgICAgICAgICAgIDxkaXYgaWQ9J3ZpZGVvcycgY2xhc3M9J3VrLXdpZHRoLTEtMic+XFxuICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cXFwidWstaDIgdWstdGV4dC1jZW50ZXJcXFwiPnt7dGl0bGV9fTwvaDI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXRleHQtc21hbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BpbmVyIHVrLXBvc2l0aW9uLWFic29sdXRlIHVrLXRyYW5zZm9ybS1jZW50ZXIgdWstbWFyZ2luLWxhcmdlLWJvdHRvbVxcXCIgdWstc3Bpbm5lcj1cXFwicmF0aW86IDFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwidG9wLXZpZGVvc1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXYgaWQ9J2NoYW5uZWxzJyBjbGFzcz0ndWstd2lkdGgtMS0yJz48L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG4gICAgPGhyPlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCJpbXBvcnQgdG9wdmlkZW9zTXVzdGFjaGUgZnJvbSAnLi90b3B2aWRlb3MuaHRtbCc7XG5pbXBvcnQgdG9wVmlkZW9WaXMgZnJvbSAnLi9Ub3BWaWRlb3NWaXMnO1xuXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9wdmlkZW9zKGFwcCkge1xuXHR0aGlzLmFwcCA9IGFwcDtcblx0dGhpcy52aXM7XG5cblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcblxuXHRcdC8vIGRhdGFcblx0XHRjb25zdCBwYWdlRGF0YSA9IHtcblx0XHRcdHRpdGxlOiAnVmlkZW9zIG1haXMgcmVjb21lbmRhZG9zJyxcblx0XHR9O1xuXG5cdFx0Ly8gYnVpZCBwYWdlXG5cdFx0Y29uc3QgaHRtbCA9IHRvcHZpZGVvc011c3RhY2hlKHBhZ2VEYXRhKTtcblx0XHRzZWxlY3QoJyNhcHAnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywndG9wdmlkZW9zLXNlY3Rpb24nKTtcblx0XHRzZWxlY3QoJyN0b3B2aWRlb3Mtc2VjdGlvbicpLmh0bWwoaHRtbCk7XG5cblx0XHR0aGlzLnZpcyA9IG5ldyB0b3BWaWRlb1Zpcyh0aGlzLmFwcCk7XG5cdFx0dGhpcy52aXMuaW5pdCgpO1xuXHR9O1xuXG5cdHRoaXMubG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRzZWxlY3QoJyN0b3B2aWRlb3Mtc2VjdGlvbicpLnNlbGVjdCgnLnNwaW5lcicpLmhpZGUoKTtcblx0XHR0aGlzLnZpcy51cGRhdGUoZGF0YSk7XG5cdH07XG5cblx0dGhpcy5sb2FkaW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZWN0KCcjdG9wdmlkZW9zLXNlY3Rpb24nKS5zZWxlY3QoJy5zcGluZXInKS5zaG93KCk7XG5cdFx0dGhpcy52aXMuZXhpdCgpO1xuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0T24gPSBmdW5jdGlvbiAoaWQsIHNvdXJjZVR5cGUpIHtcblx0XHR0aGlzLnZpcy5oaWdobGlnaHRPbihpZCwgc291cmNlVHlwZSk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPZmYgPSBmdW5jdGlvbiAoeW91dHViZUlEKSB7XG5cdFx0dGhpcy52aXMuaGlnaGxpZ2h0T2ZmKHlvdXR1YmVJRCk7XG5cdH07XG59IiwiLy8gbW9kdWxlc1xuaW1wb3J0IGVlIGZyb20gJ2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL3B0LWJyJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1jYSc7XG5pbXBvcnQge2pzb259IGZyb20gJ2QzLWZldGNoL2Rpc3QvZDMtZmV0Y2gubWluJztcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzL2Nocm9tYS5taW4nO1xuXG5cblxuLy9lbWl0dGVyXG5lZSh0aGlzKTtcbm1vbWVudC5sb2NhbGUoJ3B0LWJyJyk7XG5jb25zdCBQQVRIID0gJy4vZGF0YXNldCc7IC8vIERlZmluZSBmaWxlcyBwYXRoc1xuXG5jb25zdCBjb2xsZWN0aW9uID0ge1xuXHR2aWRlb3M6IFtdLFxuXHRjaGFubmVsczogW10sXG5cdHRvcENoYW5uZWxzOiBbXVxufTtcblxuY29uc3QgcGVyaW9kID0ge1xuXHRzdGFydDogdW5kZWZpbmVkLFxuXHRlbmQ6IHVuZGVmaW5lZCxcblx0ZHVyYXRpb246IHVuZGVmaW5lZFxufTtcblxuLy8gdGhpcy50ZW1wO1xubGV0IHNlbGVjdGVkVGVybTtcbmNvbnN0IG1heFJhbmtJbmRleCA9IDEwO1xuXG5cbmNvbnN0IGluaXQgPSBjb25maWcgPT4ge1xuXHRzZWxlY3RlZFRlcm0gPSBjb25maWcudGVybXNbMF0uc2x1Zztcblx0cGVyaW9kLnN0YXJ0ID0gbW9tZW50KGNvbmZpZy5wZXJpb2Quc3RhcnQpO1xuXHRwZXJpb2QuZW5kID0gbW9tZW50KGNvbmZpZy5wZXJpb2QuZW5kKTtcblx0cGVyaW9kLmR1cmF0aW9uID0gIHBlcmlvZC5lbmQuZGlmZihwZXJpb2Quc3RhcnQsICdkYXlzJykgKyAxO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWREYXRhID0gYXN5bmMgdGVybSA9PiB7XG5cblx0c2VsZWN0ZWRUZXJtID0gdGVybTtcblxuXHRjb2xsZWN0aW9uLnZpZGVvcyA9IFtdO1xuXHRjb2xsZWN0aW9uLmNoYW5uZWxzID0gW107XG5cblx0bGV0IGRheUl0ZXJhdG9yID0gbW9tZW50KHBlcmlvZC5zdGFydCk7XG5cblx0Ly9cblx0d2hpbGUgKGRheUl0ZXJhdG9yIDw9IHBlcmlvZC5lbmQpIHtcblx0XHRjb25zdCBmaWxlID0gYCR7UEFUSH0vdmlkZW8taW5mb3MtJHtzZWxlY3RlZFRlcm0uc2x1Z30tJHtkYXlJdGVyYXRvci5mb3JtYXQoJ1lZWVlNTUREJyl9Lmpzb25gOyAvLyBnZXQgZmlsZSBuYW1lXG5cdFx0ZGF5SXRlcmF0b3IuYWRkKDEsICdkYXlzJyk7XG5cblx0XHR0cnkge1xuXG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChmaWxlKTtcblx0XHRcdGlmIChyZXMuc3RhdHVzICE9PSAyMDApIGNvbnRpbnVlO1xuXHRcdFx0XG5cdFx0XHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblx0XHRcdGlmIChkYXRhID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG5cdFx0XHRhZGREYXRhVG9Db2xsZWN0aW9uKGRhdGEsIGRheUl0ZXJhdG9yKTtcblxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coJ29pJyk7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0XG5cdH1cblxuXHRwYXJzZURhdGEoKTtcblx0Z2V0UmFua2VkQ2hhbm5lbHMoKTtcblxuXHRyZXR1cm4gY29sbGVjdGlvbjtcblxufTtcblxuXG5jb25zdCBhZGREYXRhVG9Db2xsZWN0aW9uID0gKGRhdGEsIGRhdGUpID0+IHtcblxuXHRjb25zdCBhcnJheURhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuXG5cdC8vc29ydCBieSByZWNjb21lZGF0aW9uXG5cdGFycmF5RGF0YS5zb3J0KChiLCBhKSA9PiBhLm5iX3JlY29tbWVuZGF0aW9ucyAtIGIubmJfcmVjb21tZW5kYXRpb25zKTtcblx0bGV0IHJhbmtJbmRleCA9IDE7IC8vXG5cblx0Ly8gbG9vcCB0aHJvdWdoIHZpZGVvcyAtIG1hbmlwdWxhdGUgYW5kIGFkZCBpbmZvcm1hdGlvblxuXHRmb3IgKGNvbnN0IHZpZGVvIG9mIGFycmF5RGF0YSkge1xuXG5cdFx0dmlkZW8ueW91dHViZUlEID0gdmlkZW8uaWQ7XG5cdFx0dmlkZW8uZGF0ZSA9IGRhdGU7XG5cdFx0dmlkZW8ucmVjUmFuayA9IHJhbmtJbmRleDtcblx0XHR2aWRlby5kYXkgPSBkYXRlLmZvcm1hdCgnREQnKTtcblx0XHR2aWRlby5pZCA9ICdfJyArIHZpZGVvLmlkO1xuXG5cdFx0ZGVsZXRlIHZpZGVvLmtleTtcblxuXHRcdGNvbGxlY3Rpb24udmlkZW9zLnB1c2godmlkZW8pO1xuXG5cdFx0cmFua0luZGV4Kys7XG5cdH1cblxuXG5cdHJldHVybiBjb2xsZWN0aW9uO1xuXG59O1xuXG5cbmNvbnN0IHBhcnNlRGF0YSA9ICgpID0+IHtcblxuXHQvL3ZpZGVvIGNvbGxlY3Rpb24gZm9yIHRoaXMgdGVybVxuXHRsZXQgbmV3Q29sbGVjdGlvbiA9IFtdO1xuXG5cdGZvciAoY29uc3QgdiBvZiBjb2xsZWN0aW9uLnZpZGVvcykge1xuXG5cdFx0Ly9nZXQgdmlkZW8gaW4gdGhlIGNvbGxlY3Rpb25cblx0XHRsZXQgdmlkZW8gPSBuZXdDb2xsZWN0aW9uLmZpbmQodmlkID0+IHZpZC55b3V0dWJlSUQgPT09IHYueW91dHViZUlEKTtcblxuXHRcdGlmICh2aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR2aWRlbyA9IHtcblx0XHRcdFx0aWQ6IHYuaWQsXG5cdFx0XHRcdHlvdXR1YmVJRDogdi55b3V0dWJlSUQsXG5cdFx0XHRcdHRpdGxlOiB2LnRpdGxlLFxuXHRcdFx0XHRjaGFubmVsOiB2LmNoYW5uZWwsXG5cdFx0XHRcdHN1bVJlYzogMCxcblx0XHRcdFx0ZGF0ZXM6IFtdXG5cdFx0XHR9O1xuXG5cdFx0XHRuZXdDb2xsZWN0aW9uLnB1c2godmlkZW8pO1xuXHRcdH1cblxuXHRcdGNvbnN0IGRheSA9IHtcblx0XHRcdGRhdGU6IHYuZGF0ZSxcblx0XHRcdGRheTogdi5kYXksXG5cdFx0XHRtb21lbnQ6IHYubW9tZW50LFxuXHRcdFx0dGl0bGU6IHYudGl0bGUsXG5cdFx0XHRkZXB0aDogdi5kZXB0aCxcblx0XHRcdGRpc2xpa2VzOiB2LmRpc2xpa2VzLFxuXHRcdFx0bGlrZXM6IHYubGlrZXMsXG5cdFx0XHRtdWx0OiB2Lm11bHQsXG5cdFx0XHRuYl9yZWNvbW1lbmRhdGlvbnM6IHYubmJfcmVjb21tZW5kYXRpb25zLFxuXHRcdFx0cmVjb21tZW5kYXRpb25zOiB2LnJlY29tbWVuZGF0aW9ucyxcblx0XHRcdHZpZXdzOiB2LnZpZXdzLFxuXHRcdFx0cmVjUmFuazogdi5yZWNSYW5rXG5cdFx0fTtcblxuXHRcdHZpZGVvLnN1bVJlYyArPSB2Lm5iX3JlY29tbWVuZGF0aW9ucztcblxuXHRcdC8vZml4IGVtcHR5IHRpdGxlXG5cdFx0aWYgKHZpZGVvLnRpdGxlID09PSAnJykgdmlkZW8udGl0bGUgPSB2LnRpdGxlO1xuXG5cdFx0dmlkZW8uZGF0ZXMucHVzaChkYXkpO1xuXHR9XG5cblx0Y29sbGVjdGlvbi52aWRlb3MgPSBuZXdDb2xsZWN0aW9uO1xuXG5cdC8vUm9yZGVyXG5cdGNvbGxlY3Rpb24udmlkZW9zLnNvcnQoKGIsIGEpID0+IGEuc3VtUmVjIC0gYi5zdW1SZWMpO1xuXG5cdHJldHVybiBjb2xsZWN0aW9uO1xuXG59O1xuXG5jb25zdCBnZXRSYW5rZWRDaGFubmVscyA9ICgpID0+IHtcblxuXHRjb25zdCBjaGFubmVscyA9IFtdOyAvLyBjb2xsZWN0aW9uXG5cblx0Ly9sb29wXG5cdGZvciAoY29uc3QgdmlkZW8gb2YgY29sbGVjdGlvbi52aWRlb3MpIHtcblxuXHRcdC8vY2hhbm5lbCBuYW1lXG5cdFx0bGV0IGNoYW5uZWxOYW1lID0gdmlkZW8uY2hhbm5lbDtcblxuXHRcdC8vdG90YWwgdmlkZW8gcmVjb21tZW5kYXRpb25cblx0XHRsZXQgdmlkZW9Ub3RhbFJlY29tbWVuZGF0aW9uID0gMDtcblx0XHRmb3IgKGNvbnN0IGRhdGUgb2YgdmlkZW8uZGF0ZXMpIHtcblx0XHRcdHZpZGVvVG90YWxSZWNvbW1lbmRhdGlvbiArPSBkYXRlLm5iX3JlY29tbWVuZGF0aW9ucztcblx0XHR9XG5cblx0XHQvL2dldCBjaGFubmVsIGluIHRoZSBjb2xsZWN0aW9uXG5cdFx0bGV0IGNoYW5uZWwgPSBjaGFubmVscy5maW5kKGNoYW5uZWwgPT4gY2hhbm5lbC5uYW1lID09PSBjaGFubmVsTmFtZSk7XG5cblx0XHQvL2lmIG5vdCB0aGVyZSB5ZXQsIHB1c2ggaXQgLy8gaWYgaXQgaXMgdXBkYXRlIGl0XG5cdFx0aWYoY2hhbm5lbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjaGFubmVsID0ge1xuXHRcdFx0XHRuYW1lOiBjaGFubmVsTmFtZSxcblx0XHRcdFx0bnVtYmVyVmlkZW9zOiAxLFxuXHRcdFx0XHRudW1iZXJSZWNvbW1lbmRhdGlvbnM6IHZpZGVvVG90YWxSZWNvbW1lbmRhdGlvblxuXHRcdFx0fTtcblx0XHRcdGNoYW5uZWxzLnB1c2goY2hhbm5lbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vdXBkYXRlXG5cdFx0XHRjaGFubmVsLm51bWJlclZpZGVvcysrO1xuXHRcdFx0Y2hhbm5lbC5udW1iZXJSZWNvbW1lbmRhdGlvbnMgKz0gdmlkZW9Ub3RhbFJlY29tbWVuZGF0aW9uO1xuXHRcdH1cblx0fVxuXG5cdC8vc29ydCBieSBudW1ibmVyIG9mIHJlY29tbWVuZGF0aW9uXG5cdGNoYW5uZWxzLnNvcnQoKGIsIGEpID0+ICBhLm51bWJlclJlY29tbWVuZGF0aW9ucyAtIGIubnVtYmVyUmVjb21tZW5kYXRpb25zKTtcblxuXHQvL2FkZCBjb2xvdXIgYmFzZWQgb24gcGFsbGV0ZSBcblx0Ly8gaWYgKHRoaXMuYXBwLmNoYW5uZWxDb2xvdXJzKSB0aGlzLl9zZXRDaGFubmVsQ29sb3VyKGNoYW5uZWxzKTtcblx0XG5cblx0Ly9zYXZlO1xuXHRjb2xsZWN0aW9uLmNoYW5uZWxzID0gY2hhbm5lbHM7XG5cdHJldHVybiBjb2xsZWN0aW9uLmNoYW5uZWxzO1xufTtcblxuY29uc3Qgc2V0Q2hhbm5lbENvbG91ciA9IGNoYW5uZWxzID0+IHtcblxuXHRjaGFubmVscy5mb3JFYWNoKCBmdW5jdGlvbihjLGkpIHtcblxuXHRcdC8vdG9wIHRlbiBjb2xvciAvLy8gbW9yZSBvbiBncmF5XG5cdFx0aWYgKGkgPCAxMCkge1xuXHRcdFx0Ly8gYy5jb2xvdXIgPSBhcHAuY2hhbm5lbENvbG91cnNbaV07XG5cdFx0XHRsZXQgY29sb3VyID0gY2hlY2tDaGFubmVsQ29sb3VyKGMubmFtZSk7XG5cdFx0XHRpZiAoY29sb3VyKSB7XG5cdFx0XHRcdGMuY29sb3VyID0gY29sb3VyO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRjb2xvdXIgPSBjaHJvbWEoX3RoaXMuYXBwLmNoYW5uZWxDb2xvdXJzW2ldKS5oZXgoKTtcblx0XHRcdFx0bGV0IHRlc3REdXBsaWNhdGlvbiA9IHRydWU7XG5cdFx0XHRcdGxldCBtdWx0aXBsaWVyID0gMTtcblx0XHRcdFx0d2hpbGUgKHRlc3REdXBsaWNhdGlvbikge1xuXHRcdFx0XHRcdHRlc3REdXBsaWNhdGlvbiA9IGNoZWNrQ29sb3VyRHVwbGljYXRpb25Ub3BUZW4oY29sb3VyKTtcblx0XHRcdFx0XHRpZiAodGVzdER1cGxpY2F0aW9uKSB7XG5cdFx0XHRcdFx0XHRjb2xvdXIgPSBjaHJvbWEoY29sb3VyKS5zYXR1cmF0ZShtdWx0aXBsaWVyKS5oZXgoKTtcblx0XHRcdFx0XHRcdG11bHRpcGxpZXIrKztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHRcdGMuY29sb3VyID0gY29sb3VyO1xuXG5cblx0XHRcdFx0Y29sbGVjdGlvbi50b3BDaGFubmVscy5wdXNoKGMpOyBcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBjLmNvbG91ciA9ICcjY2NjJztcblx0XHRcdGMuY29sb3VyID0gY2hyb21hKCdsaWdodGdyYXknKS5oZXgoKTtcblx0XHR9XG5cblx0fSk7XG5cblx0Y29uc3QgY2hlY2tDaGFubmVsQ29sb3VyID0gY2hhbm5lbE5hbWUgPT4ge1xuXHRcdGNvbnN0IGNoYW5uZWwgPSBjb2xsZWN0aW9uLnRvcENoYW5uZWxzLmZpbmQoYyA9PiBjLm5hbWUgPT0gY2hhbm5lbE5hbWUpO1xuXHRcdGlmIChjaGFubmVsKSByZXR1cm4gY2hhbm5lbC5jb2xvdXI7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cblx0Y29uc3QgY2hlY2tDb2xvdXJEdXBsaWNhdGlvblRvcFRlbiA9IGNvbG91ciA9PiBjb2xsZWN0aW9uLnRvcENoYW5uZWxzLmZpbmQoYyA9PiBjLmNvbG91ciA9PSBjb2xvdXIpO1xuXG59O1xuXG5jb25zdCBjaGFuZ2VQZXJpb2QgPSAodGVybSwgc3RhcnQsIGVuZCkgPT4ge1xuXG5cdGxldCBzdGFydERhdGUgPSBtb21lbnQoc3RhcnQpO1xuXHRsZXQgZW5kRGF0ZSA9IG1vbWVudChlbmQpO1xuXG5cdC8vIGludmVyc2Ugb3JkZXIgaWYgdGhlIGRhdGVzIGFyZSBzd2l0Y2hlZFxuXHRpZiAoc3RhcnREYXRlLmlzQWZ0ZXIoZW5kRGF0ZSkpIHtcblx0XHRsZXQgdCA9IHN0YXJ0RGF0ZTtcblx0XHRzdGFydERhdGUgPSBlbmREYXRlO1xuXHRcdGVuZERhdGUgPSB0O1xuXHR9XG5cblx0Ly9kYXRlIGxpbWl0c1xuXHRpZiAoc3RhcnREYXRlLmlzQmVmb3JlKHBlcmlvZC5zdGFydCkpIHN0YXJ0RGF0ZSA9IHBlcmlvZC5zdGFydDtcblx0aWYgKGVuZERhdGUuaXNBZnRlcihwZXJpb2QuZW5kKSkgZW5kRGF0ZSA9IHBlcmlvZC5lbmQ7XG5cblx0Ly91cGRhdGUgcGVyaW9kXG5cdHBlcmlvZC5zdGFydCA9IHN0YXJ0RGF0ZTtcblx0cGVyaW9kLmVuZCA9IGVuZERhdGU7XG5cblx0Ly91cGRhdGUgbnVtYnIgb2YgZGF5c1xuXHRwZXJpb2QuZHVyYXRpb24gPSBwZXJpb2QuZW5kLmRpZmYocGVyaW9kLnN0YXJ0LCAnZGF5cycpKzE7XG5cblx0Ly90ZXN0XG5cdGZpbHRlclZpZGVzQnlQZXJpb2QodGVybSxzdGFydCxlbmQpO1xuXG59O1xuXG5jb25zdCBmaWx0ZXJWaWRlc0J5UGVyaW9kID0gKCkgPT4ge1xuXHRcblx0Ly8gY29uc3QgdGVybVNlbGVjdGVkID0gdGhpcy50ZXJtcy5maW5kKHRlcm0gPT4gdGVybS5zbHVnID09IHRTbHVnKTtcblxuXHQvLyBjb25zdCBmaWx0ZXJlZERhdGEgPSB0ZXJtU2VsZWN0ZWQ7XG5cdFxuXG5cdC8vZmlsdGVyIGRhdGFcblx0Y29uc3Qgc2VsZWN0ZWRQZXJpb2QgPSB7XG5cdFx0c3RhcnQ6IHBlcmlvZC5zdGFydCxcblx0XHRlbmQ6IHBlcmlvZC5lbmQsXG5cdFx0dmlkZW9zOiBbXVxuXHR9O1xuXHRcblx0Zm9yIChjb25zdCB2aWRlbyBvZiBzZWxlY3RlZFBlcmlvZC52aWRlb3MpIHtcblx0XHRjb25zdCBmaWx0ZXJlZERhdGVzID0gdmlkZW8uZGF0ZXMuZmlsdGVyKGlzQmV0d2VlbkRhdGVzKTtcblx0XHRcblx0XHQvL2lmIGFueSwgYWRkIHRvIHRoZSBsaXN0XG5cdFx0aWYgKGZpbHRlcmVkRGF0ZXMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuXHRcdGNvbnN0IGZpbHRlcmVkVmlkZW8gPSB7XG5cdFx0XHRjaGFubmVsOiB2aWRlby5jaGFubmVsLFxuXHRcdFx0aWQ6IHZpZGVvLmlkLFxuXHRcdFx0dGl0bGU6IHZpZGVvLnRpdGxlLFxuXHRcdFx0eW91dHViZUlEOiB2aWRlby55b3V0dWJlSURcblx0XHR9O1xuXHRcdGZpbHRlcmVkVmlkZW8uZGF0ZXMgPSBmaWx0ZXJlZERhdGVzO1xuXHRcdHNlbGVjdGVkUGVyaW9kLnZpZGVvcy5wdXNoKGZpbHRlcmVkVmlkZW8pO1xuXG5cdFx0Ly9jaGVjayB0aGUgc3VtIG9mIHJlY29tbWVuZGF0aW9uIGZvciB0aGUgcGVyaW9kXG5cdFx0ZmlsdGVyZWRWaWRlby5zdW1SZWMgPSAwO1xuXHRcdGZvciAoY29uc3QgZGF5IG9mIGZpbHRlcmVkRGF0ZXMpIHtcblx0XHRcdGZpbHRlcmVkVmlkZW8uc3VtUmVjICArPSBkYXkubmJfcmVjb21tZW5kYXRpb25zO1xuXHRcdH1cblx0XHRcblx0fVxuXG5cdGNvbnN0IGlzQmV0d2VlbkRhdGVzID0gZWxlbWVudCA9PiBlbGVtZW50Lm1vbWVudC5pc0JldHdlZW4ocGVyaW9kLnN0YXJ0LCBwZXJpb2QuZW5kRCwgJ2RheScsJ1tdJyk7XG5cblx0Ly9Sb3JkZXJcblx0c2VsZWN0ZWRQZXJpb2QudmlkZW9zLnNvcnQoKGIsIGEpID0+IGEuc3VtUmVjIC0gYi5zdW1SZWMpO1xuXG5cdHRoaXMudXBkYXRlRGF0YSgpO1xuXHR0aGlzLmVtaXQoJ3VwZGF0ZScsW3NlbGVjdGVkUGVyaW9kXSk7XG5cblx0cmV0dXJuIHNlbGVjdGVkUGVyaW9kO1xuXG59O1xuXG4vLyB0aGlzLnNlbGVjdFRlcm0gPSBmdW5jdGlvbih0ZXJtKSB7XG4vLyBcdHRoaXMuc2VsZWN0ZWRUZXJtID0gdGVybTsgLy9uZXcgdGVybVxuLy8gXHRjb25zdCB0ZXJtU2VsZWN0ZWQgPSB0aGlzLnRlcm1zLmZpbmQodGVybSA9PiB0ZXJtLnNsdWcgPT0gdGhpcy5zZWxlY3RlZFRlcm0pO1xuXG4vLyBcdCQoJyNjdXJyZW50LXZpZXcnKS5maW5kKCcjY3VycmVudC10ZXJuJykuaHRtbCh0ZXJtU2VsZWN0ZWQubmFtZSk7XG5cbi8vIFx0aWYodGVybVNlbGVjdGVkLnZpZGVvcy5sZW5ndGggPT0gMCkge1xuLy8gXHRcdGRhdGFtb2RlbC5lbWl0KCdsb2FkJyx0ZXJtKTtcbi8vIFx0XHQvLyAkKHJhbmtmbG93RGF0YSkudHJpZ2dlcignbG9hZCcpO1xuLy8gXHRcdHRoaXMubG9hZERhdGEoKTtcbi8vIFx0fSBlbHNlIHtcbi8vIFx0XHR0aGlzLnVwZGF0ZURhdGEoKTtcbi8vIFx0fVxuXHRcbi8vIH07XG5cbi8vIGNvbnN0IHVwZGF0ZURhdGEgPSAoKSA9PiB7XG5cbi8vIFx0Y29uc3Qgc2VsZWN0ZWREYXRhc2V0ID0gdGhpcy50ZXJtcy5maW5kKHRlcm0gPT4gdGVybS5zbHVnID09IHRoaXMuc2VsZWN0ZWRUZXJtKTtcbi8vIFx0ZGF0YW1vZGVsLmVtaXQoJ3VwZGF0ZScsW3NlbGVjdGVkRGF0YXNldF0pO1xuXG4vLyBcdC8vICQocmFua2Zsb3dEYXRhKS50cmlnZ2VyKCd1cGRhdGUnLFtzZWxlY3RlZERhdGFzZXRdKTtcblxuLy8gfTtcblxuY29uc3QgZGlzcGxheVBlcmlvZFN0YXJ0RGF0ZSA9ICgpID0+IHBlcmlvZC5zdGFydC5sb2NhbGUoJ3B0JykuZm9ybWF0KCdERCBNTU1NJyk7XG5jb25zdCBkaXNwbGF5UGVyaW9kRW5kRGF0ZSA9ICgpID0+IHBlcmlvZC5lbmRELmxvY2FsZSgncHQnKS5mb3JtYXQoJ0REIE1NTU0nKTtcblxuXG4vLyBjb25zdCBkYXRhbW9kZWwgPSBuZXcgRGF0YW1vZGVsKCk7XG4vLyBleHBvcnQgZGVmYXVsdCBkYXRhbW9kZWw7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0aW5pdCxcblx0bG9hZERhdGEsXG5cdGNoYW5nZVBlcmlvZFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=