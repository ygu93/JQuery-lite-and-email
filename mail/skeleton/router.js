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
