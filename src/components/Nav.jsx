import React from 'react'
import {Link} from 'gatsby'

const Nav = () => {
  return (
    <nav className="flex justify-between bg-blue-200">
      <Link to="/">EC Synthetic Services</Link>
      <div className="flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
    </nav>
  )
}

export default Nav
