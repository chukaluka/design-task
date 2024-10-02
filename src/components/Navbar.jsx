import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
          <div className="flex justify-end items-center">
            <ul className="hidden md:flex space-x-4 ">
              <li className='hover:underline transition duration-300'>
                <a href="#" className="text-yellow-400 pr-10">About Us</a>
              </li>
              <li className='hover:underline transition duration-300'>
                <a href="#" className="text-white ">Portfolio</a>
              </li>
              <li className='hover:underline transition duration-300'>
                <a href="#" className="text-white ">Experience</a>
              </li>
              <li className='hover:underline transition duration-300'>
                <a href="#" className="text-white ">Contact</a>
              </li>
            </ul>
          </div>
      </nav>
    </div>
  )
}

export default Navbar