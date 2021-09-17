import * as types from '../constants/user'

const initialState = false

const reducer = (state = initialState , action) => {
    switch(action.type){
        case types.CHANGE_USER_LOCAL_STORAGE: {
            const isLocal = JSON.parse(localStorage.getItem('NinhNamUser'))
            const isOK = Boolean(isLocal)
            return isOK
        }

        default: 
            return state;
    }
}

export default reducer