import React from 'react';

export class DefaultTemplate extends React.Component {
  render() {
    return (
      <div className="default-template">
        <div className="default-template-content">
          { this.props.children }
        </div>
      </div>
    );
  }
};
