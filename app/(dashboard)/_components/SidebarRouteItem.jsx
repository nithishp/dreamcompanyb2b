'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const SidebarRouteItem = ({icon:Icon,label,href}) => {

    const pathname = usePathname();
    const router = useRouter();
    const isActive =  pathname === href || pathname.startsWith(`${href}/`);
    const onClick = () =>{
        router.push(href)
    }
  return (
    <button onClick={onClick} className={cn("flex items-center gap-x-2 text-neutral-500 text-sm font-[500] pl-6 transition-all hover:text-neutral-600 hover:bg-neutral-300/80",isActive && "text-purple-700 bg-purple-200 hover:text-purple-800 hover:bg-purple-700/20")} >
        <div className='flex items-center gap-x-2 py-4' >
            <Icon size={22} />{label}
        </div>
        <div className={cn("ml-auto opacity-0 border-2 border-purple-700 h-full transition-all",isActive&&'opacity-100')}>

        </div>
    </button>
  )
}

export default SidebarRouteItem