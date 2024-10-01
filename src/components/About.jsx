import React from 'react'
import about from '../assets/about.jpg'
import shape1 from '../assets/shape1.svg'


export default function About() {
  return (
    <div className='about-div'>
      <div className='flex flex-col justify-center items-center a-div'>
        <h1 className='text-white'>About Us</h1>
        <img src={shape1} />
      </div>

      <div className='flex w-full items-center space-x-4'>
        <div className='flex-1'>
          <img src={about} className='a-img w-full h-auto object-cover rounded' />
        </div>
        <div className='flex-1'>
          <h2 className='text-white a-h2'>We focus on value and excellence</h2>
          <p className='text-white a-p'>We are focused on providing products which deliver demonstrably good value for our clients and end-customers – be that a specific return, outperforming an index or achieving returns at lower risk.​<br/>​<br/> Through achieving value for the clients whose assets we manage, efficiently controlling costs, effectiveness and efficiency, we deliver value to our shareholders and wider stakeholders​</p>
          <button className=' hover:bg-black text-black hover:text-yellow-500 transition duration-300'>Work with us</button>
        </div>
      </div>
    </div>
  )
}
