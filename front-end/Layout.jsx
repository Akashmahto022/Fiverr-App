import React from 'react'
import Header from "./src/Components/Navbar/Navbar"
import Footer from './src/Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
