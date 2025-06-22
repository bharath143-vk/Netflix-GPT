import React from 'react'
import { BACKGROUND_URL } from '../utils/constants'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {
 const langKey=useSelector((store)=>(store.config.lang))
  return (
    <div>
        <div>
            <img src={ BACKGROUND_URL}
            alt="logo"
            className='absolute -z-10'/>
        </div>
        <div className='pt-[15%] flex justify-center '>
            <form  className='bg-black w-1/2  grid grid-cols-12'>
                <input type="text" placeholder={lang[langKey].gptPlaceHolder}
                className="m-2 p-2  col-span-9"></input>
                <button className='m-2 px-6 py-2  bg-red-600 rounded-lg text-white col-span-3 '>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    </div>
  )
}

export default GptSearchBar