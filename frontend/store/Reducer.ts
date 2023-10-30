import { USER_PROFILE } from "./ActionTypes";

const initialStateUserProfile:any={
    firstname:"",
    lastname:"",
    username:"",
    resume:"",
    email:"",
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