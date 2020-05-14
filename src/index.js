const express = require('express');
const React = require('react');
const renderToString = ('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home />); 
  res.send(content)
})

app.listen(300, () => {
  console.log('Listening on port 3000')
})

/*
renderToString(<Home />): using JSX inside Node, Node doesn't know what jsx is => run node src/index.js sẽ lỗi => vẫn phải compile qua Webpack và Babel, rồi chạy node với file bundle


 */
