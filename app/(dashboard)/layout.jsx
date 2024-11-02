import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='min-h-screen' >
        <header className=''>
            header
        </header>

        {/* sidebar */}
        <div>
            Sidebar
        </div>

        <main>
            {children}
        </main>
    </div>
  )
}

export default DashboardLayout