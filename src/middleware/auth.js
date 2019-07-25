import * as types from '../constants/actionTypes';

// Manage the user name on the local storage.

export default store => next => action => {

  if (action.type === types.SET_NAME) {
    localStorage.setItem('user', JSON.stringify(action.body.name));
  }

  if (action.type === types.REMOVE_NAME) {
    localStorage.removeItem('user');
  }

  return next(action);
}