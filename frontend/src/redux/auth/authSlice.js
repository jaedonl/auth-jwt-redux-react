import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
    },
    reducers: {
        loginStart: (state) => {
            state.isLoading = true
        }, 
        loginSuccess: (state, action) => {
            state.isLoading = false
            state.isSuccess = action.payload            
        },
        loginFailure: (state) => {
            state.isLoading = false
            state.isError = true
        },
        logout: (state) => {
            state.currentUser = null;
        },
    },
})

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer