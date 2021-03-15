import React from 'react'
import Nav from '../components/Nav'

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-gray-400 via-gray-300 to-gray-100">
      {/* <div className="container mx-auto text-center p-0"> */}
      <Nav className="w-screen" />
      {children}
      {/* <div className="">
        <p>Made with Gatsby by Alexis Ortiz Ojeda</p>
      </div> */}
    </div>
  )
}

export default Layout