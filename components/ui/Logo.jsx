import React from 'react'
import { CircleDollarSign } from 'lucide-react';

function Logo() {
  return (
    <a href="/" className='flex items-center gap-2'>

        <p className='text-4xl'>🤑</p> 
        <p className='bg-gradient-to-r from-primary to-primary
        bg-clip-text text-3xl font-bold leading-tight tracking-tighter
        text-transparent'>
           Ace Expense
        </p>
    </a>
  )
}

export default Logo