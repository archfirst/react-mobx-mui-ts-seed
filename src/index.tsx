import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './register-service-worker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
