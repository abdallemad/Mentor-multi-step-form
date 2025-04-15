import StepTitle from '@/components/sign-up-components/step-title'
import React from 'react'
import { InputForm } from './sign-in-form'

function Step1Page() {
  return (
    <div className='step-wrapper'>
      <StepTitle 
        head='Personal info'
        subhead='Please provide your name, email address, and phone number.'
      />
      <InputForm />
    </div>
  )
}

export default Step1Page
