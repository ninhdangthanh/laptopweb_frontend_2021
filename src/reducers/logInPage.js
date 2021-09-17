import * as types from '../constants/ui'

const initialState = true

const reducer = (state = initialState , action) => {
    switch(action.type){
        case types.LOGIN_PAGE: {
            return !state
        }

        default: 
            return state;
    }
}

export default reducer