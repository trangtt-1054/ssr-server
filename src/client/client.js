//Start client side app
//console.log("this is client side")
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import * as thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config';

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.default)
);
//{} is initial state

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Routes /> */}
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
//div id=root đã đc render ở server rồi, ở đây là render phía browser, ko thay thế hoàn toàn cái div có sẵn, chỉ là fill content, set up event handler các thứ.
