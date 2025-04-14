'use client';
import React, { useEffect } from 'react'
import { add_ons } from '@/config/add-ons'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn, formatPrice } from '@/lib/utils';
import { toggleAddOnsState } from '@/redux/features/user';
import { useRouter } from 'next/navigation';

function AddonsSelect() {
  const { plan_type, addsons } = useSelector((s: RootState) => s.user);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo');
    if(!userInfo) return router.push('/sign-up/step/1');
  },[router])
  return (
    <>
      <div className='flex flex-col gap-4 grow w-full'>
        {add_ons.map(add => {
          const selected = addsons.find(a => a.title === add.title) ? true : false;
          return (
            <Card key={add.description} className={cn('cursor-pointer w-full py-2 border-2 border-transparent transition-colors duration-300 hover:border-indigo-500', {
              ' border-indigo-500 bg-indigo-50': selected
            })} onClick={() => dispatch(toggleAddOnsState(add))}>
              <CardContent className='flex gap-18 items-center justify-between'>
                <div className="flex items-center gap-4">
                  <input type="checkbox" checked={selected} onChange={()=> {
                    console.log('some shit')
                  }} className='size-4 pointer-events-none' />
                  <div>
                    <h2 className='text-lg font-bold'>{add.title}</h2>
                    <p className='text-gray-500 text-sm'>{add.description}</p>
                  </div>
                </div>
                <div>
                  <h2 className='text-sm text-gray-400 font-bold'>
                    {plan_type === 'monthly' ? (
                      <span>{formatPrice(add.monthly_price / 100)}/mo</span>
                    ) : (
                      <span>{formatPrice(add.yearly_price / 100)}/ye</span>
                    )}
                  </h2>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
      <div className="flex mt-auto justify-between items-center">
        <Button variant={'ghost'} asChild>
          <Link href="/sign-up/step/2">Go Back</Link>
        </Button>
        <Button asChild>
          <Link href={'/sign-up/step/4'}>Next Step</Link>
        </Button>
      </div>
    </>
  )
}

export default AddonsSelect
