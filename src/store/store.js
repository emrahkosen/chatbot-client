import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "./chat-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
    user: userSlice.reducer,
    }
});

export default store;
