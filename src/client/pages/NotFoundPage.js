import React from 'react';

//props được pass xuống từ StaticRouter, tuy props pass từ trên xuống là 'context', nhưng khi nhận vào sẽ là 'staticContext'
//https://reacttraining.com/react-router/web/guides/server-rendering

const NotFoundPage = ({ staticContext = {} }) => {
  //mark this staticContext with an error. After rendering our application, we can inspect the staticContext and say: if there is a property notFound of true, that means something wrong happen
  staticContext.notFound = true;

  return <h1>Oops, page not found.</h1>
}

export default {
  component: NotFoundPage
}