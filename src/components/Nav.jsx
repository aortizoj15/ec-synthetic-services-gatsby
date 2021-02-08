import React, { useState } from 'react'
import { Link } from 'gatsby'

const menuIcon = (<svg className="h-6 w-6 bg-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
</svg>)
const exitIcon = (<svg className="h-6 w-6 bg-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg>)
const Nav = () => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-between">
          <Link className="text-white text-2xl md:text-3xl font-bold p-3" to="/">EC Synthetic Services</Link>
          <div onClick={() => setIsClicked(!isClicked)}>
            {isClicked ? exitIcon : menuIcon}
          </div>
          <ul className="hidden md:block text-gray-400 sm:self-center text-xl border-t sm:border-none" >
            <li className="sm:inline-block"><Link to="/" className="p-3 hover:text-white">Home</Link></li>
            <li className="sm:inline-block"><Link to="/services" className="p-3 hover:text-white">Services</Link></li>
            <li className="sm:inline-block"><Link to="/gallery" className="p-3 hover:text-white">Gallery</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
