import React from 'react';
import CourseHeroComponent from '../components/CourseHero/CourseHero.Component';
import Instructor from '../components/Instructor/Instructor.Component';
import { CheckCircleIcon } from '@chakra-ui/icons';

function SingleCoursePage() {
  return (
    <>
      <CourseHeroComponent />
      <div className='my-12 container px-4 lg:ml-20 lg:w-2/3'>
        <div className='flex flex-col item-start gap-3'>
          <h1 className='text-gray-800 font-bold text-2xl'>About the course</h1>
          <p className='text-justify'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{' '}
          </p>
        </div>

        <div className='mt-4'>
          <hr />
        </div>

        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-4'>Instructors</h2>
          <div className='flex gap-8'>
            <Instructor />
            <Instructor />
          </div>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl mb-4'>
            Course Modules
          </h2>
          <div className='flex flex-col gap-3 lg:flex-col'>
            <div className='flex item-start w-2/3 gap-2 p-3 border-dashed border-2 rounded-md'>
              <p className='text-xl'>1.</p>
              <h3 className='text-gray-700 text-xl font-bold'>
                Introduction to Python <CheckCircleIcon/>
              </h3>
            </div>
            <div className='flex item-start w-2/3 gap-2 p-3 border-dashed border-2 rounded-md'>
              <p className='text-xl'>2.</p>
              <h3 className='text-gray-700 text-xl font-bold'>
                Introduction to Python <CheckCircleIcon/>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleCoursePage;
