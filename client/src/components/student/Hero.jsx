import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center py-10 bg-gray-100 w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b from-cyan-100 to-blue-100'>
        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Welcome to the Learning Management System <span className='text-blue-500'>Learn Anytime, Anywhere</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 -right-0' /> </h1>

        <p className='md:hidden text-gray-600 text-center max-w-2xl mx-auto mt-4'>Explore a wide range of courses, enhance your skills, and achieve your learning goals with our comprehensive platform.</p>

        <p className='text-gray-600 text-center max-w-2xl mx-auto  mt-4'>We are committed to providing you with the best learning experience possible.</p>
        <SearchBar />
    </div>
  )
}

export default Hero