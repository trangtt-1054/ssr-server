//Redux store on server side, mục đích chủ yếu của redux store ở server side là detect đc initial loading finish TRƯỚC KHI render React app (before calling renderer fn), thế nên sẽ ko wrap provider trực tiếp vào StaticBrowser, mà sẽ đưa Rrovider vào index.js trước, rồi mới pass xuống renderer

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import axios from 'axios';

export default (req) => {
  //req passed from index.js
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: { cookie: req.get('cookie') || '' }, //ko phải lúc nào req cũng có cookie nên phải có default là empty string
  });

  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );
  return store;
};
