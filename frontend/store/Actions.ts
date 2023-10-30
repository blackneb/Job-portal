import { USER_AUTHENTICATED, USER_PROFILE } from "./ActionTypes";

export const user_profile = (user_profile:any) => {
    return{
        type: USER_PROFILE,
        payload: user_profile
    }
}

export const user_authenticated = (userauth:any) => {
    return{
        type: USER_AUTHENTICATED,
        payload: userauth
    }
}