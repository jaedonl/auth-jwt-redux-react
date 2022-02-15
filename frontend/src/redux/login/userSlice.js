import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'login',
    initialState: {
        isFetching: false,
        isAuth: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true
        },
        loginSuccess: (state, action) => {
            state.isFetching = false
            state.isAuth = true            
        },
        loginFailure: (state) => {
            state.isFetching = false
            state.error = true
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions

export default userSlice.reducer