import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
    name: "UserInfo",
    initialState: { token: null, user_type: null },
    reducers: {
        login: (state = {}, action) => {
            return {
                token : action.payload.token,
                user_type : action.payload.user_type
            }
        },
        logout: (state = {}) => {
            return {
                token : null,
                user_type : null
            }
        }
    },
});

export const { login, logout } = UserInfo.actions;

export default UserInfo.reducer;