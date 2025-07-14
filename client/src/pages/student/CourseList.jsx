import React from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import {AppContext} from '../../context/AppContext'

const CourseList = () => {
  const {navigate} = useContext(AppContext)

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row items-center justify-between bg-white p-4 shadow-md'>
          <div>
            <h1>Course List</h1>
            <p className='text-gray-500 text-sm'>Home <span className='text-gray-400'>/</span> <span className='text-blue-600 cursor-pointer' onClick={() => navigate('/student')}>Student</span> <span className='text-gray-400'>/</span>
              <span>Course-list</span></p>
          </div>
          
        </div>
      </div>
    </>

  )
}

export default CourseList