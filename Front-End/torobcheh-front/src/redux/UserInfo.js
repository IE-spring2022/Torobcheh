import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
    name: "UserInfo",
    initialState: { user_id: null, token: null, user_type: null },
    reducers: {
        login: (state = {}, action) => {
            return {
                user_id: action.payload.user_id,
                token : action.payload.token,
                user_type : action.payload.user_type
            }
        },
        logout: (state = {}) => {
            return {
                user_id: null,
                token : null,
                user_type : null
            }
        }
    },
});

export const { login, logout } = UserInfo.actions;

export default UserInfo.reducer;