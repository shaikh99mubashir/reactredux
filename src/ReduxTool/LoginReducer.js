import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'loginReducer',
    initialState:{
        email:'abc@gmail.com',
        userName:'abc',
        password:'123456'
    },
    reducers:{
        edit(state, action){
            state.email= action.payload.email
            state.userName= action.payload.userName
            state.password= action.payload.password
        }
    }
})

export const {edit} = loginSlice.actions
export default loginSlice.reducer