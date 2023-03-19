import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: sessionStorage.getItem("username") ? sessionStorage.getItem("username"): "",
    register: sessionStorage.getItem("register") ? sessionStorage.getItem("register"): false,
};



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action){
            console.log(action.payload)
            if(action.payload.username && action.payload.username.length > 0){
                let userName = action.payload.username.trim().split(" ")[0];
                state.username = userName;
                state.register = true;
                sessionStorage.setItem("username", userName);
                sessionStorage.setItem("register", true);
            }
        }
    },
});



export default userSlice;
export const userSliceAction = userSlice.actions;