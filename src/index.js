import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';
import App from './App';
import './index.css';
import configureStore from './redux/configureStore';
import * as serviceWorker from './serviceWorker';

const reduxtStore = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={reduxtStore}>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
