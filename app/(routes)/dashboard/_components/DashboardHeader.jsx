import Logo from '@/components/ui/Logo'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function DashboardHeader() {
  return (
    <div className='p-5 shadow-sm border-b flex justify-between'>
        <div>
          <Logo/>
        </div>
        <div>
            <UserButton afterSignOutUrl='/'/>
        </div>
       
    </div>
  )
}

export default DashboardHeader