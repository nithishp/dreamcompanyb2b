import Image from 'next/image'
import React from 'react'
import SidebarRoutes from './SidebarRoutes'

const Sidebar = () => {
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto bg-white'>
        <div className='p-6'>
            <Image src='/dreamcompany-logo.jpg' height={60} width={60} alt='Logo'/>
        </div>

        {/* sidebar routes  */}
        <div className='flex flex-col w-full'>
            <SidebarRoutes/>
        </div>
    </div>
  )
}

export default Sidebar