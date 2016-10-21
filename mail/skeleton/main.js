const Router = require('./router.js');
const Inbox = require('./inbox.js');

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
