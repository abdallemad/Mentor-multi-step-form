'use client';
import React, { useEffect } from 'react'
import { formatPrice } from '@/lib/utils'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Finish() {
  const { plan, addsons, plan_type } = useSelector((s: RootState) => s.user);
  const isMonthly = plan_type === 'monthly';
  const plan_price = isMonthly ? plan.monthly_price : plan.yearly_price;
  const add_ons_prices = addsons.map(a => {
    return {
      title: a.title,
      price: isMonthly ? a.monthly_price : a.yearly_price
    }
  })
  const router = useRouter();
  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo');
    if(!userInfo) return router.push('/sign-up/step/1');
  },[router])
  return (
    <div className='relative flex flex-col grow'>
      <div className="p-4 bg-indigo-50 rounded-lg">
        <div className="flex items-center justify-between w-full">
          <h2 className='font-semibold capitalize'>{plan.name} {isMonthly ? '(Monthly)' : '(Yearly)'}</h2>
          <p className='font-bold text-lg'>{formatPrice(plan_price / 100)}{isMonthly ? '/mo' : '/ye'}</p>
        </div>
        <Link href={'/sign-up/step/plan'} className='text-indigo-500 border-b border-b-transparent hover:border-b-indigo-500'>Change</Link>
        
        {add_ons_prices.length > 0 && <div className="my-2 h-px bg-gray-400"></div>}

        <div className="flex flex-col gap-2">
          {add_ons_prices.map((a, i) => (
            <div key={i} className="flex items-center justify-between w-full">
              <h2 className='text-gray-500 text-sm'>{a.title}</h2>
              <p className='font-semibold'>{formatPrice(a.price / 100)}{isMonthly ? '/mo' : '/ye'}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <h2 className='text-gray-500'>Total (per {isMonthly ? 'month' : 'year'})</h2>
        <p className='font-bold text-lg text-indigo-500'>{formatPrice((plan_price + add_ons_prices.reduce((acc, a) => acc + a.price, 0)) / 100)}{isMonthly ? '/mo' : '/ye'}</p>
      </div>
      <div className="flex items-center mt-auto justify-between">
        <Button variant={'link'} asChild>
          <Link href={'/sign-up/step/adds'}>Go Back</Link>
        </Button>
        <Button asChild variant={'primary'}>
          <Link href={'/sign-up/step/finish'}>Confirm</Link>
        </Button>
      </div>
    </div>
  )
}

export default Finish
