"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from "@clerk/nextjs";
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

function Header() {

  const {user,isSignedIn}=useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-xl'>
      <Logo/>
      <div className='flex gap-3 items-center'>
        
        <Link href={'/dashboard'}>
          <Button variant="outline">Dashboard</Button>
        </Link>
        {isSignedIn?
          <UserButton/> : 
          <Link href={'/sign-in'}>
            <Button>Get Started</Button>
          </Link>
        }
        <Link href="https://reallyandres.vercel.app/">
          <Button variant="link" className="text-blue-500">Made by Andres ⬆️</Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
