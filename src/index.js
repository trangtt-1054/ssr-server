import 'babel-polyfill';
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';

const app = express();

app.use(express.static('public')); //tell Express that it needs to treat 'public' dir as a static/public directory available to outside world

app.get('*', (req, res) => {
  const store = createStore();

  //TODO: logic to initialize and load data into store
  //Figure out what component to show
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
    //phải có return nếu ko promise sẽ undefined
  });

  console.log(promises);
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
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
