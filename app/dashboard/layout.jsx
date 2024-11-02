import React from 'react'
import Navbar from './_components/Navbar'

const DashboardLayout = ({children}) => {
  return (
    <div className='min-h-screen' >
        <header className='h-20 fixed inset-y-0 w-full z-50'>
            <Navbar/>
        </header>

        {/* sidebar */}
        <div className='min-h-screen'>
            Sidebar
        </div>

        <main>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout