import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  //ở đây mà dùng arrow fn là lỗi build
  //https://stackoverflow.com/questions/41398645/unable-to-use-arrow-functions-inside-react-component-class
  //muốn dùng thì phải dùng pluigin https://babeljs.io/docs/en/babel-plugin-transform-class-properties/

  renderAdmins() {
    return this.props.admins.map((admin) => {
      return <li key={admin.id}>{admin.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return { admins: state.admins };
};

export default {
  component: connect(mapStateToProp, { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
