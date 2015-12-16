import { Router } from 'director';
import { ExampleController } from './controllers/example-controller.jsx';

// routes

var routes = {
  '/': function () {
    new ExampleController().render();
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
