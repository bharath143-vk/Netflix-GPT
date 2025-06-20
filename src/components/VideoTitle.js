import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[15%] px-10 absolute aspect-video text-white bg-gradient-to-r from-black'>
        <h1 className="font-bold text-2xl m-2 ">{title}</h1>
        <p className=' w-1/4 px-2'>{overview}</p>
        <div>
            <button className='bg-white m-2 p-2 px-10 text-black text-xl rounded-lg '>
              ▶Play
            </button>
            <button className='bg-gray-400 m-2 p-2 px-10 text-black text-xl rounded-lg bg-opacity-50'>
             ℹ More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle