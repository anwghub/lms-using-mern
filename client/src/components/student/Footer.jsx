import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-900 md:px-42 md:py-5 text-left w-full mt-10'>
        <div className='flex flex-col md:flex-row justify-between items-start text-white p-6  md:space-y-0 gap-10 md:gap-50 w-full'>
          <div className='flex flex-col md:items-start items-center w-full'>
            <img src={assets.logo_dark} alt="logo" />
            <p className='mt-6 text-center md:text-left text-sm text-white/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus est nostrum molestiae!</p>
          </div>
          <div className='flex flex-col items-center md:items-start w-full'>
            <h2 className='font-semibold text-white mb-5 '>Company</h2>
            <ul className='flex flex-col space-y-2 text-sm text-white/80 w-full'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div className='hidden md:flex flex-col items-start w-full'>
              <h2 className='font-semibold text-white mb-5 '>Subscribe to our newsletter</h2>
              <p>The latest news , articles, and resources, sent to your inbox weekly.</p>
              <div className='flex items-center gap-2 pt-4'>
                <input type="email"  placeholder='Enter your email' className='border border-gray-500/30 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm'/>
                <button className='bg-blue-600 w-24 h-9 rounded '>Subscribe</button>
              </div>
          </div>
        </div>
        <p className='text-center text-xs md:text-sm text-white/80'>Copyright 2025 © lms. All right reserved. </p>
      </footer>
    </div>
  )
}

export default Footer
