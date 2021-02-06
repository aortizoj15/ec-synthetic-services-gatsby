import React from 'react'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto">
        <div className="sm:flex justify-between">
          <Link className="text-white text-2xl md:text-3xl font-bold p-3" to="/">EC Synthetic Services</Link>
          {/* <button className="bg-gray-400 hover:bg-gray-500 md:hidden rounded-lg text-white px-4 font-bold">MENU</button> */}
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
