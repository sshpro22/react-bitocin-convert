
import * as types from '../constants/actionTypes';

// Get the currency rates from 3rd party API.
export const getRates = () => ({
    type: types.GET_RATE,
    method: 'GET',
    path: 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global',
});