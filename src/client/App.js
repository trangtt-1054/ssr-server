import React from 'react';
import { renderRoutes } from 'react-router-config';

//any route that gets matched during the matchRoute process will be passed into the component as a prop called route: a collection of component we need to render inside the App component
const App = ({ route }) => {
  console.log(route)
  return (
    <div>
      <h1>Header</h1>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
}
//pass in renderRoutes any routes that were matched during the match route process

export default {
  component: App
}