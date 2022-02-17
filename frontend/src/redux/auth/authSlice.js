import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// Get user from localStorage
// const user = JSON.parse(localStorage.getItem('user'))

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        // user: user ? user : null,
        user: null,
        isLoading: false,
        isSuccess: false,
        isError: false,
        message: ''
    },
    reducers: {
        // reset: (state) => {
        //     state.isLoading = false
        //     state.isSuccess = false
        //     state.isError = false
        //     state.message = ''
        // },
        loginStart: (state) => {
            state.isLoading = true
        }, 
        loginSuccess: (state, action) => {
            state.isLoading = false
            state.isSuccess = true        
            state.user = action.payload    
        },
        loginFailure: (state) => {
            state.isLoading = false
            state.isError = true
        },
        logout: (state) => {
            state.user = null;
        },
    },
    // extraReducers: () => {

    // }
})

export const { reset, loginStart, loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer