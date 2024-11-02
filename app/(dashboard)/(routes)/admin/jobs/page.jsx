import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const JobPageOverview = () => {
  return (
    <div className='p-6'>
      <div className='flex items-end justify-end'>
        <Link href='/admin/create' >
          <Button className='rounded-lg' > <Plus className='w-5 h-5 mr-2' /> New Job</Button>
        </Link>
      </div>
    </div>
  )
}

export default JobPageOverview