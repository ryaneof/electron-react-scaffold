var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="default-template">
        <div className="default-template-content">
          { this.props.children }
        </div>
      </div>
    );
  }
});
