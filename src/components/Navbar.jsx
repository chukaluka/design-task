import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
          <div className="flex justify-end items-center">
            <div className="hidden md:flex space-x-4">
              <a href="#" className="text-yellow-400 pr-10">About Us</a>
              <a href="#" className="text-white">Portfolio</a>
              <a href="#" className="text-white">Experience</a>
              <a href="#" className="text-white">Contact</a>
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Navbar