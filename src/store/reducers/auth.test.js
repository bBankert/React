import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer',() => {
    it('should return the initial state',() => {
        expect(reducer(undefined,{})).toEqual({token: null,
            UID: null,
            error: null,
            loading: false,
            authRedirectPath: '/'});
    });

    it('should store a token on login',() => {
        expect(reducer({token: null,
            UID: null,
            error: null,
            loading: false,
            authRedirectPath: '/'},
            {type: actionTypes.AUTH_SUCCESS,token: 'token',UID:'id'}))
            .toEqual({
                token: 'token',
                UID: 'id',
                error: null,
                loading: false,
                authRedirectPath: '/'
            });
    });
});