import { SIGN_IN, LOG_OUT } from "./actionType"


const token = localStorage.getItem("Kenzie-shop:token") || ""


const defaultState = {
    token,
}


const userReducer = (state = defaultState, action) =>{

    switch (action.type){
        case SIGN_IN:
            const {token} = action
            return {...state, token}
        case LOG_OUT:
            return {...state, token: ""}
        default:
            return state;
    }
}

export default userReducer;