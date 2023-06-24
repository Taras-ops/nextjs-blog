import React from 'react'
import MainMavigation from './main-navigation'

const Layout = ({ children }) => {
  return (
    <>
      <MainMavigation />
      {children}
    </>
  )
}

export default Layout
