import React from 'react';
import ReactDOM from 'react-dom';
import { ExampleComponent } from '../components/views/example-component.jsx';
import { DefaultTemplate } from '../components/templates/default-template.jsx';

export class ExampleController extends React.Component {
  render() {
    ReactDOM.render(
      <DefaultTemplate>
        <ExampleComponent />
      </DefaultTemplate>, document.querySelector('.app-container')
    );
  }
};
