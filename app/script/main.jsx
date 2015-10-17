var Router = require('director').Router;
var remote = window.require('remote');

// routes
var ExampleController = require('./controllers/example-controller.jsx');

var routes = {
  '/': function () {
    ExampleController.init();
  }
};

var route = new Router(routes);

var currentRoute = (function () {
  var current = '/',
    hash = location.hash;

  if (hash !== '' && hash.indexOf('/') > -1) {
    current = hash.substr(1);
  }

  return current;
})();

route.init(currentRoute);
