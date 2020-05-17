import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Queen's big list of users
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

const loadData = (store) => {
  //console.log('Trying to load some data');
  return store.dispatch(fetchUsers()); //return a Promise representing the network request, ko dùng connect function để dispatch vì muốn dùng connect thì phải có Proivder, mà lúc này app còn chưa render nên ko có Provider
};

// export { loadData };
// export default connect(mapStateToProps, { fetchUsers })(UsersList);

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
};
