import * as types from '../constants/actionTypes';

export const setName = (body) => ({
    type: types.SET_NAME,
    body
});

export const removeName = () => ({
    type: types.REMOVE_NAME,
})