import React from 'react'
import portfolio from '../assets/portfolio.jpg'
import shape1 from '../assets/shape1.svg'

export default function Portfolio() {
  return (
    <div className='pt-5 portfolio-div'>
      <div className='flex flex-col justify-center items-center p-div'>
        <h1 className='text-white'>Portfolio</h1>
        <img src={shape1} />
      </div>
      
      <div className='flex flex-row items-center justify-evenly text-white p-2d'>
        <a href="#" className='flex justify-center items-center p-2h1'>All</a>
        <a href="#">Website</a>
        <a href="#">Mobile</a>
        <a href="#">Css</a>
        <a href="#">Github</a>
      </div>

      <div className='flex w-full space-x-4'>
        <div className='flex-1'>
        <img src={portfolio} className='p-img w-full h-auto object-cover rounded' />
        </div>
        <div className='flex-1'>
        <img src={portfolio} className='p-img w-full h-auto object-cover rounded'/>
        </div>
        <div className='flex-1'>
        <img src={portfolio} className='p-img w-full h-auto object-cover rounded'/>
        </div>
      </div>
    </div>
  )
}
