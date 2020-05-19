import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../actions';

const Header = ({ auth }) => {
  console.log('My auth status is ', auth);

  const authButton = auth ? (<a href="/api/logout">Logout</a>) : (<a href="/api/auth/google">Login</a>)
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Server Side Rendering</Link>
        <ul className="right">
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/admins'>Admin</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps, { fetchCurrentUser })(Header);