import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CourseSection = () => {

  const {allCourses} = useContext(AppContext);

  return (
    <div className='py-16 md:px-40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best educators</h2>
      <p className='text-gray-600 mt-3 text-sm md:text-base'>Our platform offers a wide range of courses taught by industry experts.</p>

      <div className='grid grid-cols-auto md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
        {allCourses.slice(0,4).map((course,index)=> <CourseCard key={index} course={course} /> )}
      </div>

      <Link to={"/course-list"} onClick={() => window.scrollTo(0, 0)}  className='text-gray-500 border-b border-gray-300 hover:border-gray-500'>Show all courses</Link>
    </div>
  )
}

export default CourseSection