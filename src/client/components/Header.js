import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';

const Header = ({ auth }) => {
  console.log('My auth status is ', auth);

  const authButton = auth ? (<a href="/api/logout">Logout</a>) : (<a href="/api/auth/google">Login</a>)
  return (
    <div>
      <Link to="/">Server Side Rendering</Link>
      <div>
        <Link to='/users'>Users</Link>
        <Link to='/admins'>Admin</Link>
        {authButton}
      </div>
    </div>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, { fetchCurrentUser })(Header);