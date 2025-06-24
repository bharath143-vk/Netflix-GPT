import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' mt-0 pt-[15%] px-10 absolute aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className=" ml-0 font-bold text-2xl  md:  m-2 ">{title}</h1>
        <p className=' hidden md:inline-block w-1/4 px-2'>{overview}</p>
        <div >
            <button className='ml-0 bg-white m-2 p-2 px-2 text-black text-xl rounded-lg md:px-10'>
              ▶Play
            </button>
            <button className='hidden md:inline-block bg-gray-400 m-1 p-2  text-black text-xl rounded-lg bg-opacity-50 px-10 '>
             ℹ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle