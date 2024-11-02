import React from 'react'
import NavbarRoutes from './navbar-routes'
import Sidebar from './Sidebar'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {
  return (
    <nav className='py-4 border-b h-full flex items-center bg-white shadow-md'>
        {/* mobile routes  */}
        <MobileSidebar/>
        {/* sidebar routes  */}
        <NavbarRoutes/>
    </nav>
  )
}

export default Navbar