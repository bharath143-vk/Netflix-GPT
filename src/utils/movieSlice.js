import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        getVideos:null
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
           
        },
        addgetVideos:(state,action)=>{
            state.getVideos=action.payload;
        }
    }
})

export const {addnowPlayingMovies,addgetVideos}= movieSlice.actions
export default movieSlice.reducer