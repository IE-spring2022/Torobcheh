import { createSlice } from "@reduxjs/toolkit";

export const UserInfo = createSlice({
    name: "UserInfo",
    initialState: { user_id: null, token: null, user_type: null, search_query: null },
    reducers: {
        login: (state = {}, action) => {
            return {
                user_id: action.payload.user_id,
                token : action.payload.token,
                user_type : action.payload.user_type,
                search_query: null
            }
        },
        logout: (state = {}) => {
            return {
                user_id: null,
                token : null,
                user_type : null,
                search_query: null
            }
        },
        set_query: (state = {}, action) => {
            return {
                ... state,
                search_query: action.payload.query
            }
        },
        reset_query: (state = {}) => {
            return {
                ... state,
                search_query: null
            }
        }
    },
});

export const { login, logout, set_query, reset_query } = UserInfo.actions;

export default UserInfo.reducer;