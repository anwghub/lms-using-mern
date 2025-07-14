import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16'>
      <p className='text-base text-gray-500'>Trusted by learners from</p>
      <div className='flex items-center justify-center gap-10 mt-4 flex-wrap'>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:w-28' />
        <img src={assets.accenture_logo} alt="Accenture" className='w-20 md:w-28' />
        <img src={assets.paypal_logo} alt="Paypal" className='w-20 md:w-28' />
        <img src={assets.adobe_logo} alt="Adobe" className='w-20 md:w-28' />
        <img src={assets.walmart_logo} alt="Walmart" className='w-20 md:w-28' />
      </div>
    </div>
  )
}

export default Companies