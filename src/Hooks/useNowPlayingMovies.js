import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addnowPlayingMovies } from "../utils/movieSlice"
import { useSelector } from "react-redux"
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)

    const getMoviesList= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
       
        dispatch(addnowPlayingMovies(json.results))
    }

    useEffect(()=>{
        //memoization
       !nowPlayingMovies && getMoviesList()
        
    },[])


}

export default useNowPlayingMovies;



   
    
  