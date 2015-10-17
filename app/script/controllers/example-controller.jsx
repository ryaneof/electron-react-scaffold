var React = require('react');
var ReactDOM = require('react-dom');
var ExampleComponent = require('../components/views/example-component.jsx');
var DefaultTemplate = require('../components/templates/default-template.jsx');

module.exports = {
  init: function () {
    this.render();
  },

  render: function () {
    ReactDOM.render(
      <DefaultTemplate>
        <ExampleComponent />
      </DefaultTemplate>,
    document.querySelector('.app-container'));
  }
};
