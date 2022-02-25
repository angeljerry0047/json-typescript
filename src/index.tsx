import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './component/App/App';
import 'tachyons';
import { reducers } from "./reducers"
import './index.css';
const store = createStore(reducers, applyMiddleware(thunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// ReactDom.render(<App color="red" />, document.getElementById('root'));
