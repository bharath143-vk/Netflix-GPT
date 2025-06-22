import React, { use } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  // console.log("In Browse page")
 useNowPlayingMovies()
 usePopularMovies()
 const gptClick=useSelector((store)=>store.gpt.gptSearchView)
//  console.log("after calling custom hook useNowplaying movies")
 
  return (
    
    
    <div>
      <Header/>
      {
        gptClick?<GptSearch />:
        <>
        <MainContainer />
        <SecondaryContainer />
        </>
      }
      
    </div>
  )
}

export default Browse
// Main Container
  //    - video title
    //    - video background
 //secondary container
  //  - movies cards
