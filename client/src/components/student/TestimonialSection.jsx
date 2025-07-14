import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestimonialSection = () => {
  return (
    <div className='flex flex-col items-center text-center py-10 bg-gradient-to-b from-cyan-100 to-blue-100 w-full md:pt-26 pt-10 px-7 md:px-0 space-y-7'>
      <h2 className='text-3xl font-medium text-gray-700 mt-3'>Testimonials</h2>
      <p className='text-base text-gray-600 mt-3'>
        Hear from our students — they share their journeys and achievements <br /> from our courses
      </p>

      {/* Scrollable flex row */}
      <div className='flex overflow-x-auto gap-6 mt-14 px-4 w-full max-w-7xl'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='min-w-[300px] max-w-sm bg-white rounded-lg shadow-md p-6 flex-shrink-0'
          >
            <div className='flex items-center space-x-4'>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className='w-16 h-16 rounded-full object-cover'
              />
              <div className='text-left'>
                <h3 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h3>
                <p className='text-sm text-gray-500'>{testimonial.role}</p>
              </div>
            </div>

            <div className='flex items-center mt-2'>
              {[...Array(5)].map((_, i) => (
                <img
                  className='h-5'
                  key={i}
                  src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                  alt='star'
                />
              ))}
            </div>

            <p className='mt-4 text-gray-600 text-left'>{testimonial.feedback}</p>
            <a href='#' className='text-blue-500 underline text-sm mt-2 inline-block text-left'>
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
