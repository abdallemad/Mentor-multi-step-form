'use client';
import { plans } from '@/config/plans'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { cn, formatPrice } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { setPlan, setPlanType } from '@/redux/features/user';
import Link from 'next/link';
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/navigation';

function SelectPlanForm() {
  const { plan: activePlan, plan_type } = useSelector((state: RootState) => state.user);
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(()=>{
    const userInfo = localStorage.getItem('userInfo');
    if(!userInfo) return router.push('/sign-up/step/1');
  },[router])
  return (
    <div className='flex flex-col gap-10 grow'>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            onClick={() => dispatch(setPlan(plan))}
            className={cn('cursor-pointer min-w-32 transition-all duration-300 border-2 border-transparent hover:border-indigo-500', {
              ' border-indigo-500 bg-indigo-50': plan.name === activePlan.name
            })}>
            <CardContent className='flex md:flex-col gap-5'>
              <div className="">
                <Image src={plan.icon} alt='plan icon' width={40} height={40} />
              </div>
              <div className="">
                <CardTitle className="capitalize">{plan.name}</CardTitle>
                <CardDescription>
                  {plan_type === 'monthly' ? (
                    <span>{formatPrice(plan.monthly_price / 100)}/mo</span>
                  ) : (
                    <span>{formatPrice(plan.yearly_price / 100)}/ye</span>
                  )}
                </CardDescription>
                <AnimatePresence mode='wait'>
                  {plan_type === 'yearly'
                    &&
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className='text-xs text-gray-500'>
                      2 months Free
                    </motion.p>}
                </AnimatePresence>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="bg-gray-100 rounded-lg flex items-center justify-center py-2">
        <div className="space-x-4">
          <span className={cn('font-semibold text-sm', {
            'opacity-40': plan_type === 'yearly',
          })}>Monthly</span>
          <Switch
            checked={plan_type === 'yearly'}
            onCheckedChange={(e) => {
              const status: "monthly" | "yearly" =
                e ? "yearly"
                  : "monthly"; // Fix: Toggle correctly
              dispatch(setPlanType(status)); // Dispatch correct value
              console.log(status);
            }}
          />
          <span className={cn('font-semibold text-sm', {
            'opacity-40': plan_type === 'monthly'
          })}>Yearly</span>
        </div>
      </div>
      <div className="flex mt-auto justify-between items-center">
        <Button variant={'ghost'} asChild>
          <Link href="/sign-up/step/info">Go Back</Link>
        </Button>
        <Button onClick={() => {
          //save plan in local storage
          localStorage.setItem('plan_index', JSON.stringify(activePlan.index));
          //save plan type in local storage
          localStorage.setItem('plan_type', JSON.stringify(plan_type));
          router.push('/sign-up/step/adds');
        }}>
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default SelectPlanForm
