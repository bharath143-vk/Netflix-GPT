import React from 'react'
import { BACKGROUND_URL } from '../utils/constants'
import lang from '../utils/language'
import { useSelector } from 'react-redux'
import openai from '../utils/openAi'
import { useRef } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { gptMoviesList } from '../utils/gptSlice'
const GptSearchBar = () => {
 const langKey=useSelector((store)=>(store.config.lang))
 const searchText=useRef(null)
 const dispatch=useDispatch(null)

//  const handleGptSearch=async ()=>{
//     console.log(searchText.current.value)

//     const gptQuery="Act as a Movie Recommendation System suggest some movies for the query:"
//                     +searchText.current.value+
//                     ".Only give me 5 movie names,comma separated like ahead example .Example:kgf,seetharamam,rrr";
    
//     const completion = await openai.chat.completions.create({
//         model: 'gpt-4o',
//         messages: [
//             { role: 'developer', content: gptQuery },
//             { role: 'user', content: 'Are semicolons optional in JavaScript?' },
//         ],
//         });

//         console.log(completion.choices[0].message.content);
//  }

const handleGptSearch=async()=>{

    console.log(searchText.current.value)
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ searchText.current.value+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
    const json=await data.json()
    dispatch(gptMoviesList(json.results))
    console.log(json.results)
}

 return (
    <div>
       
        <div className=' pt-[45%] md:pt-[15%] flex justify-center '>
            <form  className=' w-full md:w-1/2 bg-black   grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
                <input
                    ref={searchText}
                    type="text" 
                    placeholder={lang[langKey].gptPlaceHolder}
                    className="m-2 p-2  col-span-9">
                </input>
                <button className='m-2 px-6 py-2  bg-red-600 rounded-lg text-white col-span-3'
                 onClick={handleGptSearch}>
                    {lang[langKey].search}
                </button>
            </form>
        </div>

    </div>
  )
}

export default GptSearchBar