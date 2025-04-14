'use client';
import { usePathname } from 'next/navigation';
import React from 'react'
import { sidebarLinks } from '@/constants/links';
import Image from 'next/image';
import { cn } from '@/lib/utils';

function Sidebar() {
  const pathname = usePathname();
  return (
    <div className='relative isolate h-full min-h-[450px] min-w-[220px] pt-8 px-4 select-none'>
      <div className="flex flex-col gap-4">
        {sidebarLinks.map((link) => {
          const isActive = link.pathname === pathname
          return (
            <div key={link.pathname} className='flex gap-4 items-center'>
              <div className={cn("size-8 font-bold text-sm rounded-full border-1 border-white text-white grid place-content-center", {
                'border-transparent text-black bg-[#c1e2ff]': isActive
              })}>
                {link.index}
              </div>
              <div>
                <h5 className='text-gray-400 uppercase text-xs'>{link.subTitle}</h5>
                <h3 className='text-sm font-bold text-white uppercase'>{link.title}</h3>
              </div>
            </div>
          )
        })}
      </div>




      <Image
        src={'/assets/images/bg-sidebar-desktop.svg'}
        alt='sidebar image'
        width={300}
        height={800}
        className='absolute inset-0 h-full w-full -z-10 object-cover rounded-md'
      />
    </div>
  )
}

export default Sidebar
