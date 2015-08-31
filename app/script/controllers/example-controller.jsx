var React = require('react');
var ExampleComponent = require('../components/views/example-component.jsx');
var DefaultTemplate = require('../components/templates/default-template.jsx');

module.exports = {
  init: function () {
    this.render();
  },

  render: function () {
    React.render(
      <DefaultTemplate>
        <ExampleComponent />
      </DefaultTemplate>,
    document.querySelector('.app-container'));
  }
};
