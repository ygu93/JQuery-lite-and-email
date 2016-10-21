const DomNodeCollection = require('./dom_node_collection');

window.$l = function(arg) {
  let arr = [];

  if (arg instanceof HTMLElement) {
    return new DomNodeCollection(arr.push(arg));
  } else {
    let nodeLst = document.querySelectorAll(arg);
    return new DomNodeCollection(Array.from(nodeLst));
  }
};
