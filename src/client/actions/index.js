/* trước khi có axios instance
export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
}  */

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  //api chính là axiosInstance pass vào ở bên client.js (withExtraArgument)
  const res = await api.get('/users');
  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');
  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};
