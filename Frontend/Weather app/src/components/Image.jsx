import React from 'react'
import { Link } from 'react-router-dom'
import videoplayback from '../assets/videoplayback.mp4'
const Image = () => {
  return (
    <div className=" min-h-screen">

      <div className='flex justify-around'>
       <div>
         <img src={videoplayback}
       className='w-96 animate-[wiggle_3s_ease-in-out_infinite]'
        />
       
       </div>
       <div className='text-5xl p-40'>
        
        <div className='flex'>
            <p className='text-blue-500 italic font-serif'>Forcasting </p>&nbsp;
        <p className='text-green-500 italic font-serif'>Tomorrow</p>&nbsp;,&nbsp;
        <p className='text-blue-500 italic font-serif'>Today</p>
        
       
        </div>
        
        
        </div>

      </div>
            <div className='flex justify-center'>
                <Link to="/forcast">
                <button className='border-2 rounded bg-green-400 hover:bg-green-300 px-4 py-2 transform hover:scale-110 text-2xl font-serif' >
            Get Started
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Image
