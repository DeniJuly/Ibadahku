const {LOGIN, LOGOUT, REGISTER} = require('../constants/constants');

const initState = {
    authenticated: false,
    user: null,
};

const auth = (state = initState, action) => {
    switch (action.type) {
        case `${LOGIN}_PENDING`:
            console.log('LOGIN PENDING===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${REGISTER}_PENDING`:
            console.log('REGISTER PENDING===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${LOGOUT}_PENDING`:
            console.log('LOGOUT PENDING===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${LOGIN}_FULFILLED`:
            console.log('LOGIN FULFILLED===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${REGISTER}_FULFILLED`:
            console.log(
                'REGISTER FULFILLED===========================>',
                action,
            );
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${LOGOUT}_FULFILLED`:
            console.log('LOGOUT FULFILLED===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${LOGIN}_REJECTED`:
            console.log('LOGIN REJECTED===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${REGISTER}_REJECTED`:
            console.log(
                'REGISTER REJECTED===========================>',
                action,
            );
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        case `${LOGOUT}_REJECTED`:
            console.log('LOGOUT REJECTED===========================>', action);
            if (action.error == undefined && action.payload) {
                return {
                    ...state,
                    authenticated: action.payload.authenticated,
                    user: action.payload.user,
                };
            }
        default:
            return state;
            break;
    }
};

export default auth;
