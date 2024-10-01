import React from 'react'
import shape1 from '../assets/shape1.svg'


export default function Resume() {
  return (
    <div className='text-white resume-div'>
      <div className='flex flex-col justify-center items-center r-div'>
        <h1>Resume</h1>
        <img src={shape1} />
      </div>

      <div className='flex justify-between mt-10'>
        <div className='border-l-4 border-yellow-500 pl-5'>
            <h1 className='r-year'>2017</h1>
            <h1 className='r-2h'>Louisanna State University</h1>
            <h1 className='r-2p'>Lorem Ipseum</h1>

            <h1 className='r-year'>2018</h1>
            <h1 className='r-2h'>Havard EdX</h1>
            <h1 className='r-2p'>Principles of Design</h1>
        </div>
        <div className='border-l-4 border-yellow-500 pl-5'>
            <h1 className='r-year'>2019</h1>
            <h1 className='r-2h'>Udacity</h1>
            <h1 className='r-2p'>Product design</h1>

            <h1 className='r-year'>2020</h1>
            <h1 className='r-2h'>Microsoft Partner</h1>
            <h1 className='r-2p'>Platinum</h1>
        </div>
      </div>
    </div>
  )
}
