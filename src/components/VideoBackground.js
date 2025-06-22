import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {
  
  useMovieTrailer(movieId)
  const movies=useSelector((store)=>store.movies?.getVideos)
  // ?autoplay=1&mute=1`
  return (
    <div className='w-screen'>
      <iframe
       className='w-screen aspect-video ' 
       src={`https://www.youtube.com/embed/${movies?.key}`} 
       title="YouTube video player" 
       frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
    </div>
  )
}

export default VideoBackground