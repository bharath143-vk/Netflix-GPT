import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false
    },
    reducers:{
        gptSearchClick:(state)=>{
            state.gptSearchView=!state.gptSearchView
        }
    }
})

export const{gptSearchClick}=gptSlice.actions
export default gptSlice.reducer;