import StepTitle from '@/components/sign-up-components/step-title'
import React from 'react'
import Image from 'next/image'

function FinishPage() {
  return (
    <div className='grow py-20 flex items-center justify-center'>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src={'/assets/images/icon-thank-you.svg'}
          alt='Finish Page'
          width={70}
          height={70}
          className=''
        />
        <h2 className="text-3xl font-bold text-center">Thank you!</h2>
        <p className='text-gray-500 text-center text-pretty max-w-[450px]'>
          Thanks for confirming your subscription! We hope you have fun using our platform. Fi you ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  )
}

export default FinishPage
