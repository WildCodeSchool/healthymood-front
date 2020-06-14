import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Styles/Variables.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

console.log('using API URL : ', process.env.REACT_APP_API_BASE_URL);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
