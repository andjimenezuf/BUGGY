"use client"
import React, { useEffect } from 'react'
import SideNav from './_components/SideNav'
import DashboardHeader from './_components/DashboardHeader'
import { db } from '@/utils/dbConfig'
import { Budgets } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'
import { useRouter } from 'next/navigation'

function DashboardLayout({children}) {

  const {user}=useUser();
  const router=useRouter();
  useEffect(()=>{
    user&&checkUserBudgets();
  },[user])
  
  const checkUserBudgets=async()=>{
    const result=await db.select()
    .from(Budgets)
    .where(eq(Budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    console.log(result);
    if(result?.length==0)
    {
      router.replace('/dashboard/budgets')
    }
  }
  return (
    <div className="flex flex-col h-screen">
    <div>
      <DashboardHeader/>
    </div>
    <div className="flex flex-1">
      <div className='hidden md:block md:w-64'>
        <SideNav/>
      </div>
      <div className='flex-1 p-4 overflow-auto'>
        {children}
      </div>
    </div>
  </div>
  )
}

export default DashboardLayout