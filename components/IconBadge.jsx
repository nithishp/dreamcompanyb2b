import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {Icon, LucideIcon} from'lucide-react';


const backgroundVariant = cva("rounded-full flex items-center justify-center", {
  variants: {
    variant: {
      default: "bg-purple-100",
      success: "bg-emerald-100",
    },
    size:{
        default:'p-2',
        sm:'p-1'
    }
  },
  defaultVariants: {
    variant: "default",
    size:'default'
  },
});

const iconVariant = cva("", {
  variants: {
    variant: {
      default: "text-purple-700",
      success: "text-emerald-700",
    },
    size: {
      default: "h-8 w-8",
      sm: "h-4 w-4",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

import React from 'react'

const IconBadge = ({icon:Icon,variant,size}) => {
  return (
    <div className={cn(backgroundVariant({variant,size}))} >
        <Icon className={cn(iconVariant({variant,size}))}  />
    </div>
  )
}

export default IconBadge