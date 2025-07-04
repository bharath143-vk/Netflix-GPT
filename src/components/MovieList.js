import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='px-6'>
        <h1 className=' text-2xl md:text-3xl text-white py-4 px-4'>{title}</h1>
          <div className='flex overflow-x-auto space-x-4 p-4 scrollbar-hide'>
          <div className='flex '>
              {
                  movies && movies.map((movie)=>
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />)
              }

          </div>
       </div>
    </div>
  )
}

export default MovieList