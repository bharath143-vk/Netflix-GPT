import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
 const movies=useSelector((store)=>store.movies?.nowPlayingMovies)

 if(!movies) return null

 const main_movie=movies[1]
 const {original_title,overview,id}=main_movie
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer