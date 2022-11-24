import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name:'todoReducer',
    initialState:{
        todo: [],
    },
    reducers:{
        add(state,action){
            state.todo = action.payload
        },
        edit(state,action){
            state.todo = action.payload
        },
        del(state,action){
            state.todo = action.payload
        },
    }

})

export const {add, edit, del} = todoSlice.actions 
export default todoSlice.reducer