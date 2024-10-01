import React from 'react'
import shape1 from '../assets/shape1.svg'
import shape2 from '../assets/shape2.svg'
import send from '../assets/send.svg'

export default function Contact() {
  return (
    <div className='contact-div'>
      <div className='flex flex-col items-center a-div'>
        <h1 className='text-white'>Get in Touch</h1>
        <img src={shape1} />
      </div>

      <div className='flex flex-row items-center justify-evenly text-white'>
        <div>
          <img src={shape2} className='pb-3'/>
          <h1 className='c-2h1'> Call Us</h1>
          <h2 className='c-2h2'>+234-806 749-700</h2>
        </div>
        <div className='mb-6'>
          <img src={send} className='pb-3'/>
          <h1 className='c-2h1'>Send Email</h1>
          <h2 className='c-2h2'>revent@digital.com</h2>
        </div>
      </div>

      <div>
        <div className='flex space-x-4 w-full div-form'>
          <input type="text" className='flex-1 p-2 border border-gray-300 rounded'/>
          <input type="text" className='flex-1 p-2 border border-gray-300 rounded'/>
        </div>

        <div className='flex w-full div-2input'>
          <input type="text"  className='flex-1 p-2 border border-gray-300 rounded'/>
        </div>

        <div className='flex w-full h-44 div-3input'>
          <input type="text" className='flex-1 p-2 border border-gray-300 rounded'/>
        </div>
        <button className='last-button hover:bg-black text-black hover:text-yellow-500 transition duration-300'>Send message</button>

      </div>
    </div>
  )
}
