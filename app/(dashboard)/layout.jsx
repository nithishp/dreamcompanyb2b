import React from 'react'
import Navbar from './_components/Navbar'
import Sidebar from './_components/Sidebar'

const DashboardLayout = ({children}) => {
  return (
    <div className='min-h-screen' >
        <header className='h-20 fixed md:pl-56 inset-y-0 w-full z-50'>
            <Navbar/>
        </header>

        {/* sidebar */}
        <div className='hidden md:flex h-full w-56 flex-col fixed  inset-y-0 z-50'>
            <Sidebar/>
        </div>

        <main className='pl-56 pt-20 h-full' >
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout