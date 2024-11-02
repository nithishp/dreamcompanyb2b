'use client'
import { Button } from '@/components/ui/button'
import {  Trash2 } from 'lucide-react';
import React, { useState } from 'react'

const JobPublishActions = ({disabled,jobId,isPublished}) => {
    const [isLoading,setIsLoading] = useState(false);
    const onClick = () =>{

    }
    const onDelete = () =>{

    }
  return (
    <div className='flex items-center gap-x-3'>
        <Button variant='outline' onClick={onClick} disabled={disabled || isLoading} >
            {isPublished?'Unpublish':'Publish'}
        </Button>
        <Button variant='destructive' size='icon' disabled={isLoading} onClick={onDelete} >
            <Trash2 className='w-4 h-4' />
        </Button>
    </div>
  )
}

export default JobPublishActions