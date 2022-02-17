import axios from 'axios'
import { loginStart, loginSuccess, loginFailure, logout } from "./authRedux";


export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await axios('/auth/login', user)
        dispatch(loginSuccess(res.data))

    } catch (error) {
        dispatch(loginFailure())
    }
}
