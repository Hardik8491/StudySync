import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    user: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        userRegister: (
            state,
            action: PayloadAction<{
                accessToken: string;
            }>
        ) => {
            console.log(action);
            
            state.token = action.payload.accessToken;
        },
        userLogin: (
            state,
            action: PayloadAction<{
                accessToken: string;
                user:string
            }>
        ) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user;
        },
        userLogout: (state) => {
            state.token = "";
            state.user = "";
        },
    },
});
export const { userRegister, userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
