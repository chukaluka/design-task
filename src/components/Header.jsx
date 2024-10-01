import React from 'react'
import rectangle from '../assets/img.jpg'
import be from '../assets/be.svg'
import ball from '../assets/ball.svg'
import Facebook from '../assets/Facebook.svg'
import Vector2 from '../assets/Vector2.svg'

const Header = () => {
  return (
    <div className='flex w-full items-center space-x-4'>
        <div className='flex-1 text-white f-div'>
            <h1 className='f-h1 pb-4 pt-16'> Innovative Solution Taliored to your Business need </h1>
            <p className='f-p'>
              We can partner with your business to provide a symbiotic relationship and synergy to help you or your business achieve more business growth through strategic financial advisory, investment business and human resource planning and management.​
            </p>
            <button className='hover:bg-black text-black hover:text-yellow-400 transition duration-300'>
              Get in touch
            </button>

            <div className='flex flex-row'>
              <div className='header-icon'>
                <a href="#">
                   <img src={be} /> 
                </a>
              </div>
              <div className='header-icon'>
                <a href="#">
                  <img src={ball} />
                </a>
            </div>
            <div className='header-icon'>
              <a href="#">
              <img src={Facebook} />
              </a>
            </div>
            </div>
        </div>

        <div className='relative flex-1'>
            <img src={Vector2} className="absolute inset-0 w-full h-full z-0 object-contain" style={{ top: '30px' }}/>
            <img src={rectangle} className="relative w-full h-auto object-cover rounded z-10" />
        </div>
    </div>
  )
}

export default Header

