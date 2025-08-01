import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const { currency, calculateRating } = useContext(AppContext);

  // Fallbacks for missing data
  const educatorName = course.educator?.name || 'Unknown Educator';
  const ratings = Array.isArray(course.courseRatings) ? course.courseRatings.length : 0;
  const discount = course.discount ?? course.courseDiscount ?? 0;
  const price = course.coursePrice ?? 0;
  const thumbnail = course.courseThumbnail || assets.default_course_thumbnail;

  return (
    <Link to={'/course/' + course._id} onClick={() => window.scrollTo(0, 0)} className='border border-gray-500/30 overflow-hidden p-4 rounded-lg '>
      <img className='w-full' src={thumbnail} alt="Course Thumbnail" />
      <div>
        <h3 className='text-lg font-semibold'>{course.courseTitle}</h3>
        <p className='text-gray-300'>{educatorName}</p>

        <div className='flex items-center text-gray-500 mt-2'>
          <p>{calculateRating(course)}</p>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <img
                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                alt="star"
                className='w-3.5 h-3.5'
                key={i}
              />
            ))}
          </div>
          <p className='text-gray-500'>{ratings}</p>
        </div>
        <p className='text-base font-semibold text-gray-800'>
          {currency} {(price - discount * price / 100).toFixed(2)}
        </p>
      </div>
    </Link>
  )
}

export default CourseCard