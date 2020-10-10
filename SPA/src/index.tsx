import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-app-polyfill/ie11';
import 'core-js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import "bootstrap/dist/css/bootstrap.css";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Link } from "react-router-dom";

ReactDOM.render(
    <Router>
      <App />
    </Router>, 
    document.getElementById('root') // as HTMLElement
);

registerServiceWorker();
