import * as types from '../constants/actionTypes';

// Manage the username in local storage.

export default store => next => action => {

  // Set username in localstorage.
  if (action.type === types.SET_NAME) {
    localStorage.setItem('user', JSON.stringify(action.body.name));
  }

  // Remove saved username in localstorage.
  if (action.type === types.REMOVE_NAME) {
    localStorage.removeItem('user');
  }

  return next(action);
}