import StepTitle from '@/components/sign-up-components/step-title'
import React from 'react'
import SelectPlanForm from './select-plan-form'

function Step2() {
  return (
    <div className='step-wrapper'>
      <StepTitle
        head='Select your plan'
        subhead='You have the option of monthly or yearly billing.'
      />
      <SelectPlanForm />
    </div>
  )
}

export default Step2
