import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
    name: "UserInfo",
    initialState: { token: null, user_type: null },
    reducers: {
        login: (state = {}, action) => {
            const changedVal = state;
            changedVal.token = action.payload.token;
            changedVal.user_type = action.payload.user_type;
            return { ...state, changedVal };
        },
        logout: (state = {}) => {
            //TODO
        }
    },
});

export const { login, logout } = UserInfo.actions;

export default UserInfo.reducer;