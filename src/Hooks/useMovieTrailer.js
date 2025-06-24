
import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addgetVideos } from "../utils/movieSlice"
import { useEffect } from "react"
import { useSelector } from "react-redux"
const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch()
    const trailerVideo=useSelector((store)=>store.movies.getVideos)

    const getVideos= async ()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+ 
        movieId
        +"/videos?language=en-US", API_OPTIONS)
    const json= await data.json()
    console.log(json)
    
    const filterData=json.results.filter((movie)=>movie.type==="Trailer")
    const trailer=filterData.length?filterData[0]:json.results[0]
    
    dispatch(addgetVideos(trailer))
  }
  useEffect(()=>{
    !trailerVideo && getVideos()
  },[])
    
}

export default useMovieTrailer;