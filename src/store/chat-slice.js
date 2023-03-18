import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chat: localStorage.getItem("chat") ? localStorage.getItem("chat"): "chat"
}


const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        toggle(state) {
            if(state.chat === "chat"){
                state.chat="chatting";
                localStorage.setItem("chat", "chatting");
            }else{
                state.chat="chat";
                localStorage.setItem("chat", "chat");
            }
        },

    }
});


export default chatSlice;
export const chatSliceAction = chatSlice.actions;