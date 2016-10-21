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

	const DomNodeCollection = __webpack_require__(1);

	window.$l = function(arg) {
	  let arr = [];

	  if (arg instanceof HTMLElement) {
	    return new DomNodeCollection(arr.push(arg));
	  } else {
	    let nodeLst = document.querySelectorAll(arg);
	    return new DomNodeCollection(Array.from(nodeLst));
	  }
	};


/***/ },
/* 1 */
/***/ function(module, exports) {

	class DomNodeCollection {
	  constructor(nodeArray) {
	    this.nodeArray = nodeArray;
	  }

	  html(string) {
	    let first = this.nodeArray[0];
	    if (string === undefined) {
	      return first.innerHTML;
	    } else {
	      for (var i = 0; i < this.nodeArray.length; i++) {
	        this.nodeArray[i].innerHTML = string;
	      }
	    }
	  }

	  empty() {
	    this.html("");
	  }

	  append(el) {
	    for (var i = 0; i < this.nodeArray.length; i++) {
	      this.nodeArray[i].appendChild(el);
	    }
	  }

	  attr(attrName, value) {
	    if (value) {
	      for (var i = 0; i < this.nodeArray.length; i++) {
	        this.nodeArray[i].setAttribute(attrName, value);
	      }
	    } else {
	      return this.nodeArray[0].getAttribute(attrName);
	    }
	  }

	  addClass(name) {
	    for (var i = 0; i < this.nodeArray.length; i++) {
	      this.nodeArray[i].className = (this.nodeArray[i].className + " " + name).trim();
	    }
	  }

	  removeClass(name){
	    for (var i = 0; i < this.nodeArray.length; i++) {
	      let classes = this.nodeArray[i].className;
	      classes = classes.split(" ");
	      for (var j = 0; j < classes.length; j++) {
	        if(classes[j] === name){
	          classes.splice(j, 1);
	        }
	      }
	      this.nodeArray[i].className = classes.join(" ");
	    }
	  }

	  children() {
	    let childArr = [];

	    for (var i = 0; i < this.nodeArray.length; i++) {
	      childArr = childArr.concat(this.nodeArray[i].children);
	    }

	    return new DomNodeCollection(childArr);
	  }

	  parent() {
	    let parentArr = [];

	    for (var i = 0; i < this.nodeArray.length; i++) {
	      parentArr = parentArr.concat(this.nodeArray[i].parentNode);
	    }

	    return new DomNodeCollection(parentArr);
	  }

	  find(selector) {
	    let results = [];
	    for (var i = 0; i < this.nodeArray.length; i++) {
	      results = results.concat(this.nodeArray[i].querySelectorAll(selector));
	    }
	    return results;
	  }

	  remove(selector) {
	    let selectedDoms = this.find(selector);
	    console.log(selectedDoms);
	    for (var i = 0; i < selectedDoms.length; i++) {
	      let parent = selectedDoms[i].parentNode;
	      console.log(selectedDoms[i].parentNode);
	      parent.removeChild(selectedDoms[i]);
	    }
	  }
	}

	module.exports = DomNodeCollection;


/***/ }
/******/ ]);