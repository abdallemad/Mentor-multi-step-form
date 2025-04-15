import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import MobileSidebar from '@/components/sign-up-components/mobile-sidebar';
import Sidebar from '@/components/sign-up-components/sidebar';
type Props = {
  children: React.ReactNode;
}

function layout({ children }: Props) {
  return (
    <div className='md:flex min-h-screen relative justify-center items-center'>
      <div className='md:hidden'>
        <MobileSidebar />
      </div>
      <Card className='max-w-[850px] w-[90%] mx-auto mt-8 max-md:-translate-y-20 z-50 py-4 grow'>
        <CardContent className='flex gap-2 w-full px-4'>
          <div className='hidden md:block'>
            <Sidebar />
          </div>
          <div className='flex grow  md:pt-4'>
            {children}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default layout