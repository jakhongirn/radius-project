import React from 'react'
import TopNavbar from './TopNavbar'

const Layout = ({children}) => {
  return (
    <>
        <TopNavbar />
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout