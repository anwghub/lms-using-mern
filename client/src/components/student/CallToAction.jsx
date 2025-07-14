import React from 'react';
import { assets } from '../../assets/assets';

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-6 bg-white p-8 md:p-12 rounded-xl shadow-md w-full max-w-4xl mx-auto mt-10'>
      <h2 className='text-2xl md:text-4xl font-semibold text-gray-800'>
        Learn anything, anytime, anywhere
      </h2>

      <p className='text-gray-600 text-sm md:text-base max-w-xl'>
        Explore a world of knowledge with flexible learning designed to fit your schedule.
      </p>

      <div className='flex flex-col sm:flex-row gap-4'>
        <button className='px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition'>
          Get started
        </button>
        <button className='flex items-center justify-center gap-2 text-blue-600 hover:underline'>
          Learn more
          <img src={assets.arrow_icon} alt="arrow_icon" className='w-4 h-4' />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
