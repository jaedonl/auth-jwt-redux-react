import axios from 'axios'
import { loginStart, loginSuccess, loginFailure } from "./auth/authSlice";

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('/api/auth/login', user)   
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure(error))
    }       
}
