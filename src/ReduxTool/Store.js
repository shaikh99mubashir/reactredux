import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import loginSlice from './LoginReducer'
import todoSlice from "./todoReducer";

const store = configureStore({
    reducer: {
        loginReducer: loginSlice,
        todoReducer: todoSlice,
    }
})

export default store