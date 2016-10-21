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

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);

	document.addEventListener("DOMContentLoaded", ()=> {
	  let child = document.getElementsByClassName("sidebar-nav")[0].children;
	  let routes = {"Compose":null, "Inbox":null, "Sent":null};
	  routes.Inbox = new Inbox();
	  for (var i = 0; i < child.length; i++) {
	    let that = child[i];
	    child[i].addEventListener("click", ()=>{
	      let newLoc = that.innerText;
	      newLoc.toLowerCase();
	      window.location.hash = newLoc;
	      let router = new Router(document.querySelector(".content"), routes);
	      router.start();
	    });
	  }
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	class Router{
	  constructor(node, routes){
	    this.node = node;
	    this.routes = routes;
	  }

	  start(){
	    this.render();
	    document.addEventListener("DOMContentLoaded", ()=> this.render());
	  }

	  render(){
	    let component = this.activeRoute();
	    if(component){
	      this.node.innerHTML = "";
	      let dom = component.render();
	      this.node.appendChild(dom);
	    } else {
	      this.node.innerHTML = "";
	    }
	  }

	  activeRoute() {
	    let component = window.location.hash.slice(1);
	    return this.routes[component];
	  }
	}

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	const MessageStore = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./message-store.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	class Inbox {
	  constructor(messageStore) {
	    this.messages = messageStore;
	  }

	  render() {
	    let doc = document.createElement("UL");
	    doc.className = "messages";
	    let emails = this.messages.getInboxMessages();
	    for (var i = 0; i < emails.length; i++) {
	      let mailNode = this.renderMessage(emails[i]);
	      doc.appendChild(mailNode);
	    }
	    return doc;
	  }

	  renderMessage(message){
	    let li = document.createElement("LI");
	    li.className = "message";
	    // li.innerHTML = 
	  }
	}

	module.exports = Inbox;


/***/ }
/******/ ]);