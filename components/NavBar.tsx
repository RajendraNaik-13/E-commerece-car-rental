import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
function NavBar() {
  return (
    <div className='flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]'>
        <Image src='/logo.png'
        alt='logo'
        width={60}
        height={60}
        />
        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-black p-2 rounded-full px-3 cursor-pointer hover:text-white'>Home</h2>
            <h2 className='hover:bg-black p-2 rounded-full px-3 cursor-pointer hover:text-white'>History</h2>
            <h2 className='hover:bg-black p-2 rounded-full px-3 cursor-pointer hover:text-white'>Contact Us</h2>
        </div>
        <UserButton  />
    </div>
  )
}

export default NavBar