import * as types from './types'

export const login = (username, pass) => {
    return dispatch => {
        dispatch({type: types.LOGIN_START})
        console.log("executing")
        setTimeout(() => {
            dispatch({type: types.LOGIN_SUCCESS})
            // dispatch({type: types.LOGIN_FAIL})
            console.log("all good")
        }, 4000)

    }
}