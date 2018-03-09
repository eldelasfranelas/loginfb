import * as types from '../actions/types'

const initialState = {
    loading: false,
    error: null,
    data: null,
    response: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                response: true,
                data: action.data,
            }

        case types.LOGIN_FAIL:
            return {
                ...state,
                response: true,
                data: action.data,
            }
        case types.LOGIN_START:
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}