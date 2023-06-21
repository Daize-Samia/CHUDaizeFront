import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    user: null,
    token: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.token = undefined;
            state.user = undefined;
        },
        register: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
    },
});

export const {
    login,
    logout,
    register,
} = authSlice.actions;

export const selectUserAndToken = (state) => ({
    user: state.auth.user,
    token: state.auth.token,
});

export default authSlice.reducer;
