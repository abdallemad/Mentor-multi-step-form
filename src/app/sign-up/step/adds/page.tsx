import StepTitle from '@/components/sign-up-components/step-title'
import React from 'react'
import AddonsSelect from './add-ons-select'

function Step3() {
  return (
    <div className='step-wrapper'>
      <StepTitle 
        head='Pick add-ons'
        subhead='Add-ons help enhance your gaming experience.'
      />
      <AddonsSelect />
    </div>
  )
}

export default Step3
