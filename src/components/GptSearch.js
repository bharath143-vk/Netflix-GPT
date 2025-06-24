import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_URL } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
       <div className='fixed -z-10' >
            <img src={ BACKGROUND_URL}
            alt="logo"
            className='h-screen object-cover w-screen'/>
       </div>
      <div >
        <GptSearchBar/>
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearch