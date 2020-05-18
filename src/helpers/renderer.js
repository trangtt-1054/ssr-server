//a function that simply renders react app as a string, ko để ở index.js vì tránh mai sau app mở rộng thì file size sẽ bị lớn

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import serialize from 'serialize-javascript';

export default (req, store) => {
  const content = renderToString(
    //context là prop bắt buộc của StaticRouter, ko pass vào là lỗi, tạm thời pass vào empty object, handle some redirect and error handling
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        {/* <Routes /> */}
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );
  //tell browser to download bundle.js inside public. ở script ko cần phải gắn public/bundle.js nữa vì đã có app.use public ở trên rồi
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
            window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    <html>
  `;
};
