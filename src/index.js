import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public')); //tell Express that it needs to treat 'public' dir as a static/public directory available to outside world

app.get('*', (req, res) => {
  const store = createStore();
  //TODO: logic to initialize and load data into store
  res.send(renderer(req, store));
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

/*
renderToString(<Home />): using JSX inside Node, Node doesn't know what jsx is => run node src/index.js sẽ lỗi => vẫn phải compile qua Webpack và Babel, rồi chạy node với file bundle
 */
