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
      
      <ul className='flex flex-row items-center justify-evenly text-white p-2d'>
        <li className='hover:underline transition duration-300'>          
          <a href="#" className='flex justify-center items-center p-2h1'>All</a>
        </li>
        <li className='hover:underline transition duration-300'>          
          <a href="#">Website</a>
        </li>
        <li className='hover:underline transition duration-300'>          
          <a href="#">Mobile</a>
        </li>
        <li className='hover:underline transition duration-300'>          
          <a href="#">Css</a>
        </li>
        <li className='hover:underline transition duration-300'>          
          <a href="#">Github</a>
        </li>
      </ul>

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
