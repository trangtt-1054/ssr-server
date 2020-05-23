import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default (ChildComponent) => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case false:
          return <Redirect to="/" />
        case null: //not yet fetch authentication state
          return <div>Loading ...</div>
        default: //chính là case status trả về object của currentuser, vì ko cần phải tách riêng case ra nên đặt là default case luôn. If the user is signed in, show Child Component. Remember whenever we create HOC, we need to make sure to pass the props to the child component
          return <ChildComponent {...this.props} />
      }
    }
  }

  const mapStateToProp = ({ auth }) => {
    return { auth }
  }

  return connect(mapStateToProp)(RequireAuth);
}