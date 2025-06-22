import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        getVideos:null,
        popularMovies:null
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
           
        },
        addgetVideos:(state,action)=>{
            state.getVideos=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        }
    }
})

export const {addnowPlayingMovies,addgetVideos,addPopularMovies}= movieSlice.actions
export default movieSlice.reducer