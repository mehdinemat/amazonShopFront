import React from 'react'
import Header from '../Header'
import Menuheader from '../Menuheader'

const Layout = ({children}) => {
  return (
   <>
    <Header/>
    <Menuheader/>
    {children}
    </>
  )
}

export default Layout
