import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar'
import { useParams } from 'react-router-dom'
import CourseCard from '../../components/student/CourseCard'
import Footer from '../../components/student/Footer';
import axios from 'axios';

const CourseList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const {input} = useParams();
  const [filterCourse, setFilterCourse] = useState([]);

  useEffect(()=>{
    if(allCourses && allCourses.length > 0){
      const tempCourses = allCourses.slice()

      input? 
        setFilterCourse(
          tempCourses.filter(
            item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
          )
        )
      : setFilterCourse(tempCourses)
    }
  }, [allCourses,input]);

  return (
    <>
      <div className='relative md:px-36 px-8 pt-20 text-left'>
        <div className='flex md:flex-row flex-col items-start justify-between gap-6 w-full'>
          <div>
            <h1 className='text-4xl font-semibold text-gray-800'>Course List</h1>
            <p className='text-gray-500 text-sm'>
              <span className='text-blue-600 cursor-pointer' onClick={()=>navigate('/')}>
                Home</span> / <span>Course-list</span>
            </p>
          </div>
          <SearchBar data={input}/>
        </div>

        {input && <div className='inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600'>
          <p>{input}</p>
          <img src={assets.cross_icon} alt="" className='cursor-pointer' onClick={()=> navigate('/course-list')} />
        </div>
         
         }
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
          {filterCourse.map((course,index)=> <CourseCard key={index} course={course} /> )}
        </div>
        <Footer />
      </div>
    </>

  )
}

export default CourseList