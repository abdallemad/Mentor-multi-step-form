'use client';
import { usePathname } from 'next/navigation';
import { sidebarLinks } from '@/constants/links';
import React from 'react'
import Image from 'next/image';
import { cn } from '@/lib/utils';

function MobileSidebar() {
  const pathname = usePathname();
  return (
    <div className='relative isolate w-screen min-h-[200px] pt-px select-none'>


      <div className="flex gap-2 items-center w-fit mx-auto mt-16">
        {sidebarLinks.map((link) => {
          const isActive = link.pathname === pathname
          return (
            <div
              key={link.pathname}
              className={cn("size-8 rounded-full border-1 border-white text-white grid place-content-center", {
                'border-transparent text-black bg-[#c1e2ff]': isActive
              })}>
              {link.index}
            </div>
          )})}
      </div>
      <Image
        src={'/assets/images/bg-sidebar-mobile.svg'}
        alt='mobile sidebar'
        width={200}
        height={100}
        className='absolute inset-0 h-full w-full -z-10 object-cover'
      />
    </div>
  )
}

export default MobileSidebar
