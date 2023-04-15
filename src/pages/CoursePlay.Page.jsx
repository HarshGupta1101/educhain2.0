import React from 'react';
import CoursePlayComponent from '../components/CoursePlay/CoursePlay.Component';

//Headless UI
import { AspectRatio } from '@chakra-ui/react';

const CoursePlayPage = () => {
  return (
    <>
      <div className='container mx-auto px-4 my-10'>
        <div className='w-full lg:flex lg:flex-row-reverse gap-4'>
          <div className='lg:w-3/4 p-4 bg-white rounded'>
            <AspectRatio maxW='full' ratio={2}>
              <iframe
                title='naruto'
                src='https://www.youtube.com/embed/QhBnZ6NPOY0'
                allowFullScreen
              />
            </AspectRatio>
            <h1 className='text-2xl font-bold my-4'>About Module</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{' '}
            </p>
          </div>

          <div className='lg:w-1/4 p-4 bg-white rounded'>
            <h2 className='text-2xl font-bold mb-4'>Course Name</h2>
            <div>
              <CoursePlayComponent
                title='Module 1'
                tags={['Intro', 'Python Setup', 'Hello World']}
              />
            </div>
            <div>
              <CoursePlayComponent
                title='Module 2'
                tags={['List', 'Tuple', 'Strings']}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePlayPage;
