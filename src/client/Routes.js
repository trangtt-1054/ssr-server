import React from 'react';
//import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';

//use react-router-config for ssr
export default [
  {
    ...HomePage,
    path: '/',
    exact: true,
    //component: HomePage,
  },
  {
    ...UsersListPage,
    path: '/users',
    //loadData,
    //component: UsersListPage,
  },
];

/* export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UsersList} />
    </div>
  )
} */
