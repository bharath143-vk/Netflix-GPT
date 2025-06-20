import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addnowPlayingMovies } from "../utils/movieSlice"
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()

    const getMoviesList= async ()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await data.json()
        console.log(json.results)
        dispatch(addnowPlayingMovies(json.results))
    }

    useEffect(()=>{
        getMoviesList()
    },[])


}

export default useNowPlayingMovies;



   
    
  