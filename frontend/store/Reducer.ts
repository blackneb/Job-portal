import { USER_AUTHENTICATED, USER_PROFILE } from "./ActionTypes";

const initialStateUserProfile:any={
    firstname:"",
    lastname:"",
    username:"",
    resume:"",
    email:"",
}

const initialStateUserAuth:any={
    isAuth : 'False',
}

export const userProfileReducers = (state=initialStateUserProfile, action:any) => {
    const {type, payload} = action
    switch(type){
        case USER_PROFILE:
            return payload
        default:
            return state
    }
}

export const userAuthReducers = (state=initialStateUserAuth, action:any) => {
    const {type, payload} = action
    switch(type){
        case USER_AUTHENTICATED:
            return payload
        default:
            return state
    }
}