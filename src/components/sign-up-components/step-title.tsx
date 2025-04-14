import React from 'react'

function StepTitle({ head, subhead }: { head: string; subhead: string }) {
  return (
    <div className='mb-8'>
      <h1 className="font-bold text-2xl md:text-2xl mb-2 md:mb-3">{head}</h1>
      <h4 className="text-gray-400 text-base">{subhead}</h4>
    </div>
  )
}

export default StepTitle
