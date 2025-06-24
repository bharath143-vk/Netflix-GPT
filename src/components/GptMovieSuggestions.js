import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import MovieCard from './MovieCard'

const GptMovieSuggestions = () => {
  const movies=useSelector((store)=>store.gpt?.gptMovies)

  return (
    <div className='bg-black'>
        <div className=' flex overflow-x-auto space-x-4 p-4 scrollbar-hide'>
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

export default GptMovieSuggestions