//Start client side app
//console.log("this is client side")
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './Routes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));
//{} is initial state

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root'));
//div id=root đã đc render ở server rồi, ở đây là render phía browser, ko thay thế hoàn toàn cái div có sẵn, chỉ là fill content, set up event handler các thứ.