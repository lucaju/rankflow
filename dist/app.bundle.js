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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit/dist/js/uikit.min */ "./node_modules/uikit/dist/js/uikit.min.js");
/* harmony import */ var uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uikit/dist/js/uikit-icons.min */ "./node_modules/uikit/dist/js/uikit-icons.min.js");
/* harmony import */ var uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-fetch/dist/d3-fetch.min */ "./node_modules/d3-fetch/dist/d3-fetch.min.js");
/* harmony import */ var d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uikit/dist/css/uikit.min.css */ "./node_modules/uikit/dist/css/uikit.min.css");
/* harmony import */ var uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_css_uikit_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _datamodel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datamodel */ "./src/datamodel.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header */ "./src/components/header.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar.js");
/* harmony import */ var _components_topmenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topmenu */ "./src/components/topmenu.js");
/* harmony import */ var _components_topvideos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/topvideos */ "./src/components/topvideos.js");
/* harmony import */ var _components_topchannels__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/topchannels */ "./src/components/topchannels.js");
/* harmony import */ var _components_rankflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rankflow */ "./src/components/rankflow.js");
/* harmony import */ var _components_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/details */ "./src/components/details.js");
/* harmony import */ var _components_methodology__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/methodology */ "./src/components/methodology.js");
/*
@author: Luciano Frizzera <lucaju@gmail.com>
*/

// modules






// import visconfig from './visconfig.json';















// APP

function App() {
	// variables
	this.terms = [];
	this.relatedTerms = [];
	this.period = {};

	this.selectedTerm = {};

	this.showTableAll = false;

	this.channelColours = [
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

	// add functionality to D3 Selection
	d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["selection"].prototype.show = function() {  
		this.style('display', 'initial');
		return this;
	};

	d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_2__["selection"].prototype.hide = function() {  
		this.style('display', 'none');
		return this;
	};

	this.loadConfig = function() {
		const _this = this;
		Object(d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_3__["json"])('./visconfig.json')
			.then(function (data) {
				_this.init(data);
			});
	};

	this.init = function (visconfig) {
		// methods
		// this.init = function init() {
		uikit_dist_js_uikit_icons_min__WEBPACK_IMPORTED_MODULE_1___default()(uikit_dist_js_uikit_min__WEBPACK_IMPORTED_MODULE_0___default.a);

		this.terms = visconfig.terms;
		this.relatedTerms = visconfig.relatedTerms;
		this.period = visconfig.period;

		this.selectedTerm = this.terms[0];

		// header
		new _components_header__WEBPACK_IMPORTED_MODULE_7__["default"]().init();

		// components
		this.sidebar = new _components_sidebar__WEBPACK_IMPORTED_MODULE_8__["default"](this);
		this.sidebar.init();
		this.topMenu = new _components_topmenu__WEBPACK_IMPORTED_MODULE_9__["default"](this);
		this.topMenu.init();
		this.topVideos = new _components_topvideos__WEBPACK_IMPORTED_MODULE_10__["default"](this);
		this.topVideos.init();
		this.topChannels = new _components_topchannels__WEBPACK_IMPORTED_MODULE_11__["default"](this);
		this.topChannels .init();
		this.rankflow = new _components_rankflow__WEBPACK_IMPORTED_MODULE_12__["default"](this);
		this.rankflow.init();
		this.details = new _components_details__WEBPACK_IMPORTED_MODULE_13__["default"](this);
		this.details.init();
		this.methodology = new _components_methodology__WEBPACK_IMPORTED_MODULE_14__["default"](this);
		this.methodology.init();

		// this.datamodel = new datamodel(this);
		this.datamodel = _datamodel__WEBPACK_IMPORTED_MODULE_6__["default"];
		this.datamodel.init(this);

		this.datamodel.on('load', app.datamodelOnLoad);
		// this.datamodel.on('update', {data: Object}, function (e, data) {
		// 	app.datamodelOnLoad(data);
		// });
			

		this.datamodel.loadData(this.selectedTerm)
			.then(function (r) {
				// console.log(r);
				app.topVideos.load(r);
				app.topChannels.load(r);
				app.rankflow.load(r);
			});
	};

	this.selectTerm = function(term) {
		
		const termSelected = this.terms.find(t => t.slug == term);
		this.selectedTerm = termSelected; //new term

		this.topMenu.updateTerm(termSelected);

		this.datamodelOnLoad();

		this.datamodel.loadData(this.selectedTerm)
			.then(function (r) {
				// console.log(r);
				app.topVideos.load(r);
				app.topChannels.load(r);
				app.rankflow.load(r);
			});
		
	};

	this.datamodelOnLoad = function () {
		this.topVideos.loading();
		this.topChannels.loading();
		this.rankflow.loading();
	};

	this.getTermByName = function (termName) {
		const term = this.terms.find(c => c.name == termName);
		return term;
	};

	this.getChannelByName = function(channelName) {
		// const term = datamodel.terms.find(t => t.slug == this.selectedTerm);
		const channel = _datamodel__WEBPACK_IMPORTED_MODULE_6__["default"].videoCollection.channels.find(c => c.name == channelName);
		return channel;
	};

	this.itemMouseOver = function(data,source) {
		if(source == 'video') {
			this.topVideos.highlightOn(data.youtubeID, source);
			this.topChannels.highlightOn(data.channel);
			this.rankflow.highlightOn(data,source);
		} else if(source == 'channel') {
			this.topVideos.highlightOn(data.name, source);
			this.topChannels.highlightOn(data.name);
			this.rankflow.highlightOn(data,source);
		} else if(source == 'rank') {
			this.topVideos.highlightOn(data.data.youtubeID,'video');
			this.topChannels.highlightOn(data.channel,source);
			this.rankflow.highlightOn(data,source);
		}
	};

	this.itemMouseOut = function(data,source) {
		if(source == 'video') {
			this.topVideos.highlightOff(data.youtubeID);
			this.topChannels.highlightOff(data.channel);
			this.rankflow.highlightOff(data);
		} else if(source == 'channel') {
			this.topVideos.highlightOff(data.name);
			this.topChannels.highlightOff(data.name);
			this.rankflow.highlightOff(data);
		} else if(source == 'rank') {
			this.topVideos.highlightOff(data.name);
			this.topChannels.highlightOff(data.name);
			this.rankflow.highlightOff(data);
		}
	};

	this.showDetails = function(d,source) {
		this.details.addModal(d,source);
	};


}

const app = new App();
window.app = app;
app.loadConfig();

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.html */ "./src/components/header.html");
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__);



function Header() {
	this.init = function init() {
		// data
		const pageData = {
			title: 'Eleições Brasil 2018',
			subtitle: 'RankFlow das Recomendações do YouTube',
		};

		// buid page
		const html = _header_html__WEBPACK_IMPORTED_MODULE_0___default()(pageData);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#app').append('div').attr('id','header-section');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#header-section').html(html);
	};
}

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
module.exports = function() { var T = new H.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"tm-sidebar-left\">");t.b("\n" + i);t.b("	<div id=\"main-menu\">");t.b("\n" + i);t.b("		<ul class=\"uk-nav uk-nav-default\" uk-switcher>");t.b("\n" + i);t.b("            <p class=\"uk-text-lead\">");t.b(t.v(t.f("termsTitle",c,p,0)));t.b("</p>");t.b("\n" + i);if(t.s(t.f("terms",c,p,1),c,p,0,178,264,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			<li><a href=\"\" onclick=\"app.selectTerm('");t.b(t.v(t.f("slug",c,p,0)));t.b("')\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("            ");t.b("\n" + i);t.b("            <li class=\"uk-nav-divider\"></li>");t.b("\n" + i);t.b("            <li class=\"uk-nav-header\">");t.b(t.v(t.f("relatedTermsTitle",c,p,0)));t.b("</li>");t.b("\n" + i);if(t.s(t.f("relatedTerms",c,p,1),c,p,0,427,513,"{{ }}")){t.rs(c,p,function(c,p,t){t.b("			<li><a href=\"\" onclick=\"app.selectTerm('");t.b(t.v(t.f("slug",c,p,0)));t.b("')\">");t.b(t.v(t.f("name",c,p,0)));t.b("</a></li>");t.b("\n" + i);});c.pop();}t.b("		</ul>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("	");t.b("\n" + i);t.b("	<div id=\"footer-section\" class=\"uk-section uk-section-xsmall\">");t.b("\n" + i);t.b("		<div class=\"uk-container uk-container-small uk-text-small uk-text-center\">");t.b("\n" + i);t.b("			<hr class=\"uk-divider-small\">");t.b("\n" + i);t.b("			<p class=\"uk-text-muted\">Developed by<br/><a href=\"https://luciano.fluxo.art.br\" target=\"_blank\" class=\"uk-link-text\">Luciano Frizzera</a></p>");t.b("\n" + i);t.b("		</div>");t.b("\n" + i);t.b("	</div>");t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }}, "<div class=\"tm-sidebar-left\">\n\t<div id=\"main-menu\">\n\t\t<ul class=\"uk-nav uk-nav-default\" uk-switcher>\n            <p class=\"uk-text-lead\">{{termsTitle}}</p>\n            {{#terms}}\n\t\t\t<li><a href=\"\" onclick=\"app.selectTerm('{{slug}}')\">{{name}}</a></li>\n            {{/terms}}\n            \n            <li class=\"uk-nav-divider\"></li>\n            <li class=\"uk-nav-header\">{{relatedTermsTitle}}</li>\n            {{#relatedTerms}}\n\t\t\t<li><a href=\"\" onclick=\"app.selectTerm('{{slug}}')\">{{name}}</a></li>\n            {{/relatedTerms}}\n\t\t</ul>\n\t</div>\n\t\n\t<div id=\"footer-section\" class=\"uk-section uk-section-xsmall\">\n\t\t<div class=\"uk-container uk-container-small uk-text-small uk-text-center\">\n\t\t\t<hr class=\"uk-divider-small\">\n\t\t\t<p class=\"uk-text-muted\">Developed by<br/><a href=\"https://luciano.fluxo.art.br\" target=\"_blank\" class=\"uk-link-text\">Luciano Frizzera</a></p>\n\t\t</div>\n\t</div>\n</div>", H);return T.render.apply(T, arguments); };

/***/ }),

/***/ "./src/components/sidebar.js":
/*!***********************************!*\
  !*** ./src/components/sidebar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidebar; });
/* harmony import */ var _sidebar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.html */ "./src/components/sidebar.html");
/* harmony import */ var _sidebar_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sidebar_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-selection/dist/d3-selection.min */ "./node_modules/d3-selection/dist/d3-selection.min.js");
/* harmony import */ var d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__);



function Sidebar(app) {
	this.app = app;

	this.init = function init() {
		// data
		const pageData = {
			termsTitle: 'Candidatos',
			relatedTermsTitle: 'Termos Relacionados',
			terms: this.app.terms,
			relatedTerms: this.app.relatedTerms,
		};

		// buid page
		const html = _sidebar_html__WEBPACK_IMPORTED_MODULE_0___default()(pageData);
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#app').append('div').attr('id','tm-sidebar-left');
		Object(d3_selection_dist_d3_selection_min__WEBPACK_IMPORTED_MODULE_1__["select"])('#tm-sidebar-left').html(html);
	};
}

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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







function Datamodel() {

	//emitter
	event_emitter__WEBPACK_IMPORTED_MODULE_0___default()(this);

	moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('pt-br');

	this.PATH = './dataset'; // Define files paths

	this.videoCollection = {
		videos: [],
		channels: []
	};

	this.temp;
	this.daysLoaded = 0; // start counting


	this.init = function (app) {
		// temporary hack for a version
		// if ($('#startPeriod').html()) {
		// 	this.period.startDate = moment($('#startPeriod').html());
		// 	this.numberDays = this.period.endDate.diff(this.period.startDate, 'days') + 1;
		// }

		this.app = app;

		this.selectedTerm = app.terms[0].slug;
		this.initialDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(app.period.start);
		this.finalDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(app.period.end);
		this.period = {
			startDate: this.initialDate, // this.initialDate,
			endDate: this.finalDate,
		};
		this.totalNumberDays = this.finalDate.diff(this.initialDate, 'days') + 1;
		this.numberDays = this.period.endDate.diff(this.period.startDate, 'days') + 1;
		this.maxRankIndex = 10;

		this.topChannels = [];
	};

	this.loadData = function (term) {

		this.selectedTerm = term;

		datamodel.videoCollection.videos = [];
		datamodel.videoCollection.channels = [];

		let dayIterator = moment__WEBPACK_IMPORTED_MODULE_1___default()(this.initialDate);
		const fileArray = [];

		//
		while (dayIterator <= this.finalDate) {
			const file = `${this.PATH}/video-infos-${this.selectedTerm.slug}-${dayIterator.format('YYYYMMDD')}.json`; // get file name
			fileArray.push(file);
			dayIterator.add(1, 'days');
		}

		const loadPromise = new Promise(
			(resolve) => {
				Promise.all(fileArray.map(this.loadfile))
					.then(function transform(collection) {
						const usefulData = collection.filter(data => data != undefined);
						return Promise.all(usefulData.map(datamodel.transformDailyData));
					}).then(function () {
						datamodel.reorderByDate();
						return datamodel.parseData();
					}).then(function () {
						datamodel.getRankedChannels();
						resolve(datamodel.videoCollection);
					});
			});

		return loadPromise;
	};

	this.loadfile = function (file) {
		const loadPromise = new Promise(
			(resolve) => {
				Object(d3_fetch_dist_d3_fetch_min__WEBPACK_IMPORTED_MODULE_4__["json"])(file)
					.then(function (data) {
						datamodel.daysLoaded++;
						const d = {
							filename: file,
							data: data
						};
						// console.log(d)
						resolve(d);
					})
					.catch(function() {
						resolve();
					});
			});
		return loadPromise;
	};

	this.transformDailyData = function (item) {

		return new Promise(
			(resolve) => {

				const filedata = item.data;

				let raw_date = datamodel.getDateFromFilename(item.filename); //get date from filename
				let rankIndex = 0; //

				// transform into an array
				const arrayFileData = Object.values(filedata);

				//     //sort by reccomedation
				arrayFileData.sort(function (b, a) {
					return a.nb_recommendations - b.nb_recommendations;
				});

				// loop through videos - manipulate and add information
				for (let video of arrayFileData) {

					video.youtubeID = video.id;
					// video.id = 'v' + videoID;
					video.date = `${raw_date[1]}-${raw_date[2]}-${raw_date[3]}`;
					video.moment = moment__WEBPACK_IMPORTED_MODULE_1___default()(`${raw_date[1]}-${raw_date[2]}-${raw_date[3]}`);
					video.recRank = rankIndex + 1;
					video.day = +raw_date[3];
					video.id = '_' + video.id;

					delete video.key;

					datamodel.videoCollection.videos.push(video);

					//advance index
					rankIndex++;
					// videoID++;
				}

				//advance date
				datamodel.daysLoaded++;


				resolve(datamodel.videoCollection);
			});

	};

	// get date from filename
	this.getDateFromFilename = function getDateFromFilename(file) {
		const regex = /(\d{4})(\d{2})(\d{2})/; // regex find date format 'YYYY-MM-DD'
		const rawDate = file.match(regex);
		return rawDate;
	};

	/* loading files assyncroniously can make data be placed in diferent order
	this fuctioon order the data by date (alphabetically) */
	this.reorderByDate = function reorderByDate() {
		datamodel.videoCollection.videos.sort((a, b) => {
			if (a.date < b.date) {
				return -1;
			}
			if (a.date > b.date) {
				return 1;
			}
			// names must be equal
			return 0;
		});
	};


	this.parseData = function () {

		return new Promise(
			(resolve) => {

				//video collection for this term
				let newCollection = [];

				for (let v of datamodel.videoCollection.videos) {

					//get video in the collection
					let video = newCollection.find(vid => vid.youtubeID == v.youtubeID);

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

					let day = {
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
					if (video.title == '') video.title = v.title;

					video.dates.push(day);
				}

				datamodel.videoCollection.videos = newCollection;

				//Rorder
				datamodel.videoCollection.videos.sort(function (b, a) {
					return a.sumRec - b.sumRec;
				});

				resolve();
			});

	};

	this.getRankedChannels = function() {

		const channels = []; // collection

		//loop
		for (let video of datamodel.videoCollection.videos) {

			//channel name
			let channelName = video.channel;

			//total video recommendation
			let videoTotalRecommendation = 0;
			for (let date of video.dates) {
				videoTotalRecommendation += date.nb_recommendations;
			}

			//get channel in the collection
			let channel = channels.find(channel => channel.name == channelName);

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
		channels.sort(function (b, a) {
			return a.numberRecommendations - b.numberRecommendations;
		});


		//add colour based on pallete 
		if (this.app.channelColours) this._setChannelColour(channels);
		

		//save;
		datamodel.videoCollection.channels = channels;
		return datamodel.videoCollection.channels;
	};

	this._setChannelColour = function(channels) {
		const _this = this;

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


					_this.topChannels.push(c); 
				}

			} else {
				// c.colour = '#ccc';
				c.colour = chroma_js_chroma_min__WEBPACK_IMPORTED_MODULE_5___default()('lightgray').hex();
			}

		});

		function checkChannelColour(channelName) {
			const channel = datamodel.topChannels.find(c => c.name == channelName);
			if (channel) return channel.colour;
			return null;
		}

		function checkColourDuplicationTopTen(colour) {
			const colourChannel = datamodel.topChannels.find(c => c.colour == colour);
			if (colourChannel) {
				return true;
			} else {
				return false;
			}
		}
	};

	this.changePeriod = function(term,start, end) {

		let startDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(start);
		let endDate = moment__WEBPACK_IMPORTED_MODULE_1___default()(end);

		// inverse order if the dates are switched
		if (startDate.isAfter(endDate)) {
			let t = startDate;
			startDate = endDate;
			endDate = t;
		}

		//date limits
		if (startDate.isBefore(this.initialDate)) { startDate = this.initialDate; }
		if (endDate.isAfter(this.finallDate)) { endDate = this.finallDate; }

		//update period
		this.period.startDate = startDate;
		this.period.endDate = endDate;

		//update numbr of days
		this.numberDays = this.period.endDate.diff(this.period.startDate, 'days')+1;

		//test
		this.filterVidesByPeriod(term,start,end);

	};

	this.filterVidesByPeriod = function(tSlug) {

		const _this = this;
		
		const termSelected = this.terms.find(term => term.slug == tSlug);

		// const filteredData = termSelected;

		//filter data
		termSelected.filteredPeriod = {
			startDate: this.period.startDate,
			endDate: this.period.endDate,
			videos: []
		};
		
		for(const video of termSelected.videos) {
			let filteredDates = video.dates.filter(isBetweenDates);
			
			//if any, add to the list
			if (filteredDates.length > 0) {
				let filteredVideo = {
					channel: video.channel,
					id: video.id,
					title: video.title,
					youtubeID: video.youtubeID
				};
				filteredVideo.dates = filteredDates;
				termSelected.filteredPeriod.videos.push(filteredVideo);

				//check the sum of recommendation for the period
				filteredVideo.sumRec = 0;
				for(const day of filteredDates) {
					filteredVideo.sumRec  += day.nb_recommendations;
				}
			}
		}

		function isBetweenDates(element) {
			return element.moment.isBetween(_this.period.startDate,_this.period.endDate, 'day','[]');
		}

		//Rorder
		termSelected.filteredPeriod.videos.sort(function (b, a) {
			return a.sumRec - b.sumRec;
		});

		this.updateData();

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

	this.updateData = function() {

		const selectedDataset = this.terms.find(term => term.slug == this.selectedTerm);
		datamodel.emit('update',[selectedDataset]);

		// $(rankflowData).trigger('update',[selectedDataset]);

	};

	this.displayPeriodStartDate = function() {
		return this.period.startDate.locale('pt').format('DD MMMM ');
	};

	this.displayPeriodEndDate = function() {
		return this.period.endDate.locale('pt').format('DD MMMM');
	};
}

const datamodel = new Datamodel();
/* harmony default export */ __webpack_exports__["default"] = (datamodel);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SYW5rZmxvd1Zpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub3BDaGFubmVsc1Zpcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub3BWaWRlb3NWaXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGV0YWlscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21ldGhvZG9sb2d5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWV0aG9kb2xvZ3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcmFua2Zsb3cuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9yYW5rZmxvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BjaGFubmVscy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcGNoYW5uZWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcG1lbnUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90b3BtZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcHZpZGVvcy5odG1sIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcHZpZGVvcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YW1vZGVsLmpzIiwid2VicGFjazovLy8uL3NyYy9tYWluLmNzcz81MjExIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7UUFDQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDdkpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQzRDO0FBQ1c7O0FBRU07QUFDYjs7QUFFaEQ7O0FBRXNDO0FBQ2xCOztBQUVnQjtBQUNLO0FBQ0U7QUFDQTtBQUNJO0FBQ0k7QUFDTjtBQUNGO0FBQ1E7OztBQUduRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUMsNEVBQVMsOEI7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyw0RUFBUyw4QjtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx1RUFBSTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvRUFBVSxDQUFDLDhEQUFLOztBQUVsQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxNQUFNLDBEQUFNOztBQUVaO0FBQ0EscUJBQXFCLDJEQUFPO0FBQzVCO0FBQ0EscUJBQXFCLDJEQUFPO0FBQzVCO0FBQ0EsdUJBQXVCLDhEQUFTO0FBQ2hDO0FBQ0EseUJBQXlCLGdFQUFXO0FBQ3BDO0FBQ0Esc0JBQXNCLDZEQUFRO0FBQzlCO0FBQ0EscUJBQXFCLDREQUFPO0FBQzVCO0FBQ0EseUJBQXlCLGdFQUFXO0FBQ3BDOztBQUVBO0FBQ0EsbUJBQW1CLGtEQUFTO0FBQzVCOztBQUVBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQSxtQ0FBbUM7O0FBRW5DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFTO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLGlCOzs7Ozs7Ozs7Ozs7QUNyTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3NEO0FBQ087QUFDSDtBQUNGO0FBQ3NCO0FBQ0Y7QUFDbEI7QUFDa0I7QUFDckI7QUFDdkQsbUJBQU8sQ0FBQyxvR0FBc0M7O0FBRUY7QUFDaEI7Ozs7QUFJYjs7QUFFZjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1EQUFtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSTs7QUFFSjs7QUFFQTs7QUFFQTs7QUFFQSx1SEFBdUg7O0FBRXZILHFCQUFxQiw4REFBSyxRQUFRLDJEQUFNOztBQUV4QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQix3RkFBUzs7QUFFNUI7O0FBRUEsZUFBZSwrRUFBWSxDQUFDLDJGQUFZOztBQUV4Qzs7QUFFQTtBQUNBLGtCQUFrQiw4Q0FBTTs7QUFFeEIsaUJBQWlCLHlDQUF5QztBQUMxRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsNEVBQVM7QUFDekIscUJBQXFCLHlFQUFNO0FBQzNCO0FBQ0EsR0FBRzs7OztBQUlIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGdCQUFnQiw4RUFBVzs7QUFFM0I7QUFDQTtBQUNBLGVBQWUsMkVBQVUseUJBQXlCLHlGQUFVO0FBQzVEO0FBQ0EsZUFBZSx5RUFBUTs7OztBQUl2QjtBQUNBLGNBQWMsdUVBQUk7QUFDbEI7QUFDQSxVQUFVLG9FQUFTLEVBQUU7O0FBRXJCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEVBQUUsMkRBQU07O0FBRVI7QUFDQSxlQUFlLDJEQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxpQkFBaUIsOEVBQU87QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7QUFHQTtBQUNBLG9CQUFvQixpRkFBSTtBQUN4QjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsV0FBVyxzRUFBRztBQUNkO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSiwyQkFBMkIsMkJBQTJCLGlCQUFpQixHQUFHO0FBQzFFOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjs7O0FBR0E7QUFDQSxFQUFFLHNEQUFTO0FBQ1g7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUosRUFBRSw4REFBUztBQUNYO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSiwwQ0FBMEMsVUFBVTtBQUNwRDtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBDQUEwQyxvREFBb0Q7QUFDOUY7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLHNDQUFzQyxjQUFjLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDBDQUEwQyxVQUFVO0FBQ3BEO0FBQ0E7QUFDQSxJQUFJO0FBQ0osMENBQTBDLG1EQUFtRDtBQUM3RjtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSwyREFBTSw2QkFBNkI7O0FBRXJDLDRIQUE0SDs7QUFFNUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ3RwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMwQzs7QUFFTjtBQUNXO0FBQ2M7QUFDaUI7QUFDSjtBQUMxRSxtQkFBTyxDQUFDLG9HQUFzQzs7QUFFL0I7O0FBRWY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLDJEQUFNOztBQUU1QjtBQUNBLGdCQUFnQiwrRUFBWSxDQUFDLHlGQUFVOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGdCQUFnQiw4RUFBVztBQUMzQjtBQUNBLGdCQUFnQiw0RUFBUztBQUN6Qjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMseUVBQVE7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCLHNFQUFHO0FBQzVCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBLGtCQUFrQiwyRUFBVTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyREFBTTtBQUMzQixxQkFBcUIsMkRBQU07QUFDM0IscUNBQXFDLDJEQUFNO0FBQzNDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEM7Ozs7Ozs7Ozs7OztBQ25VQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzBDOztBQUVOO0FBQ1c7QUFDYztBQUNpQjtBQUNKO0FBQzFFLG1CQUFPLENBQUMsb0dBQXNDOzs7QUFHL0I7O0FBRWY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsc0JBQXNCLDJEQUFNOztBQUU1QjtBQUNBLGdCQUFnQiwrRUFBWSxDQUFDLHlGQUFVOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxnQkFBZ0IsOEVBQVc7QUFDM0I7QUFDQSxnQkFBZ0IsNEVBQVM7QUFDekI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLHlFQUFROztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLHlCQUF5QixzRUFBRztBQUM1QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQSxrQkFBa0IsMkVBQVU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMkRBQU07QUFDM0I7QUFDQSxxQkFBcUIsMkRBQU07QUFDM0IscUNBQXFDLDJEQUFNO0FBQzNDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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RSx5Q0FBeUMsMkJBQTJCOztBQUVwRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDZSx3RUFBUyxFQUFDOzs7Ozs7Ozs7Ozs7QUNwY3pCLHVDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL2FwcC5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiLypcbkBhdXRob3I6IEx1Y2lhbm8gRnJpenplcmEgPGx1Y2FqdUBnbWFpbC5jb20+XG4qL1xuXG4vLyBtb2R1bGVzXG5pbXBvcnQgVUlraXQgZnJvbSAndWlraXQvZGlzdC9qcy91aWtpdC5taW4nO1xuaW1wb3J0IHVpa2l0aWNvbnMgZnJvbSAndWlraXQvZGlzdC9qcy91aWtpdC1pY29ucy5taW4nO1xuXG5pbXBvcnQge3NlbGVjdGlvbn0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5pbXBvcnQge2pzb259IGZyb20gJ2QzLWZldGNoL2Rpc3QvZDMtZmV0Y2gubWluJztcblxuLy8gaW1wb3J0IHZpc2NvbmZpZyBmcm9tICcuL3Zpc2NvbmZpZy5qc29uJztcblxuaW1wb3J0ICd1aWtpdC9kaXN0L2Nzcy91aWtpdC5taW4uY3NzJztcbmltcG9ydCAnLi9tYWluLmNzcyc7XG5cbmltcG9ydCBkYXRhbW9kZWwgZnJvbSAnLi9kYXRhbW9kZWwnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4vY29tcG9uZW50cy9zaWRlYmFyJztcbmltcG9ydCBUb3BtZW51IGZyb20gJy4vY29tcG9uZW50cy90b3BtZW51JztcbmltcG9ydCBUb3B2aWRlb3MgZnJvbSAnLi9jb21wb25lbnRzL3RvcHZpZGVvcyc7XG5pbXBvcnQgVG9wY2hhbm5lbHMgZnJvbSAnLi9jb21wb25lbnRzL3RvcGNoYW5uZWxzJztcbmltcG9ydCBSYW5rZmxvdyBmcm9tICcuL2NvbXBvbmVudHMvcmFua2Zsb3cnO1xuaW1wb3J0IERldGFpbHMgZnJvbSAnLi9jb21wb25lbnRzL2RldGFpbHMnO1xuaW1wb3J0IE1ldGhvZG9sb2d5IGZyb20gJy4vY29tcG9uZW50cy9tZXRob2RvbG9neSc7XG5cblxuLy8gQVBQXG5cbmZ1bmN0aW9uIEFwcCgpIHtcblx0Ly8gdmFyaWFibGVzXG5cdHRoaXMudGVybXMgPSBbXTtcblx0dGhpcy5yZWxhdGVkVGVybXMgPSBbXTtcblx0dGhpcy5wZXJpb2QgPSB7fTtcblxuXHR0aGlzLnNlbGVjdGVkVGVybSA9IHt9O1xuXG5cdHRoaXMuc2hvd1RhYmxlQWxsID0gZmFsc2U7XG5cblx0dGhpcy5jaGFubmVsQ29sb3VycyA9IFtcblx0XHQnIzliYWRmOScsXG5cdFx0JyNmNmEwNzInLFxuXHRcdCcjM2JlNmVhJyxcblx0XHQnI2RkOWZlOScsXG5cdFx0JyNlYmFlNjQnLFxuXHRcdCcjZmE5MjhmJyxcblx0XHQnIzVhYmVmNicsXG5cdFx0JyNkMGQ4NzUnLFxuXHRcdCcjZTU2NWE0Jyxcblx0XHQnIzhmZGM4YycsXG5cdF07XG5cblx0Ly8gYWRkIGZ1bmN0aW9uYWxpdHkgdG8gRDMgU2VsZWN0aW9uXG5cdHNlbGVjdGlvbi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkgeyAgXG5cdFx0dGhpcy5zdHlsZSgnZGlzcGxheScsICdpbml0aWFsJyk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH07XG5cblx0c2VsZWN0aW9uLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7ICBcblx0XHR0aGlzLnN0eWxlKCdkaXNwbGF5JywgJ25vbmUnKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblxuXHR0aGlzLmxvYWRDb25maWcgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0anNvbignLi92aXNjb25maWcuanNvbicpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXHRcdFx0XHRfdGhpcy5pbml0KGRhdGEpO1xuXHRcdFx0fSk7XG5cdH07XG5cblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gKHZpc2NvbmZpZykge1xuXHRcdC8vIG1ldGhvZHNcblx0XHQvLyB0aGlzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXHRcdHVpa2l0aWNvbnMoVUlraXQpO1xuXG5cdFx0dGhpcy50ZXJtcyA9IHZpc2NvbmZpZy50ZXJtcztcblx0XHR0aGlzLnJlbGF0ZWRUZXJtcyA9IHZpc2NvbmZpZy5yZWxhdGVkVGVybXM7XG5cdFx0dGhpcy5wZXJpb2QgPSB2aXNjb25maWcucGVyaW9kO1xuXG5cdFx0dGhpcy5zZWxlY3RlZFRlcm0gPSB0aGlzLnRlcm1zWzBdO1xuXG5cdFx0Ly8gaGVhZGVyXG5cdFx0bmV3IEhlYWRlcigpLmluaXQoKTtcblxuXHRcdC8vIGNvbXBvbmVudHNcblx0XHR0aGlzLnNpZGViYXIgPSBuZXcgU2lkZWJhcih0aGlzKTtcblx0XHR0aGlzLnNpZGViYXIuaW5pdCgpO1xuXHRcdHRoaXMudG9wTWVudSA9IG5ldyBUb3BtZW51KHRoaXMpO1xuXHRcdHRoaXMudG9wTWVudS5pbml0KCk7XG5cdFx0dGhpcy50b3BWaWRlb3MgPSBuZXcgVG9wdmlkZW9zKHRoaXMpO1xuXHRcdHRoaXMudG9wVmlkZW9zLmluaXQoKTtcblx0XHR0aGlzLnRvcENoYW5uZWxzID0gbmV3IFRvcGNoYW5uZWxzKHRoaXMpO1xuXHRcdHRoaXMudG9wQ2hhbm5lbHMgLmluaXQoKTtcblx0XHR0aGlzLnJhbmtmbG93ID0gbmV3IFJhbmtmbG93KHRoaXMpO1xuXHRcdHRoaXMucmFua2Zsb3cuaW5pdCgpO1xuXHRcdHRoaXMuZGV0YWlscyA9IG5ldyBEZXRhaWxzKHRoaXMpO1xuXHRcdHRoaXMuZGV0YWlscy5pbml0KCk7XG5cdFx0dGhpcy5tZXRob2RvbG9neSA9IG5ldyBNZXRob2RvbG9neSh0aGlzKTtcblx0XHR0aGlzLm1ldGhvZG9sb2d5LmluaXQoKTtcblxuXHRcdC8vIHRoaXMuZGF0YW1vZGVsID0gbmV3IGRhdGFtb2RlbCh0aGlzKTtcblx0XHR0aGlzLmRhdGFtb2RlbCA9IGRhdGFtb2RlbDtcblx0XHR0aGlzLmRhdGFtb2RlbC5pbml0KHRoaXMpO1xuXG5cdFx0dGhpcy5kYXRhbW9kZWwub24oJ2xvYWQnLCBhcHAuZGF0YW1vZGVsT25Mb2FkKTtcblx0XHQvLyB0aGlzLmRhdGFtb2RlbC5vbigndXBkYXRlJywge2RhdGE6IE9iamVjdH0sIGZ1bmN0aW9uIChlLCBkYXRhKSB7XG5cdFx0Ly8gXHRhcHAuZGF0YW1vZGVsT25Mb2FkKGRhdGEpO1xuXHRcdC8vIH0pO1xuXHRcdFx0XG5cblx0XHR0aGlzLmRhdGFtb2RlbC5sb2FkRGF0YSh0aGlzLnNlbGVjdGVkVGVybSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uIChyKSB7XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHIpO1xuXHRcdFx0XHRhcHAudG9wVmlkZW9zLmxvYWQocik7XG5cdFx0XHRcdGFwcC50b3BDaGFubmVscy5sb2FkKHIpO1xuXHRcdFx0XHRhcHAucmFua2Zsb3cubG9hZChyKTtcblx0XHRcdH0pO1xuXHR9O1xuXG5cdHRoaXMuc2VsZWN0VGVybSA9IGZ1bmN0aW9uKHRlcm0pIHtcblx0XHRcblx0XHRjb25zdCB0ZXJtU2VsZWN0ZWQgPSB0aGlzLnRlcm1zLmZpbmQodCA9PiB0LnNsdWcgPT0gdGVybSk7XG5cdFx0dGhpcy5zZWxlY3RlZFRlcm0gPSB0ZXJtU2VsZWN0ZWQ7IC8vbmV3IHRlcm1cblxuXHRcdHRoaXMudG9wTWVudS51cGRhdGVUZXJtKHRlcm1TZWxlY3RlZCk7XG5cblx0XHR0aGlzLmRhdGFtb2RlbE9uTG9hZCgpO1xuXG5cdFx0dGhpcy5kYXRhbW9kZWwubG9hZERhdGEodGhpcy5zZWxlY3RlZFRlcm0pXG5cdFx0XHQudGhlbihmdW5jdGlvbiAocikge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhyKTtcblx0XHRcdFx0YXBwLnRvcFZpZGVvcy5sb2FkKHIpO1xuXHRcdFx0XHRhcHAudG9wQ2hhbm5lbHMubG9hZChyKTtcblx0XHRcdFx0YXBwLnJhbmtmbG93LmxvYWQocik7XG5cdFx0XHR9KTtcblx0XHRcblx0fTtcblxuXHR0aGlzLmRhdGFtb2RlbE9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnRvcFZpZGVvcy5sb2FkaW5nKCk7XG5cdFx0dGhpcy50b3BDaGFubmVscy5sb2FkaW5nKCk7XG5cdFx0dGhpcy5yYW5rZmxvdy5sb2FkaW5nKCk7XG5cdH07XG5cblx0dGhpcy5nZXRUZXJtQnlOYW1lID0gZnVuY3Rpb24gKHRlcm1OYW1lKSB7XG5cdFx0Y29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZChjID0+IGMubmFtZSA9PSB0ZXJtTmFtZSk7XG5cdFx0cmV0dXJuIHRlcm07XG5cdH07XG5cblx0dGhpcy5nZXRDaGFubmVsQnlOYW1lID0gZnVuY3Rpb24oY2hhbm5lbE5hbWUpIHtcblx0XHQvLyBjb25zdCB0ZXJtID0gZGF0YW1vZGVsLnRlcm1zLmZpbmQodCA9PiB0LnNsdWcgPT0gdGhpcy5zZWxlY3RlZFRlcm0pO1xuXHRcdGNvbnN0IGNoYW5uZWwgPSBkYXRhbW9kZWwudmlkZW9Db2xsZWN0aW9uLmNoYW5uZWxzLmZpbmQoYyA9PiBjLm5hbWUgPT0gY2hhbm5lbE5hbWUpO1xuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9O1xuXG5cdHRoaXMuaXRlbU1vdXNlT3ZlciA9IGZ1bmN0aW9uKGRhdGEsc291cmNlKSB7XG5cdFx0aWYoc291cmNlID09ICd2aWRlbycpIHtcblx0XHRcdHRoaXMudG9wVmlkZW9zLmhpZ2hsaWdodE9uKGRhdGEueW91dHViZUlELCBzb3VyY2UpO1xuXHRcdFx0dGhpcy50b3BDaGFubmVscy5oaWdobGlnaHRPbihkYXRhLmNoYW5uZWwpO1xuXHRcdFx0dGhpcy5yYW5rZmxvdy5oaWdobGlnaHRPbihkYXRhLHNvdXJjZSk7XG5cdFx0fSBlbHNlIGlmKHNvdXJjZSA9PSAnY2hhbm5lbCcpIHtcblx0XHRcdHRoaXMudG9wVmlkZW9zLmhpZ2hsaWdodE9uKGRhdGEubmFtZSwgc291cmNlKTtcblx0XHRcdHRoaXMudG9wQ2hhbm5lbHMuaGlnaGxpZ2h0T24oZGF0YS5uYW1lKTtcblx0XHRcdHRoaXMucmFua2Zsb3cuaGlnaGxpZ2h0T24oZGF0YSxzb3VyY2UpO1xuXHRcdH0gZWxzZSBpZihzb3VyY2UgPT0gJ3JhbmsnKSB7XG5cdFx0XHR0aGlzLnRvcFZpZGVvcy5oaWdobGlnaHRPbihkYXRhLmRhdGEueW91dHViZUlELCd2aWRlbycpO1xuXHRcdFx0dGhpcy50b3BDaGFubmVscy5oaWdobGlnaHRPbihkYXRhLmNoYW5uZWwsc291cmNlKTtcblx0XHRcdHRoaXMucmFua2Zsb3cuaGlnaGxpZ2h0T24oZGF0YSxzb3VyY2UpO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLml0ZW1Nb3VzZU91dCA9IGZ1bmN0aW9uKGRhdGEsc291cmNlKSB7XG5cdFx0aWYoc291cmNlID09ICd2aWRlbycpIHtcblx0XHRcdHRoaXMudG9wVmlkZW9zLmhpZ2hsaWdodE9mZihkYXRhLnlvdXR1YmVJRCk7XG5cdFx0XHR0aGlzLnRvcENoYW5uZWxzLmhpZ2hsaWdodE9mZihkYXRhLmNoYW5uZWwpO1xuXHRcdFx0dGhpcy5yYW5rZmxvdy5oaWdobGlnaHRPZmYoZGF0YSk7XG5cdFx0fSBlbHNlIGlmKHNvdXJjZSA9PSAnY2hhbm5lbCcpIHtcblx0XHRcdHRoaXMudG9wVmlkZW9zLmhpZ2hsaWdodE9mZihkYXRhLm5hbWUpO1xuXHRcdFx0dGhpcy50b3BDaGFubmVscy5oaWdobGlnaHRPZmYoZGF0YS5uYW1lKTtcblx0XHRcdHRoaXMucmFua2Zsb3cuaGlnaGxpZ2h0T2ZmKGRhdGEpO1xuXHRcdH0gZWxzZSBpZihzb3VyY2UgPT0gJ3JhbmsnKSB7XG5cdFx0XHR0aGlzLnRvcFZpZGVvcy5oaWdobGlnaHRPZmYoZGF0YS5uYW1lKTtcblx0XHRcdHRoaXMudG9wQ2hhbm5lbHMuaGlnaGxpZ2h0T2ZmKGRhdGEubmFtZSk7XG5cdFx0XHR0aGlzLnJhbmtmbG93LmhpZ2hsaWdodE9mZihkYXRhKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5zaG93RGV0YWlscyA9IGZ1bmN0aW9uKGQsc291cmNlKSB7XG5cdFx0dGhpcy5kZXRhaWxzLmFkZE1vZGFsKGQsc291cmNlKTtcblx0fTtcblxuXG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbndpbmRvdy5hcHAgPSBhcHA7XG5hcHAubG9hZENvbmZpZygpOyIsIi8vbW9kdWxlc1xuaW1wb3J0IHtleHRlbnQsbWlufSBmcm9tICdkMy1hcnJheS9kaXN0L2QzLWFycmF5Lm1pbic7XG5pbXBvcnQge2F4aXNCb3R0b20sYXhpc0xlZnR9IGZyb20gJ2QzLWF4aXMvZGlzdC9kMy1heGlzLm1pbic7XG5pbXBvcnQge25lc3R9IGZyb20gJ2QzLWNvbGxlY3Rpb24vZGlzdC9kMy1jb2xsZWN0aW9uLm1pbic7XG5pbXBvcnQge3NlbGVjdGlvbixzZWxlY3Qsc2VsZWN0QWxsfSBmcm9tICdkMy1zZWxlY3Rpb24nO1xuaW1wb3J0IHtzY2FsZU9yZGluYWwsc2NhbGVUaW1lLHNjYWxlTGluZWFyfSBmcm9tICdkMy1zY2FsZS9kaXN0L2QzLXNjYWxlLm1pbic7XG5pbXBvcnQge3NjaGVtZVBhaXJlZH0gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljL2Rpc3QvZDMtc2NhbGUtY2hyb21hdGljLm1pbic7XG5pbXBvcnQge2xpbmUsY3VydmVTdGVwfSBmcm9tICdkMy1zaGFwZS9kaXN0L2QzLXNoYXBlLm1pbic7XG5pbXBvcnQge3RpbWVGb3JtYXQsdGltZVBhcnNlfSBmcm9tICdkMy10aW1lLWZvcm1hdC9kaXN0L2QzLXRpbWUtZm9ybWF0Lm1pbic7XG5pbXBvcnQge3Zvcm9ub2l9IGZyb20gJ2QzLXZvcm9ub2kvZGlzdC9kMy12b3Jvbm9pLm1pbic7XG5yZXF1aXJlKCdkMy10cmFuc2l0aW9uL2Rpc3QvZDMtdHJhbnNpdGlvbi5taW4nKTtcblxuaW1wb3J0IFVJa2l0IGZyb20gJ3Vpa2l0L2Rpc3QvanMvdWlraXQubWluJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJhbmtGbG93VmlzKGFwcCkge1xuXG5cdHRoaXMuYXBwID0gYXBwO1xuXG5cdHRoaXMud2luZG93V2lkdGggPSA5MDA7XG5cdHRoaXMucmVzaXplVGltZXIgPSBudWxsO1xuXG5cdHRoaXMubWFyZ2luID0ge1xuXHRcdHRvcDogMCxcblx0XHRib3R0b206IDAsXG5cdFx0bGVmdDogMCxcblx0XHRyaWdodDogMFxuXHR9O1xuXHR0aGlzLndpZHRoID0gODAwO1xuXHR0aGlzLmhlaWdodCA9IDUwMDtcblxuXHR0aGlzLnZpc0RhdGFzZXQgPSBbXTtcblx0dGhpcy5hbGxWaWRlb3NJRHMgPSBbXTtcblx0dGhpcy5uYW1lc0J5SUQgPSBbXTtcblxuXHR0aGlzLmZsYXREYXRhID0gW107XG5cblx0dGhpcy50b3BOID0gNTtcblxuXHR0aGlzLnN0cm9rZVdpZHRoID0gWzgsIDYsIDUsIDUsIDQsIDQsIDMsIDMsIDIsIDJdOyAvL1N0cm9rZSB3aWR0aCBwZXIgbWF4IHBvc2l0aW9uXG5cblx0dGhpcy5jb2xvciA9IG51bGw7XG5cdHRoaXMueFNjYWxlID0gbnVsbDtcblx0dGhpcy55U2NhbGUgPSBudWxsO1xuXHR0aGlzLnhBeGlzID0gbnVsbDtcblx0dGhpcy55QXhpcyA9IG51bGw7XG5cblx0dGhpcy5saW5lID0gbnVsbDtcblxuXHR0aGlzLmZvY3VzID0gbnVsbDtcblx0dGhpcy5mb2N1c0RhdGEgPSBudWxsO1xuXHR0aGlzLnZvcm9ub2kgPSBudWxsO1xuXHR0aGlzLnZvcm9ub2lHcm91cCA9IG51bGw7XG5cblx0dGhpcy5wb3BVcE5hbWUgPSBudWxsO1xuXG5cdHRoaXMucGFyc2VUaW1lID0gbnVsbDtcblxuXHR0aGlzLm1pbkRhdGVXaWR0aCA9IDM1O1xuXG5cblx0Ly8tLS0tLSBDT05TVFJVQ1RPUlxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHR0aGlzLndpbmRvd1dpZHRoID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuXHRcdC8vc2V0IHRoZSBjb250ZXh0IGluIHRoZSBET01cblx0XHR0aGlzLm1hcmdpbiA9IHtcblx0XHRcdHRvcDogMjAsXG5cdFx0XHRyaWdodDogMzAsXG5cdFx0XHRib3R0b206IDMwLFxuXHRcdFx0bGVmdDogNTBcblx0XHR9O1xuXG5cdFx0dGhpcy5oZWlnaHQgPSA1MDAgLSB0aGlzLm1hcmdpbi50b3AgLSB0aGlzLm1hcmdpbi5ib3R0b207XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5yZXNpemUoKTtcblx0XHR9KTtcblxuXHR9O1xuXG5cdC8vLS0tLSBSRVNJWkVcblx0dGhpcy5yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHQvL3dpZHRoIG9ubHlcblx0XHRpZiAodGhpcy53aW5kb3dXaWR0aCAhPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSB7XG5cblx0XHRcdC8vZGVsYXkuLi4gZW5kIHJlc2l6aW5nXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cblx0XHRcdFx0X3RoaXMud2luZG93V2lkdGggPSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXHRcdFx0XHRfdGhpcy51cGRhdGUoX3RoaXMudmlzRGF0YXNldCwgJ3Jlc2l6ZScpO1xuXG5cdFx0XHR9LCAyNTApO1xuXG5cdFx0fVxuXG5cdH07XG5cblx0dGhpcy5fc2V0V2lkdGggPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRjb25zdCBtaW5WaXpXaWR0aCA9ICh0aGlzLmFwcC5kYXRhbW9kZWwubnVtYmVyRGF5cyAqIHRoaXMubWluRGF0ZVdpZHRoKSArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodCAtIDI0MDsgLy8yNDAgaXMgdGhlIHdpZHRoIG9mIHNpZGUgYmFyLiBCZXR0ZXIgdG8gZ2V0IHRoaXMgYnkgY29kZVxuXG5cdFx0Y29uc3Qgc2Nyb2xsSGludCA9IFVJa2l0LnRvZ2dsZShzZWxlY3QoJyNob3Jpem9udGFsLXNjcm9sbC1oaW50Jykubm9kZSgpKTtcblxuXHRcdGlmICh0aGlzLndpbmRvd1dpZHRoIDwgbWluVml6V2lkdGgpIHtcblx0XHRcdHRoaXMud2lkdGggPSBtaW5WaXpXaWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIDEyMDtcblx0XHRcdGlmICghc2Nyb2xsSGludC5pc1RvZ2dsZWQoKSkgc2Nyb2xsSGludC50b2dnbGUoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy53aWR0aCA9ICh0aGlzLndpbmRvd1dpZHRoIC0gMTQwKSAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodCAtIDEyMDtcblx0XHRcdGlmIChzY3JvbGxIaW50LmlzVG9nZ2xlZCgpKSBzY3JvbGxIaW50LnRvZ2dsZSgpO1xuXHRcdH1cblxuXHR9O1xuXG5cdC8vLS0tLSBTRVRVUCBWSVNcblx0dGhpcy5zZXR1cHZpcyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvL3dpZHRoXG5cdFx0dGhpcy5fc2V0V2lkdGgoKTtcblxuXHRcdHRoaXMucGFyc2VUaW1lID0gdGltZVBhcnNlKCclWS0lbS0lZCcpO1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vIENPTE9SIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxuXG5cdFx0dGhpcy5jb2xvciA9IHNjYWxlT3JkaW5hbChzY2hlbWVQYWlyZWQpO1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vIFNDQUxFICYgQVhFUyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblxuXHRcdGxldCBwYXJzZWREYXRlcyA9IFtdO1xuXHRcdGxldCBkYXlJdGVyYWMgPSBtb21lbnQodGhpcy5hcHAucGVyaW9kLnN0YXJ0KTtcblxuXHRcdGZvciAoZGF5SXRlcmFjOyBkYXlJdGVyYWMuaXNCZWZvcmUodGhpcy5hcHAucGVyaW9kLmVuZCk7IGRheUl0ZXJhYy5hZGQoMSwgJ2RheXMnKSkge1xuXHRcdFx0cGFyc2VkRGF0ZXMucHVzaCh0aGlzLnBhcnNlVGltZShkYXlJdGVyYWMuZm9ybWF0KCdZWVlZLU1NLUREJykpKTtcblx0XHR9XG5cblx0XHQvLyB0aGlzLnhTY2FsZSA9IHNjYWxlVGltZSgpLmRvbWFpbihbc3RhcnREYXksIGVuZERheV0pLnJhbmdlKFs0MCwgd2lkdGgtNDBdKTtcblx0XHQvLyB0aGlzLnhTY2FsZSA9IHNjYWxlVGltZSgpLnJhbmdlKFs0MCwgdGhpcy53aWR0aCAtIDQwXSk7XG5cdFx0dGhpcy54U2NhbGUgPSBzY2FsZVRpbWUoKS5yYW5nZShbNDAsIHRoaXMud2lkdGggLSA0MCAtIDI0MF0pO1xuXHRcdHRoaXMueFNjYWxlLmRvbWFpbihleHRlbnQocGFyc2VkRGF0ZXMsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZDtcblx0XHR9KSk7XG5cblxuXG5cdFx0dmFyIHRpY2tzTnVtYmVyO1xuXHRcdGlmIChwYXJzZWREYXRlcy5sZW5ndGggPCAxMCkge1xuXHRcdFx0dGlja3NOdW1iZXIgPSBwYXJzZWREYXRlcy5sZW5ndGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRpY2tzTnVtYmVyID0gbnVsbDtcblx0XHR9XG5cblx0XHR0aGlzLnlTY2FsZSA9IHNjYWxlTGluZWFyKCkuZG9tYWluKFswLjUsIDEwLjVdKS5yYW5nZShbMCwgdGhpcy5oZWlnaHRdKTtcblxuXHRcdC8vIHRoaXMueEF4aXMgPSBheGlzQm90dG9tKCkuc2NhbGUoeFNjYWxlKS50aWNrRm9ybWF0KHRpbWVGb3JtYXQoJyViICVkJykpLnRpY2tTaXplKDApO1xuXHRcdC8vIHRoaXMueEF4aXMgPSBheGlzQm90dG9tKHRoaXMueFNjYWxlKS5zY2FsZSh0aGlzLnhTY2FsZSkudGlja0Zvcm1hdCh0aW1lRm9ybWF0KCclbS8lZCcpKS50aWNrU2l6ZSgwKS8vLnRpY2tzKDIwKTtcblx0XHR0aGlzLnhBeGlzID0gYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkudGlja0Zvcm1hdCh0aW1lRm9ybWF0KCclZC8lbScpKS50aWNrU2l6ZSgwKS50aWNrcyh0aWNrc051bWJlcik7XG5cdFx0Ly8gdGhpcy54QXhpcyA9IGF4aXNCb3R0b20oeFNjYWxlKS5zY2FsZSh4U2NhbGUpLnRpY2tGb3JtYXQodGltZUZvcm1hdCgnJWEgJWQnKSkudGlja1NpemUoMCk7XG5cdFx0dGhpcy55QXhpcyA9IGF4aXNMZWZ0KCkuc2NhbGUodGhpcy55U2NhbGUpLnRpY2tTaXplKDApO1xuXG5cblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLyBMSU5FIFRZUEUgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdFx0dGhpcy5saW5lID0gbGluZSgpXG5cdFx0XHQvLyAuY3VydmUoY3VydmVNb25vdG9uZVgpIC8vU2xpZ2h0IHJvdW5kaW5nIHdpdGhvdXQgdG9vIG11Y2ggZGV2aWF0aW9uXG5cdFx0XHQuY3VydmUoY3VydmVTdGVwKTsgLy9TbGlnaHQgcm91bmRpbmcgd2l0aG91dCB0b28gbXVjaCBkZXZpYXRpb25cblxuXHR9O1xuXG5cdC8vIHRoaXMudXBkYXRlRGF0ZXMgPSBmdW5jdGlvbiAoKSB7XG5cblx0Ly8gICAgIGxldCBwYXJzZWREYXRlcyA9IFtdO1xuXHQvLyAgICAgbGV0IGRheUl0ZXJhYyA9IG1vbWVudCh0aGlzLmFwcC5kYXRhbW9kZWwucGVyaW9kLnN0YXJ0RGF0ZSk7XG5cblx0Ly8gICAgIHdoaWxlIChkYXlJdGVyYWMgPD0gdGhpcy5hcHAuZGF0YW1vZGVsLnBlcmlvZC5lbmREYXRlKSB7XG5cdC8vICAgICAgICAgcGFyc2VkRGF0ZXMucHVzaCh0aGlzLnBhcnNlVGltZShkYXlJdGVyYWMuZm9ybWF0KCdZWVlZLU1NLUREJykpKTtcblx0Ly8gICAgICAgICBkYXlJdGVyYWMuYWRkKDEsICdkYXlzJyk7XG5cdC8vICAgICB9XG5cblx0Ly8gfTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQ3JlYXRlIENIQVJUIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSxyZXNpemUpIHtcblxuXHRcdHRoaXMuZGF0YXNldCA9IGRhdGE7XG5cblx0XHR0aGlzLnNldHVwdmlzKCk7XG5cblx0XHQvL2NsZWFyXG5cdFx0c2VsZWN0KCcjdmlzdWFsaXphdGlvbicpLmh0bWwoJycpO1xuXG5cdFx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICBDcmVhdGUgZm9jdXMgU1ZHXG5cdFx0dGhpcy5mb2N1cyA9IHNlbGVjdCgnI3Zpc3VhbGl6YXRpb24nKS5hcHBlbmQoJ3N2ZycpXG5cdFx0XHQuc3R5bGUoJ3dpZHRoJywgdGhpcy53aWR0aCArIHRoaXMubWFyZ2luLmxlZnQgKyB0aGlzLm1hcmdpbi5yaWdodCAtIDI0MCkgLy8yNDAgaXMgdGhlIHdpZHRoIG9mIHNpZGUgYmFyLiBCZXR0ZXIgdG8gZ2V0IHRoaXMgYnkgY29kZVxuXHRcdFx0LnN0eWxlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCArIHRoaXMubWFyZ2luLnRvcCArIHRoaXMubWFyZ2luLmJvdHRvbSlcblx0XHRcdC5zdHlsZSgnbWF4LXdpZHRoJywnbm9uZScpXG5cdFx0XHQuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcblxuXHRcdC8vQXBwZW5kIGNsaXBwYXRoIHRvIGZvY3VzIGNoYXJ0XG5cdFx0bGV0IGRlZnMgPSB0aGlzLmZvY3VzLmFwcGVuZCgnZGVmcycpO1xuXG5cdFx0ZGVmcy5hcHBlbmQoJ2NsaXBQYXRoJylcblx0XHRcdC5hdHRyKCdpZCcsICdjbGlwJylcblx0XHRcdC5hcHBlbmQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoJ3dpZHRoJywgdGhpcy53aWR0aClcblx0XHRcdC5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG5cblx0XHQvL0FwcGVuZCB4IGF4aXMgdG8gZm9jdXMgY2hhcnRcdFxuXHRcdHRoaXMuZm9jdXMuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICd4IGF4aXMnKVxuXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCAxMylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJyArICh0aGlzLmhlaWdodCArIDkpICsgJyknKVxuXHRcdFx0Ly8gLmNhbGwoYXhpc0JvdHRvbSh4U2NhbGUpKTtcblx0XHRcdC5jYWxsKHRoaXMueEF4aXMpO1xuXG5cblxuXHRcdC8vQXBwZW5kIHkgYXhpcyB0byBmb2N1cyBjaGFydFx0XG5cdFx0dGhpcy5mb2N1cy5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtMTAsMCknKVxuXHRcdFx0LmNhbGwodGhpcy55QXhpcylcblx0XHRcdC5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3RpdGxlcycpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3JvdGF0ZSgtOTApJylcblx0XHRcdC5hdHRyKCd4JywgLSh0aGlzLmhlaWdodCAvIDIpKVxuXHRcdFx0LmF0dHIoJ3knLCAtMzUpXG5cdFx0XHQuYXR0cignZHknLCAnLjcxZW0nKVxuXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCAxNClcblx0XHRcdC5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJylcblx0XHRcdC50ZXh0KCdQb3Npw6fDo28gbm8gcmFua2luZycpO1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gSW5pdGlhdGUgdGhlIHZvcm9ub2kgZnVuY3Rpb24gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gXG5cdFx0dGhpcy52b3Jvbm9pID0gdm9yb25vaSgpXG5cdFx0XHQuZXh0ZW50KFtcblx0XHRcdFx0Wy10aGlzLm1hcmdpbi5sZWZ0LCAtdGhpcy5tYXJnaW4udG9wXSxcblx0XHRcdFx0W3RoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5yaWdodCwgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi5ib3R0b21dXG5cdFx0XHRdKTtcblxuXHRcdC8vSW5pdGlhdGUgdGhlIHZvcm9ub2kgZ3JvdXAgZWxlbWVudFx0XG5cdFx0dGhpcy52b3Jvbm9pR3JvdXAgPSB0aGlzLmZvY3VzLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAndm9yb25vaScpO1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gVG9vbHRpcCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblx0XHR0aGlzLnBvcFVwTmFtZSA9IHRoaXMuZm9jdXMuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC0xMDAsLTEwMCknKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3BvcFVwTmFtZScpXG5cdFx0XHQuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKTtcblxuXHRcdHRoaXMucG9wVXBOYW1lLmFwcGVuZCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICd0b29sdGlwQ2lyY2xlJylcblx0XHRcdC5hdHRyKCdyJywgMzAuNSk7XG5cblx0XHR0aGlzLnBvcFVwTmFtZS5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LnN0eWxlKCdmb250LXNpemUnLCAxMilcblx0XHRcdC5hdHRyKCdjbGFzcycsICd0aXRsZXMnKVxuXHRcdFx0LmF0dHIoJ3knLCAtMTUpO1xuXHRcdFx0XG5cdFx0dGhpcy52aXModGhpcy5kYXRhc2V0LHJlc2l6ZSk7XG5cblx0fTtcblxuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUmVkdWNlIGRhdGFzZXQgdG8gVE9QIE5cblx0dGhpcy5fcmVkdWNlVG9Ub3BOID0gZnVuY3Rpb24gKGRhdGEpIHtcblxuXHRcdGxldCBfdG9wTiA9IHRoaXMudG9wTjtcblx0XHRsZXQgYXJyYXkgPSBbXTtcblxuXHRcdC8vIHJlZHVjZTogZmluZCB0b3AgMTBcblx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcblxuXHRcdFx0bGV0IGlzVG9wTiA9IGZhbHNlO1xuXG5cdFx0XHR2LmRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQucmVjUmFuayA8PSBfdG9wTikge1xuXHRcdFx0XHRcdGlzVG9wTiA9IHRydWU7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGlzVG9wTikgYXJyYXkucHVzaCh2KTtcblxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIGFycmF5O1xuXG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFVQREFURSBWSVNcblx0dGhpcy52aXMgPSBmdW5jdGlvbiAoZGF0YSwgcmVzaXplKSB7XG5cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cblx0XHRpZiAocmVzaXplICE9ICdyZXNpemUnKSB7XG5cblx0XHRcdC8vcmVzZXRcblx0XHRcdHRoaXMudmlzRGF0YXNldCA9IFtdO1xuXHRcdFx0dGhpcy5hbGxWaWRlb3NJRHMgPSBbXTtcblx0XHRcdHRoaXMubmFtZXNCeUlEID0gW107XG5cblx0XHRcdC8vcmVkdWNlIGFuZCBsb2FkIGRhdGFzZXRcblx0XHRcdHRoaXMudmlzRGF0YXNldCA9IHRoaXMuX3JlZHVjZVRvVG9wTihkYXRhLnZpZGVvcywgMSk7XG5cdFx0fVxuXG5cdFx0bGV0IGNoYW5uZWxzID0gW107XG5cblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgZ2F0aGVyIGRhdGFcblx0XHRmb3IgKGxldCBkIG9mIHRoaXMudmlzRGF0YXNldCkge1xuXG5cdFx0XHRsZXQgaSA9IHRoaXMudmlzRGF0YXNldC5pbmRleE9mKGQpO1xuXG5cdFx0XHR0aGlzLmFsbFZpZGVvc0lEc1tpXSA9IGQuaWQ7XG5cdFx0XHR0aGlzLm5hbWVzQnlJRFtkLmlkXSA9IGk7XG5cdFx0XHRzYXZlQ2hhbm5lbChkLmNoYW5uZWwpO1xuXHRcdH1cblxuXG5cdFx0Ly8gU0FWRSBhIGxpc3Qgb2YgQ2hhbm5lbHNcblx0XHRmdW5jdGlvbiBzYXZlQ2hhbm5lbChjaGFubmVsKSB7XG5cdFx0XHRsZXQgaGFzQ2hhbm5lbCA9IGZhbHNlO1xuXHRcdFx0Y2hhbm5lbHMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuXHRcdFx0XHRpZiAoYyA9PSBjaGFubmVsKSBoYXNDaGFubmVsID0gdHJ1ZTtcblx0XHRcdH0pO1xuXG5cdFx0XHRpZiAoIWhhc0NoYW5uZWwpIHtcblx0XHRcdFx0Y2hhbm5lbHMucHVzaChjaGFubmVsKTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdC8vLy8vLy8vLy8vLy8vLy8vLy8vLyByZWRlZmluZSBjb2xvclxuXHRcdC8vIHRoaXMuY29sb3IuZG9tYWluKHRoaXMuYWxsVmlkZW9zSURzKTtcblx0XHR0aGlzLmNvbG9yLmRvbWFpbihjaGFubmVscyk7XG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8gTGluZSB0eXBlOiBDaGFuZ2UgZGF0YSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblx0XHR0aGlzLmxpbmUueChmdW5jdGlvbiAoZCkge1xuXHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShfdGhpcy5wYXJzZVRpbWUoZC5kYXRlKSk7XG5cdFx0fSlcblx0XHRcdC55KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5yZWNSYW5rKTtcblx0XHRcdH0pO1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFZvcm9ub2kgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBcblxuXHRcdC8vQ3JlYXRlIGEgZmxhdCBkYXRhIHZlcnNpb24gZm9yIHRoZSBWb3Jvbm9pXG5cdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cdFx0dGhpcy5mbGF0RGF0YSA9IFtdO1xuXHRcdGZvciAobGV0IGsgaW4gdGhpcy52aXNEYXRhc2V0KSB7XG5cdFx0XHRsZXQga19kYXRhID0gdGhpcy52aXNEYXRhc2V0W2tdO1xuXHRcdFx0Zm9yIChsZXQgZCBvZiBrX2RhdGEuZGF0ZXMpIHtcblx0XHRcdFx0Ly8ga19kYXRhLmRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQucmVjUmFuayA8PSAxMCkgdGhpcy5mbGF0RGF0YS5wdXNoKHtcblx0XHRcdFx0XHRpZDoga19kYXRhLmlkLFxuXHRcdFx0XHRcdHRpdGxlOiBrX2RhdGEudGl0bGUsXG5cdFx0XHRcdFx0ZGF0ZTogZC5kYXRlLFxuXHRcdFx0XHRcdG1vbWVudDogZC5tb21lbnQsXG5cdFx0XHRcdFx0Y2hhbm5lbDoga19kYXRhLmNoYW5uZWwsXG5cdFx0XHRcdFx0bmJfcmVjb21tZW5kYXRpb25zOiBkLm5iX3JlY29tbWVuZGF0aW9ucyxcblx0XHRcdFx0XHRzdW1SZWM6IGtfZGF0YS5zdW1SZWMsXG5cdFx0XHRcdFx0cmVjUmFuazogZC5yZWNSYW5rLFxuXHRcdFx0XHRcdGRhdGE6IGtfZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblxuXHRcdC8vTWF4IHBvc2l0aW9uXG5cdFx0bGV0IG1heFBvc2l0aW9uID0gbmVzdCgpXG5cdFx0XHQua2V5KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBkLmlkO1xuXHRcdFx0fSlcblx0XHRcdC5yb2xsdXAoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIG1pbihkLCBmdW5jdGlvbiAoZykge1xuXHRcdFx0XHRcdHJldHVybiBnLnJlY1Jhbms7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSlcblx0XHRcdC8vIC5yb2xsdXAoZnVuY3Rpb24oZCkge3JldHVybiBtYXgoZCwgZnVuY3Rpb24oZykge3JldHVybiBnLnN1bVJlYzt9KTt9KVxuXHRcdFx0LmVudHJpZXModGhpcy5mbGF0RGF0YSk7XG5cblx0XHQvLyBsZXQgbmVzdGVkRmxhdERhdGEgPSBuZXN0KCkua2V5KGZ1bmN0aW9uIChkKSB7XG5cdFx0Ly8gXHRyZXR1cm4gZC5pZDtcblx0XHQvLyB9KS5lbnRyaWVzKHRoaXMuZmxhdERhdGEpO1xuXHRcdC8vIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cblx0XHQvLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFJlaW5pdGlhdGUgdGhlIHZvcm9ub2kgZnVuY3Rpb25cblxuXHRcdHRoaXMudm9yb25vaS54KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gX3RoaXMueFNjYWxlKF90aGlzLnBhcnNlVGltZShkLmRhdGUpKTtcblx0XHR9KVxuXHRcdFx0LnkoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnlTY2FsZShkLnJlY1JhbmspO1xuXHRcdFx0fSk7XG5cblxuXHRcdC8vIERSQVcgVk9ST05PSVxuXHRcdGxldCB2b3Jvbm9pR3JpZCA9IHRoaXMudm9yb25vaUdyb3VwLnNlbGVjdEFsbCgncGF0aCcpXG5cdFx0XHQuZGF0YSh0aGlzLnZvcm9ub2kucG9seWdvbnModGhpcy5mbGF0RGF0YS5maWx0ZXIoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnBhcnNlVGltZShkLmRhdGUpID49IF90aGlzLnhTY2FsZS5kb21haW4oKVswXSAmIF90aGlzLnBhcnNlVGltZShkLmRhdGUpIDw9IF90aGlzLnhTY2FsZS5kb21haW4oKVsxXTtcblx0XHRcdH0pKSk7XG5cblx0XHR2b3Jvbm9pR3JpZC5leGl0KCkucmVtb3ZlKCk7XG5cblx0XHQvL25ldyBkYXRhXG5cdFx0dm9yb25vaUdyaWQuZW50ZXIoKS5hcHBlbmQoJ3BhdGgnKVxuXHRcdFx0LmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ00nICsgZC5qb2luKCdMJykgKyAnWic7XG5cdFx0XHR9KVxuXHRcdFx0LmRhdHVtKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBkLmRhdGE7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3Zvcm9ub2lDZWxscycpXG5cdFx0XHQvLyAub24oJ21vdXNlb3ZlcicsIHRoaXMuX21vdXNlb3Zlcilcblx0XHRcdC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0X3RoaXMuX21vdXNlT3ZlclNlbGVjdGlvbihkKTtcblx0XHRcdH0pXG5cdFx0XHQvLyAub24oJ21vdXNlb3V0JywgdGhpcy5fbW91c2VvdXQpXG5cdFx0XHQub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0X3RoaXMuX21vdXNlT3V0U2VsZWN0aW9uKGQuaWQpO1xuXHRcdFx0XHQvLyBfdGhpcy5oaWdobGlnaHRPZmYoZC5pZCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdF90aGlzLl9tb3VzZUNsaWNrKGQpO1xuXHRcdFx0fSk7XG5cblxuXHRcdC8vdXBkYXRlIGV4aXN0aW5nIGRhdGFcblx0XHR2b3Jvbm9pR3JpZFxuXHRcdFx0LmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ00nICsgZC5qb2luKCdMJykgKyAnWic7XG5cdFx0XHR9KVxuXHRcdFx0LmRhdHVtKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBkLmRhdGE7XG5cdFx0XHR9KTtcblx0XHQvLyAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcblx0XHQvLyBcdF90aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24oZCk7XG5cdFx0Ly8gfSlcblx0XHQvLyAub24oJ21vdXNlb3V0JywgZnVuY3Rpb24oZCkge1xuXHRcdC8vIF90aGlzLmhpZ2hsaWdodE9mZihkLmlkKTtcblx0XHQvLyB9KVxuXHRcdC8vIC5vbignY2xpY2snLCB0aGlzLl9tb3VzZUNsaWNrKTtcblxuXG5cdFx0Ly9Nb3ZlIHNlbGVjdGVkIGVsZW1lbnQgdG8gdGhlIGZyb250XG5cdFx0c2VsZWN0aW9uLnByb3RvdHlwZS5tb3ZlVG9Gcm9udCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcyk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cblx0XHQvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gQ3JlYXRlIFBMT1QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFxuXHRcdC8vZGF0YVxuXHRcdHRoaXMuZm9jdXNEYXRhID0gdGhpcy5mb2N1cy5zZWxlY3RBbGwoJy5mb2N1cycpXG5cdFx0XHQuZGF0YSh0aGlzLnZpc0RhdGFzZXQpO1xuXG5cdFx0Ly9yZW1vdmUgcHJldmlvdXNcblx0XHR0aGlzLmZvY3VzRGF0YS5leGl0KCkucmVtb3ZlKCk7XG5cblx0XHQvL2FkZCBuZXdzXG5cdFx0bGV0IG5ld0RhdGFQb2ludHMgPSB0aGlzLmZvY3VzRGF0YS5lbnRlcigpLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ2ZvY3VzICcgKyBkLmlkO1xuXHRcdFx0fSk7XG5cblx0XHRzZWxlY3RBbGwoJy5mb2N1cycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gJ2ZvY3VzICcgKyBkLmlkO1xuXHRcdFx0fSk7XG5cblx0XHQvLyBMSU5FU1xuXHRcdGxldCBwYXRoTGluZSA9IG5ld0RhdGFQb2ludHMuYXBwZW5kKCdwYXRoJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdsaW5lJylcblx0XHRcdC5hdHRyKCdjbGlwLXBhdGgnLCAndXJsKCNjbGlwKScpXG5cdFx0XHQuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuXHRcdFx0LnN0eWxlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC5hdHRyKCdkJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLmxpbmUoZC5kYXRlcyk7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gLnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbihkKSB7cmV0dXJuIDQ7fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnN0cm9rZVdpZHRoW21heFBvc2l0aW9uW190aGlzLm5hbWVzQnlJRFtkLmlkXV0udmFsdWUgLSAxXTtcblx0XHRcdH0pXG5cdFx0XHQvLyAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gbWF4UG9zaXRpb25bX3RoaXMubmFtZXNCeUlEW2QuaWRdXS52YWx1ZS8xMDt9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHQvLyByZXR1cm4gX3RoaXMuY29sb3IoZC5jaGFubmVsKTtcblx0XHRcdFx0cmV0dXJuIF90aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCkuY29sb3VyO1xuXHRcdFx0fSlcblx0XHRcdC8vIC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24oZCxpKSB7cmV0dXJuICcjMDAwJzsgfSlcblx0XHRcdC8vIC50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5kZWxheSg1MDApXG5cdFx0XHQudHJhbnNpdGlvbigpLmR1cmF0aW9uKDc1MCkuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKiAxMDA7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMC42KTtcblxuXHRcdHBhdGhMaW5lID0gdGhpcy5mb2N1c0RhdGEuc2VsZWN0KCdwYXRoJyk7XG5cblx0XHRwYXRoTGluZS50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigyMDAwKS5kZWxheSgxNTAwKVxuXHRcdFx0LmF0dHIoJ2QnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMubGluZShkLmRhdGVzKTtcblx0XHRcdH0pXG5cdFx0XHQvLyAuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIGZ1bmN0aW9uKGQpIHtyZXR1cm4gNDt9KVxuXHRcdFx0LnN0eWxlKCdzdHJva2Utd2lkdGgnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMuc3Ryb2tlV2lkdGhbbWF4UG9zaXRpb25bX3RoaXMubmFtZXNCeUlEW2QuaWRdXS52YWx1ZSAtIDFdO1xuXHRcdFx0fSlcblx0XHRcdC8vIC5zdHlsZSgnc3Ryb2tlLXdpZHRoJywgZnVuY3Rpb24oZCkge3JldHVybiBtYXhQb3NpdGlvblt0aGlzLm5hbWVzQnlJRFtkLmlkXV0udmFsdWUvMTA7fSlcblx0XHRcdC5zdHlsZSgnc3Ryb2tlJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuYXBwLmRhdGFtb2RlbC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCkuY29sb3VyO1xuXHRcdFx0fSk7XG5cblxuXHRcdC8vQ0lSQ0xFXG5cdFx0bGV0IGNpcmNsZXMgPSBuZXdEYXRhUG9pbnRzLmFwcGVuZCgnY2lyY2xlJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdjaXJjbGUnKVxuXHRcdFx0LmF0dHIoJ2NsaXAtcGF0aCcsICd1cmwoI2NsaXApJylcblx0XHRcdC5hdHRyKCdjeCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy54U2NhbGUoX3RoaXMucGFyc2VUaW1lKGQuZGF0ZXNbMF0uZGF0ZSkpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdjeScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5kYXRlc1swXS5yZWNSYW5rKTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnN0eWxlKCdzdHJva2UnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMuYXBwLmdldENoYW5uZWxCeU5hbWUoZC5jaGFubmVsKS5jb2xvdXI7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0aWYgKGQuZGF0ZXNbMF0udmlld3MgPT0gLTEpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ3doaXRlJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gX3RoaXMuYXBwLmdldENoYW5uZWxCeU5hbWUoZC5jaGFubmVsKS5jb2xvdXI7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZS13aWR0aCcsIDQpXG5cdFx0XHQvLyAuYXR0cigncicsIDEwKVxuXHRcdFx0LmF0dHIoJ3InLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMuc3Ryb2tlV2lkdGhbbWF4UG9zaXRpb25bX3RoaXMubmFtZXNCeUlEW2QuaWRdXS52YWx1ZSAtIDFdO1xuXHRcdFx0fSlcblx0XHRcdC50cmFuc2l0aW9uKCkuZHVyYXRpb24oNzUwKS5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gaSAqIDEwMDtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAxKTtcblxuXHRcdGNpcmNsZXMgPSB0aGlzLmZvY3VzRGF0YS5zZWxlY3QoJ2NpcmNsZScpO1xuXG5cdFx0Y2lyY2xlcy50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbigyMDAwKS5kZWxheSgxNTAwKVxuXHRcdFx0LmF0dHIoJ2N4JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShfdGhpcy5wYXJzZVRpbWUoZC5kYXRlc1swXS5kYXRlKSk7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ2N5JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnlTY2FsZShkLmRhdGVzWzBdLnJlY1JhbmspO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdyJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnN0cm9rZVdpZHRoW21heFBvc2l0aW9uW190aGlzLm5hbWVzQnlJRFtkLmlkXV0udmFsdWUgLSAxXTtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ3N0cm9rZScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmFwcC5kYXRhbW9kZWwuZ2V0Q2hhbm5lbEJ5TmFtZShkLmNoYW5uZWwpLmNvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRpZiAoZC5kYXRlc1swXS52aWV3cyA9PSAtMSkge1xuXHRcdFx0XHRcdHJldHVybiAnd2hpdGUnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmFwcC5kYXRhbW9kZWwuZ2V0Q2hhbm5lbEJ5TmFtZShkLmNoYW5uZWwpLmNvbG91cjtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0fTtcblxuXHR0aGlzLmdldEZsYXREYXRhQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZsYXREYXRhLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAodGhpcy5mbGF0RGF0YVtpXS5pZCA9PSBpZCkgcmV0dXJuIHRoaXMuZmxhdERhdGFbaV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBWb3Jvbm9pIG1vdXNlb3ZlciBhbmQgbW91c2VvdXQgZnVuY3Rpb25zXHRcblx0dGhpcy5fbW91c2VPdmVyU2VsZWN0aW9uID0gZnVuY3Rpb24gKGQpIHtcblx0XHQvLyB0aGlzLnNob3dwb3B1cChkKTtcblx0XHR0aGlzLmFwcC5pdGVtTW91c2VPdmVyKGQsJ3JhbmsnKTtcblx0fTtcblxuXHR0aGlzLl9tb3VzZU91dFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGQpIHtcblx0XHQvLyB0aGlzLmhpZ2hsaWdodE9mZihkKTtcblx0XHR0aGlzLmFwcC5pdGVtTW91c2VPdXQoZCwncmFuaycpO1xuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0T24gPSBmdW5jdGlvbiAoZGF0YSxzb3VyY2VUeXBlKSB7XG5cblx0XHR0aGlzLmZvY3VzLnNlbGVjdEFsbCgnLmZvY3VzJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0aWYoc291cmNlVHlwZSA9PSAncmFuaycpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGQueW91dHViZUlEID09PSBkYXRhLmRhdGEueW91dHViZUlEKSA/IDEgOiAwLjA3O1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNvdXJjZVR5cGUgPT0gJ2NoYW5uZWwnKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChkLmNoYW5uZWwgPT09IGRhdGEubmFtZSkgPyAxIDogMC4wNztcblx0XHRcdFx0fSBlbHNlIGlmIChzb3VyY2VUeXBlID09ICd2aWRlbycpIHtcblx0XHRcdFx0XHRyZXR1cm4gKGQueW91dHViZUlEID09PSBkYXRhLnlvdXR1YmVJRCkgPyAxIDogMC4wNztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHQvL3BvcHVwXG5cdFx0aWYoc291cmNlVHlwZSA9PSAncmFuaycpIHRoaXMuc2hvd3BvcHVwKGRhdGEpO1xuXHR9O1xuXG5cdHRoaXMuc2hvd3BvcHVwID0gZnVuY3Rpb24oZCkge1xuXHRcdHNlbGVjdCgnLnBvcFVwTmFtZScpLm1vdmVUb0Zyb250KCk7IC8vTW92ZSB0aGUgdG9vbHRpcCB0byB0aGUgZnJvbnRcblxuXHRcdHRoaXMucG9wVXBOYW1lLmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRoaXMueFNjYWxlKHRoaXMucGFyc2VUaW1lKGQuZGF0ZSkpICsgJywnICsgdGhpcy55U2NhbGUoZC5yZWNSYW5rKSArICcpJyk7IC8vQ2hhbmdlIHBvc2l0aW9uLCBzaXplIG9mIGNpcmNsZSBhbmQgdGV4dCBvZiB0b29sdGlwXG5cblx0XHRsZXQgY2lyY2xlU2l6ZSA9IDEwO1xuXG5cdFx0dGhpcy5wb3BVcE5hbWUuc2VsZWN0KCcudG9vbHRpcENpcmNsZScpXG5cdFx0XHQvLyAuc3R5bGUoJ2ZpbGwnLCB0aGlzLmNvbG9yKGQuY2hhbm5lbCkpXG5cdFx0XHQuc3R5bGUoJ2ZpbGwnLCB0aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCkuY29sb3VyKVxuXHRcdFx0LmF0dHIoJ3InLCBjaXJjbGVTaXplKTtcblxuXHRcdHRoaXMucG9wVXBOYW1lLnNlbGVjdCgndGV4dCcpLnRleHQoZC5tb21lbnQuZm9ybWF0KCdNTU0gRCcpICsgJzogJyArIGQudGl0bGUgKyAnIChSYW5rOiAnICsgZC5yZWNSYW5rICsgJyknKTtcblxuXHRcdC8vZml4IHBvcHVvcCBwb3NpdGlvbiBpZiB0ZXh0IGlzIG91dCBvZiBib3VuZGFyaWVzIHRvIHRsZWYgb3IgdGkgdGhlIHJpZ2h0XG5cdFx0aWYgKCh0aGlzLnBvcFVwTmFtZS5ub2RlKCkuZ2V0Q1RNKCkuZSAtIHRoaXMubWFyZ2luLmxlZnQpIC0gKHRoaXMucG9wVXBOYW1lLm5vZGUoKS5nZXRCQm94KCkud2lkdGggLyAyKSA8IDApIHtcblx0XHRcdHRoaXMucG9wVXBOYW1lLnNlbGVjdCgndGV4dCcpLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpO1xuXHRcdH0gZWxzZSBpZiAoKHRoaXMucG9wVXBOYW1lLm5vZGUoKS5nZXRDVE0oKS5lIC0gdGhpcy5tYXJnaW4ubGVmdCkgKyAodGhpcy5wb3BVcE5hbWUubm9kZSgpLmdldEJCb3goKS53aWR0aCAvIDIpID4gdGhpcy53aWR0aCAtIDEyMCkge1xuXHRcdFx0dGhpcy5wb3BVcE5hbWUuc2VsZWN0KCd0ZXh0Jykuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ2VuZCcpO1xuXHRcdH1cblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmZvY3VzLnNlbGVjdEFsbCgnLmZvY3VzJykuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0XHR0aGlzLnBvcFVwTmFtZS5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC0xMDAsLTEwMCknKTtcblx0XHR0aGlzLnBvcFVwTmFtZS5zZWxlY3QoJ3RleHQnKS5zdHlsZSgndGV4dC1hbmNob3InLCAnbWlkZGxlJyk7XG5cdH07XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBWT1JPTk9JIENMSUNLIC0gQUREIE1PREFMXG5cdHRoaXMuX21vdXNlQ2xpY2sgPSBmdW5jdGlvbiAoZCkge1xuXHRcdHRoaXMuYXBwLnNob3dEZXRhaWxzKGQsJ3JhbmsnKTtcblx0fTtcblxuXHR0aGlzLmV4aXQgPSBmdW5jdGlvbigpIHtcblx0XHRjb25zdCBkdXJhdGlvbiA9IDUwMDtcblxuXHRcdC8vIHRoaXMuZm9jdXNEYXRhXG5cdFx0dGhpcy5mb2N1cy5zZWxlY3RBbGwoJy5mb2N1cycpXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oZHVyYXRpb24vMilcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDApO1xuXHR9O1xuXG59IiwiLy9tb2R1bGVzXG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcy9jaHJvbWEubWluJztcblxuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbic7XG5pbXBvcnQge21heH0gZnJvbSAnZDMtYXJyYXkvZGlzdC9kMy1hcnJheS5taW4nO1xuaW1wb3J0IHtheGlzQm90dG9tLGF4aXNMZWZ0fSBmcm9tICdkMy1heGlzL2Rpc3QvZDMtYXhpcy5taW4nO1xuaW1wb3J0IHtzY2FsZU9yZGluYWwsc2NhbGVMaW5lYXIsc2NhbGVCYW5kfSBmcm9tICdkMy1zY2FsZS9kaXN0L2QzLXNjYWxlLm1pbic7XG5pbXBvcnQge3NjaGVtZVNldDN9IGZyb20gJ2QzLXNjYWxlLWNocm9tYXRpYy9kaXN0L2QzLXNjYWxlLWNocm9tYXRpYy5taW4nO1xucmVxdWlyZSgnZDMtdHJhbnNpdGlvbi9kaXN0L2QzLXRyYW5zaXRpb24ubWluJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcFZpZGVvc1ZpcyhhcHApIHtcblxuXHR0aGlzLmFwcCA9IGFwcDtcblxuXHQvLyB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHR0aGlzLnRvcFRlbkRhdGEgPSBbXTtcblx0dGhpcy52aXNDb250YWluZXIgPSAnJztcblxuXHR0aGlzLndpbmRvd1dpZHRoID0gMDtcblx0dGhpcy5oZWlnaHQgPSAwO1xuXHR0aGlzLndpZHRoID0gMDtcblxuXHR0aGlzLm1hcmdpbiA9IHtcblx0XHR0b3A6IDMwLFxuXHRcdHJpZ2h0OiAyNTAsXG5cdFx0Ym90dG9tOiAzMCxcblx0XHRsZWZ0OiAxMFxuXHR9O1xuXG5cdHRoaXMuc3ZnID0gJyc7XG5cdHRoaXMudmlzID0gJyc7XG5cblx0dGhpcy54U2NhbGUgPScnO1xuXHR0aGlzLnlTY2FsZSA9Jyc7XG5cblx0dGhpcy54QXhpcztcblx0dGhpcy55QXhpcztcblxuXHR0aGlzLmNvbG91clNjYWxlID0gW107XG5cblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0dGhpcy52aXNDb250YWluZXIgPSBzZWxlY3QoJyN0b3AtY2hhbm5lbHMnKTtcblxuXHRcdC8vIHRoaXMuY29sb3VyID0gc2NhbGVPcmRpbmFsKHNjaGVtZVBhaXJlZCk7XG5cdFx0dGhpcy5jb2xvdXIgPSBzY2FsZU9yZGluYWwoc2NoZW1lU2V0Myk7XG5cblx0XHR0aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cdFx0dGhpcy5zZXR1cFZpcygpO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuXHRcdFx0X3RoaXMucmVzaXplKCk7XG5cdFx0fSk7XG5cdFx0XG5cdH07XG5cblx0dGhpcy5fc2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvL3NpemVcblx0XHR0aGlzLndpbmRvd1dpZHRoID0gdGhpcy52aXNDb250YWluZXIubm9kZSgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuXHRcdHRoaXMud2lkdGggPSB0aGlzLndpbmRvd1dpZHRoIC0gdGhpcy5tYXJnaW4ubGVmdCAtIHRoaXMubWFyZ2luLnJpZ2h0O1xuXHRcdHRoaXMuaGVpZ2h0ID0gMzAwIC0gdGhpcy5tYXJnaW4udG9wIC0gdGhpcy5tYXJnaW4uYm90dG9tO1xuXHR9O1xuXG5cdHRoaXMuc2V0dXBWaXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMudmlzQ29udGFpbmVyLmh0bWwoJycpO1xuXG5cblx0XHR0aGlzLnN2ZyA9IHRoaXMudmlzQ29udGFpbmVyLmFwcGVuZCgnc3ZnJylcblx0XHRcdC5hdHRyKCd3aWR0aCcsIHRoaXMud2lkdGggKyB0aGlzLm1hcmdpbi5sZWZ0ICsgdGhpcy5tYXJnaW4ucmlnaHQpXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgdGhpcy5oZWlnaHQgKyB0aGlzLm1hcmdpbi50b3AgKyB0aGlzLm1hcmdpbi5ib3R0b20pO1xuXG5cblx0XHQvL3NjYWxlXG5cdFx0dGhpcy54U2NhbGUgPSBzY2FsZUxpbmVhcigpXG5cdFx0XHQucmFuZ2UoWzAsIHRoaXMud2lkdGhdKTtcblx0XHR0aGlzLnlTY2FsZSA9IHNjYWxlQmFuZCgpXG5cdFx0XHQucmFuZ2UoW3RoaXMuaGVpZ2h0LCAwXSk7XG5cblxuXHRcdC8vIEFYSVNcblx0XHR0aGlzLnhBeGlzID0gdGhpcy52aXNDb250YWluZXIuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCdjbGFzcycsICd4IGF4aXMnKVxuXHRcdFx0LmF0dHIoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoMCwnICsgdGhpcy5oZWlnaHQgKyAnKScpO1xuXG5cdFx0dGhpcy55QXhpcyA9IHRoaXMudmlzQ29udGFpbmVyLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAneSBheGlzJylcblx0XHRcdC5jYWxsKGF4aXNMZWZ0KHRoaXMueVNjYWxlKS50aWNrU2l6ZSgwKS50aWNrRm9ybWF0KCcnKSk7XG5cblx0XHQvL1ZJU1xuXHRcdHRoaXMudmlzID0gdGhpcy5zdmcuYXBwZW5kKCdnJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0aGlzLm1hcmdpbi5sZWZ0ICsgJywnICsgdGhpcy5tYXJnaW4udG9wICsgJyknKTtcblx0fTtcblxuXHQvLy0tLS0gUkVTSVpFXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdC8vd2lkdGggb25seVxuXHRcdGlmICh0aGlzLndpbmRvd1dpZHRoICE9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIHtcblx0XHRcdC8vZGVsYXkuLi4gZW5kIHJlc2l6aW5nXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF90aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwVmlzKCk7XG5cdFx0XHRcdF90aGlzLnVwZGF0ZShfdGhpcy50b3BUZW5EYXRhLCdyZXNpemUnKTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oZGF0YSxyZXNpemUpIHtcblxuXHRcdGlmICghcmVzaXplKSB7XG5cblx0XHRcdHRoaXMudG9wVGVuRGF0YSA9IGRhdGEuY2hhbm5lbHMuc2xpY2UoMCwgMTApO1xuXG5cdFx0XHQvL2ludmVyc2Ugb3JkZXJcblx0XHRcdHRoaXMudG9wVGVuRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBhLm51bWJlclJlY29tbWVuZGF0aW9ucyAtIGIubnVtYmVyUmVjb21tZW5kYXRpb25zO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpO1xuXHRcdHRoaXMudXBkYXRlQXhpcygpO1xuXHRcdHRoaXMudXBkYXRlVmlzKCk7XG5cdH07XG5cblx0dGhpcy51cGRhdGVTY2FsZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMueFNjYWxlLmRvbWFpbihbMCwgbWF4KHRoaXMudG9wVGVuRGF0YSwgZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBkLm51bWJlclJlY29tbWVuZGF0aW9ucztcblx0XHR9KV0pO1xuXG5cdFx0dGhpcy55U2NhbGUuZG9tYWluKHRoaXMudG9wVGVuRGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcblx0XHRcdHJldHVybiBkLm5hbWU7XG5cdFx0fSkpLnBhZGRpbmcoMC4yKTtcblx0fTtcblxuXHR0aGlzLnVwZGF0ZUF4aXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdHRoaXMueUF4aXMuY2FsbChheGlzQm90dG9tKHRoaXMueFNjYWxlKS50aWNrcygwKS50aWNrRm9ybWF0KCcnKSk7XG5cblx0XHQvLyB4LUF4aXMgbGFiZWxzXG5cdFx0Ly8gLmNhbGwoYXhpc0JvdHRvbSh0aGlzLnhTY2FsZSkudGlja3MoNSkudGlja0Zvcm1hdChmdW5jdGlvbiAoZCkge1xuXHRcdC8vIFx0cmV0dXJuIGQ7XG5cdFx0Ly8gfSkpO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGVWaXMgPSBmdW5jdGlvbigpIHtcblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdC8vcmVtb3ZlIGl0IGFsbFxuXHRcdGxldCBub2RlcyA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLm5vZGUnKVxuXHRcdFx0LnJlbW92ZSgpO1xuXG5cdFx0Ly9uZXcgZGF0YVxuXHRcdG5vZGVzID0gdGhpcy52aXMuc2VsZWN0QWxsKCcubm9kZScpXG5cdFx0XHQuZGF0YSh0aGlzLnRvcFRlbkRhdGEpO1xuXG5cdFx0Ly9hZGQgZWxtZW50c1xuXHRcdGxldCBuZXdOb2RlcyA9IG5vZGVzLmVudGVyKClcblx0XHRcdC5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ25vZGUnKTtcblx0XHRcblx0XHRuZXdOb2Rlcy5hcHBlbmQoJ3JlY3QnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2JhcicpO1xuXG5cdFx0bmV3Tm9kZXMuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdiYXItdGl0bGUnKTtcblxuXHRcdG5ld05vZGVzLmFwcGVuZCgndGV4dCcpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYmFyLXZhbHVlJyk7XG5cblxuXHRcdC8vdXBkYXRlIGVsZW1lbnRzXG5cdFx0bm9kZXMgPSB0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJyk7XG5cblx0XHRub2Rlcy5zZWxlY3RBbGwoJy5iYXInKVxuXHRcdFx0LmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHQvLyByZXR1cm4gX3RoaXMuY29sb3VyKGQubmFtZSk7XG5cdFx0XHRcdHJldHVybiBkLmNvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneCcsIDApXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgX3RoaXMueVNjYWxlLmJhbmR3aWR0aCgpKVxuXHRcdFx0LmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueVNjYWxlKGQubmFtZSk7XG5cdFx0XHR9KVxuXHRcdFx0Ly8gLnN0eWxlKCdjdXJzb3InLCdwb2ludGVyJylcblx0XHRcdC5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0Ly9jaGFuZ2UgY29sb3Jcblx0XHRcdFx0X3RoaXMuX21vdXNlT3ZlclNlbGVjdGlvbihkKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0Ly9iYWNrIHRvIG5vcm1hbFxuXHRcdFx0XHRfdGhpcy5fbW91c2VPdXRTZWxlY3Rpb24oZCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdC8vb3BlbiBwb3B1cFxuXHRcdFx0XHRfdGhpcy5fY2xpY2soZCk7XG5cdFx0XHRcdC8vIHJhbmtGbG93VmlzLnNob3dEZXRhaWxzKGQpO1xuXHRcdFx0fSlcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbig3NTApXG5cdFx0XHQuZGVsYXkoZnVuY3Rpb24gKGQsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKiAxMDA7XG5cdFx0XHR9KS5hdHRyKCd3aWR0aCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy54U2NhbGUoZC5udW1iZXJSZWNvbW1lbmRhdGlvbnMpO1xuXHRcdFx0fSk7XG5cblx0XHRub2Rlcy5zZWxlY3RBbGwoJy5iYXItdGl0bGUnKVxuXHRcdFx0LmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueFNjYWxlKGQubnVtYmVyUmVjb21tZW5kYXRpb25zKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5uYW1lKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZHgnLCAnLjM1ZW0nKSAvL3RoaXMubWFyZ2luIHJpZ2h0XG5cdFx0XHQuYXR0cignZHknLCAnMS4zNWVtJykgLy92ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMHB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC50ZXh0KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiAoZC5uYW1lKTtcblx0XHRcdH0pXG5cdFx0XHQudHJhbnNpdGlvbigpXG5cdFx0XHQuZHVyYXRpb24oNzUwKVxuXHRcdFx0LmRlbGF5KGZ1bmN0aW9uIChkLCBpKSB7XG5cdFx0XHRcdHJldHVybiA3NTAgKyAoaSAqIDEwMCk7XG5cdFx0XHR9KVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cblx0XHRub2Rlcy5zZWxlY3RBbGwoJy5iYXItdmFsdWUnKVxuXHRcdFx0LmF0dHIoJ3gnLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueFNjYWxlKGQubnVtYmVyUmVjb21tZW5kYXRpb25zKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy55U2NhbGUoZC5uYW1lKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZHgnLCAnLS4zNWVtJykgLy90aGlzLm1hcmdpbiByaWdodFxuXHRcdFx0LmF0dHIoJ2R5JywgJzEuMTVlbScpIC8vdmVydGljYWwgYWxpZ24gbWlkZGxlXG5cdFx0XHQuYXR0cigndGV4dC1hbmNob3InLCAnZW5kJylcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMnB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnN0eWxlKCdmb250LXdlaWdodCcsICdib2xkJylcblx0XHRcdC5zdHlsZSgnZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdGxldCB0ZXh0Q29sb3VyID0gY2hyb21hKDAsIDAsIDAsIDAuOSkuaGV4KCk7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYXN0ID0gY2hyb21hLmNvbnRyYXN0KGQuY29sb3VyLCB0ZXh0Q29sb3VyKTtcblx0XHRcdFx0aWYgKGNvbnRyYXN0IDwgNC41KSB0ZXh0Q29sb3VyID0gY2hyb21hKDI1NSwgMjU1LCAyNTUsIDAuODUpLmhleCgpO1xuXHRcdFx0XHRyZXR1cm4gdGV4dENvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnRleHQoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIChkLm51bWJlclJlY29tbWVuZGF0aW9ucyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gNzUwICsgKGkgKiAxMDApO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdH07XG5cblx0dGhpcy5leGl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSA1MDA7XG5cdFx0bGV0IGJhciA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLmJhcicpO1xuXHRcdGJhci50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbilcblx0XHRcdC5hdHRyKCd3aWR0aCcsIDApO1xuXG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbi8yKVxuXHRcdFx0Ly8gLmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5iYXItdmFsdWUnKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKGR1cmF0aW9uKVxuXHRcdFx0LmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0fTtcblxuXHR0aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0YXBwLml0ZW1Nb3VzZU92ZXIoZCwgJ2NoYW5uZWwnKTtcblx0fTtcblxuXHR0aGlzLl9tb3VzZU91dFNlbGVjdGlvbiA9IGZ1bmN0aW9uKGQpIHtcblx0XHRhcHAuaXRlbU1vdXNlT3V0KGQsICdjaGFubmVsJyk7XG5cdH07XG5cblx0dGhpcy5fY2xpY2sgPSBmdW5jdGlvbihkKSB7XG5cdFx0Y29uc29sZS5sb2coZCk7XG5cdFx0Ly8gdGhpcy5hcHAuc2hvd0RldGFpbHMoZCwndmlkZW8nKTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9uID0gZnVuY3Rpb24gKGNoYW5uZWxOYW1lKSB7XG5cblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJylcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIGZ1bmN0aW9uKGQpIHtcblx0XHRcdFx0aWYoZC5uYW1lID09PSBjaGFubmVsTmFtZSkge1xuXHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAwLjU7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJylcblx0XHRcdC5zdHlsZSgnZm9udC13ZWlnaHQnLCBmdW5jdGlvbihkKSB7XG5cdFx0XHRcdGlmKGQubmFtZSA9PT0gY2hhbm5lbE5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gJ2JvbGQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJykuc3R5bGUoJ29wYWNpdHknLCAxKTtcblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5iYXItdGl0bGUnKS5zdHlsZSgnZm9udC13ZWlnaHQnLCAnbm9ybWFsJyk7XG5cdH07XG5cbn0iLCIvL21vZHVsZXNcbmltcG9ydCBjaHJvbWEgZnJvbSAnY2hyb21hLWpzL2Nocm9tYS5taW4nO1xuXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uJztcbmltcG9ydCB7bWF4fSBmcm9tICdkMy1hcnJheS9kaXN0L2QzLWFycmF5Lm1pbic7XG5pbXBvcnQge2F4aXNCb3R0b20sYXhpc0xlZnR9IGZyb20gJ2QzLWF4aXMvZGlzdC9kMy1heGlzLm1pbic7XG5pbXBvcnQge3NjYWxlT3JkaW5hbCxzY2FsZUxpbmVhcixzY2FsZUJhbmR9IGZyb20gJ2QzLXNjYWxlL2Rpc3QvZDMtc2NhbGUubWluJztcbmltcG9ydCB7c2NoZW1lU2V0M30gZnJvbSAnZDMtc2NhbGUtY2hyb21hdGljL2Rpc3QvZDMtc2NhbGUtY2hyb21hdGljLm1pbic7XG5yZXF1aXJlKCdkMy10cmFuc2l0aW9uL2Rpc3QvZDMtdHJhbnNpdGlvbi5taW4nKTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BWaWRlb3NWaXMoYXBwKSB7XG5cblx0dGhpcy5hcHAgPSBhcHA7XG5cblx0Ly8gdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblx0dGhpcy50b3BUZW5EYXRhID0gW107XG5cdHRoaXMudmlzQ29udGFpbmVyID0gJyc7XG5cblx0dGhpcy53aW5kb3dXaWR0aCA9IDA7XG5cdHRoaXMuaGVpZ2h0ID0gMDtcblx0dGhpcy53aWR0aCA9IDA7XG5cblx0dGhpcy5tYXJnaW4gPSB7XG5cdFx0dG9wOiAzMCxcblx0XHRyaWdodDogMjUwLFxuXHRcdGJvdHRvbTogMzAsXG5cdFx0bGVmdDogMTBcblx0fTtcblxuXHR0aGlzLnN2ZyA9ICcnO1xuXHR0aGlzLnZpcyA9ICcnO1xuXG5cdHRoaXMueFNjYWxlID0nJztcblx0dGhpcy55U2NhbGUgPScnO1xuXG5cdHRoaXMueEF4aXM7XG5cdHRoaXMueUF4aXM7XG5cblx0dGhpcy5jb2xvdXJTY2FsZSA9IFtdO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdHRoaXMudmlzQ29udGFpbmVyID0gc2VsZWN0KCcjdG9wLXZpZGVvcycpO1xuXG5cdFx0Ly8gdGhpcy5jb2xvdXIgPSBzY2FsZU9yZGluYWwoc2NoZW1lUGFpcmVkKTtcblx0XHR0aGlzLmNvbG91ciA9IHNjYWxlT3JkaW5hbChzY2hlbWVTZXQzKTtcblxuXHRcdHRoaXMuX3NldERpbWVuc2lvbnMoKTtcblx0XHR0aGlzLnNldHVwVmlzKCk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRfdGhpcy5yZXNpemUoKTtcblx0XHR9KTtcblxuXHR9O1xuXG5cdHRoaXMuX3NldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy53aW5kb3dXaWR0aCA9IHRoaXMudmlzQ29udGFpbmVyLm5vZGUoKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblx0XHR0aGlzLndpZHRoID0gdGhpcy53aW5kb3dXaWR0aCAtIHRoaXMubWFyZ2luLmxlZnQgLSB0aGlzLm1hcmdpbi5yaWdodDtcblx0XHR0aGlzLmhlaWdodCA9IDMwMCAtIHRoaXMubWFyZ2luLnRvcCAtIHRoaXMubWFyZ2luLmJvdHRvbTtcblx0fTtcblxuXHR0aGlzLnNldHVwVmlzID0gZnVuY3Rpb24oKSB7XG5cdFx0Ly9jbGVhclxuXHRcdHRoaXMudmlzQ29udGFpbmVyLmh0bWwoJycpO1xuXG5cdFx0dGhpcy5zdmcgPSB0aGlzLnZpc0NvbnRhaW5lci5hcHBlbmQoJ3N2ZycpXG5cdFx0XHQuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoICsgdGhpcy5tYXJnaW4ubGVmdCArIHRoaXMubWFyZ2luLnJpZ2h0KVxuXHRcdFx0LmF0dHIoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0ICsgdGhpcy5tYXJnaW4udG9wICsgdGhpcy5tYXJnaW4uYm90dG9tKTtcblxuXG5cdFx0Ly9zY2FsZVxuXHRcdHRoaXMueFNjYWxlID0gc2NhbGVMaW5lYXIoKVxuXHRcdFx0LnJhbmdlKFswLCB0aGlzLndpZHRoXSk7XG5cdFx0dGhpcy55U2NhbGUgPSBzY2FsZUJhbmQoKVxuXHRcdFx0LnJhbmdlKFt0aGlzLmhlaWdodCwgMF0pO1xuXG5cblx0XHQvLyBBWElTXG5cdFx0dGhpcy54QXhpcyA9IHRoaXMudmlzQ29udGFpbmVyLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAneCBheGlzJylcblx0XHRcdC5hdHRyKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKDAsJyArIHRoaXMuaGVpZ2h0ICsgJyknKTtcblxuXHRcdHRoaXMueUF4aXMgPSB0aGlzLnZpc0NvbnRhaW5lci5hcHBlbmQoJ2cnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ3kgYXhpcycpXG5cdFx0XHQuY2FsbChheGlzTGVmdCh0aGlzLnlTY2FsZSkudGlja1NpemUoMCkudGlja0Zvcm1hdCgnJykpO1xuXG5cdFx0Ly9WSVNcblx0XHR0aGlzLnZpcyA9IHRoaXMuc3ZnLmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdGhpcy5tYXJnaW4ubGVmdCArICcsJyArIHRoaXMubWFyZ2luLnRvcCArICcpJyk7XG5cblx0fTtcblxuXHQvLy0tLS0gUkVTSVpFXG5cdHRoaXMucmVzaXplID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXHRcdC8vd2lkdGggb25seVxuXHRcdGlmICh0aGlzLndpbmRvd1dpZHRoICE9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGgpIHtcblx0XHRcdC8vZGVsYXkuLi4gZW5kIHJlc2l6aW5nXG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLnJlc2l6ZVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdF90aGlzLl9zZXREaW1lbnNpb25zKCk7XG5cdFx0XHRcdF90aGlzLnNldHVwVmlzKCk7XG5cdFx0XHRcdF90aGlzLnVwZGF0ZShfdGhpcy50b3BUZW5EYXRhLCdyZXNpemUnKTtcblx0XHRcdH0sIDI1MCk7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24oZGF0YSxyZXNpemUpIHtcblxuXHRcdGlmICghcmVzaXplKSB7XG5cdFx0XHR0aGlzLnRvcFRlbkRhdGEgPSBkYXRhLnZpZGVvcy5zbGljZSgwLCAxMCk7XG5cdFx0XHQvL2ludmVyc2Ugb3JkZXJcblx0XHRcdHRoaXMudG9wVGVuRGF0YS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0XHRcdHJldHVybiBhLnN1bVJlYyAtIGIuc3VtUmVjO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVTY2FsZSgpO1xuXHRcdHRoaXMudXBkYXRlQXhpcygpO1xuXHRcdHRoaXMudXBkYXRlVmlzKCk7XG5cdH07XG5cdFxuXG5cdHRoaXMudXBkYXRlU2NhbGUgPSBmdW5jdGlvbigpIHtcblx0XHR0aGlzLnhTY2FsZS5kb21haW4oWzAsIG1heCh0aGlzLnRvcFRlbkRhdGEsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC5zdW1SZWM7XG5cdFx0fSldKTtcblxuXHRcdHRoaXMueVNjYWxlLmRvbWFpbih0aGlzLnRvcFRlbkRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRyZXR1cm4gZC50aXRsZTtcblx0XHR9KSkucGFkZGluZygwLjIpO1xuXHR9O1xuXG5cdHRoaXMudXBkYXRlQXhpcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0dGhpcy55QXhpcy5jYWxsKGF4aXNCb3R0b20odGhpcy54U2NhbGUpLnRpY2tzKDApLnRpY2tGb3JtYXQoJycpKTtcblxuXHRcdC8vIHgtQXhpcyBsYWJlbHNcblx0XHQvLyAuY2FsbChheGlzQm90dG9tKHRoaXMueFNjYWxlKS50aWNrcyg1KS50aWNrRm9ybWF0KGZ1bmN0aW9uIChkKSB7XG5cdFx0Ly8gXHRyZXR1cm4gZDtcblx0XHQvLyB9KSk7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZVZpcyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Y29uc3QgX3RoaXMgPSB0aGlzO1xuXG5cdFx0Ly9yZW1vdmUgaXQgYWxsXG5cdFx0bGV0IG5vZGVzID0gdGhpcy52aXMuc2VsZWN0QWxsKCcubm9kZScpXG5cdFx0XHQucmVtb3ZlKCk7XG5cblx0XHQvL25ldyBkYXRhXG5cdFx0bm9kZXMgPSB0aGlzLnZpcy5zZWxlY3RBbGwoJy5ub2RlJylcblx0XHRcdC5kYXRhKHRoaXMudG9wVGVuRGF0YSk7XG5cblx0XHQvL2FkZCBlbG1lbnRzXG5cdFx0bGV0IG5ld05vZGVzID0gbm9kZXMuZW50ZXIoKVxuXHRcdFx0LmFwcGVuZCgnZycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnbm9kZScpO1xuXHRcdFxuXHRcdG5ld05vZGVzLmFwcGVuZCgncmVjdCcpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAnYmFyJyk7XG5cblx0XHRuZXdOb2Rlcy5hcHBlbmQoJ3RleHQnKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgJ2Jhci10aXRsZScpO1xuXG5cdFx0bmV3Tm9kZXMuYXBwZW5kKCd0ZXh0Jylcblx0XHRcdC5hdHRyKCdjbGFzcycsICdiYXItdmFsdWUnKTtcblxuXG5cdFx0Ly91cGRhdGUgZWxlbWVudHNcblx0XHRub2RlcyA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLm5vZGUnKTtcblxuXHRcdG5vZGVzLnNlbGVjdEFsbCgnLmJhcicpXG5cdFx0XHQuYXR0cignZmlsbCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdC8vIHJldHVybiBfdGhpcy5jb2xvdXIoZC5jaGFubmVsKTtcblx0XHRcdFx0Y29uc3QgY2hhbm5lbCA9IF90aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCk7XG5cdFx0XHRcdHJldHVybiBjaGFubmVsLmNvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cigneCcsIDApXG5cdFx0XHQuYXR0cignaGVpZ2h0JywgX3RoaXMueVNjYWxlLmJhbmR3aWR0aCgpKVxuXHRcdFx0LmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueVNjYWxlKGQudGl0bGUpO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnY3Vyc29yJywncG9pbnRlcicpXG5cdFx0XHQub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdF90aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24oZCk7XG5cdFx0XHR9KVxuXHRcdFx0Lm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdF90aGlzLl9tb3VzZU91dFNlbGVjdGlvbihkKTtcblx0XHRcdH0pXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0X3RoaXMuX21vdXNlQ2xpY2soZCk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gaSAqIDEwMDtcblx0XHRcdH0pLmF0dHIoJ3dpZHRoJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShkLnN1bVJlYyk7XG5cdFx0XHR9KTtcblxuXHRcdG5vZGVzLnNlbGVjdEFsbCgnLmJhci10aXRsZScpXG5cdFx0XHQuYXR0cigneCcsIGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiBfdGhpcy54U2NhbGUoZC5zdW1SZWMpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCd5JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnlTY2FsZShkLnRpdGxlKTtcblx0XHRcdH0pXG5cdFx0XHQuYXR0cignZHgnLCAnLjM1ZW0nKSAvL3RoaXMubWFyZ2luIHJpZ2h0XG5cdFx0XHQuYXR0cignZHknLCAnMS4zNWVtJykgLy92ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcblx0XHRcdC5zdHlsZSgnZm9udCcsICcxMHB4IHNhbnMtc2VyaWYnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMClcblx0XHRcdC50ZXh0KGZ1bmN0aW9uIChkKSB7XG5cdFx0XHRcdHJldHVybiAoZC50aXRsZSk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gNzUwICsgKGkgKiAxMDApO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdFx0bm9kZXMuc2VsZWN0QWxsKCcuYmFyLXZhbHVlJylcblx0XHRcdC5hdHRyKCd4JywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIF90aGlzLnhTY2FsZShkLnN1bVJlYyk7XG5cdFx0XHR9KVxuXHRcdFx0LmF0dHIoJ3knLCBmdW5jdGlvbiAoZCkge1xuXHRcdFx0XHRyZXR1cm4gX3RoaXMueVNjYWxlKGQudGl0bGUpO1xuXHRcdFx0fSlcblx0XHRcdC5hdHRyKCdkeCcsICctLjM1ZW0nKSAvL3RoaXMubWFyZ2luIHJpZ2h0XG5cdFx0XHQuYXR0cignZHknLCAnMS4xNWVtJykgLy92ZXJ0aWNhbCBhbGlnbiBtaWRkbGVcblx0XHRcdC5hdHRyKCd0ZXh0LWFuY2hvcicsICdlbmQnKVxuXHRcdFx0LnN0eWxlKCdmb250JywgJzEycHggc2Fucy1zZXJpZicpXG5cdFx0XHQuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJ2JvbGQnKVxuXHRcdFx0LnN0eWxlKCdmaWxsJywgZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0bGV0IHRleHRDb2xvdXIgPSBjaHJvbWEoMCwgMCwgMCwgMC45KS5oZXgoKTtcblx0XHRcdFx0Y29uc3QgY2hhbm5lbCA9IF90aGlzLmFwcC5nZXRDaGFubmVsQnlOYW1lKGQuY2hhbm5lbCk7XG5cdFx0XHRcdGNvbnN0IGNvbnRyYXN0ID0gY2hyb21hLmNvbnRyYXN0KGNoYW5uZWwuY29sb3VyLCB0ZXh0Q29sb3VyKTtcblx0XHRcdFx0aWYgKGNvbnRyYXN0IDwgNC41KSB0ZXh0Q29sb3VyID0gY2hyb21hKDI1NSwgMjU1LCAyNTUsIDAuODUpLmhleCgpO1xuXHRcdFx0XHRyZXR1cm4gdGV4dENvbG91cjtcblx0XHRcdH0pXG5cdFx0XHQuc3R5bGUoJ29wYWNpdHknLCAwKVxuXHRcdFx0LnRleHQoZnVuY3Rpb24gKGQpIHtcblx0XHRcdFx0cmV0dXJuIChkLnN1bVJlYyk7XG5cdFx0XHR9KVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKDc1MClcblx0XHRcdC5kZWxheShmdW5jdGlvbiAoZCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gNzUwICsgKGkgKiAxMDApO1xuXHRcdFx0fSlcblx0XHRcdC5zdHlsZSgnb3BhY2l0eScsIDEpO1xuXG5cdH07XG5cblx0dGhpcy5leGl0ID0gZnVuY3Rpb24oKSB7XG5cdFx0Y29uc3QgZHVyYXRpb24gPSA1MDA7XG5cdFx0bGV0IGJhciA9IHRoaXMudmlzLnNlbGVjdEFsbCgnLmJhcicpO1xuXHRcdGJhci50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbilcblx0XHRcdC5hdHRyKCd3aWR0aCcsIDApO1xuXG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJylcblx0XHRcdC50cmFuc2l0aW9uKClcblx0XHRcdC5kdXJhdGlvbihkdXJhdGlvbi8yKVxuXHRcdFx0Ly8gLmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0XHR0aGlzLnZpcy5zZWxlY3RBbGwoJy5iYXItdmFsdWUnKVxuXHRcdFx0LnRyYW5zaXRpb24oKVxuXHRcdFx0LmR1cmF0aW9uKGR1cmF0aW9uKVxuXHRcdFx0LmF0dHIoJ3gnLCAwKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgMCk7XG5cblx0fTtcblxuXHR0aGlzLl9tb3VzZU92ZXJTZWxlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coZCk7XG5cdFx0Ly8gdGhpcy5oaWdobGlnaHRPbihkKTtcblx0XHR0aGlzLmFwcC5pdGVtTW91c2VPdmVyKGQsJ3ZpZGVvJyk7XG5cdH07XG5cblx0dGhpcy5fbW91c2VPdXRTZWxlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG5cdFx0Ly8gdGhpcy5oaWdobGlnaHRPZmYoZCk7XG5cdFx0dGhpcy5hcHAuaXRlbU1vdXNlT3V0KGQsJ3ZpZGVvJyk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPbiA9IGZ1bmN0aW9uIChpZCwgc291cmNlVHlwZSkge1xuXHRcdHRoaXMudmlzLnNlbGVjdEFsbCgnLm5vZGUnKVxuXHRcdFx0LnN0eWxlKCdvcGFjaXR5JywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoc291cmNlVHlwZSA9PSAndmlkZW8nKSB7XG5cdFx0XHRcdFx0cmV0dXJuIChkLnlvdXR1YmVJRCA9PT0gaWQpID8gMSA6IDAuNTtcblx0XHRcdFx0fSBlbHNlIGlmIChzb3VyY2VUeXBlID09ICdjaGFubmVsJykge1xuXHRcdFx0XHRcdHJldHVybiAoZC5jaGFubmVsID09PSBpZCkgPyAxIDogMC41O1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMudmlzLnNlbGVjdEFsbCgnLmJhci10aXRsZScpXG5cdFx0XHQuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgZnVuY3Rpb24oZCkge1xuXHRcdFx0XHRpZiAoc291cmNlVHlwZSA9PSAndmlkZW8nKSB7XG5cdFx0XHRcdFx0aWYoZC55b3V0dWJlSUQgPT09IGlkKSByZXR1cm4gJ2JvbGQnO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHNvdXJjZVR5cGUgPT0gJ2NoYW5uZWwnKSB7XG5cdFx0XHRcdFx0aWYoZC5jaGFubmVsID09PSBpZCkgcmV0dXJuICdib2xkJztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPZmYgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcubm9kZScpLnN0eWxlKCdvcGFjaXR5JywgMSk7XG5cdFx0dGhpcy52aXMuc2VsZWN0QWxsKCcuYmFyLXRpdGxlJykuc3R5bGUoJ2ZvbnQtd2VpZ2h0JywgJ25vcm1hbCcpO1xuXHR9O1xuXG5cdHRoaXMuX21vdXNlQ2xpY2sgPSBmdW5jdGlvbiAoZCkge1xuXHRcdHRoaXMuYXBwLnNob3dEZXRhaWxzKGQsJ3ZpZGVvJyk7XG5cdH07XG5cbn0iLCJ2YXIgSCA9IHJlcXVpcmUoXCJob2dhbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHZhciBUID0gbmV3IEguVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIjxkaXYgY2xhc3M9XFxcInVrLW1vZGFsLWRpYWxvZ1xcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxidXR0b24gY2xhc3M9XFxcInVrLW1vZGFsLWNsb3NlLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgdWstY2xvc2U+PC9idXR0b24+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLW1vZGFsLWhlYWRlciB1ay1iYWNrZ3JvdW5kLW11dGVkXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLWdyaWQtc21hbGwgdWstZmxleC1taWRkbGVcXFwiIHVrLWdyaWQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtZXhwYW5kXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGgzIGNsYXNzPVxcXCJ1ay1jYXJkLXRpdGxlIHVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXFxcIj5cIik7dC5iKHQudih0LmYoXCJ0aXRsZVwiLGMscCwwKSkpO3QuYihcIjwvaDM+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcXFwiPlwiKTt0LmIodC52KHQuZihcImNoYW5uZWxcIixjLHAsMCkpKTt0LmIoXCI8L3A+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLW1vZGFsLWJvZHkgdWstdGV4dC1jZW50ZXJcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPGlmcmFtZSB3aWR0aD1cXFwiNTQwXFxcIlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICBoZWlnaHQ9XFxcIjMxMFxcXCJcIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIik7dC5iKHQudih0LmYoXCJ5b3V0dWJlSURcIixjLHAsMCkpKTt0LmIoXCJcXFwiXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVxcXCIwXFxcIlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICBhbGxvdz1cXFwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVxcXCJcIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwidWstbW9kYWwtZm9vdGVyXFxcIiB1ay1vdmVyZmxvdy1hdXRvPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPHRhYmxlIGlkPVxcXCJ2aWRlby1kYXRlcy1kZXRhaWxzXFxcIlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICBjbGFzcz1cXFwidWstdGFibGUgdWstdGFibGUtc21hbGwgdWstdGFibGUtaG92ZXIgdWstdGFibGUtZGl2aWRlclxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPHRoZWFkPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8dHI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcIlxcXCI+Jm5ic3A7PC90aD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+VmlzdWFsaXphw6fDtWVzPC90aD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+R29zdGVpPC90aD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+TsOjbyBHb3N0ZWk8L3RoPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5SZWNvbWVuZGHDp8O1ZXM8L3RoPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj48c3BhbiBjbGFzcz1cXFwidWstdGV4dC1zbWFsbFxcXCI+UG9zacOnw6NvIG5vIFJhbmtpbmcgZGUgUmVjb21lbmRhw6fDtWVzPC9zcGFuPjwvdGg+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvdHI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPC90aGVhZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8dGJvZHk+XCIpO3QuYihcIlxcblwiICsgaSk7aWYodC5zKHQuZihcImRhdGVzXCIsYyxwLDEpLGMscCwwLDE0ODgsMTkwOSxcInt7IH19XCIpKXt0LnJzKGMscCxmdW5jdGlvbihjLHAsdCl7dC5iKFwiICAgICAgICAgICAgICAgIDx0cj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZD5cIik7dC5iKHQudih0LmYoXCJkYXRlXCIsYyxwLDApKSk7dC5iKFwiPC90ZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+XCIpO3QuYih0LnYodC5mKFwidmlld3NcIixjLHAsMCkpKTt0LmIoXCI8L3RkPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5cIik7dC5iKHQudih0LmYoXCJsaWtlc1wiLGMscCwwKSkpO3QuYihcIjwvdGQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcInVrLXRleHQtcmlnaHRcXFwiPlwiKTt0LmIodC52KHQuZihcImRpc2xpa2VzXCIsYyxwLDApKSk7dC5iKFwiPC90ZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+XCIpO3QuYih0LnYodC5mKFwibmJfcmVjb21tZW5kYXRpb25zXCIsYyxwLDApKSk7dC5iKFwiPC90ZD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+XCIpO3QuYih0LnYodC5mKFwicmVjUmFua1wiLGMscCwwKSkpO3QuYihcIjwvdGQ+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvdHI+XCIpO3QuYihcIlxcblwiICsgaSk7fSk7Yy5wb3AoKTt9dC5iKFwiICAgICAgICAgICAgPC90Ym9keT5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDwvdGFibGU+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidWstbW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgPGJ1dHRvbiBjbGFzcz1cXFwidWstbW9kYWwtY2xvc2UtZGVmYXVsdFxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiB1ay1jbG9zZT48L2J1dHRvbj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWstbW9kYWwtaGVhZGVyIHVrLWJhY2tncm91bmQtbXV0ZWRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstZ3JpZC1zbWFsbCB1ay1mbGV4LW1pZGRsZVxcXCIgdWstZ3JpZD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay13aWR0aC1leHBhbmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XFxcInVrLWNhcmQtdGl0bGUgdWstbWFyZ2luLXJlbW92ZS1ib3R0b21cXFwiPnt7dGl0bGV9fTwvaDM+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ1ay10ZXh0LW1ldGEgdWstbWFyZ2luLXJlbW92ZS10b3BcXFwiPnt7Y2hhbm5lbH19PC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1tb2RhbC1ib2R5IHVrLXRleHQtY2VudGVyXFxcIj5cXG4gICAgICAgIDxpZnJhbWUgd2lkdGg9XFxcIjU0MFxcXCJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVxcXCIzMTBcXFwiXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQve3t5b3V0dWJlSUR9fVxcXCJcXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XFxcIjBcXFwiXFxuICAgICAgICAgICAgICAgIGFsbG93PVxcXCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhXFxcIlxcbiAgICAgICAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1tb2RhbC1mb290ZXJcXFwiIHVrLW92ZXJmbG93LWF1dG8+XFxuICAgICAgICA8dGFibGUgaWQ9XFxcInZpZGVvLWRhdGVzLWRldGFpbHNcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ1ay10YWJsZSB1ay10YWJsZS1zbWFsbCB1ay10YWJsZS1ob3ZlciB1ay10YWJsZS1kaXZpZGVyXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiXFxcIj4mbmJzcDs8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5WaXN1YWxpemHDp8O1ZXM8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5Hb3N0ZWk8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj5Ow6NvIEdvc3RlaTwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInVrLXRleHQtcmlnaHRcXFwiPlJlY29tZW5kYcOnw7VlczwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcInVrLXRleHQtcmlnaHRcXFwiPjxzcGFuIGNsYXNzPVxcXCJ1ay10ZXh0LXNtYWxsXFxcIj5Qb3Npw6fDo28gbm8gUmFua2luZyBkZSBSZWNvbWVuZGHDp8O1ZXM8L3NwYW4+PC90aD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICAgICAge3sjZGF0ZXN9fVxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkYXRlfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e3ZpZXdzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e2xpa2VzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e2Rpc2xpa2VzfX08L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ1ay10ZXh0LXJpZ2h0XFxcIj57e25iX3JlY29tbWVuZGF0aW9uc319PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidWstdGV4dC1yaWdodFxcXCI+e3tyZWNSYW5rfX08L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgICAgICB7ey9kYXRlc319XFxuICAgICAgICAgICAgPC90Ym9keT5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCIvL21vZHVsZXNcbmltcG9ydCBVSWtpdCBmcm9tICd1aWtpdC9kaXN0L2pzL3Vpa2l0Lm1pbic7XG5pbXBvcnQgZGV0YWlsc011c3RhY2hlIGZyb20gJy4vZGV0YWlscy5odG1sJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24vZGlzdC9kMy1zZWxlY3Rpb24ubWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV0YWlscyhhcHApIHtcblx0dGhpcy5hcHAgPSBhcHA7XG5cblx0dGhpcy5wYWdlRGF0YSA9IHt9O1xuXHR0aGlzLm1vZGFsO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG5cblx0XHR0aGlzLm1vZGFsID0gc2VsZWN0KCcjYXBwJykuYXBwZW5kKCdkaXYnKVxuXHRcdFx0LmF0dHIoJ2lkJywnbW9kYWwtdmlkZW8tZGV0YWlscycpXG5cdFx0XHQuYXR0cignY2xhc3MnLCAndWstbW9kYWwtY29udGFpbmVyJylcblx0XHRcdC5hdHRyKCd1ay1tb2RhbCcsJ3RydWUnKTtcblx0fTtcblxuXHR0aGlzLmFkZE1vZGFsID0gZnVuY3Rpb24gKGQsc291cmNlKSB7IFxuXG5cdFx0bGV0IHlvdXR1YmVJRCA9ICcnO1xuXHRcdGxldCBkYXRlcyA9IFtdO1xuXG5cdFx0aWYgKHNvdXJjZSA9PSAndmlkZW8nKSB7XG5cdFx0XHR5b3V0dWJlSUQgPSBkLnlvdXR1YmVJRDtcblx0XHRcdGRhdGVzID0gZC5kYXRlcztcblx0XHR9IGVsc2UgaWYgKHNvdXJjZSA9PSAncmFuaycpIHtcblx0XHRcdHlvdXR1YmVJRCA9IGQuZGF0YS55b3V0dWJlSUQ7XG5cdFx0XHRkYXRlcyA9IGQuZGF0YS5kYXRlcztcblx0XHR9XG5cblx0XHQvLyBkYXRhXG5cdFx0dGhpcy5wYWdlRGF0YSA9IHtcblx0XHRcdHRpdGxlOiBkLnRpdGxlLFxuXHRcdFx0Y2hhbm5lbDogZC5jaGFubmVsLFxuXHRcdFx0eW91dHViZUlEOiB5b3V0dWJlSUQsXG5cdFx0XHRkYXRlczogZGF0ZXMucmV2ZXJzZSgpLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gZGV0YWlsc011c3RhY2hlKHRoaXMucGFnZURhdGEpO1xuXHRcdHRoaXMubW9kYWwuaHRtbChodG1sKTtcblxuXHRcdFVJa2l0Lm1vZGFsKHRoaXMubW9kYWwubm9kZSgpKS5zaG93KCk7XG5cblx0fTtcblx0XG59IiwidmFyIEggPSByZXF1aXJlKFwiaG9nYW4uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB2YXIgVCA9IG5ldyBILlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHVrLXBhZGRpbmctc21hbGwgdG0tbWFpblxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtY2VudGVyXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGgxIGNsYXNzPVxcXCJ1ay1oZWFkaW5nLXByaW1hcnlcXFwiPlwiKTt0LmIodC52KHQuZihcInRpdGxlXCIsYyxwLDApKSk7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PGJyLz48c3BhbiBjbGFzcz1cXFwidWstaDJcXFwiPlwiKTt0LmIodC52KHQuZihcInN1YnRpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9zcGFuPjwvaDE+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8L2Rpdj5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstcGFkZGluZy1zbWFsbCB0bS1tYWluXFxcIj5cXG5cXHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtY2VudGVyXFxcIj5cXG5cXHRcXHQ8aDEgY2xhc3M9XFxcInVrLWhlYWRpbmctcHJpbWFyeVxcXCI+e3t0aXRsZX19XFxuXFx0XFx0PGJyLz48c3BhbiBjbGFzcz1cXFwidWstaDJcXFwiPnt7c3VidGl0bGV9fTwvc3Bhbj48L2gxPlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCJpbXBvcnQgaGVhZGVyTXVzdGFjaGUgZnJvbSAnLi9oZWFkZXIuaHRtbCc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcblx0XHQvLyBkYXRhXG5cdFx0Y29uc3QgcGFnZURhdGEgPSB7XG5cdFx0XHR0aXRsZTogJ0VsZWnDp8O1ZXMgQnJhc2lsIDIwMTgnLFxuXHRcdFx0c3VidGl0bGU6ICdSYW5rRmxvdyBkYXMgUmVjb21lbmRhw6fDtWVzIGRvIFlvdVR1YmUnLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gaGVhZGVyTXVzdGFjaGUocGFnZURhdGEpO1xuXHRcdHNlbGVjdCgnI2FwcCcpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCdoZWFkZXItc2VjdGlvbicpO1xuXHRcdHNlbGVjdCgnI2hlYWRlci1zZWN0aW9uJykuaHRtbChodG1sKTtcblx0fTtcbn0iLCJ2YXIgSCA9IHJlcXVpcmUoXCJob2dhbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHZhciBUID0gbmV3IEguVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstc2VjdGlvbi14c21hbGwgdWstc2VjdGlvbi1tdXRlZCB0bS1tYWluXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyIHVrLXRleHQtc21hbGwgdWstdGV4dC1tdXRlZFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8aDMgY2xhc3M9XFxcInVrLWgzIHVrLXRleHQtY2VudGVyIHVrLW1hcmdpbi1zbWFsbC10b3BcXFwiPjxzcGFuPlwiKTt0LmIodC52KHQuZihcInRpdGxlXCIsYyxwLDApKSk7dC5iKFwiIDxhIGlkPVxcXCJtZXRob2RvbG9neS10b2dnbGUtaWNvblxcXCIgY2xhc3M9XFxcInVrLWljb24tbGlua1xcXCIgdWstaWNvbj1cXFwicGx1cy1jaXJjbGVcXFwiIHVrLXRvZ2dsZT1cXFwidGFyZ2V0OiAjbWV0aG9kb2xvZ3lcXFwiPjwvYT48L3NwYW4+PC9oMz5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDxkaXYgaWQ9XFxcIm1ldGhvZG9sb2d5XFxcIiBjbGFzcz1cXFwidWstZ3JpZC1kaXZpZGVyIHVrLW1hcmdpbi1sYXJnZS10b3AgdWstbWFyZ2luLW1lZGl1bS1ib3R0b21cXFwiIHVrLWdyaWQgaGlkZGVuPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLTMtNUBtXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJ1ay1oNSB1ay10ZXh0LXVwcGVyY2FzZVxcXCI+Q29sZXRhIGRlIGRhZG9zPC9oNT5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPHA+T3MgZGFkb3MgZGUgZGVzc2UgcHJvamV0byBmb3JhbSBjb2xldGFkb3MgZm9yYW0gY29sZXRhZG9zIHVzYW5kbyB1bSBzY3JpcHQgZW0gUHl0aG9uIGRlc2Vudm9sdmlkbyBwb3LCoDxhIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS9wbmJ0L1lvdVR1YmUtZXhwbG9yZVxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkd1aWxsYXVtZSBDaGFzbG90PC9hPsKgY29tbyBwYXJ0ZSB0byBwcm9qZXRvIEFsZ28gVHJhbnNwYXJlbmN5LiBPIGFsZ29yaXRobSBlbSBxdWVzdMOjbyBmYXogdW1hIGJ1c2NhIG5vIFlvdXR1YmUgdXNhbmRvIHVtYSBwYWxhdnJhLWNoYXZlIGRlZmluaWRhIHBlbG8gdXN1w6FyaW8gcGFyYSBjb2xldGFyIGUgYXJtYXplbmFyIGluZm9ybWHDp8O1ZXMgZG9zIHZpZGVvcyByZWxhY2lvbmFkb3Mgw6AgcGFsYXZyYS1jaGF2ZS4gTWFpcyBlc3BlY2lmaWNhbWVudGUgbsOzcyB1c2Ftb3Mgc2NyaXB0IHBhcmEgQSkgaWRlbnRpZmljYXIgb3MgcXVhdHJvIHByaW1laXJvcyByZXN1bHRhZG9zIGVuY29udHJhZG9zIG5hIHBlc3F1aXNhIG5vIFlvdXR1YmUgcGVsYSBwYWxhdnJhLWNoYXZlLCBCKSBvYnRlciBvcyBwcmltZWlyb3MgcXVhdHJvIHZpZGVvcyByZWxhY2lvbmFkb3MgYW8gcmVzdWx0YWRvcyBkYSBwZXNxdWlzYSwgQykgcmVwZXRpciBhIGV0YXBhIChCKSBxdWF0cm8gdmV6ZXMgc3VjZXNzaXZhbWVudGUgY29tIGNhZGEgdmlkZW8gb2J0aWRvIHBhcmEgY29sZXRhciB2aWRlb3MgcmVsYWNpb25hZG9zLCBlIEQpIGd1YXJkYXIgbyByZXN1bHRhZG8gZW0gYXJxdWl2byBKU09OLiBFc3NlIG9wZXJhw6fDo28gw6kgYW7DoWxvZ2EgYSB1bWEgcGVzc29hIGZhemVyIHVtYSBidXNjYSBwb3IgdW1hIHBhbGF2cmEtY2hhdmUgbm8gWW91dHViZSwgYWJyaXIgb3MgcHJpbWVpcm9zIHF1YXRybyB2aWRlb3MsIGUgbmEgc2VxdWVuY2lhIGNsaWNhciBub3MgcXVhdHJvIHByaW1laXJvcyB2aWRlb3MgcmVjb21lbmRhZG9zLCByZXBldGluZG8gZXNzZSBwcm9jZXNzbyBxdWF0cm8gdmV6ZXMgcGFyYSBjYWRhIHZpZGVvIHF1ZSBmb3IgYWJlcnRvLjwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPHA+RXNzZSBhbGdvcml0bW8gbsOjbyB1c2EgYSBBUEkgcHVibGljYSBkbyBZb3V0dWJlLiBBbyBpbnbDqXMgZGlzc2UsIGVsZSBzaW11bGEgbyBhbWJpZW50ZSBkbyBuYXZlZ2Fkb3Igd2ViIHBhcmEgY29sZXRhciBvcyBlbGVtZW50b3MgKEhUTUwpcXVlIHPDo28gZGVzZW5oYWRvcyBuYXMgcMOhZ2luYXMgZGUgYnVzY2EgZSBkbyB2aXN1YWxpemHDp8OjbyBkZSB2aWRlbyBkbyBZb3V0dWJlIOKAlCB1bSBwcm9jZXNzbyBjb25oZWNpZG8gY29tbyBcXFwic2NyYXBpbmdcXFwiLiBFc3NlIHByb2Nlc3NvIGZheiBjb20gcXVlIGEgY29sZXRhIGRlIGRhZG9zIGZpcXVlIG1haXMgbmV1dHJhLCBldml0YW5kbyBwcmVmZXJlbmNpYXMgcGVzc29haXMgZSBwcmVjb25jZWl0b3Mgc29jaWFpcyBkZWZpbmlkYXMgaW5zY3JpdGFzIG5vIHBlcmZpbCBkbyB1c3XDoXJpby4gT3Ugc2VqYSwgbsOjbyBsZXZlIGVtIGNvbnNpZGVyYcOnw6NvIGFzIHByZWZlcmVuY2lhcyBkbyBwZXJmaWwgZG8gdXN1w6FyaW8gbm8gWW91dHViZSwgbyBoaXN0w7NyaWNvIGRvIG5hdmVnYWRvciwgY29va2llcywgZSBvdXRyb3MgZWxlbWVudG9zIHF1ZSBwb2RlbSBpbnRlcmZlcmlyIG5vIHJhbmtlYW1lbnRvIGdlcmFkbyBwZWxvIFlvdXR1YmUuIE5vIGVudGFudG8sIGlzc28gbsOjbyByZW1vdmUgb3V0cmFzIHZhcmnDoXZlaXMgcXVlIHBvc3NhbSBkaXN0b3JjZXIgb3UgZm9ybWF0YXIgbyByYW5raW5nLCBjb21vIGEgbG9jYWxpemHDp8OjbyBlIHNpc3RlbWEgZG8gY29tcHV0YWRvciBlbSBxdWUgYSBjb2xldGEgZm9pIGZlaXRhLCBhIGxpbmd1YSBlbSBxdWUgbyBzaXN0ZW1hIGVzdGEgY29uZmlndXJhZG8sIG91IHF1YWxxdWVyIG91dHJhIHZhcmnDoXZlbCBxdWUgZmHDp2EgcGFydGUgZG8gcHJvY2Vzc28gZGUgcmFucXVlYW1lbnRvIG7Do28gcmV2ZWxhZGEgcGVsbyBZb3V0dWJlLjwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPHA+UGFyYSBlc3RhIHBlc3F1aXNhIG7Ds3MgY29sZXRhZG9zIHRlcm1vcyByZWxldmFudGVzIMOgcyBlbGVpw6fDtWVzIG5vIEJyYXNpbCwgbWFpcyBlc3BlY2lmaWNhbWVudGUgb3Mgbm9tZXMgZG9zIGNhbmRpZGF0b3MgZSB1bWEgdmFyaWHDp8OjbyBkbyBub21lIGRvIGNhbmRpZGF0byBhY3Jlc2NlbnRhZG8gZGEgcGFsYXZyYSBcXFwicHJlc2lkZW50ZVxcXCIuIENvbGV0YWRvcyBhcyBpbmZvcm1hw6fDtWVzIGRvcyB2aWRlb3MgZG9zIHByaW5jaXBhaXMgY2FuZGlkYXRvcywgYSBzYWJlcjogTHVsYSwgRmVybmFuZG8gSGFkZGFkLCBHZXJhbGRvIEFsY2ttaW4sIEphaXIgQm9sc29uYXJvLCBHdWlsaGVybWUgQm91bG9zLCBDaXJvIEdvbWVzLCBNYXJpbmEgU2lsdmEsIEhlbnJpcXVlIE1laXJlbGVzLCBlIEpvw6NvIEFtb8OqZG8gKGFjcmVzY2VudGFkbyDDoCBsaXN0YSBubyBkaWEgNSBkZSBzZXRlbWJybyBkZSAyMDE4KS4gQ29sZXRhbW9zIGFpbmRhIGluZm9ybWHDp8O1ZXMgZG8gdmlkZW9zIHJlbGFjaW9uYWRvcyBhcyBwYWxhdnJhcy1jaGF2ZXMgXFxcIkVsZWnDp8O1ZXMgMjAxOFxcXCIgZSBcXFwiQnJhemlsIEVsZWN0aW9uc1xcXCIuIEEgY29sZXRhIGRvcyBkYWRvcyBmb2kgZmVpdGEgdXNhbmRvIHVtYSB2ZXogYW8gZGlhLCBhcGVuYXMgcG9yIHVtIGNvbXB1dGFkb3IgKEFwcGxlKSBsb2NhbGl6YWRvIGVtIE1vbnRyZWFsLCBDYW5hZGEsIGVudHJlIG9zIGRpYSAyMyBkZSBhZ29zdG8gZGUgMjAxOCBlIDEwIGRlIG91dHVicm8gZGUgMjAxOCwgZW50cmUgMTkgZSAyMCBob3JhcyAoaG9yw6FyaW8gZGUgQnJhc8OtbGlhKS48L3A+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxwPkNhZGEgY29sZXRhIGRpw6FyaWEgcHJvZHV6aXUgdW0gYXJxdWl2byBwYXJhIGNhZGEgdGVybW8gcGVzcXVpc2Fkby4gT3MgYXJxdWl2b3MgZGUgY2FkYSB0ZXJtbyBmb3JhbSBjb21iaW5hZG9zIGUgcmVlc3RydXR1cmFkb3MgZW0gdW0gw7puaWNvIGRhdGFzZXQgcGFyYSBnZXJhciBpbmZvcm1hw6fDtWVzIGNvbW8gbyBudW1lcm8gdG90YWwgZGUgdmV6ZXMgcXVlIHVtIHZpZGVvIGZvciByZWNvbWVuZGFkbyBubyBwZXLDrW9kbyBhZmltIGRlIHNlciB1c2Fkb3MgbmEgcHJvZHXDp8OjbyBkYSB2aXN1YWxpemHDp8OjbyBwcm9wb3N0YSBuZXN0ZSBwcm9qZXRvLjwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay13aWR0aC0yLTVAbVxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwidWstaDUgdWstdGV4dC11cHBlcmNhc2VcXFwiPlJhbmtmbG93PC9oNT5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHRcdDxwPkluc3BpcmFkbyBubyB0cmFiYWxobyBkZcKgPGEgaHJlZj1cXFwiaHR0cDovL2xhYnMucG9sc3lzLm5ldC90b29scy9yYW5rZmxvdy9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5CZXJuaGFyZCBSaWVkZXI8L2E+LCBuw7NzIGRlc2Vudm9sdmVtb3MgdW1hIHZpc3VhbGl6YcOnw6NvIHF1ZSBtb3N0cmEgbyByYW5raW5nIGRvcyB2aWRlb3MgbWFpcyByZWNvbWVuZGFkb3MgcG9yIGRpYSBlbSB1bSBjZXJ0byBwZXLDrW9kbyBkZSB0ZW1wbyAoUmFua2Zsb3cpLiBBIHZpc3VhbGl6YcOnw6NvIGZvaSBkZXNlbnZvbHZpZGEgdXNhbmRvIDxhIGhyZWY9XFxcImh0dHBzOi8vZDNqcy5vcmcvXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+RDMuanM8L2E+wqBlIG1vc3RyYSB0b2RvcyBvcyB2aWRlb3MgcXVlIGFsY2Fuw6dhcmFtIHBlbG8gbWVub3MgYSBxdWludGEgcG9zacOnw6NvIG5vIHJhbmtpbmcgcGFyYSBjYWRhIHRlcm1vIHBlc3F1aXNhZG8gZW0gcXVhbHF1ZXIgZGlhIGRvIHBlcsOtb2RvIG9ic2VydmFkby4gQSBjb3IgZGUgY2FkYSBsaW5oYSDDqSBtYXBlYWRhIHBhcmEgcmVwcmVzZW50YXIgbyBjYW5hbCBkZSBvcmlnZW0gZG8gdmlkZW8uIEEgbGFyZ3VyYSBmdW5jaW9uYSBjb21vIG8gcmVmb3LDp28gdmlzdWFsIHBhcmEgcGFyYSBpbmRpY2FyIGEgbWVsaG9yIHBvc2nDp8OjbyBhbGNhbsOnYWRhIHBlbG8gdmlkZW8gbm8gcGVyw61vZG8sIG1lZGlkbyB0YW1wZW0gbm8gZWl4byB2ZXJ0aWNhbCBkbyBncsOhZmljby4gUGFzc2UgbW91c2UgcG9yIGNpbWEgZGUgY2FkYSBsaW5oYSBwYXJhIHF1ZSBlbGEgc2UgYWNlbmRhIGUgYXMgb3V0cmFzIHNlIGFwYWd1ZW0uIENsaXF1ZSBlbSBjYWRhIHVtYSBkYXMgbGluaGFzIHBhcmEgYWJyaWFyIHVtIGphbmVsYSBjb20gaW5mb3JtYcOnw7VlcyBzb2JyZSBvIHZpZGVvLCBpbmNsdWluZG8gdW0gdmlkZW8gcGxheSBwYXJhIGFzc2lzdGlyIG8gdmlkZW8gbm8gY29udGV4dCwgYXNzaW0gY29tbyBhcyBtw6l0cmljYXMgYsOhc2ljYXMgZG8gdmlkZW8gYSBjYWRhIGRpYSAobnVtZXJvIGRlIHZpc3VhbGl6YcOnw6NvLCBcXFwiZ29zdGVpXFxcIiwgXFxcIm7Do28gZ29zdGVpXFxcIiwgcmVjb21lbmRhw6fDtWVzIGUgcG9zacOnw6NvIG5vIHJhbmtpbmcpLjwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHRcdDxwPkFjb21wYW5oYW5kbyBlc3NhIHZpc3VhbGl6YcOnw6NvIGjDoSBkb2lzIG91dHJvcyBncsOhZmljb3MgaW5kaWNhbmRvIG9zIGRleiB2aWRlb3MgbWFpcyB2aXN0b3MgZSBvcyBkZXogY2FuYWlzIGNvbSBtYWlzIHZpc3VhbGl6YcOnw7Vlcy4gUGFzc2UgbyBtb3VzZSBwb3IgY2ltYSBkYXMgYmFycmFzIGVtIHVtIGRvcyBncsOhZmljb3MgcGFyYSBhY2VuZGVyIGJhcnJhcyBjb3JyZXNwb25kZW50ZXMgbmFzIG91cmFzIHZpc3VhbGl6YcOnw7Vlcy4gQ2xpcXVlIGVtIHVtIGRhcyBiYXJyYXMgZG9zIGRleiB2aWRlb3MgbWFpcyB2aXN0b3MgcGFyYSBvYnRlciBtYWlzIGluZm9ybWHDp8O1ZXMuPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdFx0PHA+TyByYW5rZmxvdyBwZXJtaXRlIGFuYWxpemFyIGEgZXZvbHXDp8O1ZXMgZGUgdmlkZW8gbm8gcmFua2luZyB0aGUgcmVjb21lbmRhw6fDtWVzLCBpZGVudGlmaWNhciB0ZW5kZW5jaWFzIGUgcGFkcsO1ZXMsIGUgb2JzZXJ2YXIgbyBxdWUgdGVtIHNpZG8gcmVjb21lbmRhZG8gcGVsbyBhbGdvcml0bW8gZG8gWW91dHViZS4gRXNzZSBwcm9qZXRvIHBlcm1pdGUgb2JzZXJ2YXIgbsOjbyBhcGVuYXMgcXVhaXMgZm9yYW0gb3MgdmlkZW9zIG1haXMgcmVjb21lbmRhZG9zLCB2aXN0b3MgZSBjdXJ0aWRvcyBwYXJhIGNhZGEgdGVybW8gcGVzcXVpc2FkbywgbWFzIHRhbWLDqW0gYWp1ZGEgYSBpZGVudGlmaWNhciBvcyBwcm9kdXRvcmVzIGRlc3NlcyB2aWRlb3MgZSBhIHJlZGUgZGUgY29uZXjDtWVzIGVudHJlIHZpZGVvcywgcHJvZHV0b3JlcywgZSBlc3BlY3RhZG9yZXMgbmFzIHJlZGVzIHNvY2lhaXMuIElzc28gdGFtYsOpbSBwb2RlIG5vcyBkYXIgYWxndW1hcyBwaXN0YXMgc29icmUgbyBmdW5jaW9uYW1lbnRvIGRvIHNpc3RlbWEgZGUgcmFucXVlYW1lbnRvIHVzYWRvIG5vIFlvdXR1YmUsIGFzc2ltIGNvbW8gcXVhaXMgb3MgdmlkZW9zIG1haXMgcHJvZW1pbmVudGVzIGVtIHVtIHTDs3BpY28gZXNwZWNpZmljbywgZSBxdWFsIGEgbmFycmF0aXZhIGVzc2UgcmFua2luZyBwcm9kdXogbm8gZGViYXRlIHBvbMOtdGljbyBubyBCcmFzaWwgZW0gcGFydGljdWxhciwgZSBuYXMgcmVkZXMgc29jaWFpcyBkZSBmb3JtYSBtYWlzIGdlcmFsLjwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8L2Rpdj5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstc2VjdGlvbi14c21hbGwgdWstc2VjdGlvbi1tdXRlZCB0bS1tYWluXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyIHVrLXRleHQtc21hbGwgdWstdGV4dC1tdXRlZFxcXCI+XFxuICAgICAgICA8aDMgY2xhc3M9XFxcInVrLWgzIHVrLXRleHQtY2VudGVyIHVrLW1hcmdpbi1zbWFsbC10b3BcXFwiPjxzcGFuPnt7dGl0bGV9fSA8YSBpZD1cXFwibWV0aG9kb2xvZ3ktdG9nZ2xlLWljb25cXFwiIGNsYXNzPVxcXCJ1ay1pY29uLWxpbmtcXFwiIHVrLWljb249XFxcInBsdXMtY2lyY2xlXFxcIiB1ay10b2dnbGU9XFxcInRhcmdldDogI21ldGhvZG9sb2d5XFxcIj48L2E+PC9zcGFuPjwvaDM+XFxuICAgICAgICA8ZGl2IGlkPVxcXCJtZXRob2RvbG9neVxcXCIgY2xhc3M9XFxcInVrLWdyaWQtZGl2aWRlciB1ay1tYXJnaW4tbGFyZ2UtdG9wIHVrLW1hcmdpbi1tZWRpdW0tYm90dG9tXFxcIiB1ay1ncmlkIGhpZGRlbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay13aWR0aC0zLTVAbVxcXCI+XFxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwidWstaDUgdWstdGV4dC11cHBlcmNhc2VcXFwiPkNvbGV0YSBkZSBkYWRvczwvaDU+XFxuICAgICAgICAgICAgICAgIDxwPk9zIGRhZG9zIGRlIGRlc3NlIHByb2pldG8gZm9yYW0gY29sZXRhZG9zIGZvcmFtIGNvbGV0YWRvcyB1c2FuZG8gdW0gc2NyaXB0IGVtIFB5dGhvbiBkZXNlbnZvbHZpZG8gcG9ywqA8YSBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vcG5idC9Zb3VUdWJlLWV4cGxvcmVcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5HdWlsbGF1bWUgQ2hhc2xvdDwvYT7CoGNvbW8gcGFydGUgdG8gcHJvamV0byBBbGdvIFRyYW5zcGFyZW5jeS4gTyBhbGdvcml0aG0gZW0gcXVlc3TDo28gZmF6IHVtYSBidXNjYSBubyBZb3V0dWJlIHVzYW5kbyB1bWEgcGFsYXZyYS1jaGF2ZSBkZWZpbmlkYSBwZWxvIHVzdcOhcmlvIHBhcmEgY29sZXRhciBlIGFybWF6ZW5hciBpbmZvcm1hw6fDtWVzIGRvcyB2aWRlb3MgcmVsYWNpb25hZG9zIMOgIHBhbGF2cmEtY2hhdmUuIE1haXMgZXNwZWNpZmljYW1lbnRlIG7Ds3MgdXNhbW9zIHNjcmlwdCBwYXJhIEEpIGlkZW50aWZpY2FyIG9zIHF1YXRybyBwcmltZWlyb3MgcmVzdWx0YWRvcyBlbmNvbnRyYWRvcyBuYSBwZXNxdWlzYSBubyBZb3V0dWJlIHBlbGEgcGFsYXZyYS1jaGF2ZSwgQikgb2J0ZXIgb3MgcHJpbWVpcm9zIHF1YXRybyB2aWRlb3MgcmVsYWNpb25hZG9zIGFvIHJlc3VsdGFkb3MgZGEgcGVzcXVpc2EsIEMpIHJlcGV0aXIgYSBldGFwYSAoQikgcXVhdHJvIHZlemVzIHN1Y2Vzc2l2YW1lbnRlIGNvbSBjYWRhIHZpZGVvIG9idGlkbyBwYXJhIGNvbGV0YXIgdmlkZW9zIHJlbGFjaW9uYWRvcywgZSBEKSBndWFyZGFyIG8gcmVzdWx0YWRvIGVtIGFycXVpdm8gSlNPTi4gRXNzZSBvcGVyYcOnw6NvIMOpIGFuw6Fsb2dhIGEgdW1hIHBlc3NvYSBmYXplciB1bWEgYnVzY2EgcG9yIHVtYSBwYWxhdnJhLWNoYXZlIG5vIFlvdXR1YmUsIGFicmlyIG9zIHByaW1laXJvcyBxdWF0cm8gdmlkZW9zLCBlIG5hIHNlcXVlbmNpYSBjbGljYXIgbm9zIHF1YXRybyBwcmltZWlyb3MgdmlkZW9zIHJlY29tZW5kYWRvcywgcmVwZXRpbmRvIGVzc2UgcHJvY2Vzc28gcXVhdHJvIHZlemVzIHBhcmEgY2FkYSB2aWRlbyBxdWUgZm9yIGFiZXJ0by48L3A+XFxuICAgICAgICAgICAgICAgIDxwPkVzc2UgYWxnb3JpdG1vIG7Do28gdXNhIGEgQVBJIHB1YmxpY2EgZG8gWW91dHViZS4gQW8gaW52w6lzIGRpc3NlLCBlbGUgc2ltdWxhIG8gYW1iaWVudGUgZG8gbmF2ZWdhZG9yIHdlYiBwYXJhIGNvbGV0YXIgb3MgZWxlbWVudG9zIChIVE1MKXF1ZSBzw6NvIGRlc2VuaGFkb3MgbmFzIHDDoWdpbmFzIGRlIGJ1c2NhIGUgZG8gdmlzdWFsaXphw6fDo28gZGUgdmlkZW8gZG8gWW91dHViZSDigJQgdW0gcHJvY2Vzc28gY29uaGVjaWRvIGNvbW8gXFxcInNjcmFwaW5nXFxcIi4gRXNzZSBwcm9jZXNzbyBmYXogY29tIHF1ZSBhIGNvbGV0YSBkZSBkYWRvcyBmaXF1ZSBtYWlzIG5ldXRyYSwgZXZpdGFuZG8gcHJlZmVyZW5jaWFzIHBlc3NvYWlzIGUgcHJlY29uY2VpdG9zIHNvY2lhaXMgZGVmaW5pZGFzIGluc2NyaXRhcyBubyBwZXJmaWwgZG8gdXN1w6FyaW8uIE91IHNlamEsIG7Do28gbGV2ZSBlbSBjb25zaWRlcmHDp8OjbyBhcyBwcmVmZXJlbmNpYXMgZG8gcGVyZmlsIGRvIHVzdcOhcmlvIG5vIFlvdXR1YmUsIG8gaGlzdMOzcmljbyBkbyBuYXZlZ2Fkb3IsIGNvb2tpZXMsIGUgb3V0cm9zIGVsZW1lbnRvcyBxdWUgcG9kZW0gaW50ZXJmZXJpciBubyByYW5rZWFtZW50byBnZXJhZG8gcGVsbyBZb3V0dWJlLiBObyBlbnRhbnRvLCBpc3NvIG7Do28gcmVtb3ZlIG91dHJhcyB2YXJpw6F2ZWlzIHF1ZSBwb3NzYW0gZGlzdG9yY2VyIG91IGZvcm1hdGFyIG8gcmFua2luZywgY29tbyBhIGxvY2FsaXphw6fDo28gZSBzaXN0ZW1hIGRvIGNvbXB1dGFkb3IgZW0gcXVlIGEgY29sZXRhIGZvaSBmZWl0YSwgYSBsaW5ndWEgZW0gcXVlIG8gc2lzdGVtYSBlc3RhIGNvbmZpZ3VyYWRvLCBvdSBxdWFscXVlciBvdXRyYSB2YXJpw6F2ZWwgcXVlIGZhw6dhIHBhcnRlIGRvIHByb2Nlc3NvIGRlIHJhbnF1ZWFtZW50byBuw6NvIHJldmVsYWRhIHBlbG8gWW91dHViZS48L3A+XFxuICAgICAgICAgICAgICAgIDxwPlBhcmEgZXN0YSBwZXNxdWlzYSBuw7NzIGNvbGV0YWRvcyB0ZXJtb3MgcmVsZXZhbnRlcyDDoHMgZWxlacOnw7VlcyBubyBCcmFzaWwsIG1haXMgZXNwZWNpZmljYW1lbnRlIG9zIG5vbWVzIGRvcyBjYW5kaWRhdG9zIGUgdW1hIHZhcmlhw6fDo28gZG8gbm9tZSBkbyBjYW5kaWRhdG8gYWNyZXNjZW50YWRvIGRhIHBhbGF2cmEgXFxcInByZXNpZGVudGVcXFwiLiBDb2xldGFkb3MgYXMgaW5mb3JtYcOnw7VlcyBkb3MgdmlkZW9zIGRvcyBwcmluY2lwYWlzIGNhbmRpZGF0b3MsIGEgc2FiZXI6IEx1bGEsIEZlcm5hbmRvIEhhZGRhZCwgR2VyYWxkbyBBbGNrbWluLCBKYWlyIEJvbHNvbmFybywgR3VpbGhlcm1lIEJvdWxvcywgQ2lybyBHb21lcywgTWFyaW5hIFNpbHZhLCBIZW5yaXF1ZSBNZWlyZWxlcywgZSBKb8OjbyBBbW/DqmRvIChhY3Jlc2NlbnRhZG8gw6AgbGlzdGEgbm8gZGlhIDUgZGUgc2V0ZW1icm8gZGUgMjAxOCkuIENvbGV0YW1vcyBhaW5kYSBpbmZvcm1hw6fDtWVzIGRvIHZpZGVvcyByZWxhY2lvbmFkb3MgYXMgcGFsYXZyYXMtY2hhdmVzIFxcXCJFbGVpw6fDtWVzIDIwMThcXFwiIGUgXFxcIkJyYXppbCBFbGVjdGlvbnNcXFwiLiBBIGNvbGV0YSBkb3MgZGFkb3MgZm9pIGZlaXRhIHVzYW5kbyB1bWEgdmV6IGFvIGRpYSwgYXBlbmFzIHBvciB1bSBjb21wdXRhZG9yIChBcHBsZSkgbG9jYWxpemFkbyBlbSBNb250cmVhbCwgQ2FuYWRhLCBlbnRyZSBvcyBkaWEgMjMgZGUgYWdvc3RvIGRlIDIwMTggZSAxMCBkZSBvdXR1YnJvIGRlIDIwMTgsIGVudHJlIDE5IGUgMjAgaG9yYXMgKGhvcsOhcmlvIGRlIEJyYXPDrWxpYSkuPC9wPlxcbiAgICAgICAgICAgICAgICA8cD5DYWRhIGNvbGV0YSBkacOhcmlhIHByb2R1eml1IHVtIGFycXVpdm8gcGFyYSBjYWRhIHRlcm1vIHBlc3F1aXNhZG8uIE9zIGFycXVpdm9zIGRlIGNhZGEgdGVybW8gZm9yYW0gY29tYmluYWRvcyBlIHJlZXN0cnV0dXJhZG9zIGVtIHVtIMO6bmljbyBkYXRhc2V0IHBhcmEgZ2VyYXIgaW5mb3JtYcOnw7VlcyBjb21vIG8gbnVtZXJvIHRvdGFsIGRlIHZlemVzIHF1ZSB1bSB2aWRlbyBmb3IgcmVjb21lbmRhZG8gbm8gcGVyw61vZG8gYWZpbSBkZSBzZXIgdXNhZG9zIG5hIHByb2R1w6fDo28gZGEgdmlzdWFsaXphw6fDo28gcHJvcG9zdGEgbmVzdGUgcHJvamV0by48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstd2lkdGgtMi01QG1cXFwiPlxcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcInVrLWg1IHVrLXRleHQtdXBwZXJjYXNlXFxcIj5SYW5rZmxvdzwvaDU+XFxuXFx0XFx0XFx0XFx0PHA+SW5zcGlyYWRvIG5vIHRyYWJhbGhvIGRlwqA8YSBocmVmPVxcXCJodHRwOi8vbGFicy5wb2xzeXMubmV0L3Rvb2xzL3JhbmtmbG93L1xcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPkJlcm5oYXJkIFJpZWRlcjwvYT4sIG7Ds3MgZGVzZW52b2x2ZW1vcyB1bWEgdmlzdWFsaXphw6fDo28gcXVlIG1vc3RyYSBvIHJhbmtpbmcgZG9zIHZpZGVvcyBtYWlzIHJlY29tZW5kYWRvcyBwb3IgZGlhIGVtIHVtIGNlcnRvIHBlcsOtb2RvIGRlIHRlbXBvIChSYW5rZmxvdykuIEEgdmlzdWFsaXphw6fDo28gZm9pIGRlc2Vudm9sdmlkYSB1c2FuZG8gPGEgaHJlZj1cXFwiaHR0cHM6Ly9kM2pzLm9yZy9cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj5EMy5qczwvYT7CoGUgbW9zdHJhIHRvZG9zIG9zIHZpZGVvcyBxdWUgYWxjYW7Dp2FyYW0gcGVsbyBtZW5vcyBhIHF1aW50YSBwb3Npw6fDo28gbm8gcmFua2luZyBwYXJhIGNhZGEgdGVybW8gcGVzcXVpc2FkbyBlbSBxdWFscXVlciBkaWEgZG8gcGVyw61vZG8gb2JzZXJ2YWRvLiBBIGNvciBkZSBjYWRhIGxpbmhhIMOpIG1hcGVhZGEgcGFyYSByZXByZXNlbnRhciBvIGNhbmFsIGRlIG9yaWdlbSBkbyB2aWRlby4gQSBsYXJndXJhIGZ1bmNpb25hIGNvbW8gbyByZWZvcsOnbyB2aXN1YWwgcGFyYSBwYXJhIGluZGljYXIgYSBtZWxob3IgcG9zacOnw6NvIGFsY2Fuw6dhZGEgcGVsbyB2aWRlbyBubyBwZXLDrW9kbywgbWVkaWRvIHRhbXBlbSBubyBlaXhvIHZlcnRpY2FsIGRvIGdyw6FmaWNvLiBQYXNzZSBtb3VzZSBwb3IgY2ltYSBkZSBjYWRhIGxpbmhhIHBhcmEgcXVlIGVsYSBzZSBhY2VuZGEgZSBhcyBvdXRyYXMgc2UgYXBhZ3VlbS4gQ2xpcXVlIGVtIGNhZGEgdW1hIGRhcyBsaW5oYXMgcGFyYSBhYnJpYXIgdW0gamFuZWxhIGNvbSBpbmZvcm1hw6fDtWVzIHNvYnJlIG8gdmlkZW8sIGluY2x1aW5kbyB1bSB2aWRlbyBwbGF5IHBhcmEgYXNzaXN0aXIgbyB2aWRlbyBubyBjb250ZXh0LCBhc3NpbSBjb21vIGFzIG3DqXRyaWNhcyBiw6FzaWNhcyBkbyB2aWRlbyBhIGNhZGEgZGlhIChudW1lcm8gZGUgdmlzdWFsaXphw6fDo28sIFxcXCJnb3N0ZWlcXFwiLCBcXFwibsOjbyBnb3N0ZWlcXFwiLCByZWNvbWVuZGHDp8O1ZXMgZSBwb3Npw6fDo28gbm8gcmFua2luZykuPC9wPlxcblxcdFxcdFxcdFxcdDxwPkFjb21wYW5oYW5kbyBlc3NhIHZpc3VhbGl6YcOnw6NvIGjDoSBkb2lzIG91dHJvcyBncsOhZmljb3MgaW5kaWNhbmRvIG9zIGRleiB2aWRlb3MgbWFpcyB2aXN0b3MgZSBvcyBkZXogY2FuYWlzIGNvbSBtYWlzIHZpc3VhbGl6YcOnw7Vlcy4gUGFzc2UgbyBtb3VzZSBwb3IgY2ltYSBkYXMgYmFycmFzIGVtIHVtIGRvcyBncsOhZmljb3MgcGFyYSBhY2VuZGVyIGJhcnJhcyBjb3JyZXNwb25kZW50ZXMgbmFzIG91cmFzIHZpc3VhbGl6YcOnw7Vlcy4gQ2xpcXVlIGVtIHVtIGRhcyBiYXJyYXMgZG9zIGRleiB2aWRlb3MgbWFpcyB2aXN0b3MgcGFyYSBvYnRlciBtYWlzIGluZm9ybWHDp8O1ZXMuPC9wPlxcblxcdFxcdFxcdFxcdDxwPk8gcmFua2Zsb3cgcGVybWl0ZSBhbmFsaXphciBhIGV2b2x1w6fDtWVzIGRlIHZpZGVvIG5vIHJhbmtpbmcgdGhlIHJlY29tZW5kYcOnw7VlcywgaWRlbnRpZmljYXIgdGVuZGVuY2lhcyBlIHBhZHLDtWVzLCBlIG9ic2VydmFyIG8gcXVlIHRlbSBzaWRvIHJlY29tZW5kYWRvIHBlbG8gYWxnb3JpdG1vIGRvIFlvdXR1YmUuIEVzc2UgcHJvamV0byBwZXJtaXRlIG9ic2VydmFyIG7Do28gYXBlbmFzIHF1YWlzIGZvcmFtIG9zIHZpZGVvcyBtYWlzIHJlY29tZW5kYWRvcywgdmlzdG9zIGUgY3VydGlkb3MgcGFyYSBjYWRhIHRlcm1vIHBlc3F1aXNhZG8sIG1hcyB0YW1iw6ltIGFqdWRhIGEgaWRlbnRpZmljYXIgb3MgcHJvZHV0b3JlcyBkZXNzZXMgdmlkZW9zIGUgYSByZWRlIGRlIGNvbmV4w7VlcyBlbnRyZSB2aWRlb3MsIHByb2R1dG9yZXMsIGUgZXNwZWN0YWRvcmVzIG5hcyByZWRlcyBzb2NpYWlzLiBJc3NvIHRhbWLDqW0gcG9kZSBub3MgZGFyIGFsZ3VtYXMgcGlzdGFzIHNvYnJlIG8gZnVuY2lvbmFtZW50byBkbyBzaXN0ZW1hIGRlIHJhbnF1ZWFtZW50byB1c2FkbyBubyBZb3V0dWJlLCBhc3NpbSBjb21vIHF1YWlzIG9zIHZpZGVvcyBtYWlzIHByb2VtaW5lbnRlcyBlbSB1bSB0w7NwaWNvIGVzcGVjaWZpY28sIGUgcXVhbCBhIG5hcnJhdGl2YSBlc3NlIHJhbmtpbmcgcHJvZHV6IG5vIGRlYmF0ZSBwb2zDrXRpY28gbm8gQnJhc2lsIGVtIHBhcnRpY3VsYXIsIGUgbmFzIHJlZGVzIHNvY2lhaXMgZGUgZm9ybWEgbWFpcyBnZXJhbC48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XCIsIEgpO3JldHVybiBULnJlbmRlci5hcHBseShULCBhcmd1bWVudHMpOyB9OyIsImltcG9ydCBVSWtpdCBmcm9tICd1aWtpdC9kaXN0L2pzL3Vpa2l0Lm1pbic7XG5pbXBvcnQgbWV0aG9kb2xvZ3lNdXN0YWNoZSBmcm9tICcuL21ldGhvZG9sb2d5Lmh0bWwnO1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbi9kaXN0L2QzLXNlbGVjdGlvbi5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXRob2RvbG9neShhcHApIHtcblx0dGhpcy5hcHAgPSBhcHA7XG5cdHRoaXMuc2hvd01ldGhvZG9sb2d5ID0gZmFsc2U7XG5cblx0dGhpcy5pbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcblx0XHQvLyBkYXRhXG5cdFx0Y29uc3QgcGFnZURhdGEgPSB7XG5cdFx0XHR0aXRsZTogJ01ldG9kb2xvZ2lhJyxcblx0XHRcdGRhdGE6ICdEYXRhIENvbGxlY3Rpb24nLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gbWV0aG9kb2xvZ3lNdXN0YWNoZShwYWdlRGF0YSk7XG5cdFx0c2VsZWN0KCcjYXBwJykuYXBwZW5kKCdkaXYnKS5hdHRyKCdpZCcsJ21ldGhvZG9sb2d5LXNlY3Rpb24nKTtcblx0XHRzZWxlY3QoJyNtZXRob2RvbG9neS1zZWN0aW9uJykuaHRtbChodG1sKTtcblxuXHRcdHNlbGVjdCgnI21ldGhvZG9sb2d5LXNlY3Rpb24nKS5vbignY2xpY2snLCB0aGlzLnRvZ2dsZU1ldGhvZG9sb2d5KTtcblxuXHR9O1xuXG5cdHRoaXMudG9nZ2xlTWV0aG9kb2xvZ3kgPSBmdW5jdGlvbiB0b2dnbGVNZXRob2RvbG9neSgpIHtcblx0XHR0aGlzLnNob3dNZXRob2RvbG9neSA9ICF0aGlzLnNob3dNZXRob2RvbG9neTtcblxuXHRcdGxldCBpY29uO1xuXG5cdFx0aWYgKHRoaXMuc2hvd01ldGhvZG9sb2d5KSB7XG5cdFx0XHRpY29uID0gJ21pbnVzLWNpcmNsZSc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGljb24gPSAncGx1cy1jaXJjbGUnO1xuXHRcdH1cblxuXHRcdFVJa2l0Lmljb24oJyNtZXRob2RvbG9neS10b2dnbGUtaWNvbicsIHtcblx0XHRcdGljb246IGAke2ljb259YCxcblx0XHR9KTtcblx0fTtcbn0iLCJ2YXIgSCA9IHJlcXVpcmUoXCJob2dhbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHZhciBUID0gbmV3IEguVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstc2VjdGlvbi14c21hbGwgdG0tbWFpblxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDxkaXYgY2xhc3M9XFxcInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItZXhwYW5kXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDxoMiBjbGFzcz1cXFwidWstaDIgdWstdGV4dC1jZW50ZXJcXFwiPlwiKTt0LmIodC52KHQuZihcInRpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9oMj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXRleHQtY2VudGVyXFxcIiB1ay1ncmlkPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLWF1dG9cXFwiPjwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLWV4cGFuZFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5lclxcXCIgdWstc3Bpbm5lcj1cXFwicmF0aW86IDFcXFwiPjwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJyYW5rZmxvdy1wYW5lbFxcXCIgY2xhc3M9XFxcInVrLXBhbmVsIHVrLW92ZXJmbG93LWF1dG9cXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwidmlzdWFsaXphdGlvblxcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJob3Jpem9udGFsLXNjcm9sbC1oaW50XFxcIiBjbGFzcz1cXFwidWstdGV4dC1tZXRhIHVrLW1hcmdpbi1tZWRpdW0tdG9wXFxcIiBoaWRkZW4+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiB1ay1pY29uPVxcXCJjaGV2cm9uLWxlZnRcXFwiPjwvc3Bhbj4gXCIpO3QuYih0LnYodC5mKFwic2Nyb2xsVGV4dFwiLGMscCwwKSkpO3QuYihcIiA8c3BhbiB1ay1pY29uPVxcXCJjaGV2cm9uLXJpZ2h0XFxcIj48L3NwYW4+PC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwibW9kYWwtdmlkZW8tZGV0YWlsc1xcXCIgdWstbW9kYWw+PC9kaXY+XCIpO3QuYihcIlxcblwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLWF1dG9cXFwiPjwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB1ay1zZWN0aW9uLXhzbWFsbCB0bS1tYWluXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1leHBhbmRcXFwiPlxcbiAgICAgICAgPGgyIGNsYXNzPVxcXCJ1ay1oMiB1ay10ZXh0LWNlbnRlclxcXCI+e3t0aXRsZX19PC9oMj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXRleHQtY2VudGVyXFxcIiB1ay1ncmlkPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLWF1dG9cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLWV4cGFuZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNwaW5lclxcXCIgdWstc3Bpbm5lcj1cXFwicmF0aW86IDFcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJyYW5rZmxvdy1wYW5lbFxcXCIgY2xhc3M9XFxcInVrLXBhbmVsIHVrLW92ZXJmbG93LWF1dG9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwidmlzdWFsaXphdGlvblxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJob3Jpem9udGFsLXNjcm9sbC1oaW50XFxcIiBjbGFzcz1cXFwidWstdGV4dC1tZXRhIHVrLW1hcmdpbi1tZWRpdW0tdG9wXFxcIiBoaWRkZW4+XFxuICAgICAgICAgICAgICAgICAgICA8cD48c3BhbiB1ay1pY29uPVxcXCJjaGV2cm9uLWxlZnRcXFwiPjwvc3Bhbj4ge3tzY3JvbGxUZXh0fX0gPHNwYW4gdWstaWNvbj1cXFwiY2hldnJvbi1yaWdodFxcXCI+PC9zcGFuPjwvcD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIm1vZGFsLXZpZGVvLWRldGFpbHNcXFwiIHVrLW1vZGFsPjwvZGl2PlxcblxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXdpZHRoLWF1dG9cXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCJpbXBvcnQgVUlraXQgZnJvbSAndWlraXQvZGlzdC9qcy91aWtpdC5taW4nO1xuaW1wb3J0IHJhbmtmbG93TXVzdGFjaGUgZnJvbSAnLi9yYW5rZmxvdy5odG1sJztcbmltcG9ydCByYW5rZmxvd1ZpcyBmcm9tICcuL1JhbmtmbG93VmlzJztcbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24vZGlzdC9kMy1zZWxlY3Rpb24ubWluJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmFua2Zsb3coYXBwKSB7XG5cdHRoaXMuYXBwID0gYXBwO1xuXHR0aGlzLnZpcztcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXHRcdC8vIGRhdGFcblx0XHR0aGlzLnBhZ2VEYXRhID0ge1xuXHRcdFx0dGl0bGU6ICdWaWRlb3MgbWFpcyByZWNvbWVuZGFkb3Mgbm8gcGVyw61vZG8nLFxuXHRcdFx0c2hvd1Njcm9sbEhpbnQ6IGZhbHNlLFxuXHRcdFx0c2Nyb2xsVGV4dDogJ1JvbGUnXG5cdFx0fTtcblxuXHRcdC8vIGJ1aWQgcGFnZVxuXHRcdGNvbnN0IGh0bWwgPSByYW5rZmxvd011c3RhY2hlKHRoaXMucGFnZURhdGEpO1xuXHRcdHNlbGVjdCgnI2FwcCcpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCdyYW5rZmxvdy1zZWN0aW9uJyk7XG5cdFx0c2VsZWN0KCcjcmFua2Zsb3ctc2VjdGlvbicpLmh0bWwoaHRtbCk7XG5cblx0XHRVSWtpdC50b2dnbGUoc2VsZWN0KCcjaG9yaXpvbnRhbC1zY3JvbGwtaGludCcpLCB7XG5cdFx0XHRtb2RlOiAnbWVkaWEnLFxuXHRcdFx0YW5pbWF0aW9uOiAndWstYW5pbWF0aW9uLWZhZGUsdWstYW5pbWF0aW9uLWZhZGUnXG5cdFx0fSk7XG5cdFx0XG5cdFx0dGhpcy52aXMgPSBuZXcgcmFua2Zsb3dWaXModGhpcy5hcHApO1xuXHRcdHRoaXMudmlzLmluaXQoKTtcblx0fTtcblxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0c2VsZWN0KCcjcmFua2Zsb3ctc2VjdGlvbicpLnNlbGVjdCgnLnNwaW5lcicpLmhpZGUoKTtcblx0XHR0aGlzLnZpcy51cGRhdGUoZGF0YSk7XG5cdH07XG5cblx0dGhpcy5sb2FkaW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZWN0KCcjcmFua2Zsb3ctc2VjdGlvbicpLnNlbGVjdCgnLnNwaW5lcicpLnNob3coKTtcblx0XHR0aGlzLnZpcy5leGl0KCk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPbiA9IGZ1bmN0aW9uIChpZCwgc291cmNlVHlwZSkge1xuXHRcdHRoaXMudmlzLmhpZ2hsaWdodE9uKGlkLCBzb3VyY2VUeXBlKTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uICh5b3V0dWJlSUQpIHtcblx0XHR0aGlzLnZpcy5oaWdobGlnaHRPZmYoeW91dHViZUlEKTtcblx0fTtcblxufSIsInZhciBIID0gcmVxdWlyZShcImhvZ2FuLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdmFyIFQgPSBuZXcgSC5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGRpdiBjbGFzcz1cXFwidG0tc2lkZWJhci1sZWZ0XFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDxkaXYgaWQ9XFxcIm1haW4tbWVudVxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdDx1bCBjbGFzcz1cXFwidWstbmF2IHVrLW5hdi1kZWZhdWx0XFxcIiB1ay1zd2l0Y2hlcj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8cCBjbGFzcz1cXFwidWstdGV4dC1sZWFkXFxcIj5cIik7dC5iKHQudih0LmYoXCJ0ZXJtc1RpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO2lmKHQucyh0LmYoXCJ0ZXJtc1wiLGMscCwxKSxjLHAsMCwxNzgsMjY0LFwie3sgfX1cIikpe3QucnMoYyxwLGZ1bmN0aW9uKGMscCx0KXt0LmIoXCJcdFx0XHQ8bGk+PGEgaHJlZj1cXFwiXFxcIiBvbmNsaWNrPVxcXCJhcHAuc2VsZWN0VGVybSgnXCIpO3QuYih0LnYodC5mKFwic2x1Z1wiLGMscCwwKSkpO3QuYihcIicpXFxcIj5cIik7dC5iKHQudih0LmYoXCJuYW1lXCIsYyxwLDApKSk7dC5iKFwiPC9hPjwvbGk+XCIpO3QuYihcIlxcblwiICsgaSk7fSk7Yy5wb3AoKTt9dC5iKFwiICAgICAgICAgICAgXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ1ay1uYXYtZGl2aWRlclxcXCI+PC9saT5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInVrLW5hdi1oZWFkZXJcXFwiPlwiKTt0LmIodC52KHQuZihcInJlbGF0ZWRUZXJtc1RpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9saT5cIik7dC5iKFwiXFxuXCIgKyBpKTtpZih0LnModC5mKFwicmVsYXRlZFRlcm1zXCIsYyxwLDEpLGMscCwwLDQyNyw1MTMsXCJ7eyB9fVwiKSl7dC5ycyhjLHAsZnVuY3Rpb24oYyxwLHQpe3QuYihcIlx0XHRcdDxsaT48YSBocmVmPVxcXCJcXFwiIG9uY2xpY2s9XFxcImFwcC5zZWxlY3RUZXJtKCdcIik7dC5iKHQudih0LmYoXCJzbHVnXCIsYyxwLDApKSk7dC5iKFwiJylcXFwiPlwiKTt0LmIodC52KHQuZihcIm5hbWVcIixjLHAsMCkpKTt0LmIoXCI8L2E+PC9saT5cIik7dC5iKFwiXFxuXCIgKyBpKTt9KTtjLnBvcCgpO310LmIoXCJcdFx0PC91bD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8ZGl2IGlkPVxcXCJmb290ZXItc2VjdGlvblxcXCIgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstc2VjdGlvbi14c21hbGxcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXIgdWstY29udGFpbmVyLXNtYWxsIHVrLXRleHQtc21hbGwgdWstdGV4dC1jZW50ZXJcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdDxociBjbGFzcz1cXFwidWstZGl2aWRlci1zbWFsbFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdFx0PHAgY2xhc3M9XFxcInVrLXRleHQtbXV0ZWRcXFwiPkRldmVsb3BlZCBieTxici8+PGEgaHJlZj1cXFwiaHR0cHM6Ly9sdWNpYW5vLmZsdXhvLmFydC5iclxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGNsYXNzPVxcXCJ1ay1saW5rLXRleHRcXFwiPkx1Y2lhbm8gRnJpenplcmE8L2E+PC9wPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidG0tc2lkZWJhci1sZWZ0XFxcIj5cXG5cXHQ8ZGl2IGlkPVxcXCJtYWluLW1lbnVcXFwiPlxcblxcdFxcdDx1bCBjbGFzcz1cXFwidWstbmF2IHVrLW5hdi1kZWZhdWx0XFxcIiB1ay1zd2l0Y2hlcj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwidWstdGV4dC1sZWFkXFxcIj57e3Rlcm1zVGl0bGV9fTwvcD5cXG4gICAgICAgICAgICB7eyN0ZXJtc319XFxuXFx0XFx0XFx0PGxpPjxhIGhyZWY9XFxcIlxcXCIgb25jbGljaz1cXFwiYXBwLnNlbGVjdFRlcm0oJ3t7c2x1Z319JylcXFwiPnt7bmFtZX19PC9hPjwvbGk+XFxuICAgICAgICAgICAge3svdGVybXN9fVxcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidWstbmF2LWRpdmlkZXJcXFwiPjwvbGk+XFxuICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ1ay1uYXYtaGVhZGVyXFxcIj57e3JlbGF0ZWRUZXJtc1RpdGxlfX08L2xpPlxcbiAgICAgICAgICAgIHt7I3JlbGF0ZWRUZXJtc319XFxuXFx0XFx0XFx0PGxpPjxhIGhyZWY9XFxcIlxcXCIgb25jbGljaz1cXFwiYXBwLnNlbGVjdFRlcm0oJ3t7c2x1Z319JylcXFwiPnt7bmFtZX19PC9hPjwvbGk+XFxuICAgICAgICAgICAge3svcmVsYXRlZFRlcm1zfX1cXG5cXHRcXHQ8L3VsPlxcblxcdDwvZGl2PlxcblxcdFxcblxcdDxkaXYgaWQ9XFxcImZvb3Rlci1zZWN0aW9uXFxcIiBjbGFzcz1cXFwidWstc2VjdGlvbiB1ay1zZWN0aW9uLXhzbWFsbFxcXCI+XFxuXFx0XFx0PGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyIHVrLWNvbnRhaW5lci1zbWFsbCB1ay10ZXh0LXNtYWxsIHVrLXRleHQtY2VudGVyXFxcIj5cXG5cXHRcXHRcXHQ8aHIgY2xhc3M9XFxcInVrLWRpdmlkZXItc21hbGxcXFwiPlxcblxcdFxcdFxcdDxwIGNsYXNzPVxcXCJ1ay10ZXh0LW11dGVkXFxcIj5EZXZlbG9wZWQgYnk8YnIvPjxhIGhyZWY9XFxcImh0dHBzOi8vbHVjaWFuby5mbHV4by5hcnQuYnJcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBjbGFzcz1cXFwidWstbGluay10ZXh0XFxcIj5MdWNpYW5vIEZyaXp6ZXJhPC9hPjwvcD5cXG5cXHRcXHQ8L2Rpdj5cXG5cXHQ8L2Rpdj5cXG48L2Rpdj5cIiwgSCk7cmV0dXJuIFQucmVuZGVyLmFwcGx5KFQsIGFyZ3VtZW50cyk7IH07IiwiaW1wb3J0IHNpZGViYXJNdXN0YWNoZSBmcm9tICcuL3NpZGViYXIuaHRtbCc7XG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXIoYXBwKSB7XG5cdHRoaXMuYXBwID0gYXBwO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0Ly8gZGF0YVxuXHRcdGNvbnN0IHBhZ2VEYXRhID0ge1xuXHRcdFx0dGVybXNUaXRsZTogJ0NhbmRpZGF0b3MnLFxuXHRcdFx0cmVsYXRlZFRlcm1zVGl0bGU6ICdUZXJtb3MgUmVsYWNpb25hZG9zJyxcblx0XHRcdHRlcm1zOiB0aGlzLmFwcC50ZXJtcyxcblx0XHRcdHJlbGF0ZWRUZXJtczogdGhpcy5hcHAucmVsYXRlZFRlcm1zLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gc2lkZWJhck11c3RhY2hlKHBhZ2VEYXRhKTtcblx0XHRzZWxlY3QoJyNhcHAnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywndG0tc2lkZWJhci1sZWZ0Jyk7XG5cdFx0c2VsZWN0KCcjdG0tc2lkZWJhci1sZWZ0JykuaHRtbChodG1sKTtcblx0fTtcbn0iLCJ2YXIgSCA9IHJlcXVpcmUoXCJob2dhbi5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7IHZhciBUID0gbmV3IEguVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIjwhLS0gPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB0bS1tYWluXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyXFxcIj4gLS0+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8aDIgY2xhc3M9XFxcInVrLWgyIHVrLXRleHQtY2VudGVyXFxcIj5cIik7dC5iKHQudih0LmYoXCJ0aXRsZVwiLGMscCwwKSkpO3QuYihcIjwvaDI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay10ZXh0LXNtYWxsXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGluZXIgdWstcG9zaXRpb24tYWJzb2x1dGUgdWstdHJhbnNmb3JtLWNlbnRlciB1ay1tYXJnaW4tbGFyZ2UtYm90dG9tXFxcIiB1ay1zcGlubmVyPVxcXCJyYXRpbzogMVxcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgPGRpdiBpZD1cXFwidG9wLWNoYW5uZWxzXFxcIj48L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8IS0tIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8aHI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiPC9kaXY+IC0tPlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPCEtLSA8ZGl2IGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHRtLW1haW5cXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1ay1jb250YWluZXJcXFwiPiAtLT5cXG4gICAgICAgIDxoMiBjbGFzcz1cXFwidWstaDIgdWstdGV4dC1jZW50ZXJcXFwiPnt7dGl0bGV9fTwvaDI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ1ay10ZXh0LXNtYWxsXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGluZXIgdWstcG9zaXRpb24tYWJzb2x1dGUgdWstdHJhbnNmb3JtLWNlbnRlciB1ay1tYXJnaW4tbGFyZ2UtYm90dG9tXFxcIiB1ay1zcGlubmVyPVxcXCJyYXRpbzogMVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwidG9wLWNoYW5uZWxzXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8IS0tIDwvZGl2PlxcbiAgICA8aHI+XFxuPC9kaXY+IC0tPlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCJpbXBvcnQgdG9wY2hhbm5lbHNNdXN0YWNoZSBmcm9tICcuL3RvcGNoYW5uZWxzLmh0bWwnO1xuaW1wb3J0IHRvcENoYW5uZWxzVmlzIGZyb20gJy4vVG9wQ2hhbm5lbHNWaXMnO1xuXG5pbXBvcnQge3NlbGVjdH0gZnJvbSAnZDMtc2VsZWN0aW9uL2Rpc3QvZDMtc2VsZWN0aW9uLm1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvcHZpZGVvcyhhcHApIHtcblx0dGhpcy5hcHAgPSBhcHA7XG5cdHRoaXMudmlzO1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG5cdFx0Ly8gZGF0YVxuXHRcdGNvbnN0IHBhZ2VEYXRhID0ge1xuXHRcdFx0dGl0bGU6ICdDYW5haXMgbWFpcyByZWNvbWVuZGFkb3MnLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gdG9wY2hhbm5lbHNNdXN0YWNoZShwYWdlRGF0YSk7XG5cdFx0c2VsZWN0KCcjY2hhbm5lbHMnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywndG9wY2hhbm5lbHMtc2VjdGlvbicpO1xuXHRcdHNlbGVjdCgnI3RvcGNoYW5uZWxzLXNlY3Rpb24nKS5odG1sKGh0bWwpO1xuXG5cdFx0dGhpcy52aXMgPSBuZXcgdG9wQ2hhbm5lbHNWaXModGhpcy5hcHApO1xuXHRcdHRoaXMudmlzLmluaXQoKTtcblx0fTtcblxuXHR0aGlzLmxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG5cdFx0c2VsZWN0KCcjdG9wY2hhbm5lbHMtc2VjdGlvbicpLnNlbGVjdCgnLnNwaW5lcicpLmhpZGUoKTtcblx0XHR0aGlzLnZpcy51cGRhdGUoZGF0YSk7XG5cdH07XG5cblx0dGhpcy5sb2FkaW5nID0gZnVuY3Rpb24oKSB7XG5cdFx0c2VsZWN0KCcjdG9wY2hhbm5lbHMtc2VjdGlvbicpLnNlbGVjdCgnLnNwaW5lcicpLnNob3coKTtcblx0XHR0aGlzLnZpcy5leGl0KCk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPbiA9IGZ1bmN0aW9uIChjaGFubmVsTmFtZSkge1xuXHRcdHRoaXMudmlzLmhpZ2hsaWdodE9uKGNoYW5uZWxOYW1lKTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uIChjaGFubmVsTmFtZSkge1xuXHRcdHRoaXMudmlzLmhpZ2hsaWdodE9mZihjaGFubmVsTmFtZSk7XG5cdH07XG59IiwidmFyIEggPSByZXF1aXJlKFwiaG9nYW4uanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB2YXIgVCA9IG5ldyBILlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJ1ay1zZWN0aW9uIHVrLXNlY3Rpb24teHNtYWxsIHVrLWJhY2tncm91bmQtbXV0ZWQgdWstcGFkZGluZy1yZW1vdmUtdG9wIHVrLXBhZGRpbmctcmVtb3ZlLWJvdHRvbSB1ay1ib3gtc2hhZG93LXNtYWxsIHRtLW1haW5cXFwiIHVrLXN0aWNreT1cXFwibWVkaWE6NjQwXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdDxkaXYgY2xhc3M9XFxcInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItZXhwYW5kIHVrLXRleHQtY2VudGVyXFxcIj5cIik7dC5iKFwiXFxuXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHRcdDxkaXYgaWQ9XFxcInNtYWxsLXRpdGxlXFxcIiBjbGFzcz1cXFwidWstY2xlYXItZml4IHVrLW1hcmdpbi10b3BcXFwiIGhpZGRlbj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0XHQ8aDQgY2xhc3M9XFxcInVrLWg0IHVrLW1hcmdpbi1yZW1vdmUtYm90dG9tXFxcIj5cIik7dC5iKHQudih0LmYoXCJ0aXRsZVwiLGMscCwwKSkpO3QuYihcIjogXCIpO3QuYih0LnYodC5mKFwic3VidGl0bGVcIixjLHAsMCkpKTt0LmIoXCI8L2g0PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHQ8ZGl2IGlkPVxcXCJjdXJyZW50LXZpZXdcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdDxwIGNsYXNzPVxcXCJ1ay1tYXJnaW4tdG9wIHVrLXRleHQtbGVhZFxcXCI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgICAgICBcIik7dC5iKHQudih0LmYoXCJjdXJyZW50VGVybVwiLGMscCwwKSkpO3QuYihcIiB8IFwiKTt0LmIodC52KHQuZihcImN1cnJlbnRQZXJpb2RcIixjLHAsMCkpKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIlx0XHRcdDwvcD5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCJcdFx0PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiXHQ8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8L2Rpdj5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19LCBcIjxkaXYgY2xhc3M9XFxcInVrLXNlY3Rpb24gdWstc2VjdGlvbi14c21hbGwgdWstYmFja2dyb3VuZC1tdXRlZCB1ay1wYWRkaW5nLXJlbW92ZS10b3AgdWstcGFkZGluZy1yZW1vdmUtYm90dG9tIHVrLWJveC1zaGFkb3ctc21hbGwgdG0tbWFpblxcXCIgdWstc3RpY2t5PVxcXCJtZWRpYTo2NDBcXFwiPlxcblxcdDxkaXYgY2xhc3M9XFxcInVrLWNvbnRhaW5lciB1ay1jb250YWluZXItZXhwYW5kIHVrLXRleHQtY2VudGVyXFxcIj5cXG5cXG5cXHRcXHQ8ZGl2IGlkPVxcXCJzbWFsbC10aXRsZVxcXCIgY2xhc3M9XFxcInVrLWNsZWFyLWZpeCB1ay1tYXJnaW4tdG9wXFxcIiBoaWRkZW4+XFxuXFx0XFx0XFx0PGg0IGNsYXNzPVxcXCJ1ay1oNCB1ay1tYXJnaW4tcmVtb3ZlLWJvdHRvbVxcXCI+e3t0aXRsZX19OiB7e3N1YnRpdGxlfX08L2g0PlxcblxcdFxcdDwvZGl2PlxcblxcdFxcblxcdFxcdDxkaXYgaWQ9XFxcImN1cnJlbnQtdmlld1xcXCI+XFxuXFx0XFx0XFx0PHAgY2xhc3M9XFxcInVrLW1hcmdpbi10b3AgdWstdGV4dC1sZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7Y3VycmVudFRlcm19fSB8IHt7Y3VycmVudFBlcmlvZH19XFxuXFx0XFx0XFx0PC9wPlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiLCBIKTtyZXR1cm4gVC5yZW5kZXIuYXBwbHkoVCwgYXJndW1lbnRzKTsgfTsiLCIvL21vZHVsZXNcbmltcG9ydCBVSWtpdCBmcm9tICd1aWtpdC9kaXN0L2pzL3Vpa2l0Lm1pbic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvcHQtYnInO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWNhJztcbmltcG9ydCB0b3BtZW51TXVzdGFjaGUgZnJvbSAnLi90b3BtZW51Lmh0bWwnO1xuaW1wb3J0IHtzZWxlY3R9IGZyb20gJ2QzLXNlbGVjdGlvbi9kaXN0L2QzLXNlbGVjdGlvbi5taW4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3BtZW51KGFwcCkge1xuXHR0aGlzLmFwcCA9IGFwcDtcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXG5cdFx0bW9tZW50LmxvY2FsZSgncHQtYnInKTtcblx0XHRcblx0XHRjb25zdCBzdGFydERhdGUgPSBtb21lbnQodGhpcy5hcHAucGVyaW9kLnN0YXJ0KS5sb2NhbGUoJ3B0JykuZm9ybWF0KCdERCBbZGVdIE1NTU0nKTtcblx0XHRjb25zdCBlbmREYXRlID0gbW9tZW50KHRoaXMuYXBwLnBlcmlvZC5lbmQpLmxvY2FsZSgncHQnKS5mb3JtYXQoJ0REIFtkZV0gTU1NTScpO1xuXG5cdFx0Ly8gY29uc3Qgc3RhcnREYXRlTG9jYWxlID0gdGhpcy5hcHAucGVyaW9kLnN0YXJ0LmxvY2FsZSgncHQnKS5mb3JtYXQoJ0REIE1NTU0nKTtcblx0XHQvLyBjb25zdCBlbmREYXRlTG9jYWxlID0gdGhpcy5hcHAucGVyaW9kLmVuZC5sb2NhbGUoJ3B0JykuZm9ybWF0KCdERCBNTU1NJyk7XG5cblx0XHQvLyBkYXRhXG5cdFx0dGhpcy5wYWdlRGF0YSA9IHtcblx0XHRcdHRpdGxlOiAnRWxlacOnw7VlcyBCcmFzaWwgMjAxOCcsXG5cdFx0XHRzdWJ0aXRsZTogJ1JhbmtGbG93IGRhcyBSZWNvbWVuZGHDp8O1ZXMgZG8gWW91VHViZScsXG5cdFx0XHRjdXJyZW50VGVybTogdGhpcy5hcHAuc2VsZWN0ZWRUZXJtLm5hbWUsXG5cdFx0XHRjdXJyZW50UGVyaW9kOiBgJHtzdGFydERhdGV9IGEgJHtlbmREYXRlfWAsXG5cdFx0fTtcblxuXHRcdC8vIGJ1aWQgcGFnZVxuXHRcdGNvbnN0IGh0bWwgPSB0b3BtZW51TXVzdGFjaGUodGhpcy5wYWdlRGF0YSk7XG5cblx0XHRzZWxlY3QoJyNhcHAnKS5hcHBlbmQoJ2RpdicpLmF0dHIoJ2lkJywndG9wLW1lbnUnKTtcblx0XHRzZWxlY3QoJyN0b3AtbWVudScpLmh0bWwoaHRtbCk7XG5cblx0XHRVSWtpdC50b2dnbGUoc2VsZWN0KCcjc21hbGwtdGl0bGUnKS5ub2RlKCksIHtcblx0XHRcdG1vZGU6ICdtZWRpYScsXG5cdFx0XHRhbmltYXRpb246ICd1ay1hbmltYXRpb24tZmFkZSx1ay1hbmltYXRpb24tZmFkZScsXG5cdFx0fSk7XG5cblx0XHRzZWxlY3QoJyNtZW51LXNlY3Rpb24nKS5vbignYWN0aXZlJywgdGhpcy50b2dnbGVTbWFsbFRpdHRsZSk7XG5cdFx0c2VsZWN0KCcjbWVudS1zZWN0aW9uJykub24oJ2luYWN0aXZlJywgdGhpcy50b2dnbGVTbWFsbFRpdHRsZSk7XG5cblx0XHRzZWxlY3QoJyNtZW51LXNlY3Rpb24nKS5vbignYWN0aXZlJywgdGhpcy50b2dnbGVTbWFsbFRpdHRsZSk7XG5cdFx0c2VsZWN0KCcjbWVudS1zZWN0aW9uJykub24oJ2luYWN0aXZlJywgdGhpcy50b2dnbGVTbWFsbFRpdHRsZSk7XG5cdH07XG5cblx0dGhpcy50b2dnbGVTbWFsbFRpdHRsZSA9IGZ1bmN0aW9uIHRvZ2dsZVNtYWxsVGl0dGxlKCkge1xuXHRcdFVJa2l0LnRvZ2dsZShzZWxlY3QoJyNzbWFsbC10aXRsZScpLm5vZGUoKSkudG9nZ2xlKCk7XG5cdH07XG5cblx0dGhpcy51cGRhdGVUZXJtID0gZnVuY3Rpb24odGVybSkge1xuXHRcdHRoaXMucGFnZURhdGEuY3VycmVudFRlcm0gPSB0ZXJtLm5hbWU7XG5cdFx0Y29uc3QgaHRtbCA9IHRvcG1lbnVNdXN0YWNoZSh0aGlzLnBhZ2VEYXRhKTtcblxuXHRcdGNvbnN0IHRvcE1lbnUgPSBzZWxlY3QoJyN0b3AtbWVudScpO1xuXHRcdHRvcE1lbnUuaHRtbChodG1sKTtcblx0fTtcblxufSIsInZhciBIID0gcmVxdWlyZShcImhvZ2FuLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHsgdmFyIFQgPSBuZXcgSC5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB0bS1tYWluXFxcIj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyXFxcIj5cIik7dC5iKFwiXFxuXCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgPGRpdiB1ay1ncmlkPlwiKTt0LmIoXCJcXG5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8ZGl2IGlkPSd2aWRlb3MnIGNsYXNzPSd1ay13aWR0aC0xLTInPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XFxcInVrLWgyIHVrLXRleHQtY2VudGVyXFxcIj5cIik7dC5iKHQudih0LmYoXCJ0aXRsZVwiLGMscCwwKSkpO3QuYihcIjwvaDI+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInVrLXRleHQtc21hbGxcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3BpbmVyIHVrLXBvc2l0aW9uLWFic29sdXRlIHVrLXRyYW5zZm9ybS1jZW50ZXIgdWstbWFyZ2luLWxhcmdlLWJvdHRvbVxcXCIgdWstc3Bpbm5lcj1cXFwicmF0aW86IDFcXFwiPjwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwidG9wLXZpZGVvc1xcXCI+PC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiICAgICAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgICAgIDwvZGl2PlwiKTt0LmIoXCJcXG5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgICAgICAgICA8ZGl2IGlkPSdjaGFubmVscycgY2xhc3M9J3VrLXdpZHRoLTEtMic+PC9kaXY+XCIpO3QuYihcIlxcblwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICAgICAgPC9kaXY+XCIpO3QuYihcIlxcblwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIiAgICA8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCIgICAgPGhyPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYihcIjwvZGl2PlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0sIFwiPGRpdiBjbGFzcz1cXFwidWstc2VjdGlvbiB0bS1tYWluXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidWstY29udGFpbmVyXFxcIj5cXG5cXG4gICAgICAgICA8ZGl2IHVrLWdyaWQ+XFxuXFxuICAgICAgICAgICAgPGRpdiBpZD0ndmlkZW9zJyBjbGFzcz0ndWstd2lkdGgtMS0yJz5cXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzPVxcXCJ1ay1oMiB1ay10ZXh0LWNlbnRlclxcXCI+e3t0aXRsZX19PC9oMj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidWstdGV4dC1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzcGluZXIgdWstcG9zaXRpb24tYWJzb2x1dGUgdWstdHJhbnNmb3JtLWNlbnRlciB1ay1tYXJnaW4tbGFyZ2UtYm90dG9tXFxcIiB1ay1zcGlubmVyPVxcXCJyYXRpbzogMVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJ0b3AtdmlkZW9zXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICAgICAgPGRpdiBpZD0nY2hhbm5lbHMnIGNsYXNzPSd1ay13aWR0aC0xLTInPjwvZGl2PlxcblxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgIDwvZGl2PlxcbiAgICA8aHI+XFxuPC9kaXY+XCIsIEgpO3JldHVybiBULnJlbmRlci5hcHBseShULCBhcmd1bWVudHMpOyB9OyIsImltcG9ydCB0b3B2aWRlb3NNdXN0YWNoZSBmcm9tICcuL3RvcHZpZGVvcy5odG1sJztcbmltcG9ydCB0b3BWaWRlb1ZpcyBmcm9tICcuL1RvcFZpZGVvc1Zpcyc7XG5cbmltcG9ydCB7c2VsZWN0fSBmcm9tICdkMy1zZWxlY3Rpb24vZGlzdC9kMy1zZWxlY3Rpb24ubWluJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb3B2aWRlb3MoYXBwKSB7XG5cdHRoaXMuYXBwID0gYXBwO1xuXHR0aGlzLnZpcztcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiBpbml0KCkge1xuXG5cdFx0Ly8gZGF0YVxuXHRcdGNvbnN0IHBhZ2VEYXRhID0ge1xuXHRcdFx0dGl0bGU6ICdWaWRlb3MgbWFpcyByZWNvbWVuZGFkb3MnLFxuXHRcdH07XG5cblx0XHQvLyBidWlkIHBhZ2Vcblx0XHRjb25zdCBodG1sID0gdG9wdmlkZW9zTXVzdGFjaGUocGFnZURhdGEpO1xuXHRcdHNlbGVjdCgnI2FwcCcpLmFwcGVuZCgnZGl2JykuYXR0cignaWQnLCd0b3B2aWRlb3Mtc2VjdGlvbicpO1xuXHRcdHNlbGVjdCgnI3RvcHZpZGVvcy1zZWN0aW9uJykuaHRtbChodG1sKTtcblxuXHRcdHRoaXMudmlzID0gbmV3IHRvcFZpZGVvVmlzKHRoaXMuYXBwKTtcblx0XHR0aGlzLnZpcy5pbml0KCk7XG5cdH07XG5cblx0dGhpcy5sb2FkID0gZnVuY3Rpb24oZGF0YSkge1xuXHRcdHNlbGVjdCgnI3RvcHZpZGVvcy1zZWN0aW9uJykuc2VsZWN0KCcuc3BpbmVyJykuaGlkZSgpO1xuXHRcdHRoaXMudmlzLnVwZGF0ZShkYXRhKTtcblx0fTtcblxuXHR0aGlzLmxvYWRpbmcgPSBmdW5jdGlvbigpIHtcblx0XHRzZWxlY3QoJyN0b3B2aWRlb3Mtc2VjdGlvbicpLnNlbGVjdCgnLnNwaW5lcicpLnNob3coKTtcblx0XHR0aGlzLnZpcy5leGl0KCk7XG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHRPbiA9IGZ1bmN0aW9uIChpZCwgc291cmNlVHlwZSkge1xuXHRcdHRoaXMudmlzLmhpZ2hsaWdodE9uKGlkLCBzb3VyY2VUeXBlKTtcblx0fTtcblxuXHR0aGlzLmhpZ2hsaWdodE9mZiA9IGZ1bmN0aW9uICh5b3V0dWJlSUQpIHtcblx0XHR0aGlzLnZpcy5oaWdobGlnaHRPZmYoeW91dHViZUlEKTtcblx0fTtcbn0iLCIvLyBtb2R1bGVzXG5pbXBvcnQgZWUgZnJvbSAnZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvcHQtYnInO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWNhJztcbmltcG9ydCB7anNvbn0gZnJvbSAnZDMtZmV0Y2gvZGlzdC9kMy1mZXRjaC5taW4nO1xuaW1wb3J0IGNocm9tYSBmcm9tICdjaHJvbWEtanMvY2hyb21hLm1pbic7XG5cbmZ1bmN0aW9uIERhdGFtb2RlbCgpIHtcblxuXHQvL2VtaXR0ZXJcblx0ZWUodGhpcyk7XG5cblx0bW9tZW50LmxvY2FsZSgncHQtYnInKTtcblxuXHR0aGlzLlBBVEggPSAnLi9kYXRhc2V0JzsgLy8gRGVmaW5lIGZpbGVzIHBhdGhzXG5cblx0dGhpcy52aWRlb0NvbGxlY3Rpb24gPSB7XG5cdFx0dmlkZW9zOiBbXSxcblx0XHRjaGFubmVsczogW11cblx0fTtcblxuXHR0aGlzLnRlbXA7XG5cdHRoaXMuZGF5c0xvYWRlZCA9IDA7IC8vIHN0YXJ0IGNvdW50aW5nXG5cblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiAoYXBwKSB7XG5cdFx0Ly8gdGVtcG9yYXJ5IGhhY2sgZm9yIGEgdmVyc2lvblxuXHRcdC8vIGlmICgkKCcjc3RhcnRQZXJpb2QnKS5odG1sKCkpIHtcblx0XHQvLyBcdHRoaXMucGVyaW9kLnN0YXJ0RGF0ZSA9IG1vbWVudCgkKCcjc3RhcnRQZXJpb2QnKS5odG1sKCkpO1xuXHRcdC8vIFx0dGhpcy5udW1iZXJEYXlzID0gdGhpcy5wZXJpb2QuZW5kRGF0ZS5kaWZmKHRoaXMucGVyaW9kLnN0YXJ0RGF0ZSwgJ2RheXMnKSArIDE7XG5cdFx0Ly8gfVxuXG5cdFx0dGhpcy5hcHAgPSBhcHA7XG5cblx0XHR0aGlzLnNlbGVjdGVkVGVybSA9IGFwcC50ZXJtc1swXS5zbHVnO1xuXHRcdHRoaXMuaW5pdGlhbERhdGUgPSBtb21lbnQoYXBwLnBlcmlvZC5zdGFydCk7XG5cdFx0dGhpcy5maW5hbERhdGUgPSBtb21lbnQoYXBwLnBlcmlvZC5lbmQpO1xuXHRcdHRoaXMucGVyaW9kID0ge1xuXHRcdFx0c3RhcnREYXRlOiB0aGlzLmluaXRpYWxEYXRlLCAvLyB0aGlzLmluaXRpYWxEYXRlLFxuXHRcdFx0ZW5kRGF0ZTogdGhpcy5maW5hbERhdGUsXG5cdFx0fTtcblx0XHR0aGlzLnRvdGFsTnVtYmVyRGF5cyA9IHRoaXMuZmluYWxEYXRlLmRpZmYodGhpcy5pbml0aWFsRGF0ZSwgJ2RheXMnKSArIDE7XG5cdFx0dGhpcy5udW1iZXJEYXlzID0gdGhpcy5wZXJpb2QuZW5kRGF0ZS5kaWZmKHRoaXMucGVyaW9kLnN0YXJ0RGF0ZSwgJ2RheXMnKSArIDE7XG5cdFx0dGhpcy5tYXhSYW5rSW5kZXggPSAxMDtcblxuXHRcdHRoaXMudG9wQ2hhbm5lbHMgPSBbXTtcblx0fTtcblxuXHR0aGlzLmxvYWREYXRhID0gZnVuY3Rpb24gKHRlcm0pIHtcblxuXHRcdHRoaXMuc2VsZWN0ZWRUZXJtID0gdGVybTtcblxuXHRcdGRhdGFtb2RlbC52aWRlb0NvbGxlY3Rpb24udmlkZW9zID0gW107XG5cdFx0ZGF0YW1vZGVsLnZpZGVvQ29sbGVjdGlvbi5jaGFubmVscyA9IFtdO1xuXG5cdFx0bGV0IGRheUl0ZXJhdG9yID0gbW9tZW50KHRoaXMuaW5pdGlhbERhdGUpO1xuXHRcdGNvbnN0IGZpbGVBcnJheSA9IFtdO1xuXG5cdFx0Ly9cblx0XHR3aGlsZSAoZGF5SXRlcmF0b3IgPD0gdGhpcy5maW5hbERhdGUpIHtcblx0XHRcdGNvbnN0IGZpbGUgPSBgJHt0aGlzLlBBVEh9L3ZpZGVvLWluZm9zLSR7dGhpcy5zZWxlY3RlZFRlcm0uc2x1Z30tJHtkYXlJdGVyYXRvci5mb3JtYXQoJ1lZWVlNTUREJyl9Lmpzb25gOyAvLyBnZXQgZmlsZSBuYW1lXG5cdFx0XHRmaWxlQXJyYXkucHVzaChmaWxlKTtcblx0XHRcdGRheUl0ZXJhdG9yLmFkZCgxLCAnZGF5cycpO1xuXHRcdH1cblxuXHRcdGNvbnN0IGxvYWRQcm9taXNlID0gbmV3IFByb21pc2UoXG5cdFx0XHQocmVzb2x2ZSkgPT4ge1xuXHRcdFx0XHRQcm9taXNlLmFsbChmaWxlQXJyYXkubWFwKHRoaXMubG9hZGZpbGUpKVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIHRyYW5zZm9ybShjb2xsZWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRjb25zdCB1c2VmdWxEYXRhID0gY29sbGVjdGlvbi5maWx0ZXIoZGF0YSA9PiBkYXRhICE9IHVuZGVmaW5lZCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwodXNlZnVsRGF0YS5tYXAoZGF0YW1vZGVsLnRyYW5zZm9ybURhaWx5RGF0YSkpO1xuXHRcdFx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0ZGF0YW1vZGVsLnJlb3JkZXJCeURhdGUoKTtcblx0XHRcdFx0XHRcdHJldHVybiBkYXRhbW9kZWwucGFyc2VEYXRhKCk7XG5cdFx0XHRcdFx0fSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRkYXRhbW9kZWwuZ2V0UmFua2VkQ2hhbm5lbHMoKTtcblx0XHRcdFx0XHRcdHJlc29sdmUoZGF0YW1vZGVsLnZpZGVvQ29sbGVjdGlvbik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblxuXHRcdHJldHVybiBsb2FkUHJvbWlzZTtcblx0fTtcblxuXHR0aGlzLmxvYWRmaWxlID0gZnVuY3Rpb24gKGZpbGUpIHtcblx0XHRjb25zdCBsb2FkUHJvbWlzZSA9IG5ldyBQcm9taXNlKFxuXHRcdFx0KHJlc29sdmUpID0+IHtcblx0XHRcdFx0anNvbihmaWxlKVxuXHRcdFx0XHRcdC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG5cdFx0XHRcdFx0XHRkYXRhbW9kZWwuZGF5c0xvYWRlZCsrO1xuXHRcdFx0XHRcdFx0Y29uc3QgZCA9IHtcblx0XHRcdFx0XHRcdFx0ZmlsZW5hbWU6IGZpbGUsXG5cdFx0XHRcdFx0XHRcdGRhdGE6IGRhdGFcblx0XHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkKVxuXHRcdFx0XHRcdFx0cmVzb2x2ZShkKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5jYXRjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdHJldHVybiBsb2FkUHJvbWlzZTtcblx0fTtcblxuXHR0aGlzLnRyYW5zZm9ybURhaWx5RGF0YSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cblx0XHRyZXR1cm4gbmV3IFByb21pc2UoXG5cdFx0XHQocmVzb2x2ZSkgPT4ge1xuXG5cdFx0XHRcdGNvbnN0IGZpbGVkYXRhID0gaXRlbS5kYXRhO1xuXG5cdFx0XHRcdGxldCByYXdfZGF0ZSA9IGRhdGFtb2RlbC5nZXREYXRlRnJvbUZpbGVuYW1lKGl0ZW0uZmlsZW5hbWUpOyAvL2dldCBkYXRlIGZyb20gZmlsZW5hbWVcblx0XHRcdFx0bGV0IHJhbmtJbmRleCA9IDA7IC8vXG5cblx0XHRcdFx0Ly8gdHJhbnNmb3JtIGludG8gYW4gYXJyYXlcblx0XHRcdFx0Y29uc3QgYXJyYXlGaWxlRGF0YSA9IE9iamVjdC52YWx1ZXMoZmlsZWRhdGEpO1xuXG5cdFx0XHRcdC8vICAgICAvL3NvcnQgYnkgcmVjY29tZWRhdGlvblxuXHRcdFx0XHRhcnJheUZpbGVEYXRhLnNvcnQoZnVuY3Rpb24gKGIsIGEpIHtcblx0XHRcdFx0XHRyZXR1cm4gYS5uYl9yZWNvbW1lbmRhdGlvbnMgLSBiLm5iX3JlY29tbWVuZGF0aW9ucztcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gbG9vcCB0aHJvdWdoIHZpZGVvcyAtIG1hbmlwdWxhdGUgYW5kIGFkZCBpbmZvcm1hdGlvblxuXHRcdFx0XHRmb3IgKGxldCB2aWRlbyBvZiBhcnJheUZpbGVEYXRhKSB7XG5cblx0XHRcdFx0XHR2aWRlby55b3V0dWJlSUQgPSB2aWRlby5pZDtcblx0XHRcdFx0XHQvLyB2aWRlby5pZCA9ICd2JyArIHZpZGVvSUQ7XG5cdFx0XHRcdFx0dmlkZW8uZGF0ZSA9IGAke3Jhd19kYXRlWzFdfS0ke3Jhd19kYXRlWzJdfS0ke3Jhd19kYXRlWzNdfWA7XG5cdFx0XHRcdFx0dmlkZW8ubW9tZW50ID0gbW9tZW50KGAke3Jhd19kYXRlWzFdfS0ke3Jhd19kYXRlWzJdfS0ke3Jhd19kYXRlWzNdfWApO1xuXHRcdFx0XHRcdHZpZGVvLnJlY1JhbmsgPSByYW5rSW5kZXggKyAxO1xuXHRcdFx0XHRcdHZpZGVvLmRheSA9ICtyYXdfZGF0ZVszXTtcblx0XHRcdFx0XHR2aWRlby5pZCA9ICdfJyArIHZpZGVvLmlkO1xuXG5cdFx0XHRcdFx0ZGVsZXRlIHZpZGVvLmtleTtcblxuXHRcdFx0XHRcdGRhdGFtb2RlbC52aWRlb0NvbGxlY3Rpb24udmlkZW9zLnB1c2godmlkZW8pO1xuXG5cdFx0XHRcdFx0Ly9hZHZhbmNlIGluZGV4XG5cdFx0XHRcdFx0cmFua0luZGV4Kys7XG5cdFx0XHRcdFx0Ly8gdmlkZW9JRCsrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly9hZHZhbmNlIGRhdGVcblx0XHRcdFx0ZGF0YW1vZGVsLmRheXNMb2FkZWQrKztcblxuXG5cdFx0XHRcdHJlc29sdmUoZGF0YW1vZGVsLnZpZGVvQ29sbGVjdGlvbik7XG5cdFx0XHR9KTtcblxuXHR9O1xuXG5cdC8vIGdldCBkYXRlIGZyb20gZmlsZW5hbWVcblx0dGhpcy5nZXREYXRlRnJvbUZpbGVuYW1lID0gZnVuY3Rpb24gZ2V0RGF0ZUZyb21GaWxlbmFtZShmaWxlKSB7XG5cdFx0Y29uc3QgcmVnZXggPSAvKFxcZHs0fSkoXFxkezJ9KShcXGR7Mn0pLzsgLy8gcmVnZXggZmluZCBkYXRlIGZvcm1hdCAnWVlZWS1NTS1ERCdcblx0XHRjb25zdCByYXdEYXRlID0gZmlsZS5tYXRjaChyZWdleCk7XG5cdFx0cmV0dXJuIHJhd0RhdGU7XG5cdH07XG5cblx0LyogbG9hZGluZyBmaWxlcyBhc3N5bmNyb25pb3VzbHkgY2FuIG1ha2UgZGF0YSBiZSBwbGFjZWQgaW4gZGlmZXJlbnQgb3JkZXJcblx0dGhpcyBmdWN0aW9vbiBvcmRlciB0aGUgZGF0YSBieSBkYXRlIChhbHBoYWJldGljYWxseSkgKi9cblx0dGhpcy5yZW9yZGVyQnlEYXRlID0gZnVuY3Rpb24gcmVvcmRlckJ5RGF0ZSgpIHtcblx0XHRkYXRhbW9kZWwudmlkZW9Db2xsZWN0aW9uLnZpZGVvcy5zb3J0KChhLCBiKSA9PiB7XG5cdFx0XHRpZiAoYS5kYXRlIDwgYi5kYXRlKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHRcdGlmIChhLmRhdGUgPiBiLmRhdGUpIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cdFx0XHQvLyBuYW1lcyBtdXN0IGJlIGVxdWFsXG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9KTtcblx0fTtcblxuXG5cdHRoaXMucGFyc2VEYXRhID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKFxuXHRcdFx0KHJlc29sdmUpID0+IHtcblxuXHRcdFx0XHQvL3ZpZGVvIGNvbGxlY3Rpb24gZm9yIHRoaXMgdGVybVxuXHRcdFx0XHRsZXQgbmV3Q29sbGVjdGlvbiA9IFtdO1xuXG5cdFx0XHRcdGZvciAobGV0IHYgb2YgZGF0YW1vZGVsLnZpZGVvQ29sbGVjdGlvbi52aWRlb3MpIHtcblxuXHRcdFx0XHRcdC8vZ2V0IHZpZGVvIGluIHRoZSBjb2xsZWN0aW9uXG5cdFx0XHRcdFx0bGV0IHZpZGVvID0gbmV3Q29sbGVjdGlvbi5maW5kKHZpZCA9PiB2aWQueW91dHViZUlEID09IHYueW91dHViZUlEKTtcblxuXHRcdFx0XHRcdGlmICh2aWRlbyA9PT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdFx0XHRcdHZpZGVvID0ge1xuXHRcdFx0XHRcdFx0XHRpZDogdi5pZCxcblx0XHRcdFx0XHRcdFx0eW91dHViZUlEOiB2LnlvdXR1YmVJRCxcblx0XHRcdFx0XHRcdFx0dGl0bGU6IHYudGl0bGUsXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWw6IHYuY2hhbm5lbCxcblx0XHRcdFx0XHRcdFx0c3VtUmVjOiAwLFxuXHRcdFx0XHRcdFx0XHRkYXRlczogW11cblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdG5ld0NvbGxlY3Rpb24ucHVzaCh2aWRlbyk7XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgZGF5ID0ge1xuXHRcdFx0XHRcdFx0ZGF0ZTogdi5kYXRlLFxuXHRcdFx0XHRcdFx0ZGF5OiB2LmRheSxcblx0XHRcdFx0XHRcdG1vbWVudDogdi5tb21lbnQsXG5cdFx0XHRcdFx0XHR0aXRsZTogdi50aXRsZSxcblx0XHRcdFx0XHRcdGRlcHRoOiB2LmRlcHRoLFxuXHRcdFx0XHRcdFx0ZGlzbGlrZXM6IHYuZGlzbGlrZXMsXG5cdFx0XHRcdFx0XHRsaWtlczogdi5saWtlcyxcblx0XHRcdFx0XHRcdG11bHQ6IHYubXVsdCxcblx0XHRcdFx0XHRcdG5iX3JlY29tbWVuZGF0aW9uczogdi5uYl9yZWNvbW1lbmRhdGlvbnMsXG5cdFx0XHRcdFx0XHRyZWNvbW1lbmRhdGlvbnM6IHYucmVjb21tZW5kYXRpb25zLFxuXHRcdFx0XHRcdFx0dmlld3M6IHYudmlld3MsXG5cdFx0XHRcdFx0XHRyZWNSYW5rOiB2LnJlY1Jhbmtcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0dmlkZW8uc3VtUmVjICs9IHYubmJfcmVjb21tZW5kYXRpb25zO1xuXG5cdFx0XHRcdFx0Ly9maXggZW1wdHkgdGl0bGVcblx0XHRcdFx0XHRpZiAodmlkZW8udGl0bGUgPT0gJycpIHZpZGVvLnRpdGxlID0gdi50aXRsZTtcblxuXHRcdFx0XHRcdHZpZGVvLmRhdGVzLnB1c2goZGF5KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRhdGFtb2RlbC52aWRlb0NvbGxlY3Rpb24udmlkZW9zID0gbmV3Q29sbGVjdGlvbjtcblxuXHRcdFx0XHQvL1JvcmRlclxuXHRcdFx0XHRkYXRhbW9kZWwudmlkZW9Db2xsZWN0aW9uLnZpZGVvcy5zb3J0KGZ1bmN0aW9uIChiLCBhKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGEuc3VtUmVjIC0gYi5zdW1SZWM7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0pO1xuXG5cdH07XG5cblx0dGhpcy5nZXRSYW5rZWRDaGFubmVscyA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Y29uc3QgY2hhbm5lbHMgPSBbXTsgLy8gY29sbGVjdGlvblxuXG5cdFx0Ly9sb29wXG5cdFx0Zm9yIChsZXQgdmlkZW8gb2YgZGF0YW1vZGVsLnZpZGVvQ29sbGVjdGlvbi52aWRlb3MpIHtcblxuXHRcdFx0Ly9jaGFubmVsIG5hbWVcblx0XHRcdGxldCBjaGFubmVsTmFtZSA9IHZpZGVvLmNoYW5uZWw7XG5cblx0XHRcdC8vdG90YWwgdmlkZW8gcmVjb21tZW5kYXRpb25cblx0XHRcdGxldCB2aWRlb1RvdGFsUmVjb21tZW5kYXRpb24gPSAwO1xuXHRcdFx0Zm9yIChsZXQgZGF0ZSBvZiB2aWRlby5kYXRlcykge1xuXHRcdFx0XHR2aWRlb1RvdGFsUmVjb21tZW5kYXRpb24gKz0gZGF0ZS5uYl9yZWNvbW1lbmRhdGlvbnM7XG5cdFx0XHR9XG5cblx0XHRcdC8vZ2V0IGNoYW5uZWwgaW4gdGhlIGNvbGxlY3Rpb25cblx0XHRcdGxldCBjaGFubmVsID0gY2hhbm5lbHMuZmluZChjaGFubmVsID0+IGNoYW5uZWwubmFtZSA9PSBjaGFubmVsTmFtZSk7XG5cblx0XHRcdC8vaWYgbm90IHRoZXJlIHlldCwgcHVzaCBpdCAvLyBpZiBpdCBpcyB1cGRhdGUgaXRcblx0XHRcdGlmKGNoYW5uZWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRjaGFubmVsID0ge1xuXHRcdFx0XHRcdG5hbWU6IGNoYW5uZWxOYW1lLFxuXHRcdFx0XHRcdG51bWJlclZpZGVvczogMSxcblx0XHRcdFx0XHRudW1iZXJSZWNvbW1lbmRhdGlvbnM6IHZpZGVvVG90YWxSZWNvbW1lbmRhdGlvblxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjaGFubmVscy5wdXNoKGNoYW5uZWwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly91cGRhdGVcblx0XHRcdFx0Y2hhbm5lbC5udW1iZXJWaWRlb3MrKztcblx0XHRcdFx0Y2hhbm5lbC5udW1iZXJSZWNvbW1lbmRhdGlvbnMgKz0gdmlkZW9Ub3RhbFJlY29tbWVuZGF0aW9uO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vc29ydCBieSBudW1ibmVyIG9mIHJlY29tbWVuZGF0aW9uXG5cdFx0Y2hhbm5lbHMuc29ydChmdW5jdGlvbiAoYiwgYSkge1xuXHRcdFx0cmV0dXJuIGEubnVtYmVyUmVjb21tZW5kYXRpb25zIC0gYi5udW1iZXJSZWNvbW1lbmRhdGlvbnM7XG5cdFx0fSk7XG5cblxuXHRcdC8vYWRkIGNvbG91ciBiYXNlZCBvbiBwYWxsZXRlIFxuXHRcdGlmICh0aGlzLmFwcC5jaGFubmVsQ29sb3VycykgdGhpcy5fc2V0Q2hhbm5lbENvbG91cihjaGFubmVscyk7XG5cdFx0XG5cblx0XHQvL3NhdmU7XG5cdFx0ZGF0YW1vZGVsLnZpZGVvQ29sbGVjdGlvbi5jaGFubmVscyA9IGNoYW5uZWxzO1xuXHRcdHJldHVybiBkYXRhbW9kZWwudmlkZW9Db2xsZWN0aW9uLmNoYW5uZWxzO1xuXHR9O1xuXG5cdHRoaXMuX3NldENoYW5uZWxDb2xvdXIgPSBmdW5jdGlvbihjaGFubmVscykge1xuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblxuXHRcdGNoYW5uZWxzLmZvckVhY2goIGZ1bmN0aW9uKGMsaSkge1xuXG5cdFx0XHQvL3RvcCB0ZW4gY29sb3IgLy8vIG1vcmUgb24gZ3JheVxuXHRcdFx0aWYgKGkgPCAxMCkge1xuXHRcdFx0XHQvLyBjLmNvbG91ciA9IGFwcC5jaGFubmVsQ29sb3Vyc1tpXTtcblx0XHRcdFx0bGV0IGNvbG91ciA9IGNoZWNrQ2hhbm5lbENvbG91cihjLm5hbWUpO1xuXHRcdFx0XHRpZiAoY29sb3VyKSB7XG5cdFx0XHRcdFx0Yy5jb2xvdXIgPSBjb2xvdXI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjb2xvdXIgPSBjaHJvbWEoX3RoaXMuYXBwLmNoYW5uZWxDb2xvdXJzW2ldKS5oZXgoKTtcblx0XHRcdFx0XHRsZXQgdGVzdER1cGxpY2F0aW9uID0gdHJ1ZTtcblx0XHRcdFx0XHRsZXQgbXVsdGlwbGllciA9IDE7XG5cdFx0XHRcdFx0d2hpbGUgKHRlc3REdXBsaWNhdGlvbikge1xuXHRcdFx0XHRcdFx0dGVzdER1cGxpY2F0aW9uID0gY2hlY2tDb2xvdXJEdXBsaWNhdGlvblRvcFRlbihjb2xvdXIpO1xuXHRcdFx0XHRcdFx0aWYgKHRlc3REdXBsaWNhdGlvbikge1xuXHRcdFx0XHRcdFx0XHRjb2xvdXIgPSBjaHJvbWEoY29sb3VyKS5zYXR1cmF0ZShtdWx0aXBsaWVyKS5oZXgoKTtcblx0XHRcdFx0XHRcdFx0bXVsdGlwbGllcisrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjLmNvbG91ciA9IGNvbG91cjtcblxuXG5cdFx0XHRcdFx0X3RoaXMudG9wQ2hhbm5lbHMucHVzaChjKTsgXG5cdFx0XHRcdH1cblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gYy5jb2xvdXIgPSAnI2NjYyc7XG5cdFx0XHRcdGMuY29sb3VyID0gY2hyb21hKCdsaWdodGdyYXknKS5oZXgoKTtcblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gY2hlY2tDaGFubmVsQ29sb3VyKGNoYW5uZWxOYW1lKSB7XG5cdFx0XHRjb25zdCBjaGFubmVsID0gZGF0YW1vZGVsLnRvcENoYW5uZWxzLmZpbmQoYyA9PiBjLm5hbWUgPT0gY2hhbm5lbE5hbWUpO1xuXHRcdFx0aWYgKGNoYW5uZWwpIHJldHVybiBjaGFubmVsLmNvbG91cjtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNoZWNrQ29sb3VyRHVwbGljYXRpb25Ub3BUZW4oY29sb3VyKSB7XG5cdFx0XHRjb25zdCBjb2xvdXJDaGFubmVsID0gZGF0YW1vZGVsLnRvcENoYW5uZWxzLmZpbmQoYyA9PiBjLmNvbG91ciA9PSBjb2xvdXIpO1xuXHRcdFx0aWYgKGNvbG91ckNoYW5uZWwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMuY2hhbmdlUGVyaW9kID0gZnVuY3Rpb24odGVybSxzdGFydCwgZW5kKSB7XG5cblx0XHRsZXQgc3RhcnREYXRlID0gbW9tZW50KHN0YXJ0KTtcblx0XHRsZXQgZW5kRGF0ZSA9IG1vbWVudChlbmQpO1xuXG5cdFx0Ly8gaW52ZXJzZSBvcmRlciBpZiB0aGUgZGF0ZXMgYXJlIHN3aXRjaGVkXG5cdFx0aWYgKHN0YXJ0RGF0ZS5pc0FmdGVyKGVuZERhdGUpKSB7XG5cdFx0XHRsZXQgdCA9IHN0YXJ0RGF0ZTtcblx0XHRcdHN0YXJ0RGF0ZSA9IGVuZERhdGU7XG5cdFx0XHRlbmREYXRlID0gdDtcblx0XHR9XG5cblx0XHQvL2RhdGUgbGltaXRzXG5cdFx0aWYgKHN0YXJ0RGF0ZS5pc0JlZm9yZSh0aGlzLmluaXRpYWxEYXRlKSkgeyBzdGFydERhdGUgPSB0aGlzLmluaXRpYWxEYXRlOyB9XG5cdFx0aWYgKGVuZERhdGUuaXNBZnRlcih0aGlzLmZpbmFsbERhdGUpKSB7IGVuZERhdGUgPSB0aGlzLmZpbmFsbERhdGU7IH1cblxuXHRcdC8vdXBkYXRlIHBlcmlvZFxuXHRcdHRoaXMucGVyaW9kLnN0YXJ0RGF0ZSA9IHN0YXJ0RGF0ZTtcblx0XHR0aGlzLnBlcmlvZC5lbmREYXRlID0gZW5kRGF0ZTtcblxuXHRcdC8vdXBkYXRlIG51bWJyIG9mIGRheXNcblx0XHR0aGlzLm51bWJlckRheXMgPSB0aGlzLnBlcmlvZC5lbmREYXRlLmRpZmYodGhpcy5wZXJpb2Quc3RhcnREYXRlLCAnZGF5cycpKzE7XG5cblx0XHQvL3Rlc3Rcblx0XHR0aGlzLmZpbHRlclZpZGVzQnlQZXJpb2QodGVybSxzdGFydCxlbmQpO1xuXG5cdH07XG5cblx0dGhpcy5maWx0ZXJWaWRlc0J5UGVyaW9kID0gZnVuY3Rpb24odFNsdWcpIHtcblxuXHRcdGNvbnN0IF90aGlzID0gdGhpcztcblx0XHRcblx0XHRjb25zdCB0ZXJtU2VsZWN0ZWQgPSB0aGlzLnRlcm1zLmZpbmQodGVybSA9PiB0ZXJtLnNsdWcgPT0gdFNsdWcpO1xuXG5cdFx0Ly8gY29uc3QgZmlsdGVyZWREYXRhID0gdGVybVNlbGVjdGVkO1xuXG5cdFx0Ly9maWx0ZXIgZGF0YVxuXHRcdHRlcm1TZWxlY3RlZC5maWx0ZXJlZFBlcmlvZCA9IHtcblx0XHRcdHN0YXJ0RGF0ZTogdGhpcy5wZXJpb2Quc3RhcnREYXRlLFxuXHRcdFx0ZW5kRGF0ZTogdGhpcy5wZXJpb2QuZW5kRGF0ZSxcblx0XHRcdHZpZGVvczogW11cblx0XHR9O1xuXHRcdFxuXHRcdGZvcihjb25zdCB2aWRlbyBvZiB0ZXJtU2VsZWN0ZWQudmlkZW9zKSB7XG5cdFx0XHRsZXQgZmlsdGVyZWREYXRlcyA9IHZpZGVvLmRhdGVzLmZpbHRlcihpc0JldHdlZW5EYXRlcyk7XG5cdFx0XHRcblx0XHRcdC8vaWYgYW55LCBhZGQgdG8gdGhlIGxpc3Rcblx0XHRcdGlmIChmaWx0ZXJlZERhdGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0bGV0IGZpbHRlcmVkVmlkZW8gPSB7XG5cdFx0XHRcdFx0Y2hhbm5lbDogdmlkZW8uY2hhbm5lbCxcblx0XHRcdFx0XHRpZDogdmlkZW8uaWQsXG5cdFx0XHRcdFx0dGl0bGU6IHZpZGVvLnRpdGxlLFxuXHRcdFx0XHRcdHlvdXR1YmVJRDogdmlkZW8ueW91dHViZUlEXG5cdFx0XHRcdH07XG5cdFx0XHRcdGZpbHRlcmVkVmlkZW8uZGF0ZXMgPSBmaWx0ZXJlZERhdGVzO1xuXHRcdFx0XHR0ZXJtU2VsZWN0ZWQuZmlsdGVyZWRQZXJpb2QudmlkZW9zLnB1c2goZmlsdGVyZWRWaWRlbyk7XG5cblx0XHRcdFx0Ly9jaGVjayB0aGUgc3VtIG9mIHJlY29tbWVuZGF0aW9uIGZvciB0aGUgcGVyaW9kXG5cdFx0XHRcdGZpbHRlcmVkVmlkZW8uc3VtUmVjID0gMDtcblx0XHRcdFx0Zm9yKGNvbnN0IGRheSBvZiBmaWx0ZXJlZERhdGVzKSB7XG5cdFx0XHRcdFx0ZmlsdGVyZWRWaWRlby5zdW1SZWMgICs9IGRheS5uYl9yZWNvbW1lbmRhdGlvbnM7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBpc0JldHdlZW5EYXRlcyhlbGVtZW50KSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudC5tb21lbnQuaXNCZXR3ZWVuKF90aGlzLnBlcmlvZC5zdGFydERhdGUsX3RoaXMucGVyaW9kLmVuZERhdGUsICdkYXknLCdbXScpO1xuXHRcdH1cblxuXHRcdC8vUm9yZGVyXG5cdFx0dGVybVNlbGVjdGVkLmZpbHRlcmVkUGVyaW9kLnZpZGVvcy5zb3J0KGZ1bmN0aW9uIChiLCBhKSB7XG5cdFx0XHRyZXR1cm4gYS5zdW1SZWMgLSBiLnN1bVJlYztcblx0XHR9KTtcblxuXHRcdHRoaXMudXBkYXRlRGF0YSgpO1xuXG5cdH07XG5cblx0Ly8gdGhpcy5zZWxlY3RUZXJtID0gZnVuY3Rpb24odGVybSkge1xuXHQvLyBcdHRoaXMuc2VsZWN0ZWRUZXJtID0gdGVybTsgLy9uZXcgdGVybVxuXHQvLyBcdGNvbnN0IHRlcm1TZWxlY3RlZCA9IHRoaXMudGVybXMuZmluZCh0ZXJtID0+IHRlcm0uc2x1ZyA9PSB0aGlzLnNlbGVjdGVkVGVybSk7XG5cblx0Ly8gXHQkKCcjY3VycmVudC12aWV3JykuZmluZCgnI2N1cnJlbnQtdGVybicpLmh0bWwodGVybVNlbGVjdGVkLm5hbWUpO1xuXG5cdC8vIFx0aWYodGVybVNlbGVjdGVkLnZpZGVvcy5sZW5ndGggPT0gMCkge1xuXHQvLyBcdFx0ZGF0YW1vZGVsLmVtaXQoJ2xvYWQnLHRlcm0pO1xuXHQvLyBcdFx0Ly8gJChyYW5rZmxvd0RhdGEpLnRyaWdnZXIoJ2xvYWQnKTtcblx0Ly8gXHRcdHRoaXMubG9hZERhdGEoKTtcblx0Ly8gXHR9IGVsc2Uge1xuXHQvLyBcdFx0dGhpcy51cGRhdGVEYXRhKCk7XG5cdC8vIFx0fVxuXHRcdFxuXHQvLyB9O1xuXG5cdHRoaXMudXBkYXRlRGF0YSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWREYXRhc2V0ID0gdGhpcy50ZXJtcy5maW5kKHRlcm0gPT4gdGVybS5zbHVnID09IHRoaXMuc2VsZWN0ZWRUZXJtKTtcblx0XHRkYXRhbW9kZWwuZW1pdCgndXBkYXRlJyxbc2VsZWN0ZWREYXRhc2V0XSk7XG5cblx0XHQvLyAkKHJhbmtmbG93RGF0YSkudHJpZ2dlcigndXBkYXRlJyxbc2VsZWN0ZWREYXRhc2V0XSk7XG5cblx0fTtcblxuXHR0aGlzLmRpc3BsYXlQZXJpb2RTdGFydERhdGUgPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wZXJpb2Quc3RhcnREYXRlLmxvY2FsZSgncHQnKS5mb3JtYXQoJ0REIE1NTU0gJyk7XG5cdH07XG5cblx0dGhpcy5kaXNwbGF5UGVyaW9kRW5kRGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnBlcmlvZC5lbmREYXRlLmxvY2FsZSgncHQnKS5mb3JtYXQoJ0REIE1NTU0nKTtcblx0fTtcbn1cblxuY29uc3QgZGF0YW1vZGVsID0gbmV3IERhdGFtb2RlbCgpO1xuZXhwb3J0IGRlZmF1bHQgZGF0YW1vZGVsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==