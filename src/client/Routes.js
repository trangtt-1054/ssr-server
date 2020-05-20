import React from 'react';
//import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersListPage, { loadData } from './pages/UsersListPage';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

//use react-router-config for ssr
export default [
  {
    ...App,
    //nest some routes inside the app, ko có path cụ thể nào cho App tức là App sẽ show 100% ở tất cả các route. So the app component right here is going to be passed the child component as a prop
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
        //component: HomePage,
      },
      {
        ...AdminsListPage,
        route: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
        //loadData,
        //component: UsersListPage,
      },
      {
        ...NotFoundPage,
        //ko provide path tức là sẽ show tại mọi route nào mà ko phải các route trên
      },
    ],
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
