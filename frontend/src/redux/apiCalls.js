import { publicRequest, userRequest } from "../requestMethods";
import { reset, loginStart, loginSuccess, loginFailure, loggingOut } from "./auth/authSlice";
import { getUserStart, getUserSuccess, getUserFailure } from "./user/userSlice";

// auth
export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)   
        dispatch(loginSuccess(res.data))
        
    } catch (error) {
        dispatch(loginFailure())   
    }       
}

export const resetError = (dispatch) => {
    dispatch(reset())
}

export const logout = (dispatch) => {
    dispatch(loggingOut())
}


// userlist
export const getUserList = async (dispatch) => {
    dispatch(getUserStart())
    try {
        const res = await userRequest.get('/users/all')   
        dispatch(getUserSuccess(res.data))
        
    } catch (error) {
        dispatch(getUserFailure())   
    }       
}