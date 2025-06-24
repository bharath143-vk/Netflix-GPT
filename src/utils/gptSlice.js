import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchView:false,
        gptMovies:null
    },
    reducers:{
        gptSearchClick:(state)=>{
            state.gptSearchView=!state.gptSearchView
        },
        gptMoviesList:(state,action)=>{
            state.gptMovies=action.payload
        }
    }
})

export const{gptSearchClick,gptMoviesList}=gptSlice.actions
export default gptSlice.reducer;