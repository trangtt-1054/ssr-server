import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import proxy from 'express-http-proxy';

const app = express();

//set up proxy as a middleware, tell proxy that we want to send request from any request that coming from the route '/api'. proxy is a fn, pass in a string to tell it where to send request to. Now any request trying to access the route of '/api' will be sent off to http://react-ssr-api.herokuapp.com
app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'; //phải có cái x-forwarded-host này thì khi auth xong mới redirect về localhost: 3000
      return opts;
    },
  })
);

app.use(express.static('public')); //tell Express that it needs to treat 'public' dir as a static/public directory available to outside world

app.get('*', (req, res) => {
  const store = createStore(req);

  //TODO: logic to initialize and load data into store
  //Figure out what component to show
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
    //phải có return nếu ko promise sẽ undefined
  });

  console.log(promises);
  Promise.all(promises).then(() => {
    //to connect the context to the respond object from Express, we will define the context object inside the route handler and pass it into renderer function
    const context = {}
    const content = renderer(req, store, context);
    if (context.notFound) {
      res.status(404); //it's ok to send the status before sending the respond
    }
    res.send(content);
    //res.send(renderer(req, store, context));
  });

  /* matchRoutes(list of route, path that user attempts to view), returns an array of components about to be rendered 
  
  vì matchRoutes trả về 1 array có dạng [{route: {}}, {route: {}}, {route: {}}...] nên khi map thì destructure đc 'route'

  matchRoutes returns an array of Promise of pending network request
  
  */
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

/*
renderToString(<Home />): using JSX inside Node, Node doesn't know what jsx is => run node src/index.js sẽ lỗi => vẫn phải compile qua Webpack và Babel, rồi chạy node với file bundle
 */
