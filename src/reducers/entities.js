import * as types from '../constants/actionTypes';

const defaultState = {
    user: "",
    rates: {
        loading: true,
        error: null,
        data: null,
    }
};

const entities = (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_NAME:
            return {
                ...state,
                user: action.body.name
            }
        case types.REMOVE_NAME:
            return {
                ...state,
                user: false
            }
        case types.GET_RATE:
            if (action.status === 'REQUESTED') {
                return {
                    ...state,
                    rates: {
                        loading: true,
                        error: null,
                        data: {}
                    }
                }
            } else if (action.path && action.method && (action.status === 'COMPLETE')) {
                return {
                    ...state,
                    rates: {
                        loading: false,
                        error: null,
                        data: action.response.rates    
                    }
                }
            } else if (action.status === 'ERRORED'){
                return {
                    ...state,
                    rates: {
                        loading: false,
                        error: action.error,
                        data: {}
                    }
                }
            }
            return state
        default:
            return state
    }
}

export default entities;