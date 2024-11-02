import React from 'react'
import NavbarRoutes from './navbar-routes'
import Sidebar from './Sidebar'

const Navbar = () => {
  return (
    <nav className='py-4 border-b h-full flex items-center bg-white shadow-md'>
        {/* mobile routes  */}


        {/* sidebar routes  */}

        <div className='hidden md:flex h-full w-56 flex-col fixed  inset-y-0 z-50'>
            <Sidebar/>
        </div>
        <NavbarRoutes/>
    </nav>
  )
}

export default Navbar