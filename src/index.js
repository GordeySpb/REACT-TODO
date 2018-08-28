import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './helpers/store';
import App from './App';
import { addTodos } from './helpers/actions';

store.dispatch(addTodos());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
