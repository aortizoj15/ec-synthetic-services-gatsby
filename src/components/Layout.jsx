import React from 'react'
// import Nav from '../components/Nav'

const Layout = ({children}) => {
  return (
    <div className="">
    {/* <div className="container mx-auto text-center p-0"> */}
        {/* <Nav /> */}
        <p>This site is under development.</p>
      <div className="">
        {children}
      </div>
      <div className="">
        <p>Made with Gatsby by Alexis Ortiz Ojeda</p>
      </div>
    </div>
  )
}

export default Layout