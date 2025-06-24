import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    
    <div className=' w-40 md:w-48 h-50 pr-4 hover:scale-110'>
        <img alt ="movie"src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard