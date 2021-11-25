import {SIGN_IN, LOG_OUT} from "./actionType"

export const signIn = (token) => (
    {
        type: SIGN_IN,
        token
    }   
)

export const logOut = () => (
    {
        type: LOG_OUT,
    }   
)