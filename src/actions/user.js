import * as types from '../constants/actionTypes';

// Set username and save it in localstorage and state.
export const setName = (body) => ({
    type: types.SET_NAME,
    body
});

// Remove username in localstorage.
export const removeName = () => ({
    type: types.REMOVE_NAME,
})