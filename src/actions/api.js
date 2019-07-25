
import * as types from '../constants/actionTypes';

export const getRates = () => ({
    type: types.GET_RATE,
    method: 'GET',
    path: 'https://apiv2.bitcoinaverage.com/constants/exchangerates/global',
});