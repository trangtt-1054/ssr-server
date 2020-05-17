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
import axios from 'axios';

//create a custom instance of axios (a preconfigured version of axios), pass it to redux thunk so that instance can be automatically sent to all action creators
const axiosInstance = axios.create({
  baseURL: '/api', //gắn url vào tất cả request, ví dụ axiosInstance.get('/users') thì sẽ là /api/users
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk.default.withExtraArgument(axiosInstance))
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
