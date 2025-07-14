import React from 'react'
import Hero from '../../components/student/Hero'
import Companies from '../../components/student/Companies'
import CourseSection from '../../components/student/CourseSection'
import TestimonialSection from '../../components/student/TestimonialSection'
import CallToAction from '../../components/student/CallToAction'
import Footer from '../../components/student/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center py-10 bg-gray-100 w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 bg-gradient-to-b from-cyan-100 to-blue-100'>
      <Hero />
      <Companies />
      <CourseSection />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home