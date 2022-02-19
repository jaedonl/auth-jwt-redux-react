import axios from 'axios'
import { publicRequest, userRequest } from "../requestMethods";
import { loginStart, loginSuccess, loginFailure } from "./auth/authSlice";


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('auth/login', user)   
        dispatch(loginSuccess(res.data))
        
    } catch (error) {
        dispatch(loginFailure(error))
    }       
}
