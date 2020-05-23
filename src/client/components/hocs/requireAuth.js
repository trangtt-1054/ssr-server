import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to='/' />;
        case null: //not yet fetch authentication state
          return <div>Loading ...</div>;
        default:
          //chính là case status trả về object của currentuser,
          return <ChildComponent {...this.props} />;
      }
    }
  }

  const mapStateToProp = ({ auth }) => {
    return { auth };
  };

  return connect(mapStateToProp)(RequireAuth);
};
