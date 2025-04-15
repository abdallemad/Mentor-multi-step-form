import StepTitle from '@/components/sign-up-components/step-title'
import React from 'react'
import Finish from './finsh'

function Step4() {
  return (
    <div className='step-wrapper'>
      <StepTitle
        head='Finishing up'
        subhead='Double-check everything looks OK before confirming.'
      />
      
      <Finish />
    </div>
  )
}

export default Step4
